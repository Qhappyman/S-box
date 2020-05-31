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
        <el-form-item label="E-mail：" prop="checkMail">
          <el-input
            type="text"
            v-model="ruleForm.checkMail"
            autocomplete="off"
            placeholder="E-mail"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password:" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            placeholder="Password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <span class="signup" @click="signUp">sign up</span>
          <span class="forget">Forget password?</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Login('ruleForm')" class="login-button">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex';
import { Debounce } from '../../components/debounce'
export default {
  data () {
    var checkPass = (rule, value, callback) => { // 验证信息的规则
      if (value === '') {
        callback(new Error('Please enter your password'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          const reg = /^[\w]{6,12}$/
          if (!reg.test(value)) {
            callback(new Error('Password error!'))
          }
        }
        callback()
      }
    }
    const checkMail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your email'))
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
    return {
      ruleForm: {
        checkMail: '',
        checkPass: ''
      },
      rules: {
        checkMail: [{ validator: checkMail, trigger: 'blur' }],
        checkPass: [{ validator: checkPass, trigger: 'blur' }]
      }
    }
  },
  methods: {
    signUp () {
      this.$router.push({ path: 'register' })
    },
    Login: Debounce(function () { // 防抖函数来控制点击登录次数
      this.$refs[arguments[0]].validate((valid) => {
        if (valid) {
          axios.get(`http://111.230.197.120:8080/login?email=${this.ruleForm.checkMail}&password=${this.ruleForm.checkPass}`)
          .then((res)=>{
            console.log(res)
            if(res.data.retCode==0){
            this.$notify({
            title: 'success',
            message: 'Login successfully',
            type: 'success'
          })
          const _this = this;
          const userInf = res.data.data;
          _this.$store.commit('update',{
        firstname: userInf.firstName,
        lastname: userInf.lastName,
        affilication: userInf.affiliation,
        title: userInf.title,
        email: userInf.email
      });
          setTimeout(()=>{
            _this.$router.push({path:'home'})
          },2000)
            }
            else{
              this.$notify({
          title: '',
          message: 'Account not exit',
          type: 'warning'
        });
            }
          })
          .catch((err) => {
            console.log(err);
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }, 1000)
  }
}
</script>

<style lang="less" scoped>
@fontColor: #1890ff;
.content {
  height: 700px;
  background-image: url("../../assets/login.jpg");
  overflow: hidden;
}
.login {
  width: 25%;
  height: 350px;
  margin: 80px auto;
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
.signup,
.forget {
  color: @fontColor;
}
.signup,
.forget:hover {
  cursor: pointer;
}
.signup {
  float: left;
}
.forget {
  float: right;
}
.login-button {
  width: 100%;
}
@media screen and (max-width: 1050px) and (min-width: 750px){
  .forget{
    // float: left;
  }
  .login{
    width: 43%
  }
}
@media screen and (max-width: 750px) and (min-width: 560px) {
  .login{
    height: 350px;
    width: 60%
  }
  .forget{
    // float: left;
  }
}
@media screen and (max-width: 560px){
  .login{
    height: 400px;
    width: 60%;
  }
  .forget{
    // float: left;
  }
}
</style>
