<template>
  <div id="app">
    <section class="hero is-success is-fullheight" style="background-color: #D8E5F0;">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <figure class="image is-128x128">
              <img src="https://biblioteca.ftec.com.br/imagem/logo1.png">
            </figure>
            <br>
            <p class="subtitle has-text-black">Bem vindo ao game STOP da FTEC!</p>
            <div class="box">
              <form @submit.prevent>
                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="text" placeholder="Nome/Nickname" v-model="nome" autofocus="">
                  </div>
                </div>
                <button class="button is-block is-info is-large is-fullwidth" @click="login()">Entrar</button>
                <button class="button is-block is-info is-large is-fullwidth" @click="joga()">joga</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {

  name: 'app',
  data () {
    return {
      'nome': '',
      'websocket': null
    }
  },
  methods: {
    envia() {
      var obj = {nome: this.nome};
      console.log(obj);
      let nome = this.$http.get('http://172.29.80.15:8080/StopWeb/newJogador?nome=' + this.nome);
      nome
      .then(function(res) {
        let resultado = res.json();
        alert("sucess");
        return resultado;
      }).catch( function(err){
        alert("fail")
        return console.log(err);
      });
    },

    login(){
      var rota = this;
      this.websocket = new WebSocket('ws://172.29.80.15:8080/StopWeb/websocket?nome=' + this.nome);
      this.websocket.onmessage = function(msg){
        // console.log(msg.data);

        console.log(JSON.parse(msg.data));

        let resposta = JSON.parse(msg.data);
        if(resposta.funcao == "newRodada"){
          rota.$router.push('/jogo/felipe');
          //rota.$router.push({ component: 'jogo'});
          console.log('opa');
        }

      };

    },
    joga(){
      this.websocket.send(JSON.stringify({
        funcao:"newRodada"
      }));
    },








  },
  created() {
    console.log('login criado');
  }
}
</script>
</style>
