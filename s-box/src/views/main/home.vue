<template>
  <div class="contain">
    <div class="table">
      <el-table :data="tableData" border style="width: 700px" height="400">
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
    <div class="bottom">
      <div class="upfile">
        <a href="javascript:;" class="file">
          select file
          <input type="file" name @change="handleChange()" ref="file" />
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
            :value="item.value"
          ></el-option>
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
  data() {
    return {
      tableData: [
        {
          0: "87",
          1: "8",
          2: "25",
          3: "1"
        },
        {
          0: "12",
          1: "8",
          2: "25",
          3: "1"
        },
        {
          0: "9",
          1: "8",
          2: "25",
          3: "1"
        },
        {
          0: "2",
          1: "8",
          2: "25",
          3: "1"
        }
      ],
      options: [
        {
          value: "4",
          label: "4"
        },
        {
          value: "6",
          label: "6"
        },
        {
          value: "8",
          label: "8"
        }
      ],
      value: "4", // 矩阵行列
      file: "",
      upfile: ""
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
  methods: {
    indexMethod(index) {
      return index; // 列索引
    },
    handleChange() {
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
        let length = arr.length - 1;
        let value = this.value; // value为矩阵的行列数
        let num;
        switch (value) {
          case "4":
            num = 4;
            break;
          case "6":
            num = 8;
            break;
          case "8":
            num = 16;
            break;
        }
        for (let i = 0; i < num; i++) {
          // 读取文件，写入表格
          for (let p = 0; p < num; p++) {
            this.tableData[i][p] = arr[length];
            length--; // 问题:深浅拷贝，在createTable函数中共用了一个obj，使得数据相同，解决:JSON.parse(JSON.stringfy(obj))
          }
        }
        this.upfile = file.files[0].name;
      };
    },
    selectChange() {
      this.createTable(this.value); // 根据输入值选择表格矩阵
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
        case "6":
          length = 8;
          break;
        case "8":
          length = 16;
          break;
      }
      for (let i = 0; i < length; i++) {
        obj[i] = "";
      }
      this.tableData = [];
      for (let i = 0; i < length; i++) {
        this.tableData.push(JSON.parse(JSON.stringify(obj))); //浅拷贝实现简单的数据拷贝
      }
    }
  }
};
</script>

<style lang="less" scoped>
.contain {
  margin: auto;
  width: 700px;
}
.table {
  margin: auto;
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
  margin-top: 10px;
}
.selectn {
  display: inline-block;
  margin-left: 5%;
}
.confirm {
  display: inline-block;
  margin-left: 3%;
}
.calcute {
  margin-top: 30px;
}
.bottom {
  margin-top: 20px;
}
</style>
