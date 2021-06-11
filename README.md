# Vant学习

## 1.GIT的相关补充学习

- **本地仓库与远程仓库同时创建时所遇到的问题**

  - 本地初始化了git仓库，放了一些文件进去并进行了add操作和commit提交操作；github创建了git仓库并建立了README，.gitignore等文件；本地仓库添加了github上的git仓库作为远程仓库，起名origin； git remote add origin 远程仓库地址

  - 首先需要关联本地仓库与远程仓库：git branch --set-upstream-to=origin/master master；此时会出现error：not exist

  - 解决问题（不可以直接pull），git pull origin master --allow-unrelated-histories ；git branch --set-upstream-to=origin/master master  ；git push

  - 总结：

    1、git remote add origin 远程仓库地址

    2、git pull origin master --allow-unrelated-histories

    3、git branch --set-upstream-to=origin/master master

    4、git push





## 2.移动端网页的适配

- **REM**
  - 根据页面缩放比例的
  - 是相对于页面根元素<html>需要在根元素确定一个参考值，其他元素设置rem都是以html的字体大小进行字体大小缩放，字体大小值就是参考值
  - 样例介绍
    - <html style='font-size:16px'>
    - 它依据根目录的比例放大比例
  - 动态设置宽高比
    - 得到屏幕的宽：var w_win= docmentElement.clinetWidth

- 

## 3.案例中遇到的问题

- **overflow**（给div设置高度100%后会出现滚动条）

  - overflow是什么？
    - 规定当内容溢出元素框时会发生的事情
  - overflow的几个属性
    - visible 默认值，内容不会被修剪，会呈现在元素框之外 
    - hidden内容被修剪，并且其他内容不可见
    - scroll内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容
    - auto如果内容欸修剪，则浏览器会显示滚动条以便查看

- **clear**（一块div中清除浮动）

  - clear是什么？
    - 规定元素的那一侧不允许其他浮动元素
  - clear的可能值
    - left在左侧不允许浮动元素。
    - right在右侧不允许浮动元素。
    - both默认值。允许浮动元素出现在两侧。

- **listview recycleview**

- **express**(node中间键 middleware)

  - 是

- **跨域**（成熟的解决跨域）

  - app.all('*',function(req,res,next){

    ​	res.header("Access-Control-Allow-Origin","*");

    ​	res.header("Access-Control-Allow-Headers","X-Requested-With");

    ​	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    ​	res.header("X-Powered-By",'3.2.1');

    ​	res.header("Content-Type","application/json;charset=utf-8");

    ​	next();

    })

- **吸顶粘性布局Sticky**

## 4.Vant安装的了解

- **babeLrc**

  - .babeLrc是什么文件?

    - 从Linux的开发习惯作为历史
    - rc结尾的文件，一般都是运行时自动加载的文件、配置文件等。

  - 什么时babel？

    - 现在ES6还没有被所有的浏览器都支持，所以需要babel将ES6转换成浏览器能够识别的代码，所以  .babelrc文件，是用来设置转码的规则和插件的。

  - 默认plugins

    - plugins是什么

      ：是引用插件来处理代码的转换

    - transform-runtime
      ：用来处理全局函数、优化babel插件

    - 

      

  - 

- **推荐使用配置的参数**

  - libraryName：import改成自定义"vant"
  - librarDirectory:用的是es6模块的项目
  - es6方式引入打包后体积会更小



## 5.配置安装

- **前端**

  - git clone https://github.com/RejoiceGrass/you_163.git
  - npm install
  - npm run dev

- **后端**

  - 运行本地服务器node your_163_middleware.js

  - 本地地址http://localhost:5555
