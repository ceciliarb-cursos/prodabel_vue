import Vue from 'vue'
//import App from './App.vue'
import Home from './Home.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import FormUsuario from "./telas/usuarios/FormUsuario.vue";
import DadosUsuario from "./telas/usuarios/DadosUsuario.vue";
import Menu from './components/Menu.vue';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource);

Vue.component('app-menu', Menu);

const routes = [
  { path: '/info', component: DadosUsuario },
  { path: '/form', component: FormUsuario }
]
const router = new VueRouter({routes})

new Vue({
  render: h => h(Home),
  router
}).$mount('#app')
