<template>
    <tr class="primeira-linha">
      <td>{{jogador.posicao}}</td>
      <td>{{jogador.nome}}</td>
      <td>{{jogador.pontos}}</td>
    </tr>
</template>

<script>
  export default {
    props:['jogador']
  }
</script>

<style>

</style>
