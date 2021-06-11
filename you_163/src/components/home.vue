<template>
  <div>
    <!--header-->
    <van-sticky>
      <van-row>
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
    </van-sticky>
    <!-- Swipe -->
    <!-- 滚动的tab按钮列表 -->
    <van-sticky>
      <van-tabs>
        <van-tab v-for="(n, inx) in tabBtnList" :key="inx" :title="n">
          <!-- 内容 -->
          <!-- {{n}} -->
        </van-tab>
      </van-tabs>
    </van-sticky>

    <!-- 轮播图 -->

    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
      <van-swipe-item v-for="(url, inx) in imgObj" :key="inx" :title="url">
        <img :src="url" />
      </van-swipe-item>
    </van-swipe>
    <!-- 滚动条下的广告-->
    <van-row class="service_info">
      <van-col span="8">
        <i
          class="icon"
          style="
            background-image: url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png');
          "
        ></i>
        <span>网易自营品牌</span>
      </van-col>
      <van-col span="8">
        <i
          class="icon"
          style="
            background-image: url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png');
          "
        ></i>
        <span>30天无忧退货</span>
      </van-col>
      <van-col span="8">
        <i
          class="icon"
          style="
            background-image: url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png');
          "
        ></i>
        <span>48小时快速退款</span>
      </van-col>
    </van-row>
    <!-- grid宫格 -->
    <van-grid :column-num="5">
      <van-grid-item v-for="(goods, inx) in goods_icon" :key="inx" text="文字">
        <img src="goods.imgUrl" />
        <div>{{ goods.goods_txt }}</div>
      </van-grid-item>
    </van-grid>
    <!-- 商品列表 -->
    <div class="goodsListDiv">
      <h1>
        <label>新品首发</label>
        <a href="#">更多</a>
      </h1>
    </div>
    <!-- 新品首发 -->
    <van-grid :column-num="3">
      <van-grid-item v-for="(goods, inx) in goods_icon" :key="inx" text="文字">
        <img src="goods.imgUrl" />
        <div>{{ goods.goods_txt }}</div>
      </van-grid-item>
    </van-grid>
    <!-- 顶页面 -->
    <div style="height: 3rem; background: #666; font-size: 0.5rem; color: #fff">
      footer div
    </div>
    <!-- 底部tabbar -->
    <van-tabbar v-model="active" active-color="#ee0a24">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot>分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">值得买</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      search_v: "",
      tabBtnList: "",
      imgObj: "",
      goods_icon: "",
      active: "",
    };
  },
  created() {
    axios.get("http://localhost:5555/get_tabble_list").then((_d) => {
      console.log(_d.data);
      this.tabBtnList = _d.data;
    });
    axios.get("http://localhost:5555/get_imgObj").then((_d) => {
      this.imgObj = _d.data;
    });
    axios.get("http://localhost:5555/get_goods_icon").then((_d) => {
      this.goods_icon = _d.data;
    });
  },
};
</script>

<style>
/* header */
.header-div {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
   overflow: scroll;
}
.logo {
  width: 2.2rem;
  display: inline-block;
  margin: 0.1rem 0 0 0.15rem;
  height: 1.3rem;
}
.header-search {
  margin: 0.1rem 0 0 0;
  width: 5.8rem;
  height: 1rem;
  border: 0;
  padding: 0;
  background-color: #ededed;
  border-radius: 2rem;
}
.loginBtn {
  margin: 0.1rem 0 0 0;
  width: 1.75rem;
  height: 1rem;
  color: red;
  border: 1px solid red;
  font-size: 0.75rem;
  line-height: 1rem;
  border-radius: 0.15rem;
  text-align: center;
}

/* 轮播图 */
.myswipe {
  width: 100%;
}
/* 广告 */
.service_info {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
}
.service_info i.icon {
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 0.6rem;
  height: 0.6rem;
  vertical-align: middle;
}
/* 新品首发*/
.goodsListDiv {
  clear: both;
  margin: 0 0.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
}
.goodsListDiv h1 label {
  float: left;
  font-size: 0.5rem;
}
.goodsListDiv h1 a {
  float: right;
  font-size: 0.45rem;
}
</style>
