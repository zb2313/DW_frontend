<template>
  <div class="about">
<el-card><Statistics></Statistics></el-card>
    <el-card><Graph></Graph></el-card>
  </div>
</template>
<script>
import Statistics from "./Statistics";
import Graph from "./Graph";
export default {
  components: {
    Statistics,
    Graph
  },
  data(){
    return{
      tagsList:[],
      collapse:false
    }
  },
  created(){
    // const tagsList =
    //     this.$store.state.tagsList.map((item) => item.name);
  }

};
</script>
