export default {
  puInStore (state, data) {
    state.hotRecommend = data[3].tripDataTabInfoList[0].list
    state.allDest = data[3].tripDataTabInfoList[1].tripDataTabInfoList
    state.hotInternal = data[4].tripDataTabInfoList[0].list
    state.allInternal = data[4].tripDataTabInfoList[1].tripDataTabInfoList
  }
}
