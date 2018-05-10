<template>
  <div class='container'>
    <div class="columns is-multiline is-mobile">

      <formulario :categorias='categorias' :indisponivel='indisponivel' v-model='categorias'>
      </formulario>
      <sidebarLetra :letra='letra'>
      </sidebarLetra>
      <sidebarFrame>
        <ul>
          <li v-for='jogador in jogadores'><sidebarBox :jogador='jogador'></sidebarBox></li>
        </ul>
      </sidebarFrame>
      <pre>{{categorias}}</pre>
    </div>

  </div>
</template>

<script>
import sidebarFrame from '../shared/sidebar/sidebarFrame.vue';
import sidebarBox from '../shared/sidebar/sidebarBox.vue';
import formulario from './formulario.vue';
import sidebarLetra from './sidebarLetra.vue';
//import respostasInput from './respostasInput.vue';
export default {

  components: {
    'sidebarFrame': sidebarFrame,
    'formulario': formulario,
    'sidebarBox': sidebarBox,
    'sidebarLetra': sidebarLetra
    //'respostasInput': respostasInput
  },

  name: 'app',
  data () {
    return {
      //dados mockados
      jogadores: '',
      categorias: '',
      letra: '',



      indisponivel:false,

      dados: []
      //jogador in dados.rodadas1[0].jogadors
    }
  },
  created() {
    //dados mockados
    this.jogadores = [{nome:'felipe',pontos:25},{nome:'jennifer',pontos:36}];
    this.categorias = [
      {
        'nome':'nome',
        'resposta':'testenome'
      },
      {
        'nome':'TV',
        'resposta':'tvnome'
      },
      {
        'nome':'animal',
        'resposta':'animalnome'
      },
      {
        'nome':'marca',
        'resposta':'marcanome'
      },
      {
        'nome':'cor',
        'resposta':'cornome'
      },
      {
        'nome':'fruta',
        'resposta':'frutanome'
      }
    ];
    this.letra = 'B';
    //conexão com a sala
    /*
    let promise = this.$http.get('https://raw.githubusercontent.com/felipedacs/super-top/master/data3.json');
    promise
    .then(res => res.json())
    .then(dados => this.dados = dados);
    */
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
