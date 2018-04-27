<template>
  <div class="column">
    <div class="tile is-child notification is-info">
      <form @submit.prevent>
        <!-- elemento -->
        <slot></slot>
        <!-- elemento -->
        <button class="button is-block is-info is-large is-fullwidth is-inverted" @click="envia()">Enviar</button>
      </form>
    </div>
  </div>

</template>

<script>

export default {

  name: 'app',
  data () {
    return {
      'nome': ''
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
    }
  }
}

</script>
<style media="screen">
</style>
