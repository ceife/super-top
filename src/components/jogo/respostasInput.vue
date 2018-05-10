<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">{{ categoria }}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input class="input" type="text" :placeholder="categoria" :name="categoria" :disabled='indisponivel' v-model="interface">
        </p>
      </div>
    </div>
  </div>
</template>

<script>

/*
2-way-databinding com components:
https://jsfiddle.net/Herteby/qt0aqa9g/
*/

export default {
  props: ['categoria','indisponivel', 'value'],
  computed: {
    interface: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
