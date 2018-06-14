<template>
  <section class="travel-nav">
    <div class="header"><div>旅行任意门</div></div>
    <ul>
      <li v-for="item of list" :key="item.id">
        <div :style="{background: 'url(http://p9uwb0f4z.bkt.clouddn.com/travel_nav_'+item.id+'.jpg) 50% no-repeat',backgroundSize: 'cover'}"></div><p>{{item.title}}</p><span>{{item.desc}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TravelNav',
  props: {
    list: Array
  }
}
</script>

<style scoped>
.travel-nav{
  margin: 20px 10px;
/*  padding: .2rem 0;*/
  border-top: 1px solid  #f1f1f1;
  border-bottom:1px solid  #f1f1f1;
}
.header>div{
  display: inline-block;
  font-size: .2rem;
  color: #6d6d6d;
  margin: 20px 0;
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
.travel-nav>ul{
  display: block;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  justify-content:space-between;
}
.travel-nav>ul li{
  box-sizing: border-box;
  display: block;
  width: 32%;
}
.travel-nav>ul li>div{
  width: 100%;
  padding-bottom: 70%;
}
.travel-nav>ul li>p{
  font-size: .14rem;
  line-height: .35rem;
}
.travel-nav>ul li>span{
  display: block;
  font-size: .14rem;
  color: #a5a5a5;
  margin-bottom: .18rem;
}
</style>
