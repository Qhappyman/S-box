<template>
<div class="content">
  <div class="login">
<header>S-box Login</header>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="E-mail：" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="E-mail"></el-input>
      </el-form-item>
      <el-form-item label="Password:" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="Password"></el-input>
      </el-form-item>
<el-form-item>
<span class="signup" @click="signUp">sign up</span>
<span class="forget">Forget password?</span>
</el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="login-button">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    signUp () {
      this.$router.push({ path: 'register' })
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
.login{
width: 25%;
height: 350px;
margin: 80px auto;
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
.signup,.forget{
color: @fontColor;
}
.signup,.forget:hover{
cursor: pointer;
}
.signup{
float: left;
}
.forget{
float: right;
}
.login-button{
width: 100%;
}
</style>
