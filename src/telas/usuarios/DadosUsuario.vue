<template>
    <div>
        <h3 v-if="carregando">Carregando...</h3>
        <table>
            <thead>
                <tr>
                    <th>dado</th>
                    <th>valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nome</td><td>{{ usuario.nome }}</td>
                </tr>
                <tr>
                    <td>CPF</td><td>{{ usuario.cpf }}</td>
                </tr>
                <tr>
                    <td>E-mail</td><td>{{ usuario.email }}</td>
                </tr>
                <tr>
                    <td>Status</td><td>{{ usuario.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            token: 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJhcHAtc2Vydmljb3MtYmFja2VuZCIsImV4cCI6MTg1NzgzMzcwOCwibmJmIjoxNTQyMjE0NTA4LCJpYXQiOjE1NDIyMTQ1MDgsInN1YiI6IjI1MTA2NTY1MDMwIn0.yLNVIKIiHHTnQS6zzV8N7h29yVoMBg5AMRWdYn0tBffjjn-b8kX9wSUM2AjRKSCmT4vKTSDo2ta3GrxyS7Fg7Q',
            carregando: false,
            usuario: {
                nome: '',
                cpf: '',
                email: '',
                status: '',
            }
        }
    },
    methods: {
        getUsuario() {
            //axios.defaults.headers.post['Content-Type'] = 'application/json';
            this.carregando = true;
            axios.defaults.headers.common['Authorization'] = this.token;
            axios.get('http://app-servicos-api.qa.pbh/rest/usuario')
            .then(r => {
                this.usuario.nome = r.data.nome;
                this.usuario.cpf = r.data.numCpfCnpj;
                this.usuario.email = r.data.email;
                this.usuario.status = r.data.indStatusAtivacao;
                this.carregando = false;
            })
            .catch(e => {
                this.carregando = false;
                console.log('deu ruim', e);
            });
        }
    },
    mounted() {
        this.getUsuario();
    }
}
</script>

<style>

</style>
