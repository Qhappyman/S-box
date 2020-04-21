<template>
  <div id="activation">
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" @click="confirm">Confirm activation({{this.time}})</el-button>
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
          time: 60,
          sure: false
      }
    },
    mounted () {
        const timer = setInterval(() => {
            this.time--
            if(this.time === 0 || this.sure === true){
                clearInterval(timer)
            }
        }, 1000)
    },
    watch: {
        time() {
            if(this.time === 0){
                this.$alert('confirm timeout, we will return to the previous page', 'Timeout', {
                    confirmButtonText: 'confirm',
                    callback: ()=> {
                        history.go(-1)
                    }
                })
            }
        }
    },
    methods: {
        confirm () {
            axios.get(`/sbox/activation/{code}`)
            .then((res) => {
                console.log(res)
                this.$alert('activation successfully', '', {
                    confirmButtonText: 'confirm',
                    callback: ()=> {
                        this.$router.push({path: 'login'})
                        this.sure = true;
                    }
                }) 
            })
            .catch((err) => {
                console.log(err)
                this.$alert('activate fail, please confirm your message', 'Error', {
                    confirmButtonText: 'confirm',
                    callback: ()=> {
                        history.go(-1)
                    }
                })
            })          
        }
    }
};
</script>

<style lang="less" scoped>
#activation{
    background-image: url("../../assets/login.jpg");
    height: 730px;
}
#activation div{
    position: absolute;
    margin-left: 40%;
    margin-right: 40%;
    margin-top: 20%;
    background-color:aliceblue;
    border-radius: 20px;
}
</style>