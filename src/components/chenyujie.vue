<template>
<div>
 <h1>我是陈玉杰！</h1>
 <h2>{{para}}</h2>
 <button @click="emitNews()">getParentInfo</button>
</div>
</template>

<script>
import VueEvent from "../model/vueEvent.js"
export default {
  name: 'chenyujie',
  data(){
    return{
      msg:"chenyujie",
      para:""
    }
  },
  props:["title"],
  methods:{
    getParentInfo:function(){
      alert(this.$parent.wangdexing)
    },
    emitNews(){
                //广播数据
                VueEvent.$emit('to_wangdexing',this.msg)

            }
  },
  mounted(){
     alert(this.$route.query.aid)
  }

}
</script>
