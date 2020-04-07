<template>
  <div class="content">
      <div class="register">
          <header>S-box Sign up</header>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item prop="pass" :inline="true">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item >
    <el-input placeholder="FirstName"></el-input>
  </el-form-item>
  <el-form-item>
    <el-input placeholder="LastName"></el-input>
  </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item prop="pass" :inline="true">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item >
    <el-input placeholder="Affilication"></el-input>
  </el-form-item>
  <el-form-item>
    <el-input placeholder="Title"></el-input>
  </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item prop="age">
        <el-input v-model.number="ruleForm.age" placeholder="E-mail"></el-input>
      </el-form-item>
      <el-form-item prop="age">
        <el-input v-model.number="ruleForm.age" placeholder="Verification"></el-input>
      </el-form-item>

      <el-form-item prop="age">
        <el-input v-model.number="ruleForm.age" placeholder="Password"></el-input>
      </el-form-item>
      <el-form-item  prop="age">
        <el-input v-model.number="ruleForm.age" placeholder="Confirm password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="register-button">Sign up</el-button>
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
    Login () {
      this.$router.push({ path: 'login' })
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
width: 40%;
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
