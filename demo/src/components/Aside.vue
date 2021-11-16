<template>
  <div>
    <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#ffffff" active-text-color="#ffd04b" :collapse="isCollapse" router>
      <!-- 项目业主 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span slot="title">项目业主</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/projectapplication" path="">项目申报</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 财评中心 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>财评中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">项目审核</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="2-2">评定项目</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 中介机构 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>中介机构</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">项目报名</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="3-2">我的报名项目</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="3-3">我的中标项目</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 系统管理 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">部门管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="4-2">人员管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="4-3">人员管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="4-4">审核流程管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 运维管理 -->
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>运维管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">财评中心管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="5-2">服务费规则管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="5-3">服务费设置</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="5-4">服务费核实</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
  },
}
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
  min-height: 400px;
}
.el-menu--collapse {
  height: 100vh;
}
</style>
