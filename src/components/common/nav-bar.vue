<template>
  <div class="nav-bar">
    <div class="avatar">
      <i class="iconfont im-yonghu"></i>
    </div>
    <div class="nav-btn">
      <el-button size="small" type="text" icon="iconfont im-unie609"></el-button>
      <el-button size="small" type="text" icon="iconfont im-yonghu"></el-button>
      <el-button size="small" type="text" icon="iconfont im-ego-box"></el-button>
      <el-button class="set" size="small" type="text" icon="iconfont im-shezhi"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
  .nav-bar {
    .avatar {
      width: 60px;
      height: 60px;
      margin: 5px 0 0 5px;
      border-radius: 50%;
      margin-bottom: 10px;

      i {
        font-size: 45px;
        color: #aae00b;
      }
    }
    
    .nav-btn {
      width: 72px;
      height: auto;
      .el-button--small {
        width: 60px;
        height: 60px;
        margin: 5px;

        i {
          font-size: 32px;
          color: white;
        }
      }
      .set {
        margin-top: 400px;
      }
    }
  }
</style>
