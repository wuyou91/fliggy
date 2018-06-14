<template>
  <section class="header">
    <router-link class="back" to="/"><img src="../../../assets/images/arrow_back.png" alt=""></router-link>
    <div class="search"><img src="../../../assets/images/search.png" alt="">
      <input type="text"
        v-model="value"
        :placeholder="placeholder"
        @focus="inputFocus"
        @blur="inputBlur"
      >
      <span v-show="showDel">X</span>
    </div>
    <button v-show="showBtn">取消</button>
  </section>
</template>

<script>
export default {
  name: 'DestinationHeader',
  data () {
    return {
      value: '',
      placeholder: '发现你感兴趣的目的地',
      showBtn: false,
      showDel: false
    }
  },
  methods: {
    inputFocus () {
      this.showBtn = true
      this.placeholder = '目的地/景点'
    },
    inputBlur () {
      if (!this.value) {
        this.showBtn = false
        this.placeholder = '发现你感兴趣的目的地'
      }
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  height: 32px;
  padding: 4px 10px;
  background-color: #ffc900;
  overflow: hidden;
}
.header .back{
  width: 30px;
  padding: 1px;
}
.header .back>img{
  width: 100%;
  opacity: .8;
}
.header .search{
  flex: 1;
  display: flex;
  padding: 6px 10px;
  background-color: #fff7d6;
  border-radius: 2px;
}
.header .search>img{
  height: 14px;
  margin: 3px 10px 3px 0;
}
.header .search>input{
  flex: 1;
  font-size: 13px;
  margin: 0;
  padding: 0;
  height: 20px;
  background-color: #fff7d6;
}
.header .search>span{
  font-size: 12PX;
  float: right;
  text-align: center;
  width: 14PX;
  height: 14px;
  line-height: 14PX;
  margin: 3px 0;
  color: #fff;
  background-color: rgba(0,0,0,.5);
  border-radius: 50%;
}
.header>button{
  margin-left: 10px;
  color: #3d3d3d;
  background-color: #ffc900;
}
</style>
