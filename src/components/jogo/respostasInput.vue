<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">{{ categoria }}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input class="input" type="text" :placeholder="categoria" :name="categoria" :disabled='indisponivel' v-model='teste'>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['categoria','indisponivel', 'teste']
}
</script>
