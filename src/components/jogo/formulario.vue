<template>
  <div class="column">
    <div class="tile is-child notification is-primary">
      <form @submit.prevent>

        <!-- elemento -->
        <div class="field is-horizontal" v-for='(categoria, i) in categorias' :key='i'>
          <div class="field-label is-normal">
            <label class="label">{{ categoria.nome }}</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" type="text" ref="input" :disabled='indisponivel' @blur="attVariaveis(i)">
              </p>
            </div>
          </div>
        </div>
        <!-- elemento -->

        <button class="button is-block is-primary is-large is-fullwidth is-inverted" @click="envia()">Enviar</button>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  props: ['categorias','indisponivel'],
  data () {
    return {
      'nome': 'aaaaaaa'
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
    attVariaveis(i) {
      console.log(i);
      console.log(this.$refs.input[i].value);
      this.categorias[i].resposta = this.$refs.input[i].value;
    }
  }
}
</script>
<style media="screen">
</style>
