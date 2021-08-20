<template>
  <div id="app">
    <div id="loading" class="position-fixed">
        <div class="col-xl-12 col-12">
            <div class="col-lg-1 col-1">
                <img id="logo" src="./assets/picture/logo.png" alt="">
            </div>
            <div class="col-lg-3 col-3 left_top_title position-relative">
                <p class="position-absolute">與嘉義相遇</p>
            </div>
        </div>
        <div class="chiayi_temple_div">
            <img class="chiayi_temple" src="./assets/picture/chiayi_temple.png" alt="">
            <div class="turkey clearfix">
                <p class="t-center loading">loading....</p>
                <div class="col-lg-12 col-12">
                    <div class="col-lg-10 col-10">
                        <div class="progress">
                            <div ref="divtest" id="divtest" class="color"></div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-2">
                        <p class="t-right percentage" ref="cnt">100</p>
                    </div>
                </div>
            </div>
          </div>
    </div>
    <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    <!-- <main class="App__main">
      <transition-page>
        <router-view/>
      </transition-page>
    </main> -->
    <!-- <transition :name="transitionName">
      <router-view></router-view>
    </transition> -->
    <!-- <vue-page-transition name="fade-in-right">
      <router-view/>
    </vue-page-transition> -->
  </div>
</template>

<script>
// import TransitionPage from './transitions/TransitionPage.vue'

// import './asset/css/main.css'
import './assets/css/phone.css'
import './assets/css/global.css'
import mychats from './components/mychats.vue'
import $ from 'jquery'
export default {
  name: 'app',
  components: {
    mychats
    // TransitionPage
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.$refs.divtest.addEventListener('animationend', () => {
      $('#loading').fadeOut()
      console.log('transition end')
    })
    $('.percentage').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now) + '%')
        }
      })
    })
    // console.log(this.$route.name)
  }
  // watch: {
  //   '$route' (to, from) {
  //     const toDepth = to.path.split('/').length
  //     const fromDepth = from.path.split('/').length
  //     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  //   }
  // }
}
// export default {
//   name: 'App'
// }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

/* route transition */
.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active{
  transition: all 0.3 ease-out;
}

.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active{
  transition:all .3s ease-in;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
