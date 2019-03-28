<template>
<!-- 关于中奥 > 中奥简介 -->
  <div class="zaIntroduce">
    <div class="content">
      <div class="title">
        <img src="../../../images/aboutZa/title_1.png" alt="">
      </div>
      <div class="main">
        <div class="main__img1 imgs">
          <img src="../../../images/aboutZa/jianjie2.png" alt="">
        </div>
        <p class="main__p">{{p1}}</p>
        <div class="main__img2 imgs">
          <img src="../../../images/aboutZa/mcLogo.png" alt="">
        </div>
        <p class="main__p">{{p2}}</p>
        <div class="main__img3 imgs">
          <img src="../../../images/aboutZa/jianjie3.png" alt="">
        </div>
        <p class="main__p">{{p3}}</p>
        <div class="main__img4 imgs">
          <img src="../../../images/aboutZa/jianjie4.png" alt="">
        </div>
        <p class="main__p">{{p4}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p1:"  中奥科技典团是一家专注于中国餐厨产业链生态系统建设与规范的综合性服务企业，下设有名厨之家服务平台、食材安全标准中心、绿色食材体验中心、菜品研发推广中心、菜品技能培训中心、智慧仓储物流中心、农家休闲旅游中心．其业务涵盖菜品研发推广、菜品技能培训、餐饮管理培训、餐饮品牌孵化、厨师综台服务、 食材安全管理、菜品标准制定、 食材供应商城、智慧仓储物流、摘选食材体验、农家休闲旅游等等。自成立以来．中奥科技集团秉承为服务厨师群体、净化餐饮行业的理念．为餐厨产业链提供精准、周到的服务，现已发展成为中国第一家餐厨产业链一体化集成商。",
      p2:"  旗下“名厨之家”餐厨产业链服务平台，以”中华奖食文化在新时代的大发展大繁荣”为己任．紧紧围绕厨师开展工作，下辖新闻、资讯、社交、活动、培训、菜品、招聘、商城、资源整合等诸多业务，秉承“天下出事一家亲”理念，始终积极为厨师发声．关心厨师，帮助厨师、让厨师价值最大化．成为广大厨师不可或缺的手机 APP平台，目前．名厨之家注册厨师超过 500 万，注册公饮类及相关企业 200 余万家．成为中国厨师群体、餐饮行业最大的聚集高地!",
      p3:"  人才是第一资源，中奥不断完善和创新现代企业管理制度，高度重视对公司员工的情感关怀、困难排解及心理辅导，积极落实“入职即入学”制度，不断完善内部培训体系，目前，公司已经聚集了一批曾经就职于 BAT 、华为、新浪、周大福等企业的核心高管团队，并已形成“老中青”相衔接，“高中初”相协调的梯级人才队伍，并形成“传帮带”的良好学习、工作氛围，为公司长期可持续发展提供了源源不竭的动力，伴随公司的发展壮大，公司员工享受到的发展成果也越来越多。",
      p4:"  中奥将紧紧抓住“互联网+”时代历史机会，开拓思维、创新品牌、高效整合资源、狠抓服务品质、夯实企业文化体系，打造中国餐厨产业链生态系统，为中国烹饪、中华饮食文化在新时代的转型升级、健康发展探索全新模式，树立全新标杆， 真正把人民对营养健康安全食品的新需求落到实处。"
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../styles/common/px2rem.scss';
  .zaIntroduce {
    background: #f5f5f5;
    .content {
      display: flex;
      flex: 1;
      padding: 0 px2rem(40);
      flex-direction: column;
      .title {
        height: px2rem(84);
        margin: px2rem(60) 0 px2rem(26) 0;
        display: flex;
        justify-content: center;
        img {
          width: px2rem(388);
          height: px2rem(84);
        }
      }

      .main {
        // flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .main__p {
          font-size: px2rem(30);
          line-height: px2rem(36);
          color: #333;
          text-indent:2em;
          &:nth-last-child(1) {
            margin-bottom: px2rem(88);
          }
        }
        .imgs {
          img {
            width: 100%;
            height: 100%;
          }
        }
        .main__img1 {
          height: px2rem(360);
          width: px2rem(670);
          margin-bottom: px2rem(30);
        }
        .main__img2 {
          height: px2rem(102);
          width: px2rem(400);
          margin: px2rem(48) 0 px2rem(52) 0;
        }
        .main__img3 {
          height: px2rem(370);
          width: px2rem(670);
          margin: px2rem(50) 0 px2rem(50) 0;
        }
        .main__img3 {
          height: px2rem(370);
          width: px2rem(670);
          margin: px2rem(50) 0 px2rem(50) 0;
        }
        .main__img4 {
          height: px2rem(484);
          width: px2rem(670);
          margin: px2rem(50) 0 px2rem(50) 0;
        }
      }
    }
  }
</style>
