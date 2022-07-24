<template>
  <div id="self">
    <el-tabs v-model="tabActiveName"
             @tab-click="handleTabClick">
      <el-tab-pane v-for="(item,index) in tabList"
                   :key="index"
                   :label="item.label"
                   :name="item.name"></el-tab-pane>
    </el-tabs>
    <!-- 基础信息 -->
    <div class="basic-wrap">
      <ul>
        <li>
          <p class="type">用户头像</p>
          <div class="avatar-wrap">
            <img src="@img/common/1.jpeg"
                 alt="">
            <a href="javascript:;">更换头像</a>
          </div>
        </li>
        <li>
          <p class="type">用户ID</p>
          <p class="single">CRUSH497</p>
        </li>
        <li>
          <p class="type">电子邮箱</p>
          <div class="txt-link">
            <p>未绑定</p>
            <a href="javascript:;">去绑定</a>
          </div>
        </li>
        <li>
          <p class="type">手机绑定</p>
          <div class="txt-link">
            <p>未绑定</p>
            <a href="javascript:;">去绑定</a>
          </div>
        </li>
        <li>
          <p class="type">微信绑定</p>
          <div class="txt-link">
            <p>未绑定</p>
            <a href="javascript:;">去绑定</a>
          </div>
        </li>
        <li>
          <p class="type">公司名称</p>
          <div class="txt-link">
            <p>未绑定</p>
            <a href="javascript:;">去绑定</a>
          </div>
        </li>
        <li>
          <p class="type">会员等级</p>
          <div class="txt-txt-btn">
            <p class="big">VIP1</p>
            <p class="small">剩25天</p>
            <el-button type="primary"
                       size="small"
                       round>开通/续费</el-button>
          </div>
        </li>
      </ul>
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
          label: '基础信息',
          txt: '基础信息',
          name: 'first'
        },
        {
          label: '密码设置',
          txt: '密码设置',
          name: 'second'
        },
      ],
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import '@css/var.scss';
#self {
  width: 996px;
  height: 486px;
  background: #ffffff;
}
.basic-wrap {
  padding-top: 24px;
  ul {
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 24px;
      .type {
        margin-right: 24px;
        width: 56px;
        height: 22px;
        text-align: right;
        color: $--color-text-regular;
        font-family: PingFang SC;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0px;
      }
      .avatar-wrap {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 1px solid #e4e7ed;
        }
        a {
          display: block;
          margin-left: 24px;
          color: $--color-primary;
          font-family: PingFang SC;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0px;
        }
      }
      .single {
        color: $--color-text-primary;
        font-family: PingFang SC;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
      }
      .txt-link {
        display: flex;
        justify-content: flex-start;
        p {
          color: $--color-text-primary;
          font-family: PingFang SC;
          font-weight: 600;
          font-size: 14px;
          line-height: 22px;
        }
        a {
          display: block;
          margin-left: 24px;
          color: $--color-primary;
          font-family: PingFang SC;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0px;
        }
      }
      .txt-txt-btn {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .big {
          color: $--color-text-primary;
          font-family: PingFang SC;
          font-weight: 600;
          font-size: 14px;
          line-height: 22px;
        }
        .small {
          margin-left: 8px;
          margin-right: 24px;
          color: $--color-text-regular;
          font-family: PingFang SC;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0px;
        }
      }
    }
  }
}
</style>
