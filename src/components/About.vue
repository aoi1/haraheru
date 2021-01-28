<template>
  <div class="about">
    <img src="../../img/icon.jpg" width="20%" height="20%">
    <h2>自己紹介</h2>
  <h3>名前：あおい</h3>
    <br>
    Kubernetesを愛でたりしています<br>
    趣味で漫画も描いています<br>
    好きなエディタはvim
    <br>
    <br>
    <h2>主な技術スタック</h2>
    Kubernetes, Docker, Linux, Java, python 
    <br>
    Twitter: <a href="https://twitter.com/_a0i">_a0i</a>
    note: <a href="https://note.com/a0i">a0i</a>
    blog: <a href="https://blux.hatenablog.com">腹は減る</a>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'haraheru.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
