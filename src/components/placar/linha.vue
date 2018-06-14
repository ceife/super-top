<template>
    <tr :class="{'is-selected': testaPrimeiroLugar}">
      <th>{{jogador.posicao}}</th>
      <td>{{jogador.nome}}</td>
      <td>{{jogador.pontos}}</td>
    </tr>
</template>

<script>
  export default {
    props:['jogador'],
    computed:{
      testaPrimeiroLugar(){
        if (this.jogador.posicao === 1) {
          return true;
        } else {
          return false;
        }        
      }
    }
  }
</script>

<style>

</style>