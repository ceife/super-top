<template>
  <div>
    <span :class="classe" v-on:click="changeClass()">{{resposta}}</span>
  </div>
</template>

<script>

export default {
  props:['resposta'],
  data (){

    return {
      sucesso: true,
      classeSuccess: true,
      classeDanger: false,
    }
  },
  methods: {
    changeClass () {
      this.classeSuccess = !this.classeSuccess;
      this.classeDanger = !this.classeDanger;
    }
  },
  computed:{
    classe (){
      return {
        'button': true,
        'is-success': this.classeSuccess,
        'is-danger': this.classeDanger
      };
    }
  }
}
</script>

<style>
.isSuccess {
  /* background-color: #fff !important; */
}
</style>
