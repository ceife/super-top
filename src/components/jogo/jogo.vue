<template>
  <div class='container'>
    <div class="columns is-multiline is-mobile">

      <formulario @envia='envia' :categorias='categorias' :indisponivel='indisponivel' :letra='letra'>
      </formulario>

      <sidebarLetra :letra='letra'>
      </sidebarLetra>
      <sidebarFrame>
        <ul>
          <li v-for='jogador in jogadores'><sidebarBox :jogador='jogador'></sidebarBox></li>
        </ul>
      </sidebarFrame>
      <!--<pre>{{categorias}}</pre>-->
    </div>
  </div>
</template>

<script>
import sidebarFrame from '../shared/sidebar/sidebarFrame.vue';
import sidebarBox from '../shared/sidebar/sidebarBox.vue';
import formulario from './formulario.vue';
import sidebarLetra from './sidebarLetra.vue';
export default {
  props: ['websocket'],
  components: {
    'sidebarFrame': sidebarFrame,
    'formulario': formulario,
    'sidebarBox': sidebarBox,
    'sidebarLetra': sidebarLetra
  },
  //name: 'app',
  data () {
    return {
      padrao:{
        "funcao": "putRespostas",
        "data": [
          "categoria1",
          "categoria2",
          "categoria3",
          "categoria4",
          "categoria5"
        ]
      },

      /* 2-way-db
      * https://jsfiddle.net/ErickPetru/vbs2yynj/1/?utm_source=website&utm_medium=embed&utm_campaign=vbs2yynj
      * https://jsfiddle.net/Herteby/qt0aqa9g/
      */

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
        'resposta':null
      },
      {
        'nome':'TV',
        'resposta':null
      },
      {
        'nome':'animal',
        'resposta':null
      },
      {
        'nome':'marca',
        'resposta':null
      },
      {
        'nome':'cor',
        'resposta':null
      },
      {
        'nome':'fruta',
        'resposta':null
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
    envia(){
      console.log('enviado');
      this.websocket = new WebSocket('ws://172.29.80.15:8080/StopWeb/websocket?nome=' + this.nome);
      this.websocket.send(JSON.stringify({
        funcao:"putRespostas",
        data:['um','dois']
      }));
    }

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
