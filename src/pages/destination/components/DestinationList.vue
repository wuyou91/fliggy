<template>
  <section class="del-list">
    <div class="tab-contain" :class="{fixed: isfixed}">
      <ul class="tab">
          <li class="tab-item"
          v-for="item of tabs"
          :key="item.id"
          :class="{ active: currentTab===item.id}"
          @click="currentTab = item.id"
          >{{item.value}}</li>
          <span class="line" :class="{transition:currentTab==='internal-list'}"></span>
      </ul>
    </div>
    <component :is="currentTabComponent" :letter="letter"></component>
  </section>
</template>

<script>
import AbroadList from './AbroadList'
import InternalList from './InternalList'

export default {
  name: 'DestinationList',
  components: {
    AbroadList,
    InternalList
  },
  props: {
    letter: String
  },
  data () {
    return {
      tabs: [
        {'id': 'abroad-list', 'value': '境外目的地'},
        {'id': 'internal-list', 'value': '境内目的地'}
      ],
      currentTab: 'abroad-list',
      isfixed: false
    }
  },
  computed: {
    currentTabComponent () {
      return this.currentTab
    }
  },
  methods: {
    handleScroll () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 40) {
        this.isfixed = true
      } else {
        this.isfixed = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.fixed{
  position: fixed;
  z-index: 1;
  top: 0;
}
  .del-list{
    width: 100%;
    overflow: hidden;
  }
  .tab-contain{
    width: 100%;
  }
  .tab{
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: .5rem;
    color: #3d3d3d;
    background-color: #f2f3f4;
    border-bottom: 1px solid #d5d5d5;
  }
  .tab .tab-item{
    width: .8rem;
    font-size: .15rem;
    line-height: .5rem;
    text-align: center;
    transition: transform 0.2s ease-in-out,;
    width: 0.1s ease-out;
  }
  .active{
    font-weight: bold;
  }
  .tab .line{
    width: .9rem;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: .6rem;
    background-color: #ffc900;
    transition: transform 0.2s ease-in-out;
  }
  .transition{
    transform: translateX(2.09rem);
  }
</style>
