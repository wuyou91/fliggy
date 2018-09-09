<template>
  <div class="abroad-list">
      <div class="hot">
        <div class="title">热门推荐</div>
        <ul class="hot-recommend">
          <li v-for="item in hotRecommend" :key="item.id">
            <a :href="item.jumpInfo.jumpH5Url">
              <img :src="item.images[0]">
              <div><span>{{item.title}}</span><p>{{item.subTitle}}</p></div>
            </a>
          </li>
        </ul>
      </div>
      <div class="all-dest">
        <div class="title">选择目的地</div>
          <ul class="all-dest-list">
            <li class="dest"
            v-for="items of allDest"
            :key="items.title"
            :ref="items.title">
              <div class="title">{{items.title}}</div>
              <ul class="dest-items">
                <li
                v-for="item of items.list"
                :key="item.id">
                  <a :href="item.jumpInfo.jumpH5Url">{{item.title}}</a>
                </li>
              </ul>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AbroadList',
  props: {
    letter: String
  },
  computed: {
    ...mapState(['hotRecommend', 'allDest'])
  },
  watch: {
    letter () {
      this.$refs[this.letter.trim()][0].scrollIntoView()
    }
  }
}
</script>

<style scoped>
  .abroad-list{
    background-color: #f2f3f4;
  }
.title{
    padding: .15rem .1rem ;
    color: #a5a5a5;
  }
.hot .hot-recommend{
    display: block;
    padding: 0 .28rem 0 .1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .hot .hot-recommend>li{
    position: relative;
    width: .88rem;
    height: .88rem;
    overflow: hidden;
    margin-bottom: .08rem;
    text-align: center;
    background-color: #000;
  }
  .hot .hot-recommend>li>a>img{
    display: inline-block;
    transform: translate(-50%,-50%);
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    opacity: .7;
  }
  .hot .hot-recommend>li>a>div{
    box-sizing: border-box;
    text-align: center;
    padding: .2rem 0;
    width: 100%;
    position: absolute;
    color: #fff;
  }
  .hot-recommend>li>a>div>span{
    font-size: .15rem;
    font-weight: bold;
    line-height: .24rem;
  }
  .hot-recommend>li>a>div>p{
    width: .8rem;
    font-size: .12rem;
    line-height: .24rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .all-dest{
    width: 100%;
    overflow: hidden;
  }
  .all-dest>.bs-wrapper{
    height:7.36rem;
  }
  .all-dest .all-dest-list{
    padding: 0 .24rem 0 .1rem;
  }
  .all-dest-list .dest-items{
    display: flex;
    flex-wrap: wrap;
  }
  .all-dest-list .dest-items>li>a{
    display: block;
    width: 1.19rem;
    height: .33rem;
    line-height: .33rem;
    font-size: .15rem;
    color: #333;
    text-align: center;
    background-color: #fff;
    margin-bottom: .07rem;
    margin-right: .07rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
