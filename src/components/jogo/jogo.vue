<template>
  <div class='container'>
    <div class="columns is-multiline is-mobile">

      <formulario @responde='responde' :categorias='categorias' :indisponivel='indisponivel' :letra='letra' :jsonRespostas='jsonRespostas'>
      </formulario>

      <letraBox :letra='letra'>
      </letraBox>

      <jogadoresList :jogadores='jogadores'>
      </jogadoresList>

      <pre>{{objetoWS}}</pre>

    </div>
  </div>
</template>

<script>
import jogadoresList from './jogadoresList.vue';
import formulario from './formulario.vue';
import letraBox from './letraBox.vue';
export default {
  props: ['websocket','objetoWS','objetoConfiguracoes'],
  components: {
    'jogadoresList': jogadoresList,
    'formulario': formulario,
    'letraBox': letraBox,
  },
  data () {
    return {
      jsonRespostas:[null],
      jogadores: this.objetoWS.jogadoresAtivos,
      categorias: this.objetoConfiguracoes.categorias,
      letra: this.objetoWS.letraAtual,
      indisponivel:false,
      dados: []
    }
  },
  created() {
    // 4 categorias = arrayResposta(4) \\ 7 categorias = arrayResposta(7)
    this.preencheJsonInicial(this.categorias);
  },
  methods:{
    preencheJsonInicial(categorias){
      this.jsonRespostas=[null];
      // preenche null todas respostas
      for (var i = 0; i < categorias.length; i++) {
        this.jsonRespostas.push(null);
      }
    },

    // responde diretamente web socket
    responde(){
      this.websocket.send(JSON.stringify({
        funcao:"putRespostas",
        valor:this.jsonRespostas
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
