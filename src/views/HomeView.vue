<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <el-button type="primary">主要按钮</el-button>
    <div
      id="chart"
      ref="chart"
      style="width: 100px;height:400px;"
    />
    <div class="box">hhhh</div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'HomeView',
  components: {
  },
  async mounted () {
    // console.log(11, this.$post)
    // const params = {
    //   a: 1
    // }
    // const data = await this.$post('baid', params)
    // console.log(data)
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      // 若是echarts只想在当前页面引用，可以直接引入，然后修改即可！
      const myChart = echarts.init(document.getElementById('chart'))
      // 以下全局，我引入echarts属性（若是多个页面需要引入echarts的话，一定要在main.js中引入
      // const myChart = this.$echarts.init(this.$refs.chart);
      // 指定图表的配置项和数据
      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' },
              { value: 484, name: '联盟广告' },
              { value: 300, name: '视频广告' }
            ]
          }
        ]
        // 使用刚指定的配置项和数据显示图表。
      }
      myChart.setOption(option)
    }
  }
}
</script>
<style scoped lang="scss">
.box{
  width: 100px;
  height: 100px;
  background: coral;
  padding: 10px;
}
</style>
