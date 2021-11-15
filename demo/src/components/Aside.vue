<template>
  <div>
    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <h5>后台管理系统</h5>
      <!-- 项目业主 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">项目业主</span>
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
    return {
      isCollapse: false,
      //菜单数据
      menu: [
        //1
        {
          lable: '项目业主',
          icno: '',

          children: [
            {
              path: '',
              name: '',
              lable: '项目申报',
              icno: '',
              url: '',
            },
          ],
        },
        //2
        {
          lable: '财评中心',
          icno: '',
          children: [
            {
              path: '',
              name: '',
              lable: '项目审核',
              icno: '',
              url: '',
            },
            {
              path: '',
              name: '',
              lable: '评定项目',
              icno: '',
              url: '',
            },
          ],
        },
        //3
        {
          lable: '中介机构',
          icno: '',
          children: [
            {
              path: '',
              name: '',
              lable: '项目报名',
              icno: '',
              url: '',
            },
            {
              path: '',
              name: '',
              lable: '我的报名项目',
              icno: '',
              url: '',
            },
            {
              path: '',
              name: '',
              lable: '我的中标项目',
              icno: '',
              url: '',
            },
          ],
        },
        //4
        {
          lable: '系统管理',
          icno: '',
          children: [
            {
              path: '',
              name: '',
              lable: '部门管理',
              icno: '',
              url: '',
            },
            {
              path: '',
              name: '',
              lable: '人员管理',
              icno: '',
              url: '',
            },
            {
              path: '',
              name: '',
              lable: '角色管理',
              icno: '',
              url: '',
            },
            {
              path: '',
              name: '',
              lable: '审核流程管理',
              icno: '',
              url: '',
            },
          ],
        },
        //5
        {
          lable: '运维管理',
          icno: '',
          children: [
            {
              path: '',
              name: '',
              lable: '财评中心管理',
              icno: '',
              url: '',
            },
            {
              path: '',
              name: '',
              lable: '服务费规则管理',
              icno: '',
              url: '',
            },
            {
              path: '',
              name: '',
              lable: '服务费设置',
              icno: '',
              url: '',
            },
            {
              path: '',
              name: '',
              lable: '服务费核实',
              icno: '',
              url: '',
            },
          ],
        },
      ],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    computed: {
      noChildren() {
        return this.menu.filter((item) => {
          !item.children
        })
      },
      haveChildren() {
        return this.menu.filter((item) => item.children)
      },
    },
  },
}
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
