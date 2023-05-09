<template>
  <section class="may-like">
    <div class="header">猜你喜欢</div>
    <ul class="container">
      <li class="box" v-for="item of list" :key="item.id">
        <div class="img">
          <img :src="item.imgUrl" />
          <div>{{ item.tag }}</div>
        </div>
        <div class="info">
          <div class="title">{{ item.title }}</div>
          <div>
            <div class="price">
              <span>¥</span><strong>{{ item.price }}</strong>
            </div>
            <span>{{ item.people }}</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="open-app">
      <img src="http://demo.cdn.yancx.cn/fliggy/end.jpg" />
    </div>
  </section>
</template>

<script>
export default {
  name: "MayLike",
  props: {
    list: Array,
  },
};
</script>

<style scoped>
.may-like {
  overflow: hidden;
}
.header {
  padding: 0 10px;
  display: inline-block;
  font-size: 0.2rem;
  color: #6d6d6d;
  margin: 20px 0;
}
.header:before {
  content: "";
  display: block;
  float: left;
  width: 6px;
  height: 0.2rem;
  margin-right: 10px;
  background-color: #fedd01;
  border-radius: 6px 0 6px 6px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f6f6f6;
  padding: 0 10px;
}
.container > .box {
  width: 49%;
  background-color: #fff;
  margin-bottom: 10px;
}
.container > .box > .img {
  width: 100%;
  position: relative;
}
.img > img {
  width: 100%;
}
.img > div {
  position: absolute;
  top: 0.08rem;
  left: 0.08rem;
  padding: 0.06rem 0.08rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0.12rem 0 0.12rem 0.12rem;
}
.container > .box > .info {
  margin: 0.1rem 0.04rem;
}
.info .title {
  overflow: hidden;
  font-size: 0.15rem;
  line-height: 0.24rem;
  height: 0.48rem;
}
.info .title + div {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0.08rem 0;
}
.info .price {
  color: #ff5000;
}
.info .price > strong {
  font-size: 0.19rem;
}
.info .price + span {
  font-size: 0.14rem;
  line-height: 0.2rem;
  color: #a5a5a5;
}
.open-app,
.open-app > img {
  width: 100%;
}
</style>
