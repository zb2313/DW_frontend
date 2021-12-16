<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12">
        <div id="myChart" :style="{width: '1000px', height: '800px'}"></div>
      </el-col>
      <el-col :span="1" :offset="7">
        <el-button >查询</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Statistics",
  data() {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption(this.option);
    }
  }
}
</script>

<style scoped>

</style>