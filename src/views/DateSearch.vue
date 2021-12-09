<template>
<div>
  <img src="https://m.media-amazon.com/images/I/51AMKMFP5DL._AC_.jpg">
  <span>按照日期查询</span>
  <el-select v-model="day" placeholder="请选择日期">
    <el-option
        v-for="item in dayoptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
  <el-button @click="getMovieByDay(day)">查询</el-button>
</div>
</template>

<script>
import {
  getByDay
} from "@/api/mysqlDateSearch";

export default {
  name: "DateSearch",
  data()
  {
    return{
      dataList:[],
      dayoptions:[],
      day:''
    }
  },
  created() {
    for(let i=1;i<=31;i++)
    {
      this.dayoptions.push({value:i,label:i.toString()})
    }
  },
  methods:{
    getMovieByDay(day)
    {
       if(day=='')
       {
         this.$message.error("请选择日期")
       }
       getByDay(day).then(
           response=>{
             console.log(response.data)
           }
       )
    }
  }
}
</script>

<style scoped>

</style>
