<template>
  <section class="outbound">
    <div class="header">
      <p>出境必备，一站汇集全球玩乐</p>
    </div>
    <ul class="hot-serve">
      <li>签证</li>
      <li>上网</li>
      <li>接送机</li>
      <li>租车</li>
      <li>门票</li>
      <li>玩乐</li>
    </ul>
    <div class="img-contain">
      <div class="box-l">
        <div>
          <h2>巴厘岛奢华酒店下午茶之旅</h2>
          <p>下午茶·巴厘岛</p>
        </div>
      </div>
      <div class="box-r"><div>清迈暹罗龙人妖秀·清迈</div></div>
    </div>
    <div class="outbound-ad"><img :src="ad" alt="" /></div>
  </section>
</template>

<script>
export default {
  name: "Outbound",
  props: {
    ad: String,
  },
};
</script>

<style scoped>
.outbound {
  width: 100%;
  overflow: hidden;
}
.outbound .header {
  width: 100%;
  height: 0.5rem;
  background: url(../../../assets/images/cjcs.png) no-repeat;
  background-size: contain;
}
.outbound .header p {
  display: block;
  padding: 0 0.4rem;
  text-align: right;
  line-height: 0.5rem;
}
.hot-serve {
  display: flex;
  justify-content: space-around;
  margin: 0 10px;
}
.hot-serve li {
  padding: 0.08rem 0.1rem;
  border: 1px solid #ffc900;
  border-radius: 0.2rem;
}
.img-contain {
  display: flex;
  padding: 10px;
  overflow: hidden;
}
.img-contain .box-l {
  position: relative;
  flex: 1;
  height: 1.25rem;
  margin-right: 8px;
  background: url(http://demo.cdn.yancx.cn/fliggy/cjcs01.jpg) 50% no-repeat;
  background-size: cover;
}
.img-contain .box-l > div {
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0.15rem;
  color: #fff;
  background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}
.img-contain .box-l h2 {
  width: 100%;
  display: block;
  margin: 0.1rem 0;
  font-size: 0.2rem;
  line-height: 0.24rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.img-contain .box-r {
  position: relative;
  overflow: hidden;
  width: 33%;
  height: 1.25rem;
  background: url(http://demo.cdn.yancx.cn/fliggy/cjcs02.jpg) 50% no-repeat;
  background-size: cover;
}
.img-contain .box-r > div {
  position: absolute;
  width: 80%;
  box-sizing: border-box;
  bottom: 0.07rem;
  margin: 0 0.1rem;
  padding: 8px 10px;
  text-align: center;
  border-radius: 0.16rem 0 0.16rem 0.16rem;
  background-color: #ffe700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.outbound-ad > img {
  width: 100%;
}
</style>
