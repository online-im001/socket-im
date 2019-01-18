<template>
  <div class="user">
    <el-input 
      class="input"
      v-model="input"
      clearable
      size="small"
      prefix-icon="el-icon-search">
    </el-input>
    <el-button 
      class="add-group"
      size="small"
      @click="addGroup"
      icon="el-icon-plus">
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    }
  },

  components: {

  },

  methods: {
    addGroup() {

    }
  }
}
</script>

<style lang="less">
  .user {

    .input {
      display: inline-block;
      width: 75%;
      margin-top: 10px;
      margin-right: 10px;
    }

    .add-group {
      padding: 8px 8px;
    }
  }
</style>
