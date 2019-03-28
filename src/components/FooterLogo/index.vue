<template>
  <div class="footer">
    <ul class="footer-list">
      <li>Copyright © <span class="footer-list--green">中奥科技</span>. All Right Reserved.</li>
      <li>中奥科技发展（深圳）有限公司 粤ICP备18087365号</li>
      <li class="footer-list__bottom">
        <div class="footer-list__bottom__logo--border">
          <img src="./images/zalogo.png" alt="">
        </div>
        <div class="footer-list__bottom__logo">
          <img src="./images/mclogo.png" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'industryNews'
}
</script>

<style lang="scss" scoped>
@import '../../styles/common/px2rem.scss';
  .footer {
    flex-shrink: 0;
    background: #131313;
    width: 100%;
    height: px2rem(400);
    display: flex;
    align-items: center;
    justify-content: center;
    .footer-list {
      font-size: px2rem(26);
      color: #4b4b4b;
      display: flex;
      flex-direction: column;
      align-content: center;
      li {
        display: flex;
        justify-content: center;
        line-height: px2rem(40);
        
        .footer-list--green {
          color: #008f3e;
        }
      }
      .footer-list__bottom {
          height: px2rem(70);
          width: 100%;
          display: flex;
          justify-content: center;
          margin: px2rem(56) 0 0 0;
          padding: 0 px2rem(28);
          box-sizing: border-box;
          &__logo{
            width: 50%;
            height: 100%;
            justify-content: center;
            display: flex;
            padding: 0 px2rem(40);
            box-sizing: border-box;
            img {
              width: px2rem(250);
              height: px2rem(65);
            }
            &--border {
              @extend .footer-list__bottom__logo;
              border-right: 2px solid #1a1a1a;
            }
          }
        }
    }
  }
</style>

