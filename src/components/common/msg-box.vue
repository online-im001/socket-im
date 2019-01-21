<template>
  <div class="input-box">
    <div class="out-frame">
      <div id="content">

      </div>
    </div>
    <el-input
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
  
  sockets: {
    connect: function(){
      this.id=this.$socket.id
    },
    customEmit: function(val){
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },

  methods: {
    // Enter key to send a message
    sendMsg() {
      this.$socket.emit('emit_method', this.message);
      let content = document.getElementById("content");
      let msg = document.createElement("div");
      msg.innerHTML =  this.message;
      content.appendChild(msg);
      this.message = "";
    }
  }
}
</script>

<style lang="less">
  .input-box {
    .out-frame {
      height: 530px;
      width: 547px;
      overflow-y: scroll;
      background: #f1efef;

      #content {
        width: 510px;
        text-align: left;
        margin-left: 20px;

        div {
          width: 300px;
          height: auto;
          background: white;
          border-radius: 3%;
          padding: 2px 5px 3px 5px;
          margin-top: 20px;
        }
      }
    }
    .send-btn {
      position: relative;
      z-index: 200;
      float: right;
      margin-right: 28px;
      margin-top: -42px;
    }
  }
</style>
