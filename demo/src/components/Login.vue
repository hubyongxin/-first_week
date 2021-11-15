<template>
  <div class="login_container">
    <span>财评系统</span>
    <div class="login_box">
      <div class="top">请登录</div>
      <!-- 登录区域 -->
      <el-form class="login_form" ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password" placeholder="请输入密码"></el-input>
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
import axios from 'axios'

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
          { required: true, message: '请输入登录账号', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在3到10个字符', trigger: 'blur' },
        ],
        //验证密码
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在6到15个字符', trigger: 'blur' },
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
    login() {
      let username = this.loginForm.username
      let password = this.loginForm.password
      axios
        .post('/api/login', { username, password })
        .then((result) => {
          console.log(result.data)
          this.msg = result.data.ms

          if (result.data.status == 200) {
            this.$router.push('/home')
            this.$message({
              message: '登录成功',
              type: 'success',
            })
          } else {
            this.$message.error('用户名或密码错误')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: rgb(50, 135, 205);
  height: 100vh;
  span {
    text-align: center;
    display: block;
    font-size: 28px;
    padding-top: 150px;
  }
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: blanchedalmond;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.top {
  border-radius: 3px;
  height: 50px;
  background: red;
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
