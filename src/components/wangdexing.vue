<template>
  <div id="wangdexing">
    <h1>{{wangdexing}}</h1>
  </div>
</template>

<script>
import VueEvent from '../model/vueEvent.js';
export default {
  name: 'wangdexing',
  data(){
    return{
      wangdexing:"我是王德兴！"
    }
  },
  mounted(){
    VueEvent.$on('to_wangdexing',function(data){
        alert(data);
      })
  }

}
</script>

<style>
#wangdexing {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

}
</style>
