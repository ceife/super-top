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
  props:['websocket'],
  //name: 'app',
  data () {
    return {
      nome: ''
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
      this.$emit('criaWS' , this.nome);
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
