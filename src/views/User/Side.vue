<template>
  <div id="side">
    <div class="content">
      <ul>
        <li v-for="(item,index) in list"
            :key="index">
          <a href="javascript:;"
             :class="{'acitve':activeIndex === index}">
            <img v-if="activeIndex === index"
                 :src="item.activeIcon"
                 alt="">
            <img v-else
                 :src="item.icon"
                 alt="">
            <p>{{item.txt}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import self from '@img/user/self.svg'
import focus from '@img/user/focus.svg'
import order from '@img/user/order.svg'
import aself from '@img/user/aself.svg'
import afocus from '@img/user/afocus.svg'
import aorder from '@img/user/aorder.svg'
export default {
  data () {
    return {
      list: [
        {
          icon: self,
          activeIcon: aself,
          txt: '个人资料',
          link: '/'
        },
        {
          icon: focus,
          activeIcon: afocus,
          txt: '我的关注',
          link: '/'
        },
        {
          icon: order,
          activeIcon: aorder,
          txt: '订单记录',
          link: '/'
        },
      ],
      activeIndex: 0
    }
  },
  created () {
    this.judgeActiveIndex()
  },
  mounted () {

  },
  methods: {
    // 根据路由判断选中的元素
    judgeActiveIndex () {

    }
  }
}
</script>

<style scoped lang="scss">
@import '@css/var.scss';
.content {
  padding: 12px;
  width: 180px;
  height: 400px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  background: #ffffff;
  ul {
    li {
      margin-bottom: 10px;
      a {
        padding: 0 26px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 156px;
        height: 54px;
        border-radius: 4px;
        &.acitve {
          background: $--color-primary;
          p {
            color: #ffffff;
          }
        }
        img {
          display: block;
          width: 20px;
          height: 20px;
        }
        p {
          margin-left: 10px;
          text-align: center;
          color: $--color-text-primary;
          font-family: PingFang SC;
          font-weight: 500;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0px;
        }
      }
    }
  }
}
</style>
