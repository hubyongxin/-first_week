<template>
  <div>
    <!-- 布局 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px" class="aside">
        <el-col :span="12">
  
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <!-- 项目业主 -->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span width="200px" >项目业主</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">项目申报</el-menu-item>
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
                <i class="el-icon-location"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">部门管理</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="4-2">人员管理</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="4-3">角色管理</el-menu-item>
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
        </el-col>
      </el-aside>
      <el-container>
        <!-- Header区域 -->
        <el-header>Header</el-header>
        <!-- 内容区域 -->
        <el-main>
          <!-- 路由占位符 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.aside {
  height: 100vh;
}
</style>