/* eslint-disable no-tabs */
<template>
  <div class="content">
    <div class="register">
      <header>S-box Sign up</header>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="60px"
        class="demo-ruleForm"
      >
        <el-form-item :inline="true">
          <el-form :inline="true" :model="ruleForm" class="demo-form-inline" :rules="rules" ref="ruleForm1">
            <el-form-item prop="FirstName" class="firstname">
              <el-input placeholder="FirstName" v-model="ruleForm.FirstName"></el-input>
            </el-form-item>
            <el-form-item prop="LastName" class="lastname">
              <el-input placeholder="LastName" v-model="ruleForm.LastName"></el-input>
            </el-form-item>
          </el-form>
        </el-form-item>
        <el-form-item :inline="true">
          <el-form :inline="true" :model="ruleForm" class="demo-form-inline" :rules="rules" ref="ruleForm2">
            <el-form-item prop="Affilication" class="affilication">
              <el-input placeholder="Affilication" v-model="ruleForm.Affilication"></el-input>
            </el-form-item>
            <el-form-item prop="Title" class="title">
              <el-input placeholder="Title" v-model="ruleForm.Title"></el-input>
            </el-form-item>
          </el-form>
        </el-form-item>
        <el-form-item prop="checkMail">
          <el-input
            type="text"
            v-model="ruleForm.checkMail"
            autocomplete="off"
            placeholder="E-mail"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input v-model="ruleForm.pass" placeholder="Password" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input v-model="ruleForm.checkPass" placeholder="Confirm password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="slide">
          <slide-verify 
    ref="slideblock"
    @again="onAgain"
    @fulfilled="onFulfilled"
    @success="onSuccess"
    @fail="onFail"
    @refresh="onRefresh"
    :accuracy="accuracy"
    :slider-text="text"
></slide-verify>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="signUp(`ruleForm ruleForm1 ruleForm2`)" class="register-button">Sign up</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Login" class="register-button">Has Count? Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Debounce } from '../../components/debounce'
export default {
  data () {
    const checkMail = (rule, value, callback) => { // email格式
      if (value === '') {
        callback(new Error('The mailbox will be your account'))
      } else {
        if (this.ruleForm.checkMail !== '') {
          const reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
          if (!reg.test(value)) {
            callback(new Error('Email format error, it will be your account'))
          }
        }
        callback()
      }
    }
    const validatePass = (rule, value, callback) => { // 密码格式，6-12位字母，数字，下划线
      if (value === '') {
        callback(new Error('Please enter your password'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          const reg = /^[\w]{6,12}$/
          if (!reg.test(value)) {
            callback(
              new Error(
                'The password consists of 6-12 Numbers, letters, and underscores'
              )
            )
          } else {
            this.$refs.ruleForm.validateField('checkPass')
          }
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => { // 第二次密码是否和第一次一致
      if (value === '') {
        callback(new Error('Please enter your password again'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('Password not match!'))
      } else {
        callback()
      }
    }
    const isEmpty = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Cannot be empty'))
      } else {
        callback()
      }
    }
    const verificat = (rule, value, callback) => { // 判断验证码是否为空且正确
      if (value === '') {
        callback(new Error('Enter your verification'))
      } else {
        callback()
      }
    }
    return {
      msg: '',
      text: 'slide to right',
      accuracy: 2,
      slide: false,
      ruleForm: {
        pass: '',
        checkPass: '',
        FirstName: '',
        LastName: '',
        Affilication: '',
        Title: '',
        checkMail: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        checkMail: [{ validator: checkMail, trigger: 'blur' }],
        FirstName: [{ validator: isEmpty, trigger: 'blur' }],
        LastName: [{ validator: isEmpty, trigger: 'blur' }],
        Title: [{ validator: isEmpty, trigger: 'blur' }],
        Affilication: [{ validator: isEmpty, trigger: 'blur' }],
        Verifiaction: [{ validator: verificat, trigger: 'blur' }]
      }
    }
  },
  computed: {
  },
  methods: {
    Login () {
      this.$router.push({ path: 'login' })
    },
    signUp: Debounce(function () { // 防抖函数控制注册次数
      const rules = arguments[0].split(' ')
      const canSign = (e) => {
        let p
        this.$refs[e].validate((valid) => {
          if (valid) {
            p = true
            return true
          } else {
            p = false
            return false
          }
        })
        return p // 每个验证返回的布尔值
      }
      const one = canSign(rules[0])
      const two = canSign(rules[1])
      const three = canSign(rules[2])
      console.log(one, two, three) // 若所有验证通过进行注册成功的请求发送
      if (one && two && three && this.slide === true) {
        axios.post(`http://111.230.197.120:8080/register?firstName=${this.ruleForm.FirstName}&lastName=${this.ruleForm.LastName}&affiliation=${this.ruleForm.Affilication}&email=${this.ruleForm.checkMail}&password=${this.ruleForm.pass}&title=${this.ruleForm.Title}`)
        .then((e) => {
          console.log(e);
          this.$notify({
          title: 'success',
          message: 'Register successfully',
          type: 'success'
        })
        setTimeout(() => { // 激活账号提示
          this.$alert('we will send a message to your email, please confirm it', '', {
            confirmButtonText: 'confirm',
            callback: app => {
              const loading = this.$loading({
                lock: true,
                text: 'confirm your email message',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
              })
              setTimeout(() => { // 等待用户确认激活信息后关闭loding，进入主界面
                this.$router.push({path: 'activation'})
                loading.close()
              }, 1000)
            }
          })
        }, 2000)
        })
        .catch((err) => {
          console.log(err)
        })
      } else {
        if(this.slide === false) {   // 单独判断是否滑动验证成功
          this.$message.error('confirm your slide');
        }
      }
    }, 1500),
    onSuccess(){        //验证码的判断
            this.msg = 'success';
            this.slide = true;
        },
        onFail(){
            this.slide = false;
        },
        onRefresh(){
        },
        onFulfilled() {
        },
        onAgain() {
            console.log('检测到非人为操作的哦！');
            this.msg = 'try again';
            // 刷新
            this.$refs.slideblock.reset();
        }
  }
  
}
</script>

<style lang="less" scoped>
@fontColor: #1890ff;
.content {
  height: 900px;
  background-image: url("../../assets/login.jpg");
  overflow: hidden;
}
.register {
  width: 35%;
  height: 750px;
  margin: 40px auto;
  padding: 30px 60px 20px 0px;
  background-color: white;
  border-radius: 10px;
  header {
    display: block;
    width: 50%;
    font-size: 30px;
    color: @fontColor;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 50% 30px 40%;
  }
}
.lastname{
  float: right;
}
.title{
  float: right;
}
.register-button {
  width: 100%;
}
@media screen and (max-width: 1415px) and (min-width: 880px){
  .lastname,.title,.firstname,.affilication{
    width: 43%;
  }
  .register{
    height: 800px;
  }
}
@media screen and (max-width: 890px) and(min-width: 560px) {
  .lastname{
    float: left;
    margin-top: 5px;
  }
  .title{
    float: left;
    margin-top: -5px;
  }
  .affilication{
    margin-top: -15px;
  }
  .register{
    height: 600px;
    width: 60%;
  }
  .content{
    height: 750px;
  }
   .slide{ 
    display: none;
  }
}
@media screen and (max-width: 560px){
  .register{
    height: 600px;
    width:70%;
  }
   .slide{ 
    display: none;
  }
  .lastname{
    float: left;
    margin-top: 5px;
  }
  .title{
    float: left;
    margin-top: -5px;
  }
  .affilication{
    margin-top: -15px;
  }
}
</style>
