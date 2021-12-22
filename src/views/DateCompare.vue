<template>
<div>
<el-row :gutter="3">
  <el-col span=8>
    <span>mysql日期查询</span>
    <el-button>年查询</el-button>
    <el-button>年月查询</el-button>
    <el-button>年月日查询</el-button>
    响应时间 {{timeM}}s
    <el-table>
      <el-table-column label="asin"></el-table-column>
      <el-table-column label="电影名"></el-table-column>
    </el-table>
  </el-col>
  <el-col span=8>
    <span>neo4j日期查询</span>
    <el-button @click="getByYN">年查询</el-button>
    <el-button>年月查询</el-button>
    <el-button>年月日查询</el-button>
    响应时间 {{timeN}}s
    <el-table>
      <el-table-column label="asin"></el-table-column>
      <el-table-column label="电影名"></el-table-column>
    </el-table>
  </el-col>
  <el-col span=8>
    <span>hive日期查询</span>
    <el-button>年查询</el-button>
    <el-button>年月查询</el-button>
    <el-button>年月日查询</el-button>
    响应时间 {{timeH}}s
    <el-table>
      <el-table-column label="asin"></el-table-column>
      <el-table-column label="电影名"></el-table-column>
    </el-table>
  </el-col>
</el-row>
</div>
</template>

<script>
import {
  getByYearMonthN,getByYearN,getByYearMonthDayN
} from "../api/neo4j/DateSearch";
import {getByYear} from "../api/mysql/DateSearch";
export default {
  name: "DateCompare",
  data(){
    return{

      yearM:"",
      monthM:"",
      dayM:"",
      movielistM:[],
      timeM:"",

      yearN:"",
      monthN:"",
      dayN:"",
      movielistN:[],
      timeN:"",

      yearH:"",
      monthH:"",
      dayH:"",
      movielistH:[],
      timeH:""
    }
  },
  methods:{
    getByYN(){
      getByYearN(this.yearN).then(
          response=>{
            this.movielistN=response.data
            console.log(response.data)
          }
      )
    },
    getByYMN(){
      getByYearMonthN(this.yearN,this.monthH).then(
          response=>{
            this.movielistN=response.data
            console.log(response.data)
          }
      )
    },
    getByYMDN(){
      getByYearMonthDayN().then(

      )
    },
    getByYM(){
      getByYear(this.yearM).then(
          response=>{
            this.movielistM=response.data
            console.log(response.data)
          }
      )
    }
  }

}
</script>

<style scoped>

</style>
