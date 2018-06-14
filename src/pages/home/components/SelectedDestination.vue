<template>
  <section class="sel-dest">
    <div class="header"><div>精选目的地<span>更多</span></div></div>
    <div class="container">
      <div class="l">
        <div class="par">
          <img :src="list[0].imgUrl" alt="">
          <div class="info">
            <div class="title">{{list[0].title}}</div>
            <p>{{list[0].desc}}</p>
          </div>
        </div>
      </div>
      <div class="m">
        <div class="top par">
          <img :src="list[1].imgUrl" alt="">
          <div class="info">
            <div class="title">{{list[1].title}}</div>
            <p>{{list[1].desc}}</p>
          </div>
        </div>
        <div class="below par">
          <img :src="list[2].imgUrl" alt="">
          <div class="info">
            <div class="title">{{list[2].title}}</div>
            <p>{{list[2].desc}}</p>
          </div>
        </div>
      </div>
      <div class="r">
        <div class="top par">
          <img :src="list[3].imgUrl" alt="">
          <div class="info">
            <div class="title">{{list[3].title}}</div>
            <p>{{list[3].desc}}</p>
          </div>
        </div>
        <div class="below par">
          <img :src="list[4].imgUrl" alt="">
          <div class="info">
            <div class="title">{{list[4].title}}</div>
            <p>{{list[4].desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SelectedDestination',
  props: {
    list: Array
  }
}
</script>

<style scoped>
.sel-dest{
  margin: 0 10px;
  padding-bottom: .15rem;
  border-bottom:1px solid  #f1f1f1;
}
.header>div{
  position: relative;
  width: 100%;
  display: inline-block;
  font-size: .2rem;
  color: #6d6d6d;
  margin-bottom: 20px;
}
.header>div:before{
  content: "";
  display: block;
  float: left;
  width:6px;
  height: .2rem;
  margin-right: 10px;
  background-color: #fedd01;
  border-radius: 6px 0 6px 6px;
}
.header>div:after{
  content: url(../../../assets/images/arrow.png);
  float: right;
  line-height: .2rem;
}
.header>div>span{
  position: absolute;
  right: 20px;
  float: right;
  line-height: .2rem;
  font-size: .14rem;
}
.sel-dest .container{
  justify-content:space-between;
  display: flex;
}
.sel-dest .container>div{
  width: 33%;
}
.sel-dest .container img{
  width: 100%;
  opacity: .8;
}
.container>.l{
  height: 100%;
}
.par{
  position: relative;
  margin-bottom: 2px;
  background-color: #000;
}
.below{
  overflow: hidden;
}
.below>img{
  margin-bottom: -2px;
}
.par>.info{
position: absolute;
top: .08rem;
left: .08rem;
color: #fff;
}
.info>div{
  font-size: .18rem;
  line-height: .24rem;
}
.info>p{
  font-size: .12rem;
  line-height: .2rem;
}
</style>
