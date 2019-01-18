<template>
  <div class="input-box">
    <el-input
      focus
      :rows="7"
      v-model="message"
      class="input-area"
      type="textarea">
    </el-input>
    <el-button
      plain
      size="small"
      class="send-btn"
      @click="sendMsg">
      Send(S)
    </el-button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      message: ""
    }
  },
  
  methods: {
    sendMsg() {

    }
  }
}
</script>

<style lang="less">
  .input-box {

    .send-btn {
      position: relative;
      z-index: 200;
      float: right;
      margin-right: 28px;
      margin-top: -42px;
    }
  }
</style>
