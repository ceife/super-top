<template>
  <section id="app" class="hero is-success is-fullheight" style="background-color: #D8E5F0;">
    <form>
        <div class="hero-body" >
            <div class="container has-text-centered">
                <div class="columns is-mobile is-multiline ">
						      <categoria v-for="(resposta,i) in respostas" :key='i' :resposta="resposta"></categoria>
						    </div>
                <button class="button is-link is-info is- is-medium">Concluir</button>
            </div>  
        </div>                    
    </form>
  </section>
</template>


<script>
  import categoria from './categoria.vue'

  export default {
    components: {
      'categoria': categoria,
    },
    name: "app",
    data() {
      return {
        respostas: [
          {
            "nome":"cep",
            "respostas":["respostas1","respostas2", "respostas3", "respostas4"]
          },
          {
            "nome":"minha sogra é",
            "respostas":["respostas1","respostas2", "respostas3"]
          }
			  ]
      };
    }
  };


</script>

<style>
  .column{
      margin: 6px;
  }

  .botoes{
      margin: 6px;
  }

  .block:not(:last-child), .box:not(:last-child), .breadcrumb:not(:last-child), .content:not(:last-child), .highlight:not(:last-child), .level:not(:last-child), .message:not(:last-child), .notification:not(:last-child), .progress:not(:last-child), .subtitle:not(:last-child), .table-container:not(:last-child), .table:not(:last-child), .tabs:not(:last-child), .title:not(:last-child){
      margin-bottom: unset;
  }

</style>
