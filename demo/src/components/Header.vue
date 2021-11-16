<template>
  <div class="box_parent">
    <div class="left_btn">
      <i class="el-icon-s-fold"></i>
    </div>
    <el-page-header @back="goBack" content="详情页面"> </el-page-header>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.box_parent {
  display: flex;
}
.el-page-header {
  line-height: 60px;
}
</style>