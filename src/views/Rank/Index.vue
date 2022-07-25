<template>
  <div id="rank">
    <div class="container rank-container">
      <div class="tabs-wrap">
        <el-tabs v-model="tabActiveName"
                 @tab-click="handleTabClick">
          <el-tab-pane v-for="(item,index) in tabList"
                       :key="index"
                       :label="item.label"
                       :name="item.name"></el-tab-pane>
        </el-tabs>
        <div class="expand-wrap">
          更新时间：2022.02.45 15:45:24
        </div>
      </div>
      <div class="filter-wrap">
        <div class="item-wrap">
          <p class="title">商品分类</p>
          <ul class="list">
            <li v-for="(item,index) in goodsList"
                :key="index"
                @click="handleGoodsFilter(item,index)">
              <a href="javascript:;"
                 :class="{'active': index === goodsAcitveIndex}">
                {{item.txt}}
              </a>
            </li>
          </ul>
        </div>
        <div class="item-wrap">
          <p class="title">国家</p>
          <ul class="list">
            <li v-for="(item,index) in countryList"
                :key="index"
                @click="handleCountryFilter(item,index)">
              <a href="javascript:;"
                 :class="{'active': index === countryAcitveIndex}">
                {{item.txt}}
              </a>
            </li>
          </ul>
        </div>
        <div class="item-wrap">
          <p class="title">统计周期</p>
          <ul class="list">
            <li v-for="(item,index) in timeList"
                :key="index"
                @click="handleTimeFilter(item,index)">
              <a href="javascript:;"
                 :class="{'active': index === timeAcitveIndex}">
                {{item.txt}}
              </a>
            </li>
            <li class="ml">
              <el-date-picker v-model="timeVal"
                              type="daterange"
                              range-separator="至"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期">
              </el-date-picker>
            </li>
          </ul>
        </div>
        <div class="long-line"></div>
        <div class="item-selecetd-wrap">
          <div class="left-item">
            <p class="title">已选</p>
            <ul class="list">
              <li>
                <div>电子产品/电脑配件/储存器</div>
                <a href="javascript:;">
                  <img src="@img/common/delete.svg"
                       alt="">
                </a>
              </li>
              <li>
                <div>电子产品</div>
                <a href="javascript:;">
                  <img src="@img/common/delete.svg"
                       alt="">
                </a>
              </li>
            </ul>
          </div>
          <a href="javascript:;"
             class="right-item">
            <img src="@img/common/clear.svg"
                 alt="">
            <p>清除所有条件</p>
          </a>
        </div>
      </div>
      <el-table :data="tableData"
                stripe>
        <el-table-column prop="rank"
                         label="排名"
                         align="center"
                         width="60px">
          <!-- scope.row -->
          <template slot-scope="rankScope">
            <div v-if="rankScope.$index == 0"
                 class="index">
              <img @click="handleTest(rankScope)"
                   src="@img/common/1st.svg"
                   alt="">
            </div>
            <div v-else-if="rankScope.$index == 1"
                 class="index">
              <img @click="handleTest(rankScope)"
                   src="@img/common/2nd.svg"
                   alt="">
            </div>
            <div v-else-if="rankScope.$index == 2"
                 class="index">
              <img @click="handleTest(rankScope)"
                   src="@img/common/3rd.svg"
                   alt="">
            </div>
            <div v-else
                 class="index">{{rankScope.$index}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         label="商品名称"
                         width="320px">
          <template slot-scope="nameScope">
            <div class="goods-wrap">
              <img class="img"
                   src="@img/common/1.jpeg"
                   alt="">
              <div class="info-wrap">
                <div class="title">(KK) Masker Duckbill 1box 50pcs / Masker Earloop Polos 3D 3ply Mask Earloop Protective(KK) Masker Duckbill 1box 50pcs / Masker Earloop Polos 3D 3ply Mask Earloop Protective</div>
                <div class="type">女装/女装/女装</div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="price"
                         label="单价">
          <template slot="header">
            <a href="javascript:;"
               class="sort-wrap">
              <p>单价</p>
              <img src="../../assets/img/common/sort.svg"
                   alt="">
            </a>
          </template>
          <template slot-scope="priceScope">
            <p class="dark-txt">{{priceScope.row.price}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="saleAdd"
                         label="销量增量">
          <template slot="header">
            <a href="javascript:;"
               class="sort-wrap">
              <p>销量增量</p>
              <img src="../../assets/img/common/sort.svg"
                   alt="">
            </a>
          </template>
          <template slot-scope="saleAddScope">
            <p class="bright-txt">{{saleAddScope.row.saleAdd}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="totalNum"
                         label="总销量">
          <template slot="header">
            <a href="javascript:;"
               class="sort-wrap">
              <p>总销量</p>
              <img src="../../assets/img/common/sort.svg"
                   alt="">
            </a>
          </template>
          <template slot-scope="totalNumScope">
            <p class="bright-txt">{{totalNumScope.row.totalNum}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="saleNumAdd"
                         label="销售额增量">
          <template slot="header">
            <a href="javascript:;"
               class="sort-wrap">
              <p>销售额增量</p>
              <img src="../../assets/img/common/sort.svg"
                   alt="">
            </a>
          </template>
          <template slot-scope="saleNumAddScope">
            <p class="bright-txt">{{saleNumAddScope.row.saleNumAdd}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="totalSale"
                         label="总销售额">
          <template slot="header">
            <a href="javascript:;"
               class="sort-wrap">
              <p>总销售额</p>
              <img src="../../assets/img/common/sort.svg"
                   alt="">
            </a>
          </template>
          <template slot-scope="totalSaleScope">
            <p class="bright-txt">{{totalSaleScope.row.totalSale}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="site"
                         label="所属站点">
          <template slot-scope="siteScope">
            <div class="img-txt-wrap">
              <img src="@img/common/1.jpeg"
                   alt="">
              <p class="bright-txt">{{siteScope.row.site}}</p>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabActiveName: 'first',
      tabList: [
        {
          label: '畅销榜',
          txt: '畅销榜',
          name: 'first'
        },
        {
          label: '新品榜',
          txt: '新品榜',
          name: 'second'
        },
      ],
      goodsList: [
        {
          txt: '全部',
          param: ''
        },
        {
          txt: '电脑办公',
          param: ''
        },
        {
          txt: '美妆个护',
          param: ''
        },
        {
          txt: '鞋靴箱包',
          param: ''
        },
        {
          txt: '生活厨具',
          param: ''
        },
        {
          txt: '生活家居',
          param: ''
        },
        {
          txt: '手机数码',
          param: ''
        },
        {
          txt: '服装服饰',
          param: ''
        },
        {
          txt: '家用电器',
          param: ''
        },
        {
          txt: '其他',
          param: ''
        },
      ],
      goodsAcitveIndex: 0,
      countryList: [
        {
          txt: '全部',
          param: ''
        },
        {
          txt: '美国',
          param: ''
        },
        {
          txt: '英国',
          param: ''
        },
        {
          txt: '法国',
          param: ''
        },
        {
          txt: '其他',
          param: ''
        },
      ],
      countryAcitveIndex: 0,
      timeList: [
        {
          txt: '日榜',
          param: ''
        },
        {
          txt: '周榜',
          param: ''
        },
        {
          txt: '月榜',
          param: ''
        }
      ],
      timeAcitveIndex: 0,
      timeVal: '',
      tableData: [
        {
          rank: 1,
          name: 1,
          price: '$45.12',
          saleAdd: '$544.4K',
          totalNum: '$544.4K',
          saleNumAdd: '$544.4K',
          totalSale: '$544.4K',
          site: 1
        },
        {
          rank: 1,
          name: 1,
          price: '$45.12',
          saleAdd: '$544.4K',
          totalNum: '$544.4K',
          saleNumAdd: '$544.4K',
          totalSale: '$544.4K',
          site: 1
        },
        {
          rank: 1,
          name: 1,
          price: '$45.12',
          saleAdd: 1,
          totalNum: 1,
          saleNumAdd: 1,
          totalSale: 1,
          site: 1
        },
        {
          rank: 1,
          name: 1,
          price: '$45.12',
          saleAdd: 1,
          totalNum: 1,
          saleNumAdd: 1,
          totalSale: 1,
          site: 1
        },
        {
          rank: 1,
          name: 1,
          price: '$45.12',
          saleAdd: 1,
          totalNum: 1,
          saleNumAdd: 1,
          totalSale: 1,
          site: 1
        },
        {
          rank: 1,
          name: 1,
          price: '$45.12',
          saleAdd: 1,
          totalNum: 1,
          saleNumAdd: 1,
          totalSale: 1,
          site: 1
        },
      ]
    }
  },
  mounted () {
    console.log(11)
  },
  methods: {
    handleTabClick () {
      console.log('tabActiveName', this.tabActiveName)
    },
    handleTest (val) {
      console.log(val)
    },
    handleGoodsFilter (item, index) {
      this.goodsAcitveIndex = index
    },
    handleCountryFilter (item, index) {
      this.countryAcitveIndex = index
    },
    handleTimeFilter (item, index) {
      this.timeAcitveIndex = index
    }
  }
}
</script>

<style scoped lang="scss">
@import '@css/var.scss';
#rank {
  .rank-container {
    padding-top: 28px;
  }
}
</style>
