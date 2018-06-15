<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-nav :list="navList"></home-nav>
    <HeadLine :list="headLineList"></HeadLine>
    <special-sale></special-sale>
    <outbound :ad="outBoundAd"></outbound>
    <first-stop :list="dyz"></first-stop>
    <travel-nav :list="travelNavList"></travel-nav>
    <selected-destination :list="jxmddList"></selected-destination>
    <may-like :list="mayLikeList"></may-like>
    <go-top></go-top>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/Swiper'
import HomeNav from './components/HomeNav'
import HeadLine from './components/HeadLine'
import SpecialSale from './components/SpecialSale'
import Outbound from './components/Outbound'
import FirstStop from './components/FirstStop'
import TravelNav from './components/TravelNav'
import SelectedDestination from './components/SelectedDestination'
import MayLike from './components/MayLike'
import GoTop from '../common/GoTop'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HeadLine,
    SpecialSale,
    Outbound,
    FirstStop,
    TravelNav,
    SelectedDestination,
    MayLike,
    GoTop
  },
  data () {
    return {
      swiperList: [],
      navList: [],
      headLineList: [],
      outBoundAd: '',
      dyz: [],
      travelNavList: [],
      jxmddList: [],
      mayLikeList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('https://www.easy-mock.com/mock/5b2372e2b541690d6ed33b65/api/home').then(this.getHomeInfoData)
    },
    getHomeInfoData (res) {
      const info = res.data
      if (info.ret && info.data) {
        const data = info.data
        this.swiperList = data.swiperList
        this.navList = data.navList
        this.headLineList = data.headLineList
        this.outBoundAd = data.ad
        this.dyz = data.dyzList
        const arr = data.travelNavList
        let i = arr.length
        while (i) {
          let j = Math.floor(Math.random() * i--);
          [arr[j], arr[i]] = [arr[i], arr[j]]
        }
        this.travelNavList = arr.slice(0, 6)
        this.jxmddList = data.jxmddList
        this.mayLikeList = data.mayLikeList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
