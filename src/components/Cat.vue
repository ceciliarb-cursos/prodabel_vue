<template>
    <div>
        <div class="container">

            <img :src="imagem" />
            <button @click="getCat()">Get cat!</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            fonte: "",
        }
    },
    computed: {
        imagem() {
            return 'data:image/png;base64,'+btoa(this.fonte);
        }
    },
    methods: {
        getCat() {
            axios.get('https://cataas.com/cat')
            .then((response)=> {
                this.fonte = response.data;
                console.log(response);
            })
            .catch((response) => {
                console.log('deu ruim');
            });
        }
    }
}
</script>

<style>

</style>
