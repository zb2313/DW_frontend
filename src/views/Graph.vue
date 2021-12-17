<template>
  <div>

    <el-row :gutter="20">
      <el-col :span="12">
        <div id="myChart" :style="{width: '1000px', height: '800px'}"></div>
      </el-col>
      <el-col :span="3" style="position: absolute; right: 10%;">
        <el-row>
          <el-radio v-model="radio1" label="1" border>导演id</el-radio>
        </el-row>
        <el-row>
          <el-radio v-model="radio1" label="2" border>演员id</el-radio>
        </el-row>
        <el-row>
          <el-input
              placeholder="请输入id"
              v-model="idInput"
              clearable>
          </el-input>
        </el-row>
        <el-row>
          <el-radio v-model="radio2" label="1" border>年</el-radio>
        </el-row>
        <el-row>
          <el-radio v-model="radio2" label="2" border>类别</el-radio>
        </el-row>
        <el-row>
          <el-button @click="showGraph1">绘制图表</el-button>
        </el-row>
        <el-row>
          <el-button>年份类别绘制图表</el-button>
        </el-row>
        <el-row>
          <el-button>类别分数绘制图表</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  getByYearIdType,
  getByStyleIdType,
} from "@/api/mysql/CombinationSearch";

export default {
  name: "Graph",
  data() {
    return {
      radio1: '1',
      radio2: '1',
      idInput: '',
      yearOrStyleInput: '',
      styleNames: [
        "Drama",
        "Comedy",
        "Action%20%26%20Adventure",
        "Movies",
        "All%20Sony%20Pictures%20Titles",
        "Documentary",
        "Kids%20%26%20Family",
        "Horror",
        "All%20Titles",
        "Animation",
        "All%20MGM%20Titles",
        "Fantasy",
        "General",
        "TV",
        "Musicals",
        "All%20BBC%20Titles",
        "All%20HBO%20Titles",
        "Classics",
        "All%20Lionsgate%20Titles",
        "All%20Fox%20Titles",
      ],
    };
  },
  methods: {
    drawLine(option) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption(option, true);
    },
    async showGraph1Year() {
      var myoption = {
        xAxis: {
          type: 'category',
          data: [],
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [],
            type: 'line'
          }
        ]
      }
      for (var i = 1990; i < 2021; i++) {
        await getByYearIdType(i, this.idInput, this.radio1).then(
            res => {
              myoption.xAxis.data.push(i)
              myoption.series[0].data.push(Object.getOwnPropertyNames(res.data).length)
            }
        )
            .catch(function () {
              i--
            })
      }
      this.drawLine(myoption)
    },
    async showGraph1Style() {
      var myoption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: []
          }
        ]
      }
      for (var i in this.styleNames) {
        console.log(i)
        await getByStyleIdType(this.styleNames[i], this.idInput, this.radio1).then(
            res => {
              if (Object.getOwnPropertyNames(res.data).length != 0) {
                var name = this.styleNames[i].replace(/%20/g,' ')
                name = name.replace(/%26/g, '&')
                myoption.xAxis[0].data.push(name)
                myoption.series[0].data.push(Object.getOwnPropertyNames(res.data).length)
              }
            }
        )
            .catch(function () {
              i--
            })
      }

      this.drawLine(myoption)
    },
    showGraph1() {
      if (this.radio2 == 1) {
        this.showGraph1Year()
      } else {
        this.showGraph1Style()
      }
    },
  },
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  margin-left: 20px;
}
</style>