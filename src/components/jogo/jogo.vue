<template>
  <div class='container'>
    <div class="columns is-multiline is-mobile">

      <formulario @responde='responde' :categorias='categorias' :indisponivel='indisponivel' :letra='letra'>
      </formulario>

      <sidebarLetra :letra='letra'>
      </sidebarLetra>
      <sidebarFrame>
        <ul class='li-jogadores'>
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
    this.jogadores = [{nome:'felipe',pontos:25},{nome:'jennifer',pontos:36},{nome:'jennifer',pontos:36},{nome:'jennifer',pontos:36},{nome:'jennifer',pontos:36},{nome:'jennifer',pontos:36}];
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
    responde(){
      console.log('enviado');
      this.websocket.send(JSON.stringify({
        funcao:"putRespostas",
        valor:['um','dois','um','dois','um']
      }));
    }

  }
}
</script>

<style scoped>
.li-jogadores li:nth-child(1) div,.li-jogadores li:nth-child(2) div,.li-jogadores li:nth-child(3) div {
  color: white;
  font-weight: bold;
  text-shadow: 0px 1px 1px #4d4d4d;
}
.li-jogadores li:nth-child(1) div {
  background-color: gold;
}
.li-jogadores li:nth-child(2) div {
  background-color: silver;
}
.li-jogadores li:nth-child(3) div {
  background-color: #CD7F32;
}


.li-jogadores li div:nth-child(an+b){
  background-color: red;
}
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
