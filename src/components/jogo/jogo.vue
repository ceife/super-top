<template>
  <div class='container'>
    <div class="columns is-mobile">
    <sidebarFrame>
    <ul>
      <li v-for='jogador in dados.rodadas1[0].jogadors'><sidebarBox :jogador='jogador'></sidebarBox></li>
    </ul>
    </sidebarFrame>
    <jogo>
      <respostasInput v-for='categoria in categorias' :categoria='categoria' :disponivel='disponivel'>
      </respostasInput>
    </jogo>
  </div>
  </div>
</template>

<script>
import sidebarFrame from '../shared/sidebar/sidebarFrame.vue';
import sidebarBox from '../shared/sidebar/sidebarBox.vue';
import jogo from './respostas.vue';
import respostasInput from './respostasInput.vue';
export default {

  components: {
    'sidebarFrame': sidebarFrame,
    'jogo': jogo,
    'sidebarBox': sidebarBox,
    'respostasInput': respostasInput
  },

  name: 'app',
  data () {
    return {
      //dados mockados
      jogadores: [{nome:'felipe',pontos:25},{nome:'jennifer',pontos:36}],
      categorias: ['cigarro','carro','fruta'],

disponivel:true,



      dados: []
      //jogador in dados.rodadas1[0].jogadors
    }
  },
  created() {

    let promise = this.$http.get('https://raw.githubusercontent.com/felipedacs/super-top/master/data3.json');
    promise
    .then(res => res.json())
    .then(dados => this.dados = dados);
  }
}
</script>

<style scoped>
.container{
margin: 2%;
}

ul {
  list-style-type: none;
  padding: 0;
  min-width: 100%;
}

li {
  display: inline-block;
  margin: 0;
  min-width: 100%;
}

a {
  color: #42b983;
}
</style>
