<template>
  <div :style="`padding: ${padding};`">
    <v-img
      :src="require('../assets/' + filename)">
    </v-img>
  </div>
</template>
<script>
export default {
  name: "cardimage",
  props: ["padding", "filename"]
}
</script>