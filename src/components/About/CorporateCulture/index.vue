<template>
<!-- 关于中奥 > 企业文化 -->
  <div class="corporateCulture">
    <div class="content">
      <div class="title">
        <img src="../../../images/aboutZa/title_3.png" alt="">
      </div>
      <div class="main">
        <div 
          class="main__label"
          v-for="(item, index) in labels"
          :key="index"
          >
          <div class="main__label__title">
            <i class="bg-left"></i>
            <span>{{item.title}}</span>
            <i class="bg-right"></i>
          </div>
          <div class="main__label__head">
            {{item.head}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labels:[
        {
          title:'中奥科技定位',
          head:'中国餐厨生态服务平台'
        },
        {
          title:'中奥科技使命',
          head:'为餐厨产业打造健康有序的生态环境'
        },
        {
          title:'中奥科技愿景',
          head:'建立中国餐厨生态标准化体系'
        },
        {
          title:'中奥科技价值观',
          head:'诚信 奉献 分享 感恩 和谐 共赢'
        },
        {
          title:'中奥科技精神',
          head:'聚焦 创新 严谨 高效'
        },
        {
          title:'中奥科技经营理念',
          head:'整合产业 服务产业 规范产业 提升产业'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../styles/common/px2rem.scss';
  .corporateCulture {
    background: #f5f5f5;
    .content {
      display: flex;
      flex: 1;
      padding: 0 px2rem(20);
      flex-direction: column;
      .title {
        height: px2rem(84);
        margin: px2rem(60) 0 0 0;
        display: flex;
        justify-content: center;
        img {
          width: px2rem(388);
          height: px2rem(84);
        }
      }

      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        .main__label {
          &:nth-last-child(1) {
            margin-bottom: px2rem(88);
          }
        }
      }
    }
  }
  .main__label__title {
    margin-top: px2rem(80);
    display: flex;
    align-items: center;
    justify-content: center;
    .bg-left {
      display: inline-block;
      height: px2rem(6);
      width: px2rem(72);
      background-size: 100%;
      background-image: url('../../../images/aboutZa/title_left.png');
      background-repeat: no-repeat;
    }
    .bg-right {
      display: inline-block;
      height: px2rem(6);
      width: px2rem(72);
      background-size: 100%;
      background-image: url('../../../images/aboutZa/title_right.png');
      background-repeat: no-repeat;
    }
    span {
      display: inline-block;
      font-family:'PingFang SC';
      font-size: px2rem(28);
      color: #333;
      margin: 0 px2rem(12)
    }
  }
  .main__label__head {
    display: inline-block;
    font-size: px2rem(40);
    color: #004982;
    margin-top: px2rem(30);
    font-weight: 600; 
  }
  
</style>
