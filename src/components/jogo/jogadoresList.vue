<template>
  <div class="column is-half-mobile is-one-fifth-desktop">
    <div class="tile tile-sidebar is-child notification is-info">
      <ul class='li-jogadores'>
        <li v-for='jogador in jogadores'>
          <div class="box box-jogadores">
            {{ jogador.nome }}
          </div>
        </li>
      </ul>

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
ul {
  list-style-type: none;
  padding: 0;
  min-width: 100%;
}

li {
  display: inline-block;
  margin: 0;
  min-width: 100%;
}
.li-jogadores li:nth-child(1) div,.li-jogadores li:nth-child(2) div,.li-jogadores li:nth-child(3) div {
  color: white;
  font-weight: bold;
  text-shadow: 0px 1px 1px #4d4d4d;
}
.li-jogadores li:nth-child(1) div {
  background-color: gold;
}
.li-jogadores li:nth-child(2) div {
  background-color: silver;
}
.li-jogadores li:nth-child(3) div {
  background-color: #CD7F32;
}
.li-jogadores li div:nth-child(an+b){
  background-color: red;
}

.box-jogadores{
  margin-bottom: .5em !important;
  overflow: hidden !important;
  padding: .2rem !important;
  text-align: center !important;
  min-width: 70% !important;
}
</style>
