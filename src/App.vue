<template>
  <div id="app">
    <img src="./assets/logo.png">
	<h1>王德兴</h1>
  <chenyujie ref="chenyujie"></chenyujie>
  <wangdexing></wangdexing>
  <button @click="getChildInfo()">getchildinfo</button>
<router-view/>
  </div>
</template>

<script>
import chenyujie from "./components/chenyujie"
import wangdexing from "./components/wangdexing"
export default {
  name: 'App',
  data(){
    return{
      wangdexing:"wangdexing chenyujie"
    }
  },
  components:{
    chenyujie,
    wangdexing
  },
  methods:{
    getChildInfo:function(){
      alert(this.$refs.chenyujie.msg)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
