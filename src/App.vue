<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <Combobox nomedocara='teste' 
              url="https://api.chucknorris.io/jokes/random"
    ><p><button @click="criaNovoInput()">Combo muito doido</button></p><HelloWorld msg='oi'></HelloWorld></Combobox>
    <input v-for="input in inputs" v-bind:key="input.id" :id="input.id" :name="input.id">
    <Combobox nomedocara='teste' 
              :vue-resource="true"
              url="https://api.chucknorris.io/jokes/random?category=food"
    ></Combobox>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Combobox from './components/Combobox.vue'
import Cat from './components/Cat.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Combobox,
    Cat,
  },
  data() {
    return {
      id: 0,
      inputs: [],
      mostra: false,
      exibePrimeiro: false,
      listaAlunos: [{'id': 1, 'nome': 'Cecilia', 'idade': 'n/a', 'cidade': 'BH'},
                    {'id': 2, 'nome': 'Osmar', 'idade': '25', 'cidade': 'BH'},
                    {'id': 3, 'nome': 'Marcelo', 'idade': '46', 'cidade': 'RJ'},
                    {'id': 4, 'nome': 'Murilo', 'idade': '32', 'cidade': 'Tambaú'},
                    {'id': 5, 'nome': 'Sálvio', 'idade': '30 e poucos', 'cidade': 'Guanhães'}]
    }
  },
  methods: {
    criaNovoInput() {
      this.inputs.push({ id: this.id, label: 'lbl'+this.id });
      this.id++;
    },
    toggle() {
      this.exibePrimeiro = !this.exibePrimeiro;
    }
  }, 
  mounted() {
    console.log('oi, montei o componente App');
  },
  created() {
    console.log('oi, criei o componente App');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
