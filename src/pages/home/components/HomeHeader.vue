<template>
  <div class="header">
    <div class="header-user" @click="toggle"><img :src="imgSrc" alt=""></div>
    <div class="header-search"><span></span><div class="search-content">{{searchContent}}</div></div>
    <router-link class="header-location" to="/destination"><img src="../../../assets/images/location.png" alt=""></router-link>
    <transition name="fade">
      <ul class="list" v-show="listShow">
        <li><img src="../../../assets/images/list.png" alt=""><p>我的订单</p></li>
        <li><img src="../../../assets/images/package.png" alt=""><p>我的行程</p></li>
        <li><img src="../../../assets/images/star.png" alt=""><p>我的收藏</p></li>
        <li><img src="../../../assets/images/redpacket.png" alt=""><p>我的红包</p></li>
        <li><img src="../../../assets/images/shoppingcart.png" alt=""><p>购物车</p></li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      searchContent: '上海迪士尼门票',
      imgSrc: 'http://p9uwb0f4z.bkt.clouddn.com/user.png',
      listShow: false
    }
  },
  methods: {
    toggle () {
      this.listShow = !this.listShow
      this.imgSrc = this.imgSrc === 'http://p9uwb0f4z.bkt.clouddn.com/user.png' ? 'http://p9uwb0f4z.bkt.clouddn.com/close.png' : 'http://p9uwb0f4z.bkt.clouddn.com/user.png'
    }
  }
}
</script>

<style scoped>
  .header{
    position: relative;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    line-height: 30px;
    padding: 5px 20px;
    background-color: #ffc900;
  }
  .header-search{
    display: flex;
    flex: 1;
    margin: 0 20px;
    background-color: #fff;
    border-radius: 12px 0 12px 12px;
  }
  .header-search span{
    width: 30px;
    height: 30px;
    background: url(../../../assets/images/search.png) 9px no-repeat;
    background-size: 15px auto;
  }
  .header-search .search-content{
    color: #3d3d3d80;
  }
  .header-user img,.header-location img{
    height: .24rem;
  }
  .header-location{
    width: 24px;
  }
  .header .list{
    z-index: 9;
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    top: 40px;
    left: 0;
    padding: 0 10px;
    background: #fff;
    overflow: hidden;
  }
  .header .list li{
    display: flex;
    width: 100%;
    line-height: .5rem;
    padding: 0 5px;
    border-bottom: 1px solid #e0e0e0;
    font-size: .18rem;
    color: #666;
  }
  .header .list li img{
    margin: .12rem .2rem .12rem 0;
    width: .26rem;
    height: .26rem;
  }
  .fade-enter-active, .fade-leave-active {
  transition: all .25s ease;
}
.fade-enter, .fade-leave-to{
  height: 0;
}
.fade-enter-to,.fade-leave{
  height: 2.55rem;
}
</style>
