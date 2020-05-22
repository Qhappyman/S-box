<template>
<div class="max">
  <div class="nav">
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  :router="true"
  active-text-color="#ffd04b">  <!--回到欢迎页面-->
  <el-menu-item index="/home">S-box        <svg t="1588137211399" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3000" width="32" height="32"><path d="M512 95.352695c4.952802 0 14.475689 1.217734 22.624277 9.371438l86.620823 86.62287a64.007803 64.007803 0 0 0 45.255716 18.744923h119.56412c17.647939 0 31.998785 14.354939 31.998785 31.998784v119.56412a64.003709 64.003709 0 0 0 18.74083 45.252647l82.472339 82.4662c8.147564 8.153704 9.366322 17.675568 9.366322 22.6253s-1.218758 14.470573-9.374508 22.626323l-82.465177 82.465177a64.002686 64.002686 0 0 0-18.74083 45.252646v123.721813c0 17.643845-14.350846 31.998785-31.998784 31.998785H662.344147a64.007803 64.007803 0 0 0-45.255717 18.744923l-82.45699 82.464153c-8.15575 8.15575-17.678638 9.373485-22.63144 9.373485s-14.468526-1.217734-22.624277-9.372462l-82.465176-82.465176a64.011896 64.011896 0 0 0-45.255717-18.744923H242.09071c-17.647939 0-31.998785-14.353916-31.998784-31.998785v-119.563096a64.001663 64.001663 0 0 0-18.74083-45.251624l-86.62901-86.624916c-8.147564-8.153704-9.366322-17.675568-9.366321-22.6253s1.218758-14.470573 9.374508-22.627347l86.620823-86.623893a64.001663 64.001663 0 0 0 18.74083-45.251623V242.09071c0-17.643845 14.350846-31.998785 31.998784-31.998784h115.408474a64.007803 64.007803 0 0 0 45.255716-18.744923l86.612637-86.620823c8.156774-8.15575 17.679661-9.373485 22.632463-9.373485m0-63.99757c-24.569582 0-49.13814 9.372461-67.879993 28.116361l-86.620823 86.623893h-115.408474c-53.013401 0-95.995331 42.97886-95.995331 95.995331v115.405404l-86.620823 86.623893c-37.490869 37.488823-37.490869 98.269118 0 135.75794l86.620823 86.623893v119.563096c0 53.016471 42.98193 95.995331 95.995331 95.995331h119.56412l82.465177 82.465177c18.74083 18.7439 43.310412 28.116361 67.879993 28.116361 24.569582 0 49.13814-9.372461 67.879993-28.116361l82.465177-82.465177h123.720789c53.020564 0 95.995331-42.97886 95.995331-95.995331V662.343123l82.465177-82.465176c37.490869-37.488823 37.490869-98.269118 0-135.75794l-82.465177-82.465177V242.09071c0-53.016471-42.974767-95.995331-95.995331-95.995331H666.499793l-86.620823-86.623893c-18.74083-18.7439-43.310412-28.116361-67.87897-28.116361z" p-id="3001" fill="#1296db"></path><path d="M326.642408 518.932899l97.238649 72.217789c8.241708 6.121418 19.676132 5.503341 27.209711-1.471514l253.534344-234.697324a21.333888 21.333888 0 0 1 22.825868-3.982707l5.006014 2.125407c7.150864 3.035126 10.486842 11.291161 7.452739 18.442024a14.084787 14.084787 0 0 1-2.275833 3.667529L458.773751 700.020234c-7.674796 8.93858-21.142529 9.962909-30.081109 2.288113a21.473057 21.473057 0 0 1-1.790785-1.728364L288.010553 549.860283c-6.650467-7.216355-6.191003-18.458397 1.025353-25.107841a17.758456 17.758456 0 0 1 4.88424-3.196809l11.410888-5.021363a21.332864 21.332864 0 0 1 21.311374 2.398629z" p-id="3002" fill="#1296db"></path></svg></el-menu-item>
  <el-menu-item index="/user"><el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar></el-menu-item>
  <el-menu-item index="/login" style="float:right"><svg t="1588137771134" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2313" width="32" height="32"><path d="M918.4 489.6l-160-160c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l105.6 105.6L512 480c-19.2 0-32 12.8-32 32s12.8 32 32 32l307.2 0-105.6 105.6c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l160-163.2c0 0 0-3.2 3.2-3.2C931.2 518.4 931.2 499.2 918.4 489.6z" p-id="2314"></path><path d="M832 736c-19.2 0-32 12.8-32 32l0 64c0 19.2-12.8 32-32 32L224 864c-19.2 0-32-12.8-32-32L192 192c0-19.2 12.8-32 32-32l544 0c19.2 0 32 12.8 32 32l0 64c0 19.2 12.8 32 32 32s32-12.8 32-32L864 192c0-54.4-41.6-96-96-96L224 96C169.6 96 128 137.6 128 192l0 640c0 54.4 41.6 96 96 96l544 0c54.4 0 96-41.6 96-96l0-64C864 748.8 851.2 736 832 736z" p-id="2315"></path></svg>  Log out</el-menu-item>
</el-menu>
  </div>
  <div class="contain">
    <div class="top">
      <div class="title">S-box test</div>
      <el-divider></el-divider>
    <div class="bottom">
      <div class="upfile">
        <a href="javascript:;" class="file">
          select file
          <input type="file" name @change="handleChange()" ref="file" />
        </a>
        <span>{{upfile}}</span>
      </div>
      <div class="selectn">
        select in:
        <el-select v-model="value" placeholder="select" @change="selectChange">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="selectn">
        select out:
        <el-select v-model="value2" placeholder="select" @change="selectChange2">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="confirm">
        <el-button type="success" :plain="true" @click="openCenter">confirm format</el-button>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%" height="400">
        <el-table-column fixed type="index" :index="indexMethod"></el-table-column>
        <el-table-column prop="0" label="0" width="60"></el-table-column>
        <el-table-column prop="1" label="1" width="60"></el-table-column>
        <el-table-column prop="2" label="2" width="60" height="50"></el-table-column>
        <el-table-column prop="3" label="3" width="60" height="50"></el-table-column>
        <el-table-column prop="4" label="4" width="60"></el-table-column>
        <el-table-column prop="5" label="5" width="60" class="secondtable"></el-table-column>
        <el-table-column prop="6" label="6" width="60" class="secondtable"></el-table-column>
        <el-table-column prop="7" label="7" width="60" class="secondtable"></el-table-column>
        <el-table-column prop="8" label="8" width="60" class="secondtable"></el-table-column>
        <el-table-column prop="9" label="9" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="10" label="10" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="11" label="11" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="12" label="12" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="13" label="13" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="14" label="14" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="15" label="15" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="16" label="16" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="17" label="17" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="18" label="18" width="60" class="thirdtable"></el-table-column>
      </el-table>
    </div>
    <div class="calcute">
      <el-form ref="form" :model="form" label-width="80px" class="form">
        <el-form-item label="indexes:">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="指标一" name="type"></el-checkbox>
      <el-checkbox label="指标二" name="type"></el-checkbox>
      <el-checkbox label="指标三" name="type"></el-checkbox>
      <el-checkbox label="指标四" name="type"></el-checkbox>
      <el-checkbox label="指标五" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  </el-form>
      <el-button type="primary" class="calcute-but" @click="calcute">calculate</el-button>
    </div>
    </div>
    <el-divider></el-divider>
    <div class="result">
      <div class="table">
      <el-table :data="tableData2" border style="width: 100%" height="400">
        <el-table-column fixed type="index" :index="indexMethod"></el-table-column>
        <el-table-column prop="0" label="0" width="60"></el-table-column>
        <el-table-column prop="1" label="1" width="60"></el-table-column>
        <el-table-column prop="2" label="2" width="60" height="50"></el-table-column>
        <el-table-column prop="3" label="3" width="60" height="50"></el-table-column>
        <el-table-column prop="4" label="4" width="60"></el-table-column>
        <el-table-column prop="5" label="5" width="60" class="secondtable"></el-table-column>
        <el-table-column prop="6" label="6" width="60" class="secondtable"></el-table-column>
        <el-table-column prop="7" label="7" width="60" class="secondtable"></el-table-column>
        <el-table-column prop="8" label="8" width="60" class="secondtable"></el-table-column>
        <el-table-column prop="9" label="9" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="10" label="10" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="11" label="11" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="12" label="12" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="13" label="13" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="14" label="14" width="60" class="thirdtable"></el-table-column>
        <el-table-column prop="15" label="15" width="60" class="thirdtable"></el-table-column>
      </el-table>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex';
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      tableData: [
        {
          0: "0",
          1: "0",
          2: "0",
          3: "0"
        },
        {
          0: "0",
          1: "0",
          2: "0",
          3: "0"
        },
        {
          0: "0",
          1: "0",
          2: "0",
          3: "0"
        },
        {
          0: "0",
          1: "0",
          2: "0",
          3: "0"
        }
      ],
      tableData2: [
        {
          0: "0",
          1: "0",
          2: "0",
          3: "0"
        },
        {
          0: "0",
          1: "0",
          2: "0",
          3: "0"
        },
        {
          0: "0",
          1: "0",
          2: "0",
          3: "0"
        },
        {
          0: "0",
          1: "0",
          2: "0",
          3: "0"
        }
      ],
      options: [
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        },
        {
          value: "6",
          label: "6"
        },
        {
          value: "7",
          label: "7"
        },
        {
          value: "8",
          label: "8"
        }
      ],
      form: {
        type: []
      },
      value: 4, // 矩阵行列
      value2:4,
      file: "",
      upfile: "",
      activeIndex2: '1',
      data:'',
      email:'',
      confirm:false   //是否确认m n
    };
  },
  mounted() {
    // const obj = {
    //   1: 8,
    //   2: 25,
    //   3: 1,
    //   4: 25,
    //   5: 87,
    //   6: 99
    // }
    // function createNumber () {
    //   for (const i in obj) {
    //     obj[i] = Math.round(Math.random() * 1000)
    //   }
    //   return obj
    // }
    // for (let p = 0; p < this.tableData.length; p++) {
    //   Object.assign(this.tableData[p], createNumber())
    // }
  },
  computed:{
    ...mapGetters(['getbaseInf'])
  },
  created(){
    this.email = this.$store.getters.getbaseInf.email;
  },
  methods: {
    indexMethod(index) {
      return index; // 列索引
    },
    openCenter() {
      this.confirm = true;
        this.$message({
          message: `you has select m:${this.value} n:${this.value2}`,
          center: true,
          type: 'success'
        });
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    handleChange() {
      this.confirm === false;
      const file = this.$refs.file; // 当文件上传时读取文件
      let formdata = new FormData();
      let reader = new FileReader();
      formdata.append("file1", file.files[0].name);
      reader.readAsText(file.files[0]);
      reader.onerror = () => {
        this.upfile = "upFile error!";
      };
      reader.onload = () => {
        const arr = reader.result.split(" ");
        const strarr = arr.map((item)=>item+="");
        this.data = strarr;
        console.log(this.data)
        console.log(typeof(this.data[1]))
        console.log(this.data instanceof Array)
        let length = arr.length - 1;
        let value = this.value; // value为矩阵的行列数
        console.log(value)
        let num;
        switch (value) {
          case 4:
            num = 4;
            break;
          case 5:
            num = 6;
            break;
          case 6:
            num = 8;
            break;
          case 7:
            num = 12;
            break;
          case 8:
            num = 16;
            break;
        }
        console.log(num)
        for (let i = 0; i < num; i++) {
          // 读取文件，写入表格
          for (let p = 0; p < num; p++) {
            this.tableData[i][p] = arr[length];
            length--; // 问题:深浅拷贝，在createTable函数中共用了一个obj，使得数据相同，解决:JSON.parse(JSON.stringfy(obj))
          }
        }
        console.log(this.tableData)
        this.upfile = file.files[0].name;
      };
    },
    selectChange() {
      this.confirm = false;
      this.createTable(this.value); // 根据输入值选择表格矩阵
      console.log(this.value)
    },
    selectChange2() {
      this.confirm = false;
      this.createTable2(this.value2); // 根据输出值选择表格矩阵
    },
    calcute(){
      if(this.confirm === false){
        this.$message({
          message: 'please ensure m n',
          type: 'warning'
        });
      }
      else
      {
      axios.post(`http://111.230.197.120:8080/verify?data=${this.data}&inResult=${this.value}&outResult=${this.value2}&email=${this.email}`)
      .then((res)=>{
        console.log(res)
      })
      .error((e)=>{
        console.log(e);
      })
      }
    },
    createTable(num) {
      let obj = {};
      let length;
      switch (
        num // 根据S盒原理选择byte对应的矩阵，构造数据
      ) {
        case "4":
          length = 4;
          break;
        case "5":
          length = 6;
          break;
        case "6":
          length = 8;
          break;
          case "7":
          length = 12;
          break;
        case "8":
          length = 16;
          break;
      }
      console.log("length:,num",length,num)
      console.log(typeof(num))
      for (let i = 0; i < length; i++) {
        obj[i] = "";
      }
      this.tableData = [];
      for (let i = 0; i < length; i++) {
        this.tableData.push(JSON.parse(JSON.stringify(obj))); //浅拷贝实现简单的数据拷贝
      }
    },
    createTable2(num) {
      let obj = {};
      let length;
      switch (
        num // 根据S盒原理选择byte对应的矩阵，构造数据
      ) {
        case "4":
          length = 4;
          break;
        case "5":
          length = 6;
          break;
        case "6":
          length = 8;
          break;
          case "7":
          length = 12;
          break;
        case "8":
          length = 16;
          break;
      }
      for (let i = 0; i < length; i++) {
        obj[i] = "";
      }
      this.tableData2 = [];
      for (let i = 0; i < length; i++) {
        this.tableData2.push(JSON.parse(JSON.stringify(obj))); //浅拷贝实现简单的数据拷贝
      }
    }
  }
};
</script>

<style lang="less" scoped>
.max{
  background-image: url("../../assets/login.jpg");
  width: 100%;
  height: 2100px;
  overflow: hidden;
  .nav{
    
  }
}
.contain {
  margin: auto;
  width: 93%;
  margin-top: 0%;
  background-color:white;
  padding:2%;
  height: 2100px;
  .top {
    height: calc(100vh - 120px);
    .title {
      margin-bottom: 20px;
      text-align: center;
      font-size: 25px;
    }
  }
}
.table {
  margin: auto;
  width: 100%;
}
.file {
  position: relative;
  display: inline-block;
  background: #409eff;
  border: 1px solid #99d3f5;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: white;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
  height: 20px;
}
.file input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}
.file:hover {
  background: blue;
  border-color: #78c3f3;
  text-decoration: none;
}
.upfile {
  float: left;
  margin-top: 5px;
}
.selectn {
  display: inline-block;
  margin-left: 100px;
}
.confirm {
  display: inline-block;
  margin-left: 100px;
}
.calcute {
  margin:auto;
  margin-top: 30px;
  .form{
    display: inline-block
  }
  .calcute-but{
    display: inline-block;
    margin-left: 450px;
  }
}
.bottom {
  margin-bottom: 20px;
}
.result {
  height: 500px;
  background-color: white;
}
</style>
