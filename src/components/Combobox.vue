<template>
    <div class="row">
        <div class="col-6">
            <h1><slot></slot></h1>
            <h3 v-if="carregando">Carregando...</h3>
            <select :name="nomedocara" :id="nomedocara" class="form-control">
                <option v-for="linha in arr" 
                        v-bind:value="linha.id"
                        v-bind:key="linha.id">
                        {{ linha.nome }}
                </option>
            </select>
            <p v-show="mostra" class="alert alert-success alert-dismissible">
                Registro adicionado com sucesso!
                <button type="button" class="close" @click="mostra=false" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </p>
            <button @click="getData" class="btn btn-primary btn-block">Adicionar piada</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        nomedocara: String, 
        dados: Array,
        url: String,
        vueResource: { type: Boolean, default: false }
    },
    data() {
        return {
            arr: this.dados ? this.dados : [],
            mostra: false,
            carregando: false,
        }
    },
    watch: {
        arr() {
            this.mostra = true;
        }
    },
    methods: {
        getData() {
            if(this.arr.length == 0 && this.url.length == 0) 
                    throw Exception('você precisa definir uma URL.');
            if(this.vueResource == true) {
                    this.getDataResource();
                } else {
                    this.getDataAxios();
                }
        },
        getDataResource() {
            this.$http.get(this.url).then(response => {
               this.arr.push({'id': response.data.id, 'nome': response.data.value});
                console.log(response);
                this.carregando = false;
            }, response => {
                console.log(response);
            });
        },
        getDataAxios() {
            this.carregando = true;
            //faz ajax e preenche arr  
            const axios = require('axios');
            // Make a request for a user with a given ID
            axios.get(this.url)
            .then((response) => {
                this.arr.push({'id': response.data.id, 'nome': response.data.value});
                console.log(response);
                
                this.carregando = false;
            })
            .catch((error) => {
                console.log(error);
                this.carregando = false;
            });    
        }
    },
    mounted() {
        this.getData();
        console.log('oi, montei o componente Combobox');
    },
    created() {
      console.log('oi, criei o componente Combobox');
    }

}
</script>

<style scoped>
div {
    background: lightblue;
}
</style>
