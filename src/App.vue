<template>
  <div id="app">
    <hnav></hnav>
    <router-view/>
  </div>
</template>

<script>
import NavHeader from '@/components/parts/NavHeader'
export default {
  name: 'App',
  components: {
    hnav: NavHeader
  }
}
</script>

<style>
#app {
  font-family: 'M PLUS 1p', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
