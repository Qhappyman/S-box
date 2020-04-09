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
        <el-form :inline="true" :model="ruleForm" class="demo-form-inline" :rules="rules">
    <el-form-item prop="FirstName" >
    <el-input placeholder="FirstName" v-model="ruleForm.FirstName"></el-input>
  </el-form-item>
  <el-form-item prop="LastName">
    <el-input placeholder="LastName" v-model="ruleForm.LastName"></el-input>
  </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item :inline="true">
        <el-form :inline="true" :model="ruleForm" class="demo-form-inline" :rules="rules">
  <el-form-item prop="Affilication">
    <el-input placeholder="Affilication" v-model="ruleForm.Affilication"></el-input>
  </el-form-item>
  <el-form-item prop="Title">
    <el-input placeholder="Title" v-model="ruleForm.Title"></el-input>
  </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item prop="checkMail">
        <el-input type="text" v-model="ruleForm.checkMail" autocomplete="off" placeholder="E-mail"></el-input>
      </el-form-item>
      <el-form-item>
        <el-form :inline="true" :model="ruleForm" class="demo-form-inline" :rules="rules">
          <el-form-item prop="Verifiaction">
    <el-input v-model="ruleForm.Verification" placeholder="Verifiaction" style="width:130px"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="sendVerifiaction">Send Verifiaction</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="ensure">Confirm</el-button>
  </el-form-item>
        </el-form>
      </el-form-item>

      <el-form-item prop="pass">
        <el-input v-model="ruleForm.pass" placeholder="Password" type="password"></el-input>
      </el-form-item>
      <el-form-item  prop="checkPass">
        <el-input v-model="ruleForm.checkPass" placeholder="Confirm password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="signUp" class="register-button">Sign up</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Login" class="register-button">Has Count? Login</el-button>
      </el-form-item>
    </el-form>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    const checkMail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your email address'))
      } else {
        if (this.ruleForm.checkMail !== '') {
          const reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
          if (!reg.test(value)) {
            callback(new Error('Email format error!'))
          }
        }
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          const reg = /^[\w]{6,12}$/
          if (!reg.test(value)) {
            callback(new Error('The password consists of 6-12 Numbers, letters, and underscores'))
          } else {
            this.$refs.ruleForm.validateField('checkPass')
          }
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
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
    const verificat = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Enter your verification'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        FirstName: '',
        LastName: '',
        Affilication: '',
        Title: '',
        Email: '',
        Verifiaction: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        checkMail: [
          { validator: checkMail, trigger: 'blur' }
        ],
        FirstName: [
          { validator: isEmpty, trigger: 'blur' }
        ],
        LastName: [
          { validator: isEmpty, trigger: 'blur' }
        ],
        Title: [
          { validator: isEmpty, trigger: 'blur' }
        ],
        Affilication: [
          { validator: isEmpty, trigger: 'blur' }
        ],
        Verifiaction: [
          { validator: verificat, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    Login () {
      this.$router.push({ path: 'login' })
    },
    signUp () {
      console.log(this.ruleForm)
    }
  }
}
</script>

<style lang="less" scoped>
@fontColor:#1890FF;
.content{
height: 700px;
background-image: url('../../assets/login.jpg');
overflow: hidden;
}
.register{
width: 35%;
height: 550px;
margin: 40px auto;
padding: 30px 60px 20px 0px;
background-color: white;
border-radius: 10px;
header{
display: block;
width: 50%;
font-size: 30px;
color: @fontColor;
font-family: Arial, Helvetica, sans-serif;
margin: 0 50% 30px 40%;
}
}
.register-button{
width: 100%;
}
</style>
