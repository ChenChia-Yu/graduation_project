<template>
    <div>
        <h2>{{ value }}</h2>
        <h1>{{count}}</h1>
        <button @click="count++">ADD</button>
    </div>
</template>
<script>

export default{
  props: {
    value: String
  },
  data () {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
    button{
        background: blue;
        color:white;
        padding:10px 20px;
        border: 0px;
        border-radius: 100px;
        cursor: pointer;
    }

    button:hover{
        background: #000;
    }
</style>
