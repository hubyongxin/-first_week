<template>
  <header>
    <div class="left_content">
      <el-button plain icon="el-icon-menu" size="mini" @click="changeMenu"></el-button>
      <h3>首页</h3>
    </div>
    <div class="right_content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="img" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      img: require('../assets/logo.png'),
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    changeMenu() {
      this.$store.commit('collapseMenu')
    },
  },
}
</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.left_content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.right_content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
