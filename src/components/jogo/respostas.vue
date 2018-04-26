<template>
  <div class="column">
    <div class="tile is-child notification is-info">

      <!-- elemento -->
      <slot></slot>
      <!-- elemento -->

    </div>
  </div>
</template>

<script>

export default {
  props: ['categorias','disponivel']
}
</script>
<style media="screen">
</style>
