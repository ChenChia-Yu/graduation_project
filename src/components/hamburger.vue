<template>
  <div class="hello">
        <div class="col-lg-2 col-2 hamburger position-relative">
          <div class="hamburger_div position-absolute">
              <span></span>
          </div>
          <div class="show position-absolute">
            <ul>
                <li>
                    <!-- <a href="javascript:void(0)">返回首頁</a> -->
                    <router-link to="/">返回首頁</router-link>
                </li>
                <template v-for="page_ in page_href" >
                  <li>
                      <!-- <a href="javascript:void(0)">歷史軌跡</a> -->

                      <router-link :to=page_.href>{{page_.name}}</router-link>
                  </li>
                </template>
            </ul>
          </div>
        </div>
    </div>
    <!-- <myTabs :content="tabData"></myTabs> -->
</template>

<script>
/* eslint-disable */
import myTabs from '@/components/mytabs.vue'
export default {
  name: 'hamburger',
  props:['page'],
  components: {
    myTabs
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      page_href : []
      // tabData: [
      //   {
      //     'title': '幹你娘啊',
      //     'id': 1,
      //     'content': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla'
      //   },
      //   {
      //     'title': '去死吧',
      //     'id': 2,
      //     'content': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla'
      //   },
      //   {
      //     'title': '你老師ㄟ',
      //     'id': 3,
      //     'content': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla'
      //   }
      // ]
    }
  },

  mounted(){
    if(this.page == "history"){
      this.page_href.push({"href": "chiayi","name":"關於嘉義"})
      this.page_href.push({"href" : "temple_explore","name" : "城隍廟探索"})
    }else if(this.page == "temple_explore"){
      this.page_href.push({"href": "chiayi","name":"關於嘉義"})
      this.page_href.push({"href":"history","name" : "歷史軌跡"})
    }else{
      this.page_href.push({"href":"history","name" : "歷史軌跡"})
      this.page_href.push({"href" : "temple_explore","name" : "城隍廟探索"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* a{
        z-index: 9999;
    } */
</style>
