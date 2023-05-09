<template>
  <section class="dyz">
    <div class="boer-line"><div></div></div>
    <div class="header">
      <p>更多</p>
    </div>
    <div class="container">
      <div class="b-box">
        <div class="big-l">
          <div class="tag">推荐</div>
          <div class="text">飞跃肯尼亚，狂野亲子游</div>
          <div class="info">
            <span></span>
            <p>小编说好</p>
          </div>
        </div>
        <div class="big-r"></div>
      </div>
      <ul class="s-box">
        <li v-for="item of list" :key="item.id">
          <div>
            <img :src="item.imgUrl" alt="" />
            <div class="city">{{ item.city }}</div>
          </div>
          <div class="desc">{{ item.desc }}</div>
        </li>
      </ul>
    </div>
    <div class="ad_02">
      <img src="../../../assets/images/ad_02.jpg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "FirstStop",
  props: {
    list: Array,
  },
};
</script>

<style scoped>
.dyz {
  width: 100%;
  overflow: hidden;
}
.boer-line {
  box-sizing: border-box;
  width: 100%;
  padding: 20px 10px 0 10px;
}
.boer-line > div {
  width: 100%;
  height: 1px;
  background-color: #f1f1f1;
}
.dyz .header {
  width: 100%;
  height: 0.6rem;
  background: url(../../../assets/images/bg_dyz.png) no-repeat;
  background-size: contain;
}
.dyz .header > p {
  display: block;
  padding: 0 0.4rem;
  text-align: right;
  line-height: 0.6rem;
}
.container {
  margin: 0 10px 20px 10px;
  border-bottom: 1px solid #f1f1f1;
}
.container .b-box {
  display: flex;
  padding-bottom: 0.08rem;
}
.container .b-box .big-l {
  width: 1.3rem;
  padding: 0 5px;
  background-color: #f2f3f4;
}
.big-l .tag {
  width: 0.3rem;
  padding: 0.05rem;
  background: #ffc900;
}
.big-l .text {
  line-height: 0.24rem;
  font-size: 0.18rem;
  width: 1.1rem;
  margin: 0.18rem 0;
}
.big-l .info > span {
  display: block;
  width: 0.35rem;
  height: 1px;
  background-color: #ffc900;
}
.big-l .info > p {
  margin: 0.1rem 0;
  font-size: 0.12rem;
  color: #a5a5a5;
}
.container .b-box .big-r {
  flex: 1;
  height: 1.4rem;
  background: url(http://demo.cdn.yancx.cn/demoList/cjl.jpg) 50% no-repeat;
  background-size: cover;
}
.container .s-box {
  display: flex;
  justify-content: space-between;
}
.s-box li {
  box-sizing: border-box;
  width: 32%;
}
.s-box li img {
  width: 100%;
}
.s-box li > div {
  position: relative;
}
.s-box li .city {
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 0.12rem;
  padding: 0.08rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
.s-box li .desc {
  padding: 0.1rem 0;
  line-height: 0.2rem;
}
.ad_02 > img {
  width: 100%;
}
</style>
