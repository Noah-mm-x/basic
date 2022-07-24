<template>
  <div id="app-footer">
    <div class="container">
      <div class="content-wrap">
        <div class="about-me">
          <div class="title-wrap">
            关于我们
          </div>
          <div class="explain"> Whatishot做的不仅仅是大数据的搬运工作，我们更是一家专注于TikTok跨境电商的智能广告分析和选品平台，汇聚海量的商品信息和视频素材资源，让选品不在纠结，广告创意永不匮乏。</div>
        </div>
        <div class="clause">
          <div class="title-wrap">
            条款
          </div>
          <ul>
            <li>
              <a href="javascript:;">隐私政策</a>
            </li>
            <li>
              <a href="javascript:;">服务条款</a>
            </li>
          </ul>
        </div>
        <div class="contact">
          <div class="title-wrap">
            联系我们
          </div>
          <ul>
            <li>
              <p class="small">联系电话</p>
              <p class="big">+86 17332226718</p>
            </li>
            <li>
              <p class="small">联系邮箱</p>
              <p class="big">16269w7@163.com</p>
            </li>
          </ul>
        </div>
        <div class="wx">
          <p>客服微信</p>
          <img src="../../assets/img/common/1.jpeg"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

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
#app-footer {
  height: 255px;
  background: #2a2b36;
}
.content-wrap {
  display: flex;
  justify-content: flex-start;
  .title-wrap {
    position: relative;
    padding-left: 14px;
    color: #ffffff;
    font-family: PingFang SC;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 5px;
      width: 5px;
      height: 18px;
      background: #ffcd47;
    }
  }
  .about-me {
    padding-top: 48px;
    .explain {
      margin-top: 16px;
      width: 400px;
      color: #ffffff;
      font-family: PingFang SC;
      font-size: 14px;
      line-height: 28px;
      letter-spacing: 0px;
    }
  }
  .clause {
    margin-left: 290px;
    padding-top: 48px;
    ul {
      padding-top: 16px;
      li {
        margin-bottom: 12px;
        a {
          color: #ffffff;
          font-family: PingFang SC;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0px;
        }
      }
    }
  }
  .contact {
    margin-left: 100px;
    padding-top: 48px;
    ul {
      margin-top: 16px;
      li {
        margin-bottom: 12px;
        .small {
          margin-bottom: 4px;
          color: #c0c4cc;
          font-family: PingFang SC;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0px;
        }
        .big {
          color: #ffffff;
          font-family: Microsoft YaHei UI;
          font-weight: bold;
          font-size: 18px;
          line-height: 26px;
        }
      }
    }
  }
  .wx {
    padding-top: 92px;
    margin-left: 100px;
    p {
      color: #ffffff;
      font-family: PingFang SC;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
    }
    img {
      display: block;
      margin-top: 8px;
      width: 82px;
      height: 82px;
    }
  }
}
</style>
