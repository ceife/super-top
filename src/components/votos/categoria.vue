<template>
    <div class="categoria column is-narrow box has-text-centered">
        <h1 class="title is-4 has-text-centered has-text-black"> {{resposta.nome}} </h1>

        <div class="columns is-mobile is-multiline ">
            <div class="column botoes is-narrow">
                <botao v-for="(btrespostas, i) in resposta.respostas" :key='i' :resposta="btrespostas"></botao>
            </div>
        </div>
    </div>
</template>

<script>
    import botao from './botao.vue'

    export default {
        props:['resposta'],
        components: {
        'botao': botao,
        }
    }
</script>

<style>
  .categoria{
      max-width: 47% !important;
  }
</style>
