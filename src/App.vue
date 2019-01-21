<template>
  <div id="app">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <el-container>
        <NavBar class="nav-bar"></NavBar>
        <UserBar class="user-bar"></UserBar>
        <div class="chat-window">
          <Title class="title"></Title>
          <div class="chat">
            <MsgBox class="msg-box">

            </MsgBox>
          </div>
          <!-- <InputBox class="input-box">
          </InputBox> -->
        </div>
      </el-container>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import UserBar from './components/common/user-bar'
import MsgBox from './components/common/msg-box'
import NavBar from './components/common/nav-bar'
import Title from './components/common/title'

export default {
  data() {
    return {

    }
  },

  components: {
    UserBar,
    MsgBox,
    NavBar,
    Title
  }
}
</script>


<style lang="less">
#app {
  width: 60%;
  height: 750px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid grey;

  .el-container {

    .nav-bar {
      width: 8%;
      background: #2b2929;
    }
    
    .user-bar {
      width: 32%;
      background: #f1efef;
      border-right: 1px solid gainsboro;
    }

    .chat-window {
      width: 60%;
      height: 750px;
      text-align: center;

      .title {
        height: 60px;
        background: #f1efef;
        border-bottom: 1px solid gainsboro;
      }

      // .chat {
      //   height: 530px;
      // }

      // .input-box {
      //   height: 160px;
      //   border-top: 1px solid gainsboro;
      // }
    }
  }
}
</style>
