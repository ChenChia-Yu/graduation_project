<template>
    <div>
        {{content}}
        <!-- <div></div> -->
        <button v-for="row in content" :key="row"
                @click="selectTabs(row.id)"
                :class="{ 'white' : currentTab==row.id }" >{{row.title}}</button>
        <!-- <button @click="selectTabs(2)" :class="{ 'white' : currentTab==2 }" >Mission</button>
        <button @click="selectTabs(3)" :class="{ 'white' : currentTab==3 }" >overview</button> -->
        <div v-for="row in content" :key="row" class="bg">
            <h2>{{row.title}}</h2>
            <p>{{row.content}}</p>
        </div>
        <!-- <div v-if="currentTab==2" class="bg">
            <h2>This is the title2</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla</p>
        </div>
        <div v-if="currentTab==3" class="bg">
            <h2>This is the title3</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla</p>
        </div> -->
    </div>
</template>
<script>
export default{
  // eslint-disable-next-line no-undef
  // component: mytabs,
  data () {
    return {
      currentTab: 1
    }
  },
  props: {
    // msg: String
    content: Array
  },
  methods: {
    selectTabs (selectedTab) {
      let vm = this
      vm.currentTab = selectedTab
      console.log(vm.currentTab)
    }
  }
}
</script>
<style scoped>
    button{
        background: rgb(104, 104, 255);
        border-radius: 10px;
    }
    .white{
        background: white;
    }
</style>
