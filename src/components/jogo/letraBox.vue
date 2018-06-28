<template>
  <div class="">

    <div class="tile tile-sidebar is-child notification is-warning">
      <div class="card">
        <div class="card-content">
          <p class="title">
            {{ letra }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['letra']
}
</script>
<style scoped>
body{
  position: relative;
}
  .card-content .title{
    text-align: center;
  }
  .tile{
    position: fixed;
    top: 7%;
    right: 21%;
    z-index: 1;
  }
  .card-content{
    padding: .2rem;
  }

  @media screen and (max-width: 1090px) {
    .tile{
      top: 4%;
      right: 50%;
    }
}

@media screen and (max-width: 478px) {
  .tile{
    top: 1%;
    right: 2%;
  }
}
</style>
