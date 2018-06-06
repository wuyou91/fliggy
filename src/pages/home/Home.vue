<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/Swiper'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  },
  data () {
    return {
      swiperList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/json/home.json').then(this.getHomeInfoSwiper)
    },
    getHomeInfoSwiper (res) {
      const info = res.data
      if (info.ret && info.data) {
        const data = info.data
        this.swiperList = data.swiperList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
