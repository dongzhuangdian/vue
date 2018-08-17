<template>
  <div id="wangdexing">
{{wangdexing}}
  </div>
</template>

<script>
import VueEvent from '../model/vueEvent.js';
export default {
  name: 'wangdexing',
  data(){
    return{
      wangdexing:"wangdexing chenyujie"
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
