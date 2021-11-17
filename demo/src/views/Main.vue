<template>
  <div>
    <!-- 布局 -->
    <el-container class="container">
      <!-- 侧边栏 -->
      <el-aside width="auto"><Aside></Aside> </el-aside>
      <el-container>
        <!-- Header区域 -->
        <el-header > <Header></Header></el-header>
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
import Aside from '../components/Aside.vue'
import Header from '../components/Header.vue'
export default {
  components: {
    Aside,Header
  },
}
</script>

<style lang="less" scoped>

.container {
  height: 100%;
}

.el-header {

  background: whitesmoke;

}
.el-main {
  padding-top: 0;
}
</style>
