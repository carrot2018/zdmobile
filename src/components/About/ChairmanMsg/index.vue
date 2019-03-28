<template>
<!-- 关于中奥 > 董事长寄语 -->
  <div class="chairmanMsg">
    <div class="content">
      <div class="title">
        <img src="../../../images/aboutZa/title_2.png" alt="">
      </div>
      <div class="main">
        <div class="main__img1 imgs">
          <img src="../../../images/aboutZa/Chairman.png" alt="">
        </div>
        <p class="main__p">{{p1}}</p>
        <p class="main__p">{{p2}}</p>
        <p class="main__p">{{p3}}</p>
        <p class="main__p">{{p4}}</p>
        <p class="main__p">{{p5}}</p>
        <p class="main__p">{{p6}}</p>
        <p class="main__p">{{p7}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p1:"中奥公司经几番寒暑，数度春秋，从无到有，从小到大，从弱到强。如今的中奥已经发展成为一家集菜品研发与培训、餐饮管理培训、餐饮品牌孵化，餐厨产业链服务平台、食材安全管理、食材电商平台、线下智慧仓储物流，绿色食材体验中心、农家休闲旅游等为一体的大型现代化企业，也是目前国内第一的餐厨产业链服务平台。",
      p2:"为满足人民群众日益增长的美好生活需求，国家出台政策大力支持中国餐饮、中华饮食文化在新时代的大发展大繁荣，中奥公司顺势而为、乘势而上，制定了“以菜品研发带动整个餐饮行业大发展”、“以大中城市绿色食材中心为支点布局全国”的整体发展战略，并在国内率先建立起了覆盖厨师群体、餐饮行业的生态体系；与此同时，中奥更加重视菜品研发与培训人才队伍建设，更加重视餐饮管理培训、餐饮品牌孵化人才的引进与培养，更加重视食材安全标准化管理，更加重视线下智慧物流体系的研发与创新，更加重视绿色食材体验、农家休闲旅游模式的改革与完善，由于战略得当，中奥公司版图迅速拓展，如今在全国几乎所有的大中城市都已经有了中奥人热情服务、倾心奉献的身影。",
      p3:"中奥公司茁壮成长、蓬勃发展的源泉主要体现在“六个不断完善”上：一是不断完善品牌发展战略，主动适应快速变化的大环境；二是不断完善组织管理规章制度，让大小事务“有法可依”；三是不断完善企业文化架构及培训宣导，提升文化凝聚力；四是不断完善创新意识、创新能力，营造“创新，人人可为，人人有责”的浓厚氛围，使企业始终保有旺盛的生命力；五是不断完善团队意识、责任意识，稳步提高团队战斗力；六是不断完善和提高各职能部门实际工作能力，形成整体工作合力。",
      p4:"以先进的企业战略文化为强大牵引力，不断提高企业品牌价值和员工荣誉感，不断夯实可持续发展的基础，中奥公司经历了凤凰涅磐地锻造与磨练，迎来了浴火重生地华丽蜕变，如今的中奥公司正处在自成立以来的最好发展时期！",
      p5:"取之社会、用之社会，勇敢承担社会责任更是义不容辞，中奥公司一直把国家战略、公益事业、救助工程等做成集团工作的一部分来贯彻执行。我们不但关注食品安全，更要付之行动，参与到食品安全的监督、治理、规范中去，为国家食品安全战略建言献策，为公益事业、救助工程尽绵薄之力。中奥更感到自己要做的还有很多，中奥将进一步深耕细作，加强自身影响力，加大公益投入，让更多的人享有营养健康安全的美食。",
      p6:"“雄关漫道真如铁，而今迈步从头越”。我国人口众多，社会发展不充分不平衡，离“人人享有营养健康安全美食”的宏伟目标，还有很长的路要走。做为中奥公司董事长，深感责任重大，使命光荣，更不敢因为一点成绩而有丝毫放松和懈怠，我将和中奥公司全体员工一道，以“敢为天下先”的气魄，奋力拼搏、锐意创新、赶超先进、跻身一流，为中国餐饮、中华饮食文化担大责，尽大力。",
      p7:"旌旗猎猎，号角嘹亮，万马齐鸣，中奥公司迎着朝阳，向着光明，踏上了新的征程。",
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../styles/common/px2rem.scss';
  .chairmanMsg {
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
        display: flex;
        flex-direction: column;
        align-items: center;
        .imgs {
          img {
            width: 100%;
            height: 100%;
          }
        }
        .main__img1 {
          height: px2rem(680);
          width: px2rem(750);
          margin-bottom: px2rem(30);
        }
        .main__p {
          font-size: px2rem(30);
          line-height: px2rem(36);
          color: #333;
          text-indent:2em;
          margin-bottom: px2rem(28);
          &:nth-last-child(1) {
            margin-bottom: px2rem(88);
          }
        }
      }
    }
  }
</style>
