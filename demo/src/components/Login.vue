<template>
  <div class="login_container">
    <div class="logo_img">
      <img src="../assets/logo.png" alt="" style="width: 194px; height: 60px" />
    </div>

    <div class="login_box">
      <div class="top">欢迎登录</div>
      <!-- 登录区域 -->
      <el-form class="login_form" ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="财政评审平台用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password" placeholder="财政评审平台用户密码"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from '../utlis/request'
import qs from 'qs'

export default {
  data() {
    return {
      //登录表单数据绑定
      loginForm: {
        username: '',
        password: '',
        msg: '',
      },
      loginFormRules: {
        //验证用户名
        username: [
          { required: true, message: '财政评审平台用户名', trigger: 'blur' },
          { min: 3, max: 11, message: '长度在3到11个字符', trigger: 'blur' },
        ],
        //验证密码
        password: [
          { required: true, message: '财政评审平台用户密码', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在3到15个字符', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    //点击重置，重置表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },

    //登录
    async login() {
      try {
        let params = {
          username: this.loginForm.username,
          pwd: this.loginForm.password,
        }
        const res = await request.post('/web/login', qs.stringify(params))
        this.msg = res.data.msg
        if (res.data.code == 'v') {
          this.$router.push('/main')
          this.$message({
            message: this.msg,
            type: 'success',
          })
        } else {
          this.$message.error('用户名或密码错误')
        }
      } catch (error) {
        this.$message.error('系统错误，请稍后重试')
      }
    },
  },
}
</script>

<style lang="less" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('../assets/bg.2679f0d2.jpg') no-repeat #409eff;
  display: flex;
  justify-content: center;
}

.logo_img {
  position: absolute;
  top: 230px;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.top {
  border-radius: 3px;
  height: 50px;
  background: #999;
  text-align: center;
  line-height: 50px;
}
.login_form {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
