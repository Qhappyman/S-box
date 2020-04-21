<template>
<div class="contain">
  <div class="table">
  <el-table
    :data="tableData"
    border
    style="width: 700px"
    height="400">
    <el-table-column
      fixed
      type="index"
      :index="indexMethod">
    </el-table-column>
    <el-table-column
      prop="0"
      label="0"
      width="60">
    </el-table-column>
    <el-table-column
      prop="1"
      label="1"
      width="60">
    </el-table-column>
    <el-table-column
      prop="2"
      label="2"
      width="60"
      height="50">
    </el-table-column>
    <el-table-column
      prop="3"
      label="3"
      width="60"
      height="50">
    </el-table-column>
    <el-table-column
      prop="4"
      label="4"
      width="60">
    </el-table-column>
    <el-table-column
      prop="5"
      label="5"
      width="60"
      class="secondtable">
    </el-table-column>
    <el-table-column
      prop="6"
      label="6"
      width="60"
      class="secondtable">
    </el-table-column>
    <el-table-column
      prop="7"
      label="7"
      width="60"
      class="secondtable">
    </el-table-column>
    <el-table-column
      prop="8"
      label="8"
      width="60"
      class="secondtable">
    </el-table-column>
    <el-table-column
      prop="9"
      label="9"
      width="60"
      class="thirdtable">
    </el-table-column>
    <el-table-column
      prop="10"
      label="10"
      width="60"
      class="thirdtable">
    </el-table-column>
    <el-table-column
      prop="11"
      label="11"
      width="60"
      class="thirdtable">
    </el-table-column>
    <el-table-column
      prop="12"
      label="12"
      width="60"
      class="thirdtable">
    </el-table-column>
    <el-table-column
      prop="13"
      label="13"
      width="60"
      class="thirdtable">
    </el-table-column>
    <el-table-column
      prop="14"
      label="14"
      width="60"
      class="thirdtable">
    </el-table-column>
    <el-table-column
      prop="15"
      label="15"
      width="60"
      class="thirdtable">
    </el-table-column>
  </el-table>
  </div>
<div class="bottom">
  <div class="upfile">
  <a href="javascript:;" class="file">select file
    <input type="file" name="" @change="handleChange()" ref="file">
</a>
<span>{{upfile}}</span>
  </div>
  <div class="selectn">
    select n
    <el-select v-model="value" placeholder="select" @change="selectChange">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
  <div class="confirm">
  <el-button type="success">confirm form</el-button>
  </div>
</div>
<div class="calcute">
  <el-button type="primary">calcute</el-button>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        0: '87',
        1: '8',
        2: '25',
        3: '1'
      }, {
        0: '12',
        1: '8',
        2: '25',
        3: '1'
      }, {
        0: '9',
        1: '8',
        2: '25',
        3: '1'
      }, {
        0: '2',
        1: '8',
        2: '25',
        3: '1'
      }],
      options: [{
          value: '4',
          label: '4'
        }, {
          value: '6',
          label: '6'
        }, {
          value: '8',
          label: '8'
        }],
        value: '',
      file:'',
      upfile:''
    }
  },
  mounted () {
    console.log(this.tableData)
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
  methods: {
    indexMethod(index) {
        return index;
      },
    handleChange() {
      const file = this.$refs.file;
      let formdata = new FormData();
      let reader = new FileReader();
      formdata.append('file1',file.files[0].name)
      reader.readAsText(file.files[0]);
      reader.onerror = () => {
        this.upfile = 'upFile error!'
      }
      reader.onload = () => {
        const arr = reader.result.split(' ');
        let length = arr.length-1;
        for(let i = 0;i<4;i++){
          for(let p=0;p<4;p++){
            this.tableData[i][p] = arr[length];
            length--;
          }
        }
        console.log(arr)
        this.upfile = file.files[0].name;
      }
    },
    selectChange() {
      console.log(this.value)
      this.createTable(this.value)
      console.log(this.tableData)
    },
    createTable(num) {
      let obj={};
      let length;
      console.log(num,11)
      switch(num){
        case '4': length = 4; break;
        case '6': length = 8; break;
        case '8': length = 16; break;
      } 
    for(let i = 0;i< length; i++){
      obj[i] = '';
    }
    this.tableData = [];
    for(let i=0;i<length;i++){
      this.tableData.push(obj);
    }
    }
    }
}
</script>

<style lang="less" scoped>
.contain{
  margin: auto;
  width: 700px;
}
.table{
  margin: auto;
}
.file {
    position: relative;
    display: inline-block;
    background: #409EFF;
    border: 1px solid #99D3F5;
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
    background:blue;
    border-color: #78C3F3;
    text-decoration: none;
}
.upfile{
  float: left;
  margin-top: 10px;
}
.selectn{
  display: inline-block;
  margin-left: 5%;
}
.confirm{
  display: inline-block;
  margin-left: 3%;
}
.calcute{
  margin-top: 30px;
}
.bottom{
  margin-top: 20px;
}
</style>
