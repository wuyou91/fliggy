<template>
  <div class="go-top" v-show="show" @click="goTop">
    <img src="http://p9uwb0f4z.bkt.clouddn.com/gotop.png">
  </div>
</template>

<script>
export default {
  name: 'GoTop',
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleScroll () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 200) {
        this.show = true
      } else {
        this.show = false
      }
    },
    goTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.go-top{
  position: fixed;
  bottom: .8rem;
  right: .15rem;
  width: .45rem;
}
.go-top img{
  width: 100%;
}
</style>
