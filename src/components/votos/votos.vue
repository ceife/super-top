<template>
  <section class="hero is-success is-fullheight" style="background-color: #D8E5F0;">

    <form>

      <div class="hero-body" >

        <div class="container has-text-centered">

          <div class="columns is-mobile">

            <cardvoto v-for='resposta in respostas' :resposta='resposta'></cardvoto>

          </div>

          <button class="button is-link is-info is- is-medium">Concluir</button>

        </div>

      </div>

    </form>

  </section>
</template>
<script>
import cardvoto from '../votos/cardvoto.vue';
export default {
  components: {
    'cardvoto': cardvoto
  },

  name: 'app',
  data () {
    return {
      respostas:''
    }
  },
  created() {
    //dados mockados
    this.respostas = [
      {
        'categoria':'fruta',
        'resposta':'banana'
      },
      {
        'categoria':'animal',
        'resposta':'cahorro'
      },
      {
        'categoria':'animal',
        'resposta':'cahorro'
      }
    ];

    //conexão com a sala
    /*
    let promise = this.$http.get('https://raw.githubusercontent.com/felipedacs/super-top/master/data3.json');
    promise
    .then(res => res.json())
    .then(dados => this.dados = dados);
    */
  }

}
</script>
</style>
