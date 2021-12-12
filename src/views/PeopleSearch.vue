<template>
<div>
  <span>通过导演姓名查找导演ID</span>
  <el-input v-model="inputName" style="width: 200px" placeholder="请输入导演姓名"></el-input>
  <el-button @click="searchID()">查询</el-button><br>

  <div class="container" style="margin-top: 70px">
    <el-table
        style="width: 600px;text-align: center"
        :data="directorList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        border class="table" ref="multipleTable" header-cell-class-name="table-header">
      <el-table-column prop="director_id" label="演员ID" align="center"  min-width="30"></el-table-column>
      <el-table-column prop="director_name" label="演员姓名" align="center"></el-table-column>
    </el-table>
    <el-pagination class="fy"
                   layout="prev, pager, next"
                   @current-change="current_change"
                   :total="total"
                   background
    >
    </el-pagination>
    <span>共{{directorList.length}}条搜索结果</span>
  </div>

</div>
</template>

<script>
import {
  getDirectorId
} from "@/api/mysql/DirectorSearch";
export default {
  name: "PeopleSearch",
  data()
  {
    return{
      total:1000,//默认数据总数
      pagesize:15,//每页的数据条数
      currentPage:1,//默认开始页面

      inputName:"",
      directorList:[]
    }
  },
  methods:{
    current_change(currentPage){
      this.currentPage = currentPage;
    },
    searchID()
    {
      if(this.inputName==""){
        this.$message.warning("请输入导演姓名")
        return
      }
      this.getDirID()
    },
    getDirID(){
      getDirectorId(this.inputName).then(
          response=>{
            this.directorList=response.data;
            console.log(this.directorList)
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
