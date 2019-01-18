<template>
  <div class="panel-title" v-if="hasTitle" @click="backTo">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasTitle: true,
      title: "XXX"
    }
  },

  methods: {
    backTo() {

    }
  }
}
</script>

<style lang="less">
  .panel-title {
    line-height: 60px;
    text-align: left;

    span {
      margin-left: 15px;
    }
  }
</style>
