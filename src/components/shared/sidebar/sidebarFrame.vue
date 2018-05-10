<template>

  <div class="column is-half-mobile is-one-fifth-desktop">
    <div class="tile tile-sidebar is-child notification is-info">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: ['jogadores']
}
</script>
<style>
.tile-sidebar{
  padding: .5em;

}
</style>
