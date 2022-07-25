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
    <div v-if="false"
         class="basic-wrap">
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
    <!-- 密码设置 -->
    <div class="password-setting">
      <ul>
        <li>
          <p>旧密码</p>
          <div class="input-wrap">
            <el-input size="small"
                      placeholder="请输入内容"
                      v-model="oldPwd">
            </el-input>
            <a class="btn"
               href="javascript:;">
              <img src="@img/user/see.svg"
                   alt="">
            </a>
          </div>
        </li>
        <li>
          <p>新密码</p>
          <div class="input-wrap">
            <el-input size="small"
                      placeholder="请输入内容"
                      v-model="newPwd">
            </el-input>
            <a class="btn"
               href="javascript:;">
              <img src="@img/user/see.svg"
                   alt="">
            </a>
          </div>
        </li>
        <li>
          <p>确认密码</p>
          <div class="input-wrap">
            <el-input size="small"
                      placeholder="请重新输入新密码"
                      v-model="confirmPwd">
            </el-input>
            <a class="btn"
               href="javascript:;">
              <img src="@img/user/see.svg"
                   alt="">
            </a>
          </div>
        </li>
        <li class="btn-wrap">
          <el-button type="primary"
                     size="small">保存</el-button>
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
      oldPwd: '',
      newPwd: '',
      confirmPwd: ''
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
.password-setting {
  ul {
    width: 380px;
    padding-top: 24px;
    li {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 24px;
      &.btn-wrap {
        justify-content: flex-end;
      }
      p {
        margin-right: 24px;
        width: 56px;
        text-align: right;
        color: $--color-text-regular;
        font-family: PingFang SC;
        font-size: 14px;
        line-height: 32px;
        letter-spacing: 0px;
      }
      .input-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;
        width: 300px;
        height: 32px;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        .el-input {
          height: 30px;
          :deep(input) {
            height: 30px;
            border: none;
          }
        }
        .btn {
          display: block;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>
