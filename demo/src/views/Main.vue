<template>
  <div>
    <!-- 布局 -->
    <el-container class="container">
      <!-- 侧边栏 -->
      <el-aside width="auto"><Aside></Aside> </el-aside>
      <el-container>
        <!-- Header区域 -->
        <el-header>Header</el-header>
        <!-- 内容区域 -->
        <el-main>
          <!-- 路由占位符 -->
          maaa
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from '../components/Aside.vue'
export default {
  components: {
    Aside,
  },
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  height: 100%;
}

.el-header {
  background: #333;
}
.el-main {
  padding-top: 0;
}
</style>
