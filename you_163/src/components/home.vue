<template>
  <div class="container">
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
      goods_icon: [
        {
          imgUrl:
            "https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png",
          goods_txt: "新品首发",
        },
        {
          imgUrl:
            "https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png",
          goods_txt: "居家生活",
        },
        {
          imgUrl:
            "https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png",
          goods_txt: "服饰鞋包",
        },
        {
          imgUrl:
            "https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png",
          goods_txt: "美食酒水",
        },
        {
          imgUrl:
            "https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png",
          goods_txt: "个护清洁",
        },
        {
          imgUrl:
            "https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png",
          goods_txt: "母樱亲子",
        },
        {
          imgUrl:
            "https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png",
          goods_txt: "运动旅行",
        },
        {
          imgUrl:
            "https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png",
          goods_txt: "数码家电",
        },
        {
          imgUrl:
            "https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png",
          goods_txt: "全球特色",
        },
        {
          imgUrl:
            "https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif",
          goods_txt: "好货抄底",
        },
      ],
      active:'',
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
  /* overflow: scroll; */
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
.goodsListDiv{
  clear:both;
  margin: .2rem 0 ;
  background: red;
}
</style>
