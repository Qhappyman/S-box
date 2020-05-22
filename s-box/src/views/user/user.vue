<template>
  <div>
      <div class="nav">
    <el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  :router="true"
  active-text-color="#ffd04b">  <!--回到欢迎页面-->
  <el-menu-item index="/home">S-box        <svg t="1588137211399" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3000" width="32" height="32"><path d="M512 95.352695c4.952802 0 14.475689 1.217734 22.624277 9.371438l86.620823 86.62287a64.007803 64.007803 0 0 0 45.255716 18.744923h119.56412c17.647939 0 31.998785 14.354939 31.998785 31.998784v119.56412a64.003709 64.003709 0 0 0 18.74083 45.252647l82.472339 82.4662c8.147564 8.153704 9.366322 17.675568 9.366322 22.6253s-1.218758 14.470573-9.374508 22.626323l-82.465177 82.465177a64.002686 64.002686 0 0 0-18.74083 45.252646v123.721813c0 17.643845-14.350846 31.998785-31.998784 31.998785H662.344147a64.007803 64.007803 0 0 0-45.255717 18.744923l-82.45699 82.464153c-8.15575 8.15575-17.678638 9.373485-22.63144 9.373485s-14.468526-1.217734-22.624277-9.372462l-82.465176-82.465176a64.011896 64.011896 0 0 0-45.255717-18.744923H242.09071c-17.647939 0-31.998785-14.353916-31.998784-31.998785v-119.563096a64.001663 64.001663 0 0 0-18.74083-45.251624l-86.62901-86.624916c-8.147564-8.153704-9.366322-17.675568-9.366321-22.6253s1.218758-14.470573 9.374508-22.627347l86.620823-86.623893a64.001663 64.001663 0 0 0 18.74083-45.251623V242.09071c0-17.643845 14.350846-31.998785 31.998784-31.998784h115.408474a64.007803 64.007803 0 0 0 45.255716-18.744923l86.612637-86.620823c8.156774-8.15575 17.679661-9.373485 22.632463-9.373485m0-63.99757c-24.569582 0-49.13814 9.372461-67.879993 28.116361l-86.620823 86.623893h-115.408474c-53.013401 0-95.995331 42.97886-95.995331 95.995331v115.405404l-86.620823 86.623893c-37.490869 37.488823-37.490869 98.269118 0 135.75794l86.620823 86.623893v119.563096c0 53.016471 42.98193 95.995331 95.995331 95.995331h119.56412l82.465177 82.465177c18.74083 18.7439 43.310412 28.116361 67.879993 28.116361 24.569582 0 49.13814-9.372461 67.879993-28.116361l82.465177-82.465177h123.720789c53.020564 0 95.995331-42.97886 95.995331-95.995331V662.343123l82.465177-82.465176c37.490869-37.488823 37.490869-98.269118 0-135.75794l-82.465177-82.465177V242.09071c0-53.016471-42.974767-95.995331-95.995331-95.995331H666.499793l-86.620823-86.623893c-18.74083-18.7439-43.310412-28.116361-67.87897-28.116361z" p-id="3001" fill="#1296db"></path><path d="M326.642408 518.932899l97.238649 72.217789c8.241708 6.121418 19.676132 5.503341 27.209711-1.471514l253.534344-234.697324a21.333888 21.333888 0 0 1 22.825868-3.982707l5.006014 2.125407c7.150864 3.035126 10.486842 11.291161 7.452739 18.442024a14.084787 14.084787 0 0 1-2.275833 3.667529L458.773751 700.020234c-7.674796 8.93858-21.142529 9.962909-30.081109 2.288113a21.473057 21.473057 0 0 1-1.790785-1.728364L288.010553 549.860283c-6.650467-7.216355-6.191003-18.458397 1.025353-25.107841a17.758456 17.758456 0 0 1 4.88424-3.196809l11.410888-5.021363a21.332864 21.332864 0 0 1 21.311374 2.398629z" p-id="3002" fill="#1296db"></path></svg></el-menu-item>
  <el-menu-item index="/user"><el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar></el-menu-item>
  <el-menu-item index="/login" style="float:right"><svg t="1588137771134" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2313" width="32" height="32"><path d="M918.4 489.6l-160-160c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l105.6 105.6L512 480c-19.2 0-32 12.8-32 32s12.8 32 32 32l307.2 0-105.6 105.6c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l160-163.2c0 0 0-3.2 3.2-3.2C931.2 518.4 931.2 499.2 918.4 489.6z" p-id="2314"></path><path d="M832 736c-19.2 0-32 12.8-32 32l0 64c0 19.2-12.8 32-32 32L224 864c-19.2 0-32-12.8-32-32L192 192c0-19.2 12.8-32 32-32l544 0c19.2 0 32 12.8 32 32l0 64c0 19.2 12.8 32 32 32s32-12.8 32-32L864 192c0-54.4-41.6-96-96-96L224 96C169.6 96 128 137.6 128 192l0 640c0 54.4 41.6 96 96 96l544 0c54.4 0 96-41.6 96-96l0-64C864 748.8 851.2 736 832 736z" p-id="2315"></path></svg>  Log out</el-menu-item>
</el-menu>
  </div>
    <header>
      <div class="mycount">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <!-- <i class="el-icon-user-solid"></i> -->
        <div>Personal information </div>
      </div>
    </header>
    <el-divider></el-divider>

    <main>
      <div class="information">
        <div class="base-inf">
          <el-form ref="user" :model="user" label-width="80px" size="medium" :rules="userrules">
            <el-form-item label="FirstName" prop="firstname">
              <el-input v-model="user.firstname"></el-input>
            </el-form-item>
            <el-form-item label="LastName" prop="lastname">
              <el-input v-model="user.lastname"></el-input>
              <!-- <el-alert title="学号格式错误" type="error" class="alert" v-if="true"> -->
            </el-form-item>
            <el-form-item label="Title" prop="title">
              <el-input v-model="user.title"></el-input>
              <!-- <el-alert title="请填写专业" type="error" class="alert" v-if="true"></el-alert> -->
            </el-form-item>
            <el-form-item label="Affilication" prop="affilication">
              <el-input v-model="user.affilication"></el-input>
              <!-- <el-alert title="请填写专业" type="error" class="alert" v-if="true"></el-alert> -->
            </el-form-item>
          <el-form-item label="e-mail" prop="email">
              <el-input v-model="user.email"></el-input>
              <!-- <el-alert title="请填写专业" type="error" class="alert" v-if="true"></el-alert> -->
            </el-form-item>
          </el-form>
          <el-form class="form2">
          <el-form-item size="medium" class="but-left">
              <el-button type="primary" @click="savebaseInf">save information</el-button>
            </el-form-item>
            <el-form-item size="medium" class="but-right">
              <el-button type="primary" @click="changePass">modify password</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import {mapState} from 'vuex';
import {mapGetters} from 'vuex'
export default {
  name: "SettingMe",
  data() {
    let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.password.pass !== '') {
            let reg = /^[\w]{6,12}$/;
            if(!value.match(reg)){
              callback(new Error('密码6-12位，只能包括字母、数字和下划线'));
            }
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.password.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      user: {
        firstname: "13",
        lastname: "",
        email: "",
        affilication: "",
        title: "",
      },
      password:{
        pass:"",
        checkPass:""
      },
      userrules:{
        // firstname:[
        //   {required:true,message:'please perfect it',tigger:'blur'}
        //   ],
        // lastname:[
        //   {required:true,message:'please perfect it',tigger:'blur'}
        //   ],
        // affilication:[
        //   {required:true,message:'please perfect it',tigger:'blur'}
        //   ],
        // title:[
        //   {required:true,message:'please perfect it',tigger:'blur'}
        //   ],
        // email:[
        //   {required:true,message:'please perfect it',tigger:'blur'}
        //   ]
      },
      passrules:{
        pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
      },



    };
  },

  methods: {
    savebaseInf() {
      let result = Object.keys(this.user);
    if(result.some((item)=>{
      return this.user[item] == "";   //通过user.item无法访问属性，反思一下区别？
    })){
      this.$notify.error({
          title: '未完善',
          message: '请完善你的内容'
        });
    }
    else{
      let _this = this;
      _this.$store.commit('update',{
        firstname: _this.user.firstname,
        lastname: _this.user.lastname,
        affilication: _this.user.affilication,
        title: _this.user.title,
        email: _this.user.email
      });

      this.$notify({
          title: '保存',
          message: '保存成功',
          type:'success'
        });
    }
    },
  changePass(){
   this.$router.push({path:'modifyPass'})   //可以修改为子路由
  },
    savePassword(password) {
      this.$refs[password].validate((valid) => {
          if (valid) {
            this.$notify({
              title:'成功',
              message:'修改成功',
              type:'success'
            })
          } else {
            this.$notify.error({
              title:'失败',
              message:'请检查密码'
            })
            console.log('error submit!!');
            return false;
          }
        });

    }
  },
  created(){
    this.user = this.$store.getters.getbaseInf;
  },
  computed:{
    ...mapGetters(['getbaseInf'])
  },
  mounted:{
 
  },
  components: {
  }
};
</script>

<style scoped>
.el-icon-user-solid {
  display: inline-block;
}
main{
  margin: 0 auto;
  width:700px;
}
header {
  width: 100%;
  height: 100px;
}
.mid-class {
  width: 100%;
  color: #409eff;
}
.mycount {
  position: absolute;
  text-align: center;
  margin: 20px 0 10px 0;
  left: 45%;
  font-size: 30px;
  font-weight: 600;
}
.alert{
  height: 30px;
}
.but-left,.but-right{
  display: inline-block;
}
.but-right{
  float:right;
}
.form2{
  width: 70%;
  margin: auto;
}
.save{
  display: none;
}
.information {
  display: flex;
  flex-direction: column;
  
}
.base-inf {
  flex-grow: 4;
  margin-left: 2%;
}
.password {
  flex-grow: 1;
  float: left;
}
</style>>


