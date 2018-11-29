/**
 * @Description: 
 * @Author: 2oops
 * @Date: 2018-11-22 20:09:52
 */
 
<template>
  <div id="app">
    <!-- <LayoutContainer></LayoutContainer> -->
    <MainWin></MainWin>
    <router-view/>
  </div>
</template>

<script>
// import LayoutContainer from './common/layout-container'
import MainWin from './common/main-win'

export default {
  name: 'App',
  data() {
    return {

    }
  },

  components: {
    // LayoutContainer
    MainWin
  }
}
</script>

<style lang="less">

</style>

