var express = require('express');
var app = express();

//解决跨域问题
app.all('*', function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

  res.header("X-Powered-By", '3.2.1');

  res.header("Content-Type", "application/json;charset=utf-8");

  next();

});

//获得可拖动按钮列表的接口
app.get('/get_tabble_list', function (req, res) {
  var tabBtnList=[
    "推荐",
    "居家生活",
    "服饰鞋包",
    "美食酒水",
    "个护清洁",
    "母婴亲子",
    "运动旅行",
    "数码家电",
    "严选全球",
  ];
  res.send(tabBtnList);
})
app.get('/get_imgObj',function(req,res){
  var imgObj=
    [
      "https://yanxuan.nosdn.127.net/bc462b22ff836612ff9aa7f10090ee3d.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
      "https://yanxuan.nosdn.127.net/1349d7a9a81f90b39578f0b69d39bac7.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
      "https://yanxuan.nosdn.127.net/3d61a8db02d1aa7ef0b4da1b7b6a8fdd.png?type=webp&imageView&quality=75&thumbnail=750x0",
      "https://yanxuan.nosdn.127.net/976b254bb78e067bf5830153b28b8502.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
    ];
    res.send(imgObj);

})
app.get('/get_goods_icon',function(req,res){
  var goods_icon =
  [
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
    }
  ];
  res.send(goods_icon);
})
app.listen(5555, function () {
  console.log('5555，网易严选中间件，已经运行');
})
