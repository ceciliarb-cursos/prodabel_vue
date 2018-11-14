 <template>
     <div>
         <h3 v-if="carregando">Carregando...</h3>
         <form>
             <label for="nome">Nome: </label><br>
             <input type="text" id="nome" name="nome" v-model="nome"><br>
             <label for="cpf">CPF: </label><br>
             <input type="text" id="cpf" name="cpf" v-model="cpf"><br>
             <label for="email">E-mail: </label><br>
             <input type="email" id="email" name="email" v-model="email"><br>
             <label for="senha">Senha: </label><br>
             <input type="password" id="senha" name="senha" v-model="senha"><br>
             <button v-on:click="clica()">Enviar</button>
         </form>

     </div>
 </template>
 
 <script>
 import axios from 'axios'

 export default{
     props: {
         _token: { type: String, default: null }
     },
     data() {
         return {
             carregando: false,
             nome: '',
             cpf: '',
             email: '',
             senha: '',
         }
     },
     watch: {
         _token() {
             if(this._token) {
                 this.getUsuario()
             } else {
                 this.nome = '';
                 this.cpf = '';
                 this.email = '';
                 this.senha = '';
             }
         }
     },
    methods: {
        clica() {
            if(this._token) {
                this.atualizaUsuario();
            } else {
                this.insereUsuario();
            }
        },
        insereUsuario() {
            axios.post('http://app-servicos-api.qa.pbh/rest/usuario', {
                nome: this.nome, 
                numCpfCnpj: this.cpf, 
                email: this.email, 
                senha: this.senha
            })
            .then(response => {
                console.log(response);
                console.log(response.data);
            })
            .catch(error => {
                console.log('deu ruim', error);
            })
        },
        atualizaUsuario() {
            axios.defaults.headers.common['Authorization'] = this._token;
            axios.put('http://app-servicos-api.qa.pbh/rest/usuario', {
                nome: this.nome, 
                numCpfCnpj: this.cpf, 
                email: this.email, 
                senha: this.senha
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log('deu ruim', error);
            })

        },
        getUsuario() {
            this.carregando = true;
            axios.defaults.headers.common['Authorization'] = this._token;
            axios.get('http://app-servicos-api.qa.pbh/rest/usuario')
            .then(r => {
                this.nome = r.data.nome;
                this.cpf = r.data.numCpfCnpj;
                this.email = r.data.email;
                this.carregando = false;
            })
            .catch(e => {
                this.carregando = false;
                console.log('deu ruim', e);
            });
        }, 
    },
    mounted() {
        if(this._token) {
            this.getUsuario();
        } 
    }
 }
 </script>
 
 <style>
 
 </style>
