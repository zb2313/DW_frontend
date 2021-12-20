<template>
<div>
  <el-button @click="getDAInfo">导演与演员合作次数排行</el-button>
  <el-button @click="getAAInfo">演员与演员合作次数排行</el-button>
  <el-button @click="getDDInfo">导演与导演合作次数排行</el-button>
  <el-card >
  <el-table :data="relationList"
            style="width: 500px">
    <el-table-column prop="bname" label="a"></el-table-column>
    <el-table-column prop="rnum" label="次数"></el-table-column>
    <el-table-column prop="aname" label="b"></el-table-column>
  </el-table>
  </el-card>
</div>
</template>

<script>
import {
    getDirectorActor,
    getDirectorDirector,
    getActorActor,
} from "../api/neo4j/collaborationSearch";
export default {
  name: "Cooperation",
  data(){
    return{
      relationList:[],
    }
  },
  methods:{
    getDDInfo(){
      getDirectorDirector().then(
          response=>{
            this.relationList=response.data
            console.log(this.relationList)
          }
      )
    },
    getAAInfo(){
      getActorActor().then(
          response=>{
            this.relationList=response.data
          }
      )
    },
    getDAInfo(){
      getDirectorActor().then(
          response=>{
            this.relationList=response.data
          }
      )
    },
  }
}
</script>

<style scoped>

</style>
