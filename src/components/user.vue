<template>
<div class=user>
  <div class=left>
    <router-link :to="{path:'/user/useradd', component:useradd}">增加用户</router-link>
    <br>
    <router-link :to="{path:'/user/userdelete', component:userdelete}">用户列表</router-link>
  </div>

  <div class=right>
      <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'user',
  data(){
    return{
      msg:"",
      para:""
    }
  },
}
</script>


<style lang="scss" scoped>


    .user{

        display:flex;

        .left{

            width:200px;

            min-height:400px;

            border-right:1px solid #eee;
        }

        .right{
            flex: 0%;
            text-align: left;
        }

    }
</style>

