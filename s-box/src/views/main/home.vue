<template>
<div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="one"
      label="1"
      width="60">
    </el-table-column>
    <el-table-column
      prop="two"
      label="2"
      width="60"
      height="50">
    </el-table-column>
    <el-table-column
      prop="three"
      label="3"
      width="60"
      height="50">
    </el-table-column>
    <el-table-column
      prop="four"
      label="4"
      width="60">
    </el-table-column>
    <el-table-column
      prop="five"
      label="5"
      width="60">
    </el-table-column>
    <el-table-column
      prop="six"
      label="6"
      width="60">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        one: '8',
        two: '25',
        three: '1',
        four: '25',
        five: '87',
        six: '99'
      }, {
        one: '8',
        two: '25',
        three: '1',
        four: '25',
        five: '87',
        six: '99'
      }, {
        one: '8',
        two: '25',
        three: '1',
        four: '25',
        five: '87',
        six: '99'
      }, {
        one: '8',
        two: '25',
        three: '1',
        four: '25',
        five: '87',
        six: '99'
      },
      {
        one: '8',
        two: '25',
        three: '1',
        four: '25',
        five: '87',
        six: '99'
      },
      {
        one: '8',
        two: '25',
        three: '1',
        four: '25',
        five: '87',
        six: '99'
      }]
    }
  },
  mounted () {
    console.log(this.tableData)
    const obj = {
      one: 8,
      two: 25,
      three: 1,
      four: 25,
      five: 87,
      six: 99
    }
    function createNumber () {
      for (const i in obj) {
        obj[i] = Math.round(Math.random() * 1000)
      }
      return obj
    }
    for (let p = 0; p < this.tableData.length; p++) {
      Object.assign(this.tableData[p], createNumber())
    }
  }
}
</script>
