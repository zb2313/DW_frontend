<template>
<div>
  <el-button @click="getInfo"></el-button>
  <el-table :data="aandd">
    <el-table-column prop="b.name" label="a"></el-table-column>
    <el-table-column prop="r.num" label="次数"></el-table-column>
    <el-table-column prop="a.name" label="b"></el-table-column>
  </el-table>
  {{aanda}}
  {{danda}}
  {{aandd}}
  {{dandd}}
</div>
</template>

<script>
import {
    getDirectorActor,
    getDirectorDirector,
    getActorActor,
    getActorDirecctor
} from "../api/neo4j/collaborationSearch";
export default {
  name: "Cooperation",
  data(){
    return{
      aanda:[],
      aandd:[],
      danda:[],
      dandd:[]
    }
  },
  methods:{
    getInfo(){
      getDirectorDirector().then(
          response=>{
            this.dandd=response.data
            console.log(this.dandd[0].a)
          }
      )
      getActorDirecctor().then(
          response=>{
            this.aandd=response.data
            console.log(this.aandd)
          }
      )
      getActorActor().then(
          response=>{
            this.aanda=response.data
            console.log(this.aanda)
          }
      )
      getDirectorActor().then(
          response=>{
            this.danda=response.data
            console.log(this.danda)
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
