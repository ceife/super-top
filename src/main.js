import Vue from 'vue' //importa core do vue
import App from './App.vue' //importa base da aplicação
import VueRouter from 'vue-router'; //importa modulo vue-router
import VueResource from 'vue-resource';

import { routes } from './routes'; //importa config rotas de routes.js na msm pasta

Vue.use(VueRouter); //utiliza VueRouter

const router = new VueRouter({
  routes, //utiliza config das rotas
  mode: 'history' //remove /#/
});

Vue.use(VueResource);

new Vue({
  el: '#app', //especifica o elemento de desenho do vue
  router, //especifica qual config de rota vue vai urilizar
  render: h => h(App)
})
