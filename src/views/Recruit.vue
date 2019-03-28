<template>
<!-- 联系我们 详细的页面 -->
  <div class="recruit">
    <HeaderLogo class="headerLogo"></HeaderLogo>
    <div class="banner">
      <img src="../images/recruit/BANNER.jpg" alt="">
    </div>
    <div class="title">
      <img src="../images/recruit/title.png" alt="">
    </div>
    <div class="main">
      <div class="main__title">
        <span>你一路积蓄能量，一路寻觅、等待，等待一个契</span>
        <span>机，点燃梦想，改写命运！就等你来发邮件：</span>
        <span>HR@ZHINGAO.COM</span>
      </div>

      <div class="main__content">
        <ul class="main__content__list">
          <li 
            v-for="(item, index) in posts"
            :key="index"
            class="main__content__list__item"
            >
            <div class="box">
             
              <div class="box__title">
                <h5 class="box__title__float">{{ item.position }}</h5>
                <h5>{{ item.position }}</h5>
                <div class="box__title__border"></div>
                <span>{{item.place}} | {{item.years}} | {{item.education}} | {{item.number}}名</span>
              </div>

              <div 
              v-html="item.content" class="box__list">
              </div>
              
              <div class="box__footer">
                <h2>投递方式</h2>
                <span>有意向者请将简历发送HR@zhongao.com</span>
              </div>

              <!-- <img class="box__img__left"
                :src="'../../static/images/0'+item.id+'.png'" alt=""> -->
                <img class="box__img__left"
                :src="item.imgSrc" alt="">
              <img class="box__img__right" src="../images/recruit/ying.png" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <FooterLogo class="footerLogo"></FooterLogo>
  </div>
</template>

<script>
import FooterLogo from '../components/FooterLogo';
import HeaderLogo from '../components/HeaderLogo';
export default {
  name: 'contacaDetail',
  data() {
    return {
      posts:[
        {
          id: '1',
          position:'董事长助理', // 职位
          number: 1, // 人数
          education: '本科', // 学历
          years: '5年以上', // 年限
          place: '深圳',
          imgSrc: require('../../static/images/01.png'),
          content:'<h2>岗位职责：</h2><ul><li>协助董事长做好综合、协调各部门工作和处理日常事务。</li><li>及时收集和了解各部门的工作动态，协助董事长协调各部门之间有关的业务工作，掌握全公司主要活动情况。</li><li>协助董事长收集各部门重要报表，并校对各项重要数据，根据核对结果对各部门进行绩效考核，并根据绩效评价结果实施对员工的奖惩工作。 </li><li>负责组织公司通用管理标准规章制度的拟定、修改和编写工作，协助参与专用管理标准及管理制度的拟定、讨论、修改工作。 </li><li>协助董事长执行公司战略、管理公司战略、优化公司战略。</li></ul><h2>岗位要求</h2><ul><li>本科及以上学历，5年以上互联网行业经验；</li><li>具有成功主导大中型互联网公司管理运营经验； </li><li>有较强的互联网基因，对互联网的发展有独到的见解；</li><li>对互联网企业产品、技术、运营、品牌有深刻的了解和管理经验； </li><li>具备良好的沟通协调能力、工作推进实施能力和独立解决问题的能力。</li></ul>'
        },
        {
          id: '2',
          position:'品牌总监', // 职位
          number: 2, // 人数
          education: '本科', // 学历
          years: '5年以上', // 年限
          place: '深圳',
          imgSrc: require('../../static/images/02.png'),
          content:'<h2>岗位职责：</h2><ul><li>负责公司整体和产品的品牌定位与宣传规划，包括品牌战略规划、品牌形象策略、媒体资源整合、宣传活动执行等；</li><li>承担公司或产品品牌中长远的形象规划和实施，参与公司营销目标战略研究，并为公司营销战略实现提供品牌支持；</li><li>根据公司品牌规划，组织协调各类媒体、广告公司、公司内部等资源落实相应的品牌传播计划；对品牌广告的预算、审核、管理负责； </li><li>收集、分析、评估竞争对手的品牌表现及市场活动动态信息，完善和建立自身及竞品品牌评测体系，以支持公司相关决策。 </li></ul><h2>岗位要求</h2><ul><li>了解互联网产品和用户的特点，熟悉互联网营销的知识和规律，热爱于互联网行业并希望长期发展；</li><li>年以上品牌营销相关经验，尤其有互联网产品的营销经验； </li><li>良好的职业素养，拥有3年以上成熟的团队管理经验，并带领过10人以上团队；</li><li>优秀的策略思考能力、学习能力、沟通协调和资源整合能力，能够适应快速迭代的互联网节奏，并根据市场和用户需求的变化进行策略、人员、资源的调整和应对；</li><li>有互联网行业品牌建设、管理、传播从业背景优先。</li></ul>'
        },
        {
          id: '3',
          position:'运营总监', // 职位
          number: 2, // 人数
          education: '本科', // 学历
          years: '5年以上', // 年限
          place: '深圳',
          imgSrc: require('../../static/images/03.png'),
          content:'<h2>岗位职责：</h2><ul><li>全面负责平台运营策略制定、方案统筹、平台商业模式探索工作；</li><li>根据运营策略进行具体运营方案和计划的制定，负责产品、专题、活动的整体策划与执行；</li><li>负责各内容板块的规划、功能设置及规则设定；</li><li>对平台的用户注册、活跃度、转化率等数据进行统计分析，并形成总结分析报告，对运营方案进行优化，提升平台流量、转化率及购买率；</li><li>负责平台食材电商规划、模式设计、运营等工作；</li><li>负责完成市场调研、运营分析、活动效果分析、总结、优化，为平台运营发展提供建设性意见；</li><li>负责团队搭建及管理工作；</li><li>负责与内部各相关部门保持良好的沟通，与线上线下运营团队合作推进各项运营指标的顺利实施。</li></ul><h2>岗位要求</h2><ul><li>本科及以上学历，5年以上互联网产品或平台的运营经验，具备大型互联网产品运营团队管理经验，有开放平台运营经验优先；</li><li>有厨师社群平台、食材电商运营经验者优先；</li><li>具备出色的沟通能力及项目管理能力，能够积极协调各方资源拓展业务和流量；</li><li>具备出色的学习能力与商业敏感度，有成功推动实施互联网平台商业模式的经验； </li><li>熟练运用数据分析方法，不断优化运营策略，达到业务目标。</li></ul>'
        },
        {
          id: '4',
          position:'运营经理', // 职位
          number: 2, // 人数
          education: '本科', // 学历
          years: '5年以上', // 年限
          place: '深圳',
          imgSrc: require('../../static/images/04.png'),
          content:'<h2>岗位职责：</h2><ul><li>全面负责平台运营策略制定、执行工作；</li><li>负责各内容板块的规划、功能设置及规则设定；</li><li>对平台的用户注册、活跃度、转化率等数据进行统计分析，并形成总结分析报告，对运营方案进行优化，提升平台流量、注册量；</li><li>负责完成市场调研、运营分析、活动效果分析、总结、优化，为平台运营发展提供建设性意见；</li><li>负责团队搭建及管理工作；</li><li>负责与内部各相关部门保持良好的沟通，与线上线下运营团队合作推进各项运营指标的顺利实施。</li></ul><h2>岗位要求</h2><ul><li>本科及以上学历，3年以上互联网产品或平台的运营经验，具备大型互联网产品运营团队管理经验，有开放平台运营经验优先；</li><li>有社群运营经验、有食材电商运营经验者优先；</li><li具备出色的沟通能力及项目管理能力，能够积极协调各方资源拓展业务和流量；</li><li>具备出色的学习能力与商业敏感度，有成功推动实施互联网平台商业模式的经验；</li><li>熟练运用数据分析方法，不断优化运营策略，达到业务目标。</li></ul>'
        }
      ]
    }
  },

  components: {
    FooterLogo,
    HeaderLogo,
  },

  methods: {
   
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/common/px2rem.scss';
  .recruit {
    background: #f5f5f5;
    flex: 1;
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .banner {
      width: 100%;
      height: px2rem(562);
      img {
        width: 100%;
      }
    }
    .title {
      // z-index: 500;
      flex-shrink: 0;
      // height: px2rem(203);
      background: #f5f5f5;
      border-radius: px2rem(30) px2rem(30) 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: px2rem(29) 0 px2rem(26) 0;
      // align-content: center;
      // justify-content: center;
      img {
        height: px2rem(83);
        width: px2rem(352);
      }
    }

    .main {
      background: #f5f5f5;
      &__title {
        span {
          display: block;
          text-align: center;
          font-size: px2rem(30);
          line-height: px2rem(42);
          color: #666;
          &:nth-last-of-type(1) {
            color: #333;
          }
        }
      }
      &__content {
        flex: 1;
        margin: px2rem(64) 0 px2rem(88) 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        &__list {
          width: px2rem(686);
          &__item {
            margin-bottom: px2rem(32);
            
            .box {
              padding: px2rem(25) px2rem(25) 0 px2rem(32);
              background: #fff;
              border-radius: px2rem(24);
              position: relative;
              
              &__img__left {
                position: absolute;
                height: px2rem(99);
                width: px2rem(104);
                top: px2rem(32);
                left: px2rem(32);
              }

              &__img__right {
                height: px2rem(80);
                width: px2rem(102);
                position: absolute;
                top: px2rem(25);
                right: px2rem(25);
              }

              &__title {
                position: relative;
                margin-top: px2rem(53);
                height: px2rem(138);
                &__float {
                  position: absolute;
                  top: 0;
                  left: 0;
                }
                h5 {
                  z-index: 501;
                  font-size: px2rem(40);
                  color: #333;
                  font-weight: 600;
                }
                &__border {
                  height: px2rem(3);
                  width: px2rem(48);
                  background: #2585cd;
                  margin: px2rem(14) 0 px2rem(0) 0;
                }
                span {
                  font-size: px2rem(30);
                  color: #999;
                }
              }

              &__list {
                
                /deep/ h2 {
                  font-size: px2rem(32);
                  color: #2585cd;
                }
                /deep/ ul{
                  margin: px2rem(26) 0 px2rem(50) 0;
                  color: #2585cd;
                  // list-style-type: disc;
                  li {
                    // list-style-position: inside;
                    color:#666;
                    font-size: px2rem(28);
                    line-height: px2rem(42);
                    &::before {
                      content: '\2022 ';
                      color: #2585cd;
                      padding-right: 0.3em;
                    }
                  }
                }
              }

              &__footer {
                h2 {
                  font-size: px2rem(32);
                  color: #2585cd;
                }
                span {
                  display: inline-block;
                  margin: px2rem(26) 0 px2rem(80) 0;
                  font-size: px2rem(32);
                  color: #333;
                  font-weight: 600;
                }
              }
            }

          }
        }
      }
    }
  }
  
</style>
