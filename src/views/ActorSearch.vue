<template>
  <div>
    <el-form>
      <el-form-item>
        <span style="font-size: 20px">通过演员姓名查找演员 </span>
        <el-input v-model="inputName" style="width: 200px" placeholder="请输入演员姓名"></el-input>
        <el-button @click="searchID()">查询</el-button><br>
      </el-form-item>
    </el-form>
    <el-row :gutter="10">

      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light">
          <el-table
              style=""
              :data="actorList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              border class="table" ref="multipleTable" header-cell-class-name="table-header">
            <el-table-column prop="actor_id" label="演员ID" align="center"  min-width="30"></el-table-column>
            <el-table-column prop="actor_name" label="演员姓名" align="center"></el-table-column>
            <el-table-column
                fixed="right"
                align="center"
                label="操作"
                min-width="70"
            >
              <template slot-scope="scope">
                <el-button type="primary" size="small" @click="getDetails(scope.row)"
                >查看详细信息</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-pagination class="fy"
                         layout="prev, pager, next"
                         @current-change="current_change"
                         :total="total"
                         background
          >
          </el-pagination>
          <span>共{{actorList.length}}条搜索结果</span>
        </div>
      </el-col>

      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple">
          <el-card>
            导演ID:{{selectedActorId}} 导演姓名:{{selectedActorName}}
            <div class="crumbs">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                  <i class="el-icon-lx-cascades"></i> 经常合作的导演
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <el-table :data="directorRelation">
              <el-table-column prop="directorId" label="导演ID" align="center"  min-width="30"></el-table-column>
              <el-table-column prop="directorName" label="导演姓名" align="center"></el-table-column>
            </el-table>
            <div class="crumbs">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                  <i class="el-icon-lx-cascades"></i> 经常合作的演员
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <el-table :data="actorRelation">
              <el-table-column prop="actorId" label="演员ID" align="center"  min-width="30"></el-table-column>
              <el-table-column prop="actorName" label="演员姓名" align="center"></el-table-column>
            </el-table>

            <div class="crumbs">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                  <i class="el-icon-lx-cascades"></i> 拍摄的电影
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <el-table>
              <el-table-column>

              </el-table-column>

            </el-table>
          </el-card>
        </div>
      </el-col>

    </el-row>

  </div>
</template>

<script>
import {
  getActorDirectorRelation,
  getActorId, getActorMovie,
  getActorRelation
} from "../api/mysql/ActorSearch";
export default {
  name: "PeopleSearch",
  data()
  {
    return{
      total:1000,//默认数据总数
      pagesize:15,//每页的数据条数
      currentPage:1,//默认开始页面

      inputName:"jack",
      actorList:[],

      selectedActorId:"",
      selectedActorName:"",
      directorRelation:[],
      actorRelation:[],

      movies:[]
    }
  },
  methods:{
    current_change(currentPage){
      this.currentPage = currentPage;
    },
    searchID() {
      if(this.inputName==""){
        this.$message.warning("请输入演员姓名")
        return
      }
      this.getActorID()
    },
    getActorID(){
      getActorId(this.inputName).then(
          response=>{
            this.actorList=response.data;
            console.log(this.actorList)
          }
      )
    },
    getDetails(row){
      console.log(row.actor_id)
      this.selectedActorId=row.actor_id
      this.selectedActorName=row.actor_name
      getActorRelation(row.actor_id).then(
          response=>{
            this.actorRelation=response.data
            console.log(this.actorRelation)
          }
      )
      getActorDirectorRelation(row.actor_id).then(
          response=>{
            this.directorRelation=response.data
            console.log(this.directorRelation)
          }
      )
      getActorMovie(row.actor_id).then(
          response=>{
            this.movies=response.data
            this.movies=this.movies[0].movie_name.split('$')
            console.log(this.movies)
          }
      )


    }

  }
}
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
