<template>
  <div class="nav">
      <ul>
          <li v-for="item of list" :key="item.id">
            <div class="mark" v-if="item.mark">{{item.mark}}</div>
            <img :src="item.imgUrl" alt="">
            <p>{{item.desc}}</p>
          </li>
      </ul>
   </div>
</template>

<script>
export default {
  name: 'HomeNav',
  props: {
    list: Array
  }
}
</script>

<style scoped>
  .nav ul{
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    width: 100%;
  }
  .nav li{
    position: relative;
    display: block;
    width: .8rem;
    height: .8rem;
  }
  .nav li img{
    width: 100%;
  }
  .nav li p{
    text-align: center;
    color: #666;
  }
  .nav li .mark{
    position: absolute;
    top: .08rem;
    left: .4rem;
    line-height: .14rem;
    font-size: .12rem;
    padding: 3px 3px;
    color: #fff;
    background-color: #ff5000;
    border-radius: 8px 8px 8px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
