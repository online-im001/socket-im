<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <el-container>
        <div class="nav-bar">nav</div>
        <div class="user-bar">user-bar</div>
        <div class="chat-window">
          <div class="title">title</div>
          <div class="chat">chat-window</div>
          <div class="input">input-box</div>
        </div>
      </el-container>
    <!-- <router-view/> -->
  </div>
</template>

<style lang="less">
#app {
  width: 60%;
  height: 750px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid grey;

  .el-container {

    .nav-bar {
      width: 10%;
      background: grey;
    }
    
    .user-bar {
      width: 25%;
      background: gainsboro;
    }

    .chat-window {
      width: 65%;
      height: 750px;
      text-align: center;

      .title {
        height: 60px;
        background-color: #B3C0D1;
      }

      .chat {
        height: 530px;
        background-color: white;
      }

      .input {
        height: 160px;
        background-color: #B3C0D1;
      }
    }
  }
}
</style>
