<template>
  <div>
    <div id="content">

    </div>
      <el-input
      :rows="7"
      v-model="message"
      class="sentMsg"
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

    }
  },

  created() {
    this.initSocket();
  },

  destroyed() {
    this.socketclose();
  },

  methods: {
    initSocket() {
      let content = document.getElementById("content");
      let sendMsg = document.getElementsByClassName("sentMsg");
      let send = document.getElementsByClassName("send-btn");

      
    },

    socketclose() {

    },

    sendMsg() {

    }
  }
}
</script>

<style>

</style>
