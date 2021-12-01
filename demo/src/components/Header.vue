<template>
  <header>
    <div class="left_content">
      <el-button type="primary" circle plain icon="el-icon-menu" size="mini" @click="changeMenu"></el-button>
      <el-button circle plain icon="el-icon-arrow-left" size="mini" @click="goBack"></el-button>
      <!-- <el-page-header @back="goBack" content="详情页面"> </el-page-header> -->
    </div>
    <div class="right_content">
      <el-dropdown>
        <span>admin</span>
        <span class="el-dropdown-link">
          <img :src="img" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>进入网站</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="backOut"> 退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      img: require('../assets/bg.2679f0d2.jpg'),
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    changeMenu() {
      this.$store.commit('collapseMenu')
    },
    backOut() {
      this.$router.push('/')
      console.log(111);
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
    margin-right: 0;
  }
}
.right_content {
  .el-dropdown {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
