<template>
<div>
<el-row :gutter="3">
  <el-col :span=8>
    <span>mysql</span>
    <el-button @click="getByYM">年查询</el-button>
    <el-button @click="getByYMM">年月查询</el-button>
    <el-button @click="getByYMDM">年月日查询</el-button>
    响应时间 {{timeM}}s<br>
    年<el-input v-model="yearM" style="width: 150px"></el-input>
    月<el-input v-model="monthM" style="width: 150px"></el-input>
    日<el-input v-model="dayM" style="width: 150px"></el-input>

    <el-table>
      <el-table-column prop="asin" label="asin"></el-table-column>
      <el-table-column prop="title" label="电影名"></el-table-column>
    </el-table>
  </el-col>
  <el-col :span=8>
    <span>neo4j</span>
    <el-button @click="getByYN">年查询</el-button>
    <el-button @click="getByYMN">年月查询</el-button>
    <el-button @click="getByYMDN">年月日查询</el-button>
    响应时间 {{timeN}}s<br>
    年<el-input v-model="yearN" style="width: 150px"></el-input>
    月<el-input v-model="monthN" style="width: 150px"></el-input>
    日<el-input v-model="dayN" style="width: 150px"></el-input>
    <el-table>
      <el-table-column prop="asin" label="asin"></el-table-column>
      <el-table-column prop="title" label="电影名"></el-table-column>
    </el-table>
  </el-col>
  <el-col :span=8>
    <span>hive</span>
    <el-button @click="getByYH">年查询</el-button>
    <el-button @click="getByYMH">年月查询</el-button>
    <el-button @click="getByYMDH">年月日查询</el-button>
    响应时间 {{timeH}}s<br>
    年<el-input v-model="yearH" style="width: 150px"></el-input>
    月<el-input v-model="monthH" style="width: 150px"></el-input>
    日<el-input v-model="dayH" style="width: 150px"></el-input>
    <el-table>
      <el-table-column prop="asin" label="asin"></el-table-column>
      <el-table-column prop="title" label="电影名"></el-table-column>
    </el-table>
  </el-col>
</el-row>
</div>
</template>

<script>
import {
  getByYearMonthN,getByYearN,getByYearMonthDayN
} from "../api/neo4j/DateSearch";
import {
  getByYear,getByYearMonth,getByYearMonthDay
} from "../api/mysql/DateSearch";
import {
  getByYearH,getByYearMonthH,getByYearMonthDayH
} from "../api/hive/DateSearch";

export default {
  name: "DateCompare",
  data(){
    return{

      yearM:2000,
      monthM:"",
      dayM:"",
      movielistM:[],
      timeM:"",

      yearN:2000,
      monthN:"",
      dayN:"",
      movielistN:[],
      timeN:"",

      yearH:2000,
      monthH:"",
      dayH:"",
      movielistH:[],
      timeH:""
    }
  },
  methods:{
    getByYN(){
      let sendtime=(new Date()).getTime()
      getByYearN(this.yearN).then(
          response=>{
            let gettime=(new Date()).getTime()
            this.timeN=(gettime-sendtime)/1000
            this.movielistN=response.data
            console.log(response.data)
          }
      )
    },
    getByYMN(){
      let sendtime=(new Date()).getTime()
      getByYearMonthN(this.yearN,this.monthN).then(
          response=>{
            let gettime=(new Date()).getTime()
            this.timeN=(gettime-sendtime)/1000
            this.movielistN=response.data
            console.log(response.data)
          }
      )
    },
    getByYMDN(){
      let sendtime=(new Date()).getTime()
      getByYearMonthDayN(this.yearN,this.yearN,this.dayN).then(
          response=>{
            let gettime=(new Date()).getTime()
            this.timeN=(gettime-sendtime)/1000
            this.movielistN=response.data
            console.log(response.data)
          }
      )
    },

    getByYM(){
      let sendtime=(new Date()).getTime()
      getByYear(this.yearM).then(
          response=>{
            let gettime=(new Date()).getTime()
            this.timeM=(gettime-sendtime)/1000
            this.movielistM=response.data
            console.log(response.data)
          }
      )
    },
    getByYMM(){
      let sendtime=(new Date()).getTime()
       getByYearMonth(this.yearM,this.monthM).then(
          response=>{
            let gettime=(new Date()).getTime()
            this.timeM=(gettime-sendtime)/1000
            this.movielistM=response.data
            console.log(response.data)
          }
       )
    },
    getByYMDM(){
      let sendtime=(new Date()).getTime()
       getByYearMonthDay(this.yearM,this.monthM,this.dayM).then(
          response=>{
            let gettime=(new Date()).getTime()
            this.timeM=(gettime-sendtime)/1000
            this.movielistM=response.data
            console.log(response.data)
          }
       )
    },
    getByYH(){
       let sendtime=(new Date()).getTime()
       getByYearH(this.yearH).then(
           response=>{
             let gettime=(new Date()).getTime()
             this.timeH=(gettime-sendtime)/1000
             this.movielistH=response.data
             console.log(response.data)
           }
       )
    },
    getByYMH(){
      let sendtime=(new Date()).getTime()
       getByYearMonthH(this.yearH,this.monthH) .then(
           response=>{
             let gettime=(new Date()).getTime()
             this.timeH=(gettime-sendtime)/1000
             this.movielistH=response.data
             console.log(response.data)
           }
       )
    },
    getByYMDH(){
      let sendtime=(new Date()).getTime()
       getByYearMonthDayH(this.yearH,this.monthH,this.dayH).then(
           response=>{
             let gettime=(new Date()).getTime()
             this.timeH=(gettime-sendtime)/1000
             this.movielistH=response.data
             console.log(response.data)
           }
       )
    }
  }

}
</script>

<style scoped>

</style>
