<template>
  <section class="head-line">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of list" :key="item.id">
          <div class="slider">
            <ul>
              <li><span class="tag">{{item.tag1}}</span>{{item.desc1}}</li>
              <li><span class="tag">{{item.tag2}}</span>{{item.desc2}}</li>
            </ul>
            <img :src="item.imgUrl">
          </div>
        </swiper-slide>
      </swiper>
  </section>
</template>

<script>
export default {
  name: 'HeadLine',
  props: {
    list: Array
  },
  data () {
    return {
      loop: true,
      swiperOption: {
        autoplay: {
          delay: 5000
        },
        speed: 1000,
        allowTouchMove: false
      }
    }
  }
}
</script>

<style scoped>
  .head-line{
    width: 100%;
    margin: .1rem 0;
    overflow: hidden;
  }
  .head-line .slider{
    padding: 0 10px;
    font-size: .12rem;
    display: flex;
    line-height: .6rem;
    overflow: hidden;
  }
  .head-line .slider ul{
    flex: 1;
    overflow: hidden;
  }
  .slider li{
    line-height: .2rem;
    font-size: .14rem;
    margin: .07rem 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .slider li .tag{
    line-height: .12rem;
    padding: 0 .02rem;
    color: #ff5038;
    border: 1px solid #ff5038;
    border-radius: .03rem;
    margin-right: .05rem;
  }
  .head-line .slider img{
    height: .6rem;
  }
</style>
