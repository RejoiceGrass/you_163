<template>
  <div>
    <!--header-->
    <van-row>
      <van-col>
        <img class="logo" width="55" src="../assets/logo.png"/>
      </van-col>
      <van-col>
        <van-search class="header-search" v-model="value" background="#f0" placeholder="请输入搜索关键词" />
      </van-col>
      <van-col>
        <div class="loginBtn">登录</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name:'home',
  data() {
    return{
    }
  },
};
</script>

<style>
/* header */
.logo{
  width: 1.3rem;
  display: inline-block;
  margin: .55rem 0 0 .2rem;
  height: .8;
}
.header-search{
  margin: .5rem 0 .3rem 0;
  width: 4rem;
  height: .7rem;
  border: 0;
  padding: 0;
  background-color: #ededed;
  border-radius: 2rem;
}
.loginBtn{
  margin: .6rem 0 0 0;
  width: .8rem;
  height: .5rem;
  color: red;
  border: 1px solid red;
  font-size: .2rem;
  line-height: .5rem;
  border-radius: .15rem;
  text-align: center;
}




</style>
