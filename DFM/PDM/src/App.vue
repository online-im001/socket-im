/**
 * @Description: 
 * @Author: 2oops
 * @Date: 2018-11-22 20:09:52
 */
 
<template>
  <div id="app">
    <LayoutContainer></LayoutContainer>
    <router-view/>
  </div>
</template>

<script>
import LayoutContainer from './common/layout-container'

export default {
  name: 'App',
  data() {
    return {

    }
  },

  components: {
    LayoutContainer
  }
}
</script>

<style lang="less">

</style>

