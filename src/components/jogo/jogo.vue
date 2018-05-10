<template>
  <div class='container'>
    <div class="columns is-multiline is-mobile">
      <jogo>
        <respostasInput v-for='categoria in categorias' :categoria='categoria' :indisponivel='indisponivel' :teste='teste'>
        </respostasInput>
      </jogo>
      <sidebarLetra :letra='letra'>
      </sidebarLetra>
      <sidebarFrame>
        <ul>
          <li v-for='jogador in jogadores'><sidebarBox :jogador='jogador'></sidebarBox></li>
        </ul>
      </sidebarFrame>
    </div>
  </div>
</template>

<script>
import sidebarFrame from '../shared/sidebar/sidebarFrame.vue';
import sidebarBox from '../shared/sidebar/sidebarBox.vue';
import jogo from './respostas.vue';
import sidebarLetra from './sidebarLetra.vue';
import respostasInput from './respostasInput.vue';
export default {

  components: {
    'sidebarFrame': sidebarFrame,
    'jogo': jogo,
    'sidebarBox': sidebarBox,
    'sidebarLetra': sidebarLetra,
    'respostasInput': respostasInput
  },

  name: 'app',
  data () {
    return {
      //dados mockados
      jogadores: [{nome:'felipe',pontos:25},{nome:'jennifer',pontos:36}],
      categorias: ['nome','TV','animal','marca','cor','fruta'],
      letra: 'B',
      indisponivel:false,

      teste: 'aaaaaaaaaaaaaa',



      dados: []
      //jogador in dados.rodadas1[0].jogadors
    }
  },
  created() {

    let promise = this.$http.get('https://raw.githubusercontent.com/felipedacs/super-top/master/data3.json');
    promise
    .then(res => res.json())
    .then(dados => this.dados = dados);
  },
  computed:{

  },
  watch:{

  },
  methods:{

  }
}
</script>

<style scoped>
.container{
  margin: 2%;
  max-width: none;
  width: auto;
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
