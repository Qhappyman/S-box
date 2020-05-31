/* eslint-disable no-tabs */
<template>
  <div class="content">
    <protocol></protocol>
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
          <div class="drag" ref="dragDiv">
  <div class="drag_bg"></div>
  <div class="drag_text">{{confirmWords}}</div>
  <div ref="moveDiv" @mousedown="mousedownFn($event)" :class="{'handler_ok_bg':confirmSuccess}"
class="handler handler_bg" style="position: absolute;top: 0px;left: 0px;"></div>
 </div>
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
import Protocol from '../../components/protocol.vue'
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
      },
      beginClientX:0,   /*距离屏幕左端距离*/
    mouseMoveStata:false,  /*触发拖动状态 判断*/
    maxwidth:'',    /*拖动最大宽度，依据滑块宽度算出来的*/
    confirmWords:'Drag the slider to the right', /*滑块文字*/
    confirmSuccess:false   /*验证成功判断*/
    }
  },
  components:{
    Protocol
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
        axios.get(`http://111.230.197.120:8080/register?firstName=${this.ruleForm.FirstName}&lastName=${this.ruleForm.LastName}&affiliation=${this.ruleForm.Affilication}&email=${this.ruleForm.checkMail}&password=${this.ruleForm.pass}&title=${this.ruleForm.Title}`)
        .then((e) => {
          console.log(e);
          if(e.data.retCode==0){
          this.$notify({
          title: 'success',
          message: 'Register successfully',
          type: 'success'
        })
          }
          else{
            this.$notify.error({
          title: 'error',
          message: 'Register failly'
        });
          }
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
              setTimeout(()=>loading.close(),500)    //去掉
              // setTimeout(() => { // 等待用户确认激活信息后关闭loding，进入主界面
              //   this.$router.push({path: 'activation'})
              //   loading.close()
              // }, 1000)
            }
          })
        }, 2000)
        })
        .catch((err) => {
          this.$notify.info({
          title: 'fail',
          message: 'network error'
        });
        })
      } else {
        if(this.slide === false) {   // 单独判断是否滑动验证成功
          this.$message('confirm your slide');
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
        },
        mousedownFn:function (e) {
    if(!this.confirmSuccess){
     e.preventDefault && e.preventDefault(); //阻止文字选中等 浏览器默认事件
     this.mouseMoveStata = true;
     this.beginClientX = e.clientX;
    }
   },  //mousedoen 事件
   successFunction(){
    this.confirmSuccess = true
    this.confirmWords = '验证通过';
    this.slide = true;
    if(window.addEventListener){
     document.getElementsByTagName('html')[0].removeEventListener('mousemove',this.mouseMoveFn);
     document.getElementsByTagName('html')[0].removeEventListener('mouseup',this.moseUpFn);
    }else {
     document.getElementsByTagName('html')[0].removeEventListener('mouseup',()=>{});
    }
    document.getElementsByClassName('drag_text')[0].style.color = '#fff'
    document.getElementsByClassName('handler')[0].style.left = this.maxwidth + 'px';
    document.getElementsByClassName('drag_bg')[0].style.width = this.maxwidth + 'px';
   },    //验证成功函数
   mouseMoveFn(e){
    if(this.mouseMoveStata){
     let width = e.clientX - this.beginClientX;
     if(width>0 && width<=this.maxwidth){
      document.getElementsByClassName('handler')[0].style.left = width + 'px';
      document.getElementsByClassName('drag_bg')[0].style.width = width + 'px';
     }else if(width>this.maxwidth){
      this.successFunction();
     }
    }
   },     //mousemove事件
   moseUpFn(e){
    this.mouseMoveStata = false;
    var width = e.clientX - this.beginClientX;
    if(width<this.maxwidth){
     document.getElementsByClassName('handler')[0].style.left = 0 + 'px';
     document.getElementsByClassName('drag_bg')[0].style.width = 0 + 'px';
    }
   }      //mouseup事件
  },
  mounted(){
    this.maxwidth = this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth;
   document.getElementsByTagName('html')[0].addEventListener('mousemove',this.mouseMoveFn);
   document.getElementsByTagName('html')[0].addEventListener('mouseup',this.moseUpFn)
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
  height: 570px;
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

.drag{
  position: relative;
  background-color: #e8e8e8;
  width: 100%;
  height: 34px;
  line-height: 34px;
  text-align: center;
 }
 .handler{
  width: 40px;
  height: 32px;
  border: 1px solid #ccc;
  cursor: move;
 }
 .handler_bg{
  background: #fff url(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2Fy
ZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAA
AAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5U
Y3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6e
G1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS
8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8
vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNj
cmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZ
S5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY2
9tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9u
cy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG
1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1N
OkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMD
Q1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5
NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIE
NDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5z
dGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOW
U5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVk
LThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSRE
Y+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi
/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvB
SIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9
A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45V
iQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==`) no-repeat center;
 }
 .handler_ok_bg{
  background: #fff url(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAA
f8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0
WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVz
VNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRv
YmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE
1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbn
M6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMj
Ij4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dH
A6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8v
bnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bX
A9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9j
dW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU
2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5ND
BCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGM
kQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv
dG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3R
SZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2
U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiN
C00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3Jk
ZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREF
UeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8I
N1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78
AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/A
wPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBe
kGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1Q
FeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJR
U5ErkJggg==`) no-repeat center;
 }
 .drag_bg{
  background-color: #7ac23c;
  height: 34px;
  width: 0px;
 }
 .drag_text{
  position: absolute;
  top: 0px;
  width: 100%;text-align: center;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -o-user-select:none;
  -ms-user-select:none;
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
