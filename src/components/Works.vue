<template>
  <div class="works">
    <h1>Works</h1>
    <h2>同人誌</h2>
    <v-container fluid grid-list-lg>
      <v-layout justify-center>
        <v-flex xs7>
          <v-card>
            <v-layout>
              <v-flex xs5>
                <div>
                  <CardImage :filename="'kubernetes_comic_sumbnail.png'" :padding="'10px'" />
                </div>
              </v-flex>
              <v-flex>
              <p>
                まんがではじめるKubernetes<br>
                初出：2019年4月14日　技術書典6<br>
                <a href="https://blux.booth.pm/items/1317512" target="blank">BOOTH</a>にて電子書籍販売中
                </p>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
       </v-layout>
    </v-container>
    <h2>LINE STAMP</h2>
    <v-container fluid grid-list-lg>
      <v-layout justify-center>
        <v-flex xs7>
          <v-card>
            <v-layout>
              <v-flex xs5>
                <div>
                  <CardImage :filename="'stamp_icon2.png'" :padding="'10px'" />
                </div>
              </v-flex>
              <v-flex>
                <p>
                  販売開始：2018年2月21日<br>
                  <a href="https://line.me/S/sticker/3024018" target="blank">おとうふくんスタンプ2</a>
                </p>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
       </v-layout>
             <v-layout justify-center>
        <v-flex xs7>
          <v-card>
            <v-layout>
              <v-flex xs5>
                <div>
                  <CardImage :filename="'stamp_icon.png'" :padding="'10px'" />
                </div>
              </v-flex>
              <v-flex>
                <p>
                  販売開始：2014年6月20日<br>
                  <a href="https://line.me/S/sticker/1001196" target="blank">おとうふくんスタンプ</a>
                </p>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
       </v-layout>
    </v-container>
    <h2>その他</h2>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex xs7>
          <v-card>
            <v-layout>
              <v-flex xs5>
                <div>
                  <a href="https://blux.booth.pm" target="blank">BOOTH</a>
                </div>
              </v-flex>
              <v-flex>その他おとうふくんグッズ</v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CardImage from './CardImage.vue'
export default {
  name: 'works',
  components: {CardImage},
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
