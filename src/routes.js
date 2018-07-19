import login from './components/login/login.vue';
import load from './components/load/load.vue';
import jogo from './components/jogo/jogo.vue';
import votos from './components/votos/votos.vue';
import placar from './components/placar/placar.vue';

export const routes = [
    { path: '*', redirect: '/super-top/' }, //redireciona url não especificada
    { path: '/super-top/', component: login},
    { path: '/super-top/load', component: load, name: 'load' },
    { path: '/super-top/jogo', component: jogo, name: 'jogo' },
    { path: '/super-top/votos', component: votos },
    { path: '/super-top/placar', component: placar }
];
