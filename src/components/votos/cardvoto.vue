<template lang="html">
  <div class="column is-narrow has-background-success has-text-centered">

    <p class="subtitle has-text-centered has-text-black">{{resposta.categoria}}</p>
    <div class="field">
      <div class="control has-text-centered has-text-danger">
        <p class="subtitle has-text-centered has-text-black">{{resposta.resposta}}</p>
        <label class="radio">
          <input type="radio" name="answer">Sim
        </label>
        <label class="radio">
          <input type="radio" name="answer">Não
        </label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props:['resposta']
}
</script>

<style lang="css">
</style>
