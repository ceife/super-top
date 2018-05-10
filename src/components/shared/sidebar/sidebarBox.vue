<template>
  <div class="box">
    {{ jogador.nome }}
  </div>
</template>
<script>

export default {
   props: ['jogador']
}
</script>

<style>
.box{
  margin-bottom: .5em !important;
  overflow: hidden !important;
  padding: .2rem !important;
  text-align: center !important;
  min-width: 70% !important;
}
</style>
