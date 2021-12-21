<template>
<div>
  <span style="color: #2d8cf0">电影模糊搜索 请输入电影名</span>
<el-input v-model="inputName" style="width: 500px" placeholder="请输入电影名称"></el-input>
  <el-button @click="searchByTitle">查询</el-button>
  <el-table :data="movies">
    <el-table-column prop="asin" label="asin"></el-table-column>
    <el-table-column prop="title" label="电影名"></el-table-column>
    <el-table-column prop="actorsName" label="演员"></el-table-column>
    <el-table-column prop="imdbScore" label="imdb评分"></el-table-column>
  </el-table>
</div>
</template>

<script>
import {getByFuzzyTitle} from "../api/mysql/MovieSearch";
export default {
  name: "TraceSource",
  data(){
    return{
      inputName:"harry potter",
      movies:[]
    }
  },
  created() {
    this.searchByTitle()
  },
  methods:{
    searchByTitle(){
      if(this.inputName==""){
        this.$message.warning("请输入影片名")
        return
      }
      getByFuzzyTitle(this.inputName).then(
          response=>{
            this.movies=response.data
            console.log(this.movies)
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
