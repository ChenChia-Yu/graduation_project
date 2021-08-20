<template>
  <div class="hello">
    <header class="full-width clearfix bgimg" id="header">
        <div class="fixed-width clearfix">
            <div class="col-xl-12 col-12">
                <div class="col-xl-4 col-4">
                    <div class="col-lg-3 col-3">
                        <img id="logo" src="../assets/picture/logo.png" alt="">
                    </div>
                </div>
                <hamburger page="history"></hamburger>
            </div>
        </div>
        <div class="col-xl-12 col-12">
          <div class="col-lg-6 col-12 title">
            <h1 style="padding-top:224px;color:#000;" class="t-center">歷史軌跡</h1>
            <p style="padding-top:109px;padding-bottom:386px;color:#000;" class="t-center">前塵追憶</p>
          </div> <!---->
        </div>
    </header>
    <div class="col-xl-12 col-12 content">
      <div class="col-lg-12 col-12">
        <div class="title">
          <h3 class="border_line">建廟軌跡</h3>
        </div>
      </div>
      <div class="col-lg-12 col-12">
        <img id="triangle_in_built_history" v-click-outside="hide" class="explanation" v-bind:src="card" v-bind:style="{ display : show}">
        <div class="triangle_in_built_history" data-id="1" @click="show_explanation(1)"></div>
        <div class="triangle_in_built_history" data-id="2" @click="show_explanation(2)"></div>
        <div class="triangle_in_built_history" data-id="3" @click="show_explanation(3)"></div>
        <div class="triangle_in_built_history" data-id="4" @click="show_explanation(4)"></div>
        <div class="triangle_in_built_history" data-id="5" @click="show_explanation(5)"></div>
        <!-- <button>XXX</button> -->
        <img class="built_temple_history" src="../assets/picture/built_temple_history.jpg" alt="">
      </div>
    </div>
    <div class="col-xl-12 col-12 content">
      <div class="col-lg-12 col-12">
        <div class="title">
          <h3 class="border_line">歷史軌跡</h3>
        </div>
      </div>
      <div class="col-lg-12 col-12 vam">
        <img id="history_event" v-click-outside="hide" class="explanation" v-bind:src="card1" v-bind:style="{ display : show1 }">
        <div class="col-lg-3 col-3">
          <img src="../assets/picture/turkey.png" @click="show_history_event('tai_tsung_duan')" data-id="tai_tsung_duan" class="w-50 right:0 turkey_image history_event">
        </div>
        <div class="col-lg-9 col-9">
          <div class="right:0 turkey_image bg-white history_event" @click="show_history_event('honorific_title')" data-id="tai_tsung_duan" style="height:300px;"></div>
        </div>
      </div>
    </div>
    <div class="col-xl-12 col-12 vam content">
      <div class="col-lg-12 col-12">
        <div class="title">
          <div class="m-auto" style="width:60%;">
            <h3 class="border_line t-center float-none m-0">傳說故事-守護、司法之神-城隍爺</h3>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-12">
        <img src="https://i.ytimg.com/vi/KKITUudusC0/maxresdefault.jpg" alt="">
      </div>
    </div>
    <div class="col-xl-12 col-12 vam content">
      <div class="col-lg-12 col-12">
        <h3 class="border_line">城隍軼事</h3>
      </div>
      <div class="col-lg-12 col-12">
        <h3 class="t-center">在很久以前，民間流傳著這樣的故事....</h3>
      </div>
    </div>
    <div class="col-xl-12 col-12 vam content">
      <div class="col-lg-12 col-12">
        <div class="title">
          <img style="width:5%;right:30px;z-index:99;" @click="surprise()" class="position-absolute turkey_image surprise" data-id="surprise" src="../assets/picture/turkey2.png">
        </div> <!---->
      </div>
      <div class="col-lg-12 col-12">
        <img class="explanation" v-click-outside="hide" id="surprise" src="../assets/字卡/surprisesurprise.png" :style="{display: show2}">
        <p class="t-center">小河旁坐落著一個小村莊</p>
        <img class="story2" src="../assets/picture/故事02.png" alt="">
        <img class="story1" src="../assets/picture/故事01.png" alt="">
        <p class="t-center">而村子有一位自幼苦讀詩書的讀書人-劉公子，</p>
        <p class="t-center">畢生一心想考取功名、光宗耀祖，成為村莊的驕傲，</p>
        <p class="t-center">並藉由當官讓百姓安居樂業</p>
        <p class="t-center">可惜趙生參加過三次科舉制度考試，皆榜上無名。</p>
        <p class="t-center">在某次科舉考試因為身體患有疾病而無法前去考試，</p>
        <p class="t-center">於是就請了跟在自己身旁已久的書僮-趙生，</p>
        <p class="t-center">前去幫忙赴試；到了放榜當天，劉公子家外頭人聲鼎沸</p>
        <p class="t-center">鞭炮作響，高賀他考上官職，不過實際上理當是趙生考中，</p>
        <p class="t-center">但村子裡無人知曉，隔天，劉公子就這樣前去就任新官；</p>
        <p class="t-center">趙生也在昨夜突然銷聲匿跡，消失在這村子上……</p>
      </div> <!---->
    </div>
    <div class="col-xl-12 col-12 vam content">
      <div class="col-lg-12 col-12">
        <img class="story9" src="../assets/picture/故事09.png" alt="">
        <img class="story10" src="../assets/picture/故事10.png" alt="">
        <p class="t-center">隔了幾天的某個傍晚</p>
        <p class="t-center">河邊哭哭啼啼跑來了一位媳婦，</p>
        <p class="t-center">伴隨著哭腔說著:「我們的財產全部都沒了，</p>
        <p class="t-center">該怎麼買藥過活?我乾脆直接自殺算了」，這位媳婦由於丈夫得了病</p>
        <p class="t-center">一直以來靠著養雞鴨換錢，買藥延續丈夫的命</p>
        <p class="t-center">如今牲畜卻被黃鼠狼給偷走，所以一時想不開，想跳河自盡</p>
        <p class="t-center">此時她身邊竟出現一隻水鬼，誘惑她趕快跳河做替身，</p>
        <p class="t-center">這小媳婦也就往河裡跳，在水中手腳不斷掙扎</p>
        <p class="t-center">水鬼便抓住他的腳奮力向下拉，但就在此時，向下拉的水鬼鬆了手</p>
        <p class="t-center">小媳婦又忽然隨手握住了一根木頭，讓她勉強浮在水面</p>
        <p class="t-center">村里人見狀，趕緊救他上岸</p>
      </div>
    </div>
    <div class="col-xl-12 col-12 vam content">
      <div class="col-lg-12 col-12">
        <img class="story4" src="../assets/picture/故事-04.png" alt="">
        <img class="story3" src="../assets/picture/故事-03.png" alt="">
        <p class="t-center">河邊旁半生半死的媳婦</p>
        <p class="t-center">聽到了水鬼與趙生的對話，震驚了她</p>
        <p class="t-center">原來趙生在那晚被有心人士陷害不慎掉入河邊致死，成了水鬼</p>
        <p class="t-center">趙生由其他水鬼得知若是想投胎就必須找個替死鬼方能離開</p>
        <p class="t-center">但趙生不忍村里的人死去，非但自己不找替死鬼，</p>
        <p class="t-center">還不斷阻擋、不斷的勸說其他水鬼取村里人性命</p>
        <p class="t-center">他說既然已經身死為鬼，此為命也，怎可為了一己之私再去害人，惡報循環?</p>
        <p class="t-center">這爭論的過程全被那媳婦給聽到，此事便傳遍整個村子</p>
        <img src="../assets/picture/故事-11.png" alt="">
      </div>
    </div>
    <div class="col-xl-12 col-12 vam content">
      <div class="col-lg-12 col-12">
        <h4 class="t-center">過了許多年的某日，忽然聽見河面上傳來聲音：</h4>
        <h2 class="t-center">趙生聽召！</h2>
      </div>
    </div>
    <div class="col-xl-12 col-12 vam content">
      <div class="col-lg-12 col-12">
        <img class="story5" src="../assets/picture/故事05.png" alt="">
        <img class="story6" src="../assets/picture/故事06.png" alt="">
        <p class="t-center">趙生與同一河裡的水鬼們浮上水面</p>
        <p class="t-center">只見水上站著兩個黃衣差人，捧著一紙公文。</p>
        <p class="t-center">差人道：趙生陰德厚重，得百姓愛戴。</p>
        <p class="t-center">特封為此府城隍，一群水鬼可隨之上岸，作為鬼差侍候。</p>
        <p class="t-center">此後，趙生尊為城隍趙公，監督管理著陰陽 </p>
      </div> <!---->
    </div>
    <div class="col-xl-12 col-12 vam content">
      <div class="col-lg-12 col-12">
        <img class="story7" src="../assets/picture/故事07.png" alt="">
        <img class="story8" src="../assets/picture/故事08.png" alt="">
        <p class="t-center">在那晚村裡的人都做了一個夢，</p>
        <p class="t-center">夢中趙生披紅戴綠，新官上任，送到了一座堂皇府衙當中</p>
        <p class="t-center">水鬼晉升城隍，這都是趙生行善有德，</p>
        <p class="t-center">生前本來就受百姓愛戴</p>
        <p class="t-center">後來當地的城隍廟香火極旺，村民們都敬城隍趙公</p>
        <p class="t-center">稱為城隍爺呢!</p>
      </div>
    </div>
    <div class="col-xl-12 col-12 content">
      <div class="">
        <div class="title">
          <h3 class="border_line">城隍演進</h3>
          <img style="width:5%;right:30px;" class="position-absolute turkey_image" id="temple_history" src="../assets/picture/turkey2.png">
        </div>
      </div>
      <div class="col-lg-12 col-12">
        <p class="t-center"></p>
        <p class="t-center">「城隍」一詞原本的意思，</p>
        <p class="t-center">指的即是保護人民身家安全的城牆和護城河。</p>
        <p class="t-center">而城隍的宗教觀念源自道教，其後與儒教結合相互影響。</p>
        <p class="t-center">城隍爺經歷多朝改革演變至今成為民眾信仰的眾多神明之一</p>
      </div> <!---->
    </div>
    <div class="col-xl-12 col-12 content">
      <div class="">
        <div class="title">
          <h3 class="border_line">城隍演進</h3>
        </div> <!---->
      </div>
      <div class="col-lg-12 col-12">
        <img class="explanation" id="triangle_in_history_evolution" :src="card2" :style="{ display:show3 }">
        <div class="triangle_in_history_evolution" @click="history_evolution(1)" data-id="1"></div>
        <div class="triangle_in_history_evolution" @click="history_evolution(2)" data-id="2"></div>
        <div class="triangle_in_history_evolution" @click="history_evolution(3)" data-id="3"></div>
        <div class="triangle_in_history_evolution" @click="history_evolution(4)" data-id="4"></div>
        <div class="triangle_in_history_evolution" @click="history_evolution(5)" data-id="5"></div>
        <div class="triangle_in_history_evolution" @click="history_evolution(6)" data-id="6"></div>
        <img class="history_evolution" src="../assets/picture/history_evolution.jpg" alt="">
      </div> <!---->
    </div>
    <footer class="full-width clearfix">
        <div class="col-xl-12 col-12">
            <div class="col-lg-12 col-12">
                <p class="t-center">城隍際遇製作團隊 © 2021copyright</p>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
// import image from '../@/assets/'
import hamburger from '@/components/hamburger.vue'
import Vue from 'vue'
Vue.directive('click-outside', {
  bind (el, binding, vnode) {
    console.log(el)
    window.event = function (event) {
      // eslint-disable-next-line eqeqeq
      if (!(el == event.target ||
      el.contains(event.target) ||
      event.target.className === 'triangle_in_built_history' ||
      event.target.className.includes('turkey_image') ||
      event.target.className.includes('surprise') ||
      event.target.className.includes('triangle_in_history_evolution'))) {
        vnode.context[binding.expression](event)
      }
    }
    document.body.addEventListener('click', window.event)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', window.event)
  }
})
export default {
  name: 'history',
  components: {
    hamburger
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      card: '',
      card1: '',
      card2: '',
      show: 'none',
      show1: 'none',
      show2: 'none',
      show3: 'none'
    }
  },
  methods: {
    show_explanation (e) {
      let vm = this
      vm.show = 'block'
      // vm.card = './assets/字卡/triangle_in_built_history' + e + '.png'
      // vm.card = image + '字卡/triangle_in_built_history' + e + '.png'
      vm.card = require('../assets/字卡/triangle_in_built_history' + e + '.png')
    },
    show_history_event (e) {
      let vm = this
      vm.show1 = 'block'
      console.log(vm.show1)
      vm.card1 = require('../assets/字卡/history_event' + e + '.png')
    },
    surprise () {
      let vm = this
      vm.show2 = 'block'
    },
    history_evolution (e) {
      let vm = this
      vm.show3 = 'block'
      vm.card2 = require('../assets/字卡/triangle_in_history_evolution' + e + '.png')
    },
    hide () {
      let vm = this
      vm.show = 'none'
      vm.show1 = 'none'
      vm.show2 = 'none'
      vm.show3 = 'none'
    }
  }

}
// let vm = this
// document.onclick = function (data) {
//   console.log(data.target.getAttribute('data-id'))
//   if (data.target.getAttribute('data-id') === '' || data.target.getAttribute('data-id') === undefined || data.target.getAttribute('data-id') == null) {
// var explain = document.getElementsByClassName('explanation')
// console.log(explain.length)
// for (var i = 0; i < explain.length; i++) {
//   explain[i].style.display = 'none'
// }
//     console.log(vm.show)
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img.story1{
    position: absolute;
    width: 30%;
    z-index: 99;
    right: 0;
  }
  img.story2{
    position: absolute;
    width:30%;
    z-index:99;
    /* float:left; */
    /* left:30px; */
    left: 0%;
  }
  img.story3{
    position: absolute;
    width: 30%;
    z-index: 99;
    right: 0%;
  }
  img.story4{
    position: absolute;
    width:30%;
    z-index: 99;
    left:0%;
  }
  img.story5{
    position:absolute;
    width:20%;
    margin-top:-60px;
    z-index:99;
    left:0%;
  }
  img.story6{
    margin-top:-90px;
    position:absolute;
    width: 30%;
    z-index: 99;
    right:0%;
  }
  img.story7{
    position: absolute;
    width:30%;
    z-index:99;
    left:0%;
  }
  img.story8{
    position: absolute;
    width:30%;
    z-index:99;
    right:0%;
  }
  img.story9{
    position: absolute;
    width:30%;
    z-index:99;
    right:0%;
  }
  img.story10{
    position: absolute;
    width:30%;
    z-index:99;
    left:0%;
  }
</style>
