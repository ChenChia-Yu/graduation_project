<template>
  <div class="hello">
    <header class="full-width clearfix" id="header">
        <div class="fixed-width clearfix">
            <div class="col-xl-12 col-12">
                <div class="col-xl-4 col-4 vam">
                    <div class="col-lg-3 col-3">
                        <img id="logo" src="../assets/picture/logo.png" alt="">
                    </div>
                    <div class="col-lg-9 col-9">
                        <h4 class='t-left standard_word'>城隍遺夢</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed-width clearfix">
            <div class="change_cover_picture col-xl-12 col-12" v-on:mouseup="release" v-dragged="onDragged">
                <img class="img1" v-bind:style="{ 'cursor':toggle_cursor ,'animation-direction':  change_animation_direction , 'animation-duration' : change_animation_duration}" src="https://images.pexels.com/photos/4544803/pexels-photo-4544803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                <img class="img2" v-bind:style="{ 'cursor': toggle_cursor,'animation-direction':  change_animation_direction , 'animation-duration' : change_animation_duration}" src="https://images.pexels.com/photos/3807521/pexels-photo-3807521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                <img class="img3" v-bind:style="{ 'cursor': toggle_cursor,'animation-direction':  change_animation_direction , 'animation-duration' : change_animation_duration}" src="https://images.pexels.com/photos/4260644/pexels-photo-4260644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            </div>
        </div>
    </header>

    <div id="div_app" class="full-width clearfix content">
        <div class="fixed-width">
            <div class="col-lg-12 col-12">
                <div class="title">
                    <h3 class="border_line">下載</h3>
                </div> <!---->
            </div>
            <div class="col-lg-12 col-12 vam">
                <div class="col-lg-6 col-6">
                    <div class="explanation rounded" style="padding: 20px; display: none;">
                        <p>嘉義城隍廟建廟超過300年，</p>
                        <p>留下許多特有的碑扁文物</p>
                        <p>想知道每個文物背後，</p>
                        <p>又藏有哪些歷史意義與故事呢?</p>
                        <p>快來下載APP</p>
                        <p>跟我憶起探險尋廟有多少的珍藏的文物吧</p>
                        <p>GOGOGO~</p>
                    </div>
                    <img style="width:20%;" class="turkey_image" src="../assets/picture/turkey.png">
                </div>
                <div class="col-lg-6 col-6">
                    <img src="../assets/picture/QRcode.png" alt="">
                </div>
            </div> <!---->
        </div>
    </div>
    <div class="full-width clearfix about_chiayi">
        <div class="fixed-width">
            <div class="col-xl-12 col-12 vam">
                <div class="col-lg-6 col-6">
                    <h3 class="t-center">關於嘉義</h3>
                    <div class="explore">
                        <h5 @click="$router.push('chiayi')" class="t-center"><span></span>探索<span></span></h5>
                    </div>
                </div>
                <div class="col-lg-6 col-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%9F%8E%E9%9A%8D%E5%BB%9F%E6%AD%A3%E9%9D%A2%E7%85%A7.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="full-width clearfix history">
        <div class="fixed-width">
            <div class="col-xl-12 col-12 vam">
                <div class="col-lg-6 col-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%9F%8E%E9%9A%8D%E5%BB%9F%E6%AD%A3%E9%9D%A2%E7%85%A7.jpg" alt="">
                </div>
                <div class="col-lg-6 col-6">
                    <h3 class="t-center">歷史軌跡</h3>
                    <div class="explore">
                        <h5 @click="$router.push('history')" class="t-center"><span></span>探索<span></span></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="full-width clearfix temple_explore">
        <div class="fixed-width">
            <div class="col-xl-12 col-12 vam">
                <div class="col-lg-6 col-6">
                    <h3 class="t-center">城隍廟探奇</h3>
                    <div class="explore">
                        <h5 @click="$router.push('temple_explore')" class="t-center"><span></span>探索<span></span></h5>
                    </div>
                </div>
                <div class="col-lg-6 col-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%9F%8E%E9%9A%8D%E5%BB%9F%E6%AD%A3%E9%9D%A2%E7%85%A7.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="full-width clearfix name">
        <div class="fixed-width">
            <div class="col-xl-12 col-12 vam">
                <div class="col-xl-3 col-6">
                    <img src="https://elt.rti.org.tw/wp-content/uploads/2018/01/960x540_people.jpg" alt="">
                    <p class="t-center">名子</p>
                </div>
                <div class="col-xl-3 col-6">
                    <img src="https://elt.rti.org.tw/wp-content/uploads/2018/01/960x540_people.jpg" alt="">
                    <p class="t-center">名子</p>
                </div>
                <div class="col-xl-3 col-6">
                    <img src="https://elt.rti.org.tw/wp-content/uploads/2018/01/960x540_people.jpg" alt="">
                    <p class="t-center">名子</p>
                    </div>
                    <div class="col-xl-3 col-6">
                        <img src="https://elt.rti.org.tw/wp-content/uploads/2018/01/960x540_people.jpg" alt="">
                        <p class="t-center">名子</p>
                    </div>
                </div>
                <div class="col-xl-12 col-12">
                    <h1>關於我們</h1>
                    <p class="t-left">我們是一群從外地到嘉義念書的大學生，</p>
                    <p class="t-left">希望藉由網頁帶領其他學生了解嘉義的歷史</p>
                </div>
            </div>
    </div>
    <footer class="full-width clearfix">
            <div class="col-xl-12 col-12">
                <div class="col-lg-12 col-12">
                    <p class="t-center">城隍遺夢製作團隊 © 2021copyright</p>
                </div>
            </div>
    </footer>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import VDragged from 'v-dragged'
Vue.use(VDragged)
export default {
  name: 'index',
  //   props: ['id'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      person: null,
      change_animation_direction: "normal",
      change_animation_duration: "10s",
      toggle_cursor:"none"
    }
  },
  methods: {
    onDragged ({el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last}) {
      console.log('clientX' + clientX)
      console.log('deltaX' + deltaX)
      console.log("el" + el)
      this.toggle_cursor = "grab"
      if (deltaX > 0 || offsetX > 0) {
          this.change_animation_direction = "reverse"
          this.change_animation_duration = "1s"
      } else {
          this.change_animation_direction = "normal"
            this.change_animation_duration = "1s"
        console.log('right')
      }
      if(last == true){
        this.change_animation_duration = "10s"
      }
    },

    release:function(){
        console.log("Mouse_up")
        this.change_animation_duration = "10s"
    }
    // about_chiayi () {

    // }
  },
  mounted () {

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
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
} */
</style>
