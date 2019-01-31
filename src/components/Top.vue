<template>
  <div class="top">
    <img src="../../img/top.png" width="30%" height="30%">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: 'haraheru.com'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
