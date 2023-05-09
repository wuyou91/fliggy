# fliggy

> DEMO演示地址：[点击查看](http://classical.yancx.cn/fliggy)

> 因没有后台接口，页面内容皆为用axios获取的本地json数据

> 初学VUE，仿的阿里飞猪的手机端web。



# 知识点总结：

- transition动画组件的使用，实现首页headerbu部分的下拉列表
- 用axios获取数据，注意vue的生命周期
- component动态组件，切换目的地列表的境内和境外
- 路由router的使用，实现页面跳转
- vuex的使用，实现复杂组件间的数据传递
  - 将state、mutations、actions进行拆分，便于维护
  - 使用mapMutation和mapState更方便的传递和获取数据
- 父子组件的数据传递
  - props
  - $emit
- 计算属性computed、监听器watch



# 使用了

 vue2.0 + vue-cli + vue-router + axios + vuex

 轮播使用了[VueAwesomeSwiper](https://github.com/surmon-china/vue-awesome-swiper)插件

 辅助工具node.js、webpack 、git

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
