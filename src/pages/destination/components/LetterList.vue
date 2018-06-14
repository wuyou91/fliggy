<template>
  <div  class="char-list">
      <div @click="goTop">返回顶部</div>
      <ul>
        <li
        v-for="items of abroadAllDest"
        :key="items.title"
        @click="handleClick">
      {{items.title}}</li>
      </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LetterList',
  computed: {
    ...mapState({abroadAllDest: 'allDest'})
  },
  methods: {
    goTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    handleClick (e) {
      this.$emit('change', e.target.innerHTML)
    }
  }
}
</script>

<style scoped>
.char-list{
  position: fixed;
  z-index: 1;
  right: 0;
  top: 20%;
  width: .28rem;
  text-align: center;
  font-size: .13rem;
  color: #a5a5a5;
}
.char-list>div{
  line-height: .16rem;
  margin: .05rem 0;
}
.char-list>ul>li{
  padding: .05rem 0;
}
</style>
