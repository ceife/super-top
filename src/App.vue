<template>
  <div class="">
    <router-view :websocket='websocket' :objetoWS='objetoWS' :objetoConfiguracoes='objetoConfiguracoes' @criaWS='criaWS'></router-view>
  </div>

</template>

<script>

export default {
  data () {
    return {
      websocket: null,
      objetoWS: {
        funcao: 'vazio',
        emCurso: 'vazio',
        jogadores: ['vazio'],
        letraAtual: 'vazio',
        ultimaLinhaPlanilha: 'vazio',
        jogadoresAtivos: [{nome:'vazio1',pontos:12},{nome:'vazio2',pontos:15}]
      },
      objetoConfiguracoes: {
        funcao: 'vazio',
        categorias: ['vazio'],
        limiteTempo: 'vazio',
        maxJogadores: 'vazio',
        minJogadores: 'vazio',
        qtdRodadas: 'vazio'
      },
      resposta: null
    }
  },
  methods: {
    criaWS(nome){
      // 149.56.133.212:8081 jean
      // 172.29.80.15:8080 sala ftec

      this.websocket = new WebSocket('ws://149.56.133.212:8081/StopWeb/websocket?nome=' + nome); // servidor jean
      // this.websocket = new WebSocket('ws://172.29.80.15:8080/StopWeb/websocket?nome=' + nome); // sala 106
      this.escutaWS();
    },
    escutaWS(){
      let rota = this.$router;
      let vm = this;

      this.websocket.onmessage = function(msg){
        // console.log(msg.data);

        let resposta = JSON.parse(msg.data);

        console.info(resposta);

        if(resposta.funcao == "newRodada"){
          rota.push({ name: 'jogo'});
        } else if (resposta.funcao == "getConfiguracoes") {
          vm.criaObjConfig(resposta);

          rota.push({ name: 'jogo'});
        } else if (resposta.funcao == "getPartida") {

          vm.criaObjWS(resposta);

          // pede as configurações do jogo
          vm.websocket.send(JSON.stringify({
            funcao:"getConfiguracoes"
          }));
        } else if (resposta.funcao == "getStop") {
          // quando for STOP
        }
      }
    },
    criaObjConfig(resposta){
      let vm = this;

      //var ultimaRodada = resposta.valor.rodadas[resposta.valor.rodadas.length - 1];
      this.objetoConfiguracoes = {
        funcao: vm.tryPropriedade(resposta.funcao),
        categorias: vm.tryPropriedade(resposta.valor.categorias),
        limiteTempo: vm.tryPropriedade(resposta.valor.limiteTempo),
        maxJogadores: vm.tryPropriedade(resposta.valor.maxJogadores),
        minJogadores: vm.tryPropriedade(resposta.valor.minJogadores),
        qtdRodadas: vm.tryPropriedade(resposta.valor.qtdRodadas)
      }
    },
    criaObjWS(resposta){
      let vm = this;

      var ultimaRodada = vm.tryPropriedade(resposta.valor.rodadas[vm.tryPropriedade(resposta.valor.rodadas.length, 0)-1]);
      this.objetoWS = {
        funcao: vm.tryPropriedade(resposta.funcao),
        emCurso: vm.tryPropriedade(resposta.valor.emCurso),
        //jogadores: vm.tryPropriedade(resposta.valor.jogadores),
        letraAtual: vm.tryPropriedade(ultimaRodada.letra),
        //ultimaLinhaPlanilha: vm.tryPropriedade(ultimaRodada.linhaPlanilha[vm.tryPropriedade(ultimaRodada.linhaPlanilha.length, 0)-1]),
        jogadoresAtivos: vm.criaJogadoresAtivos(vm.tryPropriedade(ultimaRodada.linhaPlanilha[vm.tryPropriedade(ultimaRodada.linhaPlanilha.length, 0)-1])),
      }
    },
    tryPropriedade(propriedade, retorno){
      // parametro nomeado, quando o retorno não for especificado é nulo
      retorno = retorno || null;

      try {
        var valor = propriedade;
      } catch (e) {
        valor = retorno;
      } finally {
        return valor;
      }
    },
    criaJogadoresAtivos(ultimaLinhaPlanilha){
      let vm = this;

      let jogadores = [];
      jogadores.push(
        {
          nome: vm.tryPropriedade(ultimaLinhaPlanilha.jogador.nome),
          pontos: vm.tryPropriedade(ultimaLinhaPlanilha.pontuacao)
        }
      );
      // ideal
      // for (var i = 0; i < ultimaLinhaPlanilha.length; i++) {
      //   jogadores.push(
      //     {
      //       nome: vm.tryPropriedade(ultimaLinhaPlanilha[i].jogador.nome),
      //       pontos: vm.tryPropriedade(ultimaLinhaPlanilha[i].pontuacao)
      //     }
      //   );
      // }

      return jogadores;
    },
    mstLetra(){
    },
    wsStop(){
    }
  }
}
</script>

<style>
</style>
