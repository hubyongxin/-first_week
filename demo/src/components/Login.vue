<template>
    <div class="login_container">
        <span>财评平台</span>
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="login_logo">
                <img src="../assets/logo.png">
            </div>
            <!-- 登录区域 -->
            <el-form class="login_form" ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" >
            <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user" placeholder="财政评审平台用户名"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input  v-model="loginForm.password" prefix-icon="el-icon-lock" type="password" placeholder="财政评审平台用户密码"></el-input>
                </el-form-item>
                <!-- 按钮区域 -->
                <el-form-item class="btns">
                    <el-button  type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
//引入request
import request from '../utlis/request'

export default {
    data(){
        return{
            //登录表单数据绑定
            loginForm:{
                username:'',
                password:'',
                msg:''
            },
            loginFormRules:{
                //验证用户名
                username:[
                    { required: true, message: '请输入登录账号', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在3到10个字符', trigger: 'blur' }],
                //验证密码
                password:[
                    { required: true, message: '请输入登录密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '密码长度为6到15个字符', trigger: 'blur' }
                ]
            }
        };
    },
    methods:{
        //点击重置，重置表单
        resetLoginForm(){
            this.$refs.loginFormRef.resetFields();

        },
        //登录
        login(){
            this.$router.push('/main')
            }
        }
        
    }

</script>

<style lang="less" scoped>
.login_container{
    background-color: rgb(50, 135, 205);
    height: 100%;
    span{
        text-align: center;
        display:block;
        font-size: 28px;
        padding-top: 48px;
    }
}

.login_box{
    width: 450px;
    height: 300px;
    background-color: blanchedalmond;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    .login_logo{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px rgb(241, 204, 204);
        position: absolute;
        left: 50%;
        transform: translate(-50% ,-50%);
        background-color: rgb(184, 163, 163);

         img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: #eee;
        }
    }
}

.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

.btns{
    display: flex;
    justify-content: flex-end;
}

</style>
