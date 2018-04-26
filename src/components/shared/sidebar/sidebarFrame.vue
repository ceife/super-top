<template>

  <div class="column is-one-fifth">
    <div class="tile tile-sidebar is-child notification is-success">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: ['jogadores']
}
</script>
<style media="screen">
.tile-sidebar{
  padding: .5em;
}
</style>
