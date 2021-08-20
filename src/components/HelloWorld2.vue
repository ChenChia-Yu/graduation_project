<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{id }}
    <button @click="getData()" >Get Data</button>
    <router-link class="about_us" to="/about">關於我們</router-link>
    <div v-if="person != null">
      <h1>大笨蛋</h1>
      <h1 v-for="row in person.ProcessInfo" :key="row">{{ row.CurNum }}</h1>
      <h1 v-for="row in person.ProcessInfo" :key="row">{{ row.EmployeeName }}</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld2',
  props: ['id'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      person: null
    }
  },
  methods: {
    getData () {
      // let vm = this
      let vm = this
      axios.get('https://api.kcg.gov.tw/api/service/Get/8cd9aba3-bbbc-4801-b267-5e9ee9ff50a6')
        .then(function (response) {
          vm.person = response.data.data
          console.log(vm.person)
          // console.log(response.data)
        })
    }
  },
  mounted: function () {
    this.getData()
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
