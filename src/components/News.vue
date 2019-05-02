<template>
  <div class="news">
    <h1>News</h1>
    <v-layout align-center justify-center>
      <table>
        <tr>
          <td>2019/04/28</td>
          <td>Top画を平成最後仕様に更新しました！
          Worksに同人誌情報を追加しました！</td>
        </tr>
        <tr>
          <td>2019/02/02</td>
          <td>サイトを公開しました！</td>
        </tr>
      </table>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
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
