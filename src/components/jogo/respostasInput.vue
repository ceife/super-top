<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">{{ categoria }}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input class="input" type="email" :name="categoria" :disabled='disponivel'>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['categoria','disponivel']
}
</script>
</style>
