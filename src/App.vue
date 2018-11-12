<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Combobox name='teste'></Combobox>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Combobox from './components/Combobox.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Combobox
  },
  data() {
    return {
      exibePrimeiro: false,
    }
  },
  methods: {
    toggle() {
      this.exibePrimeiro = !this.exibePrimeiro;
    }
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
