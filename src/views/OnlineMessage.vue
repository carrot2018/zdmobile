<template>
<!-- 联系我们 详细的页面 -->
  <div class="onlineMessage">
    <HeaderLogo class="headerLogo"></HeaderLogo>
    <div class="main">
      <div class="mask"></div>
      <div class="title">
        <img src="../images/onlineMessage/online.png" alt="">
      </div>
      <div class="main__form">
          <form action="" method="post">
            <van-field 
              v-model="name" 
              placeholder="请输入您的姓名" 
              :error="false"
            />
            <van-field 
              v-model="phone" 
              placeholder="请输入您的手机号码" 
            />
            <van-field 
              v-model="eMail"  
              placeholder="请输入您的电子邮箱" 
            />
            <van-field 
              v-model="company" 
              placeholder="请输入您的工作单位，填写全称" 
            />
            <van-field 
              v-model="text" 
              type="textarea"
              placeholder="请告诉我们您的业务需求，我们会第一时间与您联系" 
              rows="5"
              autosize
            />
            <van-field 
              v-model="VerificationCode" 
              placeholder="请输入图形验证码" 
            >
            </van-field>
            <div class="refresh">
              <img src="../images/onlineMessage/refresh.png" alt="">
            </div>
            <div class="btn">
              <van-button type="primary">提交留言</van-button>
            </div>
           </form>
      </div>
      
    </div>
    <FooterLogo class="footerLogo"></FooterLogo>
  </div>
</template>

<script>
import { Button, Field, Cell, CellGroup } from 'vant';
import FooterLogo from '../components/FooterLogo';
import HeaderLogo from '../components/HeaderLogo';
export default {
  name: 'onlineMessage',
  data() {
    return {
      name:'',
      phone:'',
      eMail:'',
      company:'',
      text:'',
      VerificationCode:''
    }
  },

  components: {
    FooterLogo,
    HeaderLogo,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [Button.name]: Button,
  },

  methods: {
   
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/common/px2rem.scss';
/deep/ .van-field__body {
  height: px2rem(100);
}
/deep/ .van-cell {
  // height: px2rem(80);
  width: 100%;
  border-radius: px2rem(12);
  margin-bottom: px2rem(28);
  padding-left: px2rem(28);
  font-size: px2rem(28);
  &:nth-last-of-type(3) {
    width: px2rem(586);
  }
}
.refresh {
  position: absolute;
  right: 0;
  bottom: px2rem(200);
  img {
    height: px2rem(80);
    width: px2rem(80);
  }
}
/deep/ .van-button {
  border-radius: px2rem(8);
  height: px2rem(72);
  width: px2rem(200);
  line-height: px2rem(72);
}
/deep/ .btn {
  width: 100%;
  text-align: center;
  margin-bottom: px2rem(80);
  margin-top: px2rem(50);
}
  .onlineMessage {
    // background: #fff;
    flex: 1;
    flex-shrink: 0;
    // height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
   
    .main {
       background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/7daadeff427449f299620815b0412728.jpg');
      background-size: 100%;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .mask {
        width: 100%;
        height: px2rem(120);
        background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0))
      }
      .title {
        margin-top: px2rem(42);
        img {
          height: px2rem(83);
          width: px2rem(352);
        }
      }
      &__form {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: px2rem(40);
        form {
          // padding: px2rem(0) 0 px2rem(80) 0;
          position: relative;
          width: px2rem(686);
          input {
            height: px2rem(100);
            font-size: px2rem(28);
            padding-left: px2rem(28);
            margin-bottom: px2rem(28);
            box-sizing: border-box;
            color: #999;
            width: 100%;
            border-radius: px2rem(12);
          }
        }
      }
    }
  }
  
</style>
