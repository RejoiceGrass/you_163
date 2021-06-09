<template>
  <div>
    <!--header-->
    <van-row class="header-div">
      <van-col>
        <img class="logo" width="55" src="../assets/logo.png" />
      </van-col>
      <van-col>
        <van-search
          class="header-search"
          v-model="search_v"
          background="#f0"
          placeholder="请输入搜索关键词"
        />
      </van-col>
      <van-col>
        <div class="loginBtn">登录</div>
      </van-col>
    </van-row>
    <!-- Swipe -->
    <!-- 滚动的tab按钮列表 -->
    <van-tabs>
      <van-tab v-for="(n, inx) in tabBtnList" :key="inx" :title="n">
        <!-- 内容 -->
        <!-- {{n}} -->
      </van-tab>

      <!-- 轮播图 -->
    </van-tabs>
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item v-for="(url, inx) in imgObj" :key="inx" :title="url">
        <img :src="url" />
      </van-swipe-item>
    </van-swipe>
    <!-- 滚动条下的广告-->
    <van-row class="service_info">
      <van-col span="8">
        <i class="icon" style="background-image: url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png')"></i>
        <span>网易自营品牌</span>
      </van-col>
      <van-col span="8">
        <i class="icon"  style="background-image: url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png')"></i>
        <span>30天无忧退货</span>
      </van-col>
      <van-col span="8">
        <i class="icon"  style="background-image: url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png')"></i>
        <span>48小时快速退款</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      search_v: "",
      tabBtnList: [
        "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洁",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "严选全球",
      ],
      imgObj: [
        "https://yanxuan.nosdn.127.net/bc462b22ff836612ff9aa7f10090ee3d.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/1349d7a9a81f90b39578f0b69d39bac7.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/3d61a8db02d1aa7ef0b4da1b7b6a8fdd.png?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/976b254bb78e067bf5830153b28b8502.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
      ],
    };
  },
};
</script>

<style>
/* header */
.header-div {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  position: relative;
}
.logo {
  width: 2rem;
  display: inline-block;
  margin: .1rem 0 0 0.2rem;
  height: 1rem;
}
.header-search {
  margin: .1rem 0 0 0;
  width: 5.8rem;
  height: 1rem;
  border: 0;
  padding: 0;
  background-color: #ededed;
  border-radius: 2rem;
}
.loginBtn {
  margin: 0.1rem 0 0 0;
  width: 2rem;
  height: 1rem;
  color: red;
  border: 1px solid red;
  font-size: 0.8rem;
  line-height: 1rem;
  border-radius: 0.15rem;
  text-align: center;
}

/* 轮播图 */
.myswipe {
  width: 100%;
}
/* 广告 */
.service_info{
  display: flex;
  flex-flow:row nowrap;
  justify-content: center;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
}
.service_info i.icon{
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100%;
  width: .6rem;
  height: .6rem;
  vertical-align: middle;
}
</style>
