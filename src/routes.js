import login from './components/login/login.vue';
import jogo from './components/jogo/jogo.vue';
import votos from './components/votos/votos.vue';
import placar from './components/placar/placar.vue';

export const routes = [
    { path: '*', redirect: '/' },
    { path: '/', component: login },
    { path: '/jogo', component: jogo, name: jogo },
    { path: '/votos', component: votos },
    { path: '/placar', component: placar }
];
