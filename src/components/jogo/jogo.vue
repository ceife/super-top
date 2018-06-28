<template>
  <div class='container'>
    <div class="columns is-multiline is-mobile">

      <formulario @responde='responde' :categorias='categorias' :indisponivel='indisponivel' :letra='letra'>
      </formulario>

      <letraBox :letra='letra'>
      </letraBox>

      <jogadoresList :jogadores='jogadores'>
      </jogadoresList>

      <!--<pre>{{categorias}}</pre>-->
    </div>
  </div>
</template>

<script>
import jogadoresList from './jogadoresList.vue';
import formulario from './formulario.vue';
import letraBox from './letraBox.vue';
export default {
  props: ['websocket'],
  components: {
    'jogadoresList': jogadoresList,
    'formulario': formulario,
    'letraBox': letraBox
  },
  //name: 'app',
  data () {
    return {
      padraoResposta:{
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
    this.jogadores = [
      {
        nome:'felipe',
        pontos:25
      },
      {
        nome:'jennifer',
        pontos:36
      },
      {
        nome:'jennifer',
        pontos:36
      },
      {
        nome:'jennifer'
        ,pontos:36
      },
      {
        nome:'jennifer',
        pontos:36
      },
      {
        nome:'jennifer',
        pontos:36
      }
    ];
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

.container{
  margin: 2%;
  max-width: none;
  width: auto;
}



a {
  color: #42b983;
}
</style>
