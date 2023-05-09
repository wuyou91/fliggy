<template>
  <div class="special-sale clearf">
    <div class="sale-left">
      <div class="l-title">飞猪特卖</div>
      <p>泰国曼谷芭提雅7天5晚跟团游当地5晚五星酒店</p>
      <div class="img-box">
        <div>1399元&#160;GO&#62;</div>
      </div>
    </div>
    <div class="sale-right">
      <div class="r-top">
        <div class="clearf">
          <span class="r-title">特价机票</span><span>3.8折</span>
        </div>
        <div class="fly-info clearf">
          <span>台北⇌香港</span><i>￥&#160;1078起</i>
        </div>
      </div>
      <div class="r-bottom clearf">
        <div class="hotel-info">
          <div>特价酒店</div>
          <p>万家酒店抄底大促销</p>
          <span>超低价</span><span class="shopper">优选商家</span>
        </div>
        <img src="../../../assets/images/hotel.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialSale",
};
</script>

<style scoped>
.clearf:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: none;
}
.special-sale {
  border-top: 0.07rem solid #f6f6f6;
  border-bottom: 0.07rem solid #f6f6f6;
}
.sale-left {
  box-sizing: border-box;
  float: left;
  width: 50%;
  padding: 10px;
  border-right: 1px solid #f1f1f1;
}
.sale-left .l-title {
  font-size: 0.18rem;
  margin: 0.1rem 0;
  color: #ef520e;
  font-weight: bold;
}
.sale-left p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sale-left .img-box {
  position: relative;
  width: 100%;
  height: 0.8rem;
  margin-top: 0.3rem;
  background: url(http://demo.cdn.yancx.cn/demoList/ssale.jpg) no-repeat;
  background-position: 50%;
  background-size: cover;
}
.sale-left .img-box > div {
  position: absolute;
  top: -0.12rem;
  left: 0;
  padding: 0.06rem 0.1rem;
  border-radius: 0.13rem 0 0.13rem 0.13rem;
  color: #fff;
  font-weight: 400;
  background: linear-gradient(left, #ffa500, #ff5100);
}
.sale-right {
  box-sizing: border-box;
  float: right;
  width: 50%;
}
.sale-right .r-top {
  padding: 10px;
  border-bottom: 1px solid #f1f1f1;
}
.sale-right .r-title {
  float: left;
  font-size: 0.18rem;
  margin: 0.1rem 0;
  color: #70c6f3;
  font-weight: bold;
}
.sale-right .r-title + span {
  float: right;
  font-size: 12px;
  padding: 1px 3px;
  margin: 0.1rem 0;
  color: #ff5000;
  border: 1px solid #ff5000;
  border-radius: 3px;
}
.fly-info > span {
  float: left;
}
.fly-info > i {
  float: right;
  color: #ff5000;
}
.sale-right .r-bottom {
  position: relative;
  padding: 10px;
  overflow: hidden;
}

.hotel-info {
  float: left;
}
.hotel-info > div {
  font-size: 0.18rem;
  margin: 0.1rem 0;
  color: #f43e75;
  font-weight: bold;
}
.hotel-info > p {
  width: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hotel-info > span {
  position: absolute;
  bottom: 10px;
  color: #ff5000;
}
.hotel-info .shopper {
  left: 0.6rem;
  padding: 0.01rem 0.05rem;
  width: 0.36rem;
  font-size: 0.12rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid #ff5000;
  border-radius: 0.02rem;
}
.hotel-info + img {
  float: right;
  display: block;
  margin-top: 10px;
  height: 0.8rem;
}
</style>
