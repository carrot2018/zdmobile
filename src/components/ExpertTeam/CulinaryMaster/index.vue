<template>
<!-- 研发团队 > 烹饪大师顾问 -->
  <div class="culinaryMaster">
    <div class="content">
      <div class="main">
        <p class="main__p">{{ text1 }}</p>

        <div class="main__box box-right">
          <div class="main__box__img">
            <img src="./images/liu.png" alt="">
          </div>
          <div class="main__box__expert">
            <div class="main__box__expert__text">
              <span>{{ expert[0].name }}</span>
              <p>{{ expert[0].introduce }}</p>
            </div>
          </div>
        </div>

        <div class="main__box box-left">
          <div class="main__box__expert">
            <div class="main__box__expert__text">
              <span>{{ expert[1].name }}</span>
              <p>{{ expert[1].introduce }}</p>
            </div>
          </div>
          <div class="main__box__img">
            <img src="./images/zhang.png" alt="">
          </div>
        </div>

        <div class="main__box box-right">
          <div class="main__box__img">
            <img src="./images/lan.png" alt="">
          </div>
          <div class="main__box__expert">
            <div class="main__box__expert__text">
              <span>{{ expert[2].name }}</span>
              <p>{{ expert[2].introduce }}</p>
            </div>
          </div>
        </div>

        <div class="main--push">
          <span>上拉刷新...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text1:"我们邀约与聘请来自全国各省\各区的顶尖厨师与美食庄家，在各大研发中心进行菜品的开发与制作，通过对当地食材的眼科甄别，根据地方食材特点设计、制作出一道道精美绝味的菜品。",
      expert:[
        {
          name:'刘敬贤',
          introduce:'中国烹饪协会首席顾问，中国烹饪协会理事，中国烹饪协会名厨专业委员会副主任，中国特一级烹饪大师、国际烹饪艺术大师、国家高级烹调技师、餐饮业国家级评委、国际评委',
        },
        {
          name:'张金春',
          introduce:'中国新厨神，二十一世纪烹饪少帅，满汉全席三连冠金牌得主 终身金勺奖，国家级评委，国家职业技能裁判员，中国鲁菜大师',
        },
        {
          name:'兰明路',
          introduce:'四川省名厨联谊会委员 ，中国史派川菜传承人，中国烹饪大师，公认的川菜新领军人物',
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../styles/common/px2rem.scss';
  .culinaryMaster {
    background: #f5f5f5;
    .content {
      display: flex;
      flex: 1;
      padding:  px2rem(40);
      flex-direction: column;
      .main {
        position: relative;
        .main__p {
          font-size: px2rem(28);
          color: #333;
          text-indent:2em;
          line-height: px2rem(30);
          padding: 0 0 px2rem(10) 0;
        }
        .main__box {
          margin-top: px2rem(48);
          height: px2rem(256);
          // display: flex;
          // align-items: center;
          // justify-content: flex-end;
          &__expert {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 100%;
            width: px2rem(602);
            //  padding: px2rem(10);
          // box-sizing: border-box;
            border-radius: px2rem(20);
            box-shadow: px2rem(-5) px2rem(5) px2rem(35) rgba(0, 0, 0, 0.1);
            &__text {
                width: px2rem(402);
                padding: px2rem(30);
               span {
                 display: inline-block;
                font-size: px2rem(36);
                color: #333;
                margin-bottom: px2rem(32);
                font-weight: 600;
              }
              p {
                font-size: px2rem(24);
                line-height: px2rem(30);
                color: #333;
                overflow:hidden;
                text-overflow: ellipsis;
                display:-webkit-box;
                -webkit-line-clamp:4;
                -webkit-box-orient:vertical;
              }
            }
          }
        }
        .box-right {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          flex-direction: column;
          position: relative;
          .main__box__img {
             width: px2rem(200);
            height: px2rem(200);
            border-radius: 50%;
            position: absolute;
            left: 0;
            img {
              height: 100%;
              width: 100%; 
            }
          }
          
        }

        .box-left {
          display: flex;
          justify-content: center;

          flex-direction: column;
          position: relative;
          position: relative;
          .main__box__img {
            width: px2rem(200);
            height: px2rem(200);
            border-radius: 50%;
            position: absolute;
            right: 0;
            img {
              height: 100%;
              width: 100%; 
            }
          }
          .main__box__expert {
            display: flex;
            justify-content: flex-start;
          }
        }

        .main--push {
          margin: px2rem(56) 0 0 0;
          text-align: center;
          span {
            font-size: px2rem(26);
            color: #b0b0b0;

          }
        }
      }
    }
  }
</style>
