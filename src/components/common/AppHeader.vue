<template>
  <div id="app-header">
    <div class="header-wrap">
      <div class="left-group-wrap">
        <a id="logo"
           href="/">
          <img src="@img/header/logo.svg"
               alt="">
        </a>
        <div class="line"></div>
        <div class="select-wrap">
          <div class="txt">独立站数据选品</div>

        </div>
      </div>
      <div class="right-group-wrap">
        <ul class="guide-list">
          <li v-for="(item,index) in guideList"
              :key="index">
            <a :href="item.link">{{item.txt}}</a>
          </li>
        </ul>
        <div class="input-wrap">
          <div class="left-item">
            <a href="javascript:;">
              <div class="txt">商品</div>
              <img src="@img/common/drop.svg"
                   alt="">
            </a>
            <div class="line"></div>
          </div>
          <el-input class="input-ele"
                    v-model="searchVal"
                    placeholder="请输入搜索关键词"></el-input>
        </div>
        <div class="avatar">
          <img src="@img/common/1.jpeg"
               alt="头像">
        </div>
        <div class="language-wrap">
          <div class="txt">中文</div>
          <img src="@img/common/drop.svg"
               alt=""
               srcset="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      guideList: [
        {
          txt: '首页',
          link: '/',
          param: ''
        },
        {
          txt: '商品',
          link: '/',
          param: ''
        },
        {
          txt: '独立站',
          link: '/',
          param: ''
        },
        {
          txt: '选品库',
          link: '/',
          param: ''
        },
      ],
      searchVal: ''
    }
  }
}
</script>

<style scoped lang="scss">
@import '@css/var.scss';
#app-header {
  height: 60px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px -1px rgba(235, 238, 245, 1) inset;
}
.header-wrap {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding-left: 48px;
  padding-right: 26px;
  .left-group-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .line {
      margin-left: 16px;
      margin-right: 28px;
      width: 1px;
      height: 24px;
      background: rgba(220, 223, 230, 1);
    }
    .select-wrap {
      .txt {
        top: 18px;
        left: 227px;
        width: 118px;
        height: 24px;
        color: $--color-text-primary;
        font-family: PingFang SC;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
  .right-group-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .guide-list {
      display: flex;
      justify-content: flex-start;
      li {
        margin-left: 12px;
        a {
          padding: 0 16px;
          color: $--color-text-primary;
          font-family: PingFang SC;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0px;
          line-height: 60px;
          &.active {
            color: $--color-text-primary;
            font-weight: 600;
          }
        }
      }
    }
    .input-wrap {
      display: flex;
      justify-content: flex-start;
      margin-left: 32px;
      width: 240px;
      height: 38px;
      border-radius: 100px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      background: #ffffff;
      padding-left: 16px;
      .left-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        a {
          display: flex;
          align-items: center;
          height: 100%;
          .txt {
            width: 28px;
            height: 22px;
            color: #606266;
            font-family: PingFang SC;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 0px;
          }
          img {
            display: block;
            margin-left: 4px;
            width: 16px;
            height: 16px;
          }
        }
        .line {
          margin-left: 4px;
          width: 1px;
          height: 20px;
          background: #dcdfe6;
        }
      }
      .input-ele {
        display: flex;
        align-items: center;
        width: 150px;
        height: 100%;
        ::v-deep input {
          height: 30px;
          border: none;
        }
      }
    }
    .avatar {
      margin-left: 32px;
      width: 32px;
      height: 32px;
      img {
        display: block;
        width: 100%;
        height: 100%;
        border: 1px solid #e4e7ed;
        border-radius: 50%;
      }
    }
    .language-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 8px 0 12px;
      margin-left: 16px;
      width: 64px;
      height: 28px;
      border-radius: 2px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      .txt {
        color: $--color-text-regular;
        font-family: PingFang SC;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0px;
      }
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
