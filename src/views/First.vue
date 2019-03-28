<template>
  <div class="first">
    <div class="main">
      <div class="main-logo">
        <img src="http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/bcde67073e674ad189c019299b01dfa4.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'first',
  data() {
    return {
      // appId:'',
      // timestamp:'',
      // nonceStr: '',
      // signature: ''
    }
  },
  methods:{
    share(){
      axios.get('/api/wx_sign').then((res)=>{
        console.log(res);
        let data = res.data;
        let appId = data.appId;
        let timestamp = data.timestamp;
        let nonceStr = data.nonceStr;
        let signature = data.signature;
        wx.config({
          debug: false, 
          appId: appId, // 必填，公众号的唯一标识
          timestamp: timestamp, // 必填，生成签名的时间戳
          nonceStr: nonceStr, // 必填，生成签名的随机串
          signature: signature, // 必填，签名，见附录1
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        
        wx.ready(function() {
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
          console.log('weixin 验证成功');
          // 分享到朋友圈
          wx.onMenuShareTimeline({
            title: '中奥科技官网', // 分享标题
            desc: '中奥科技官网', // 分享描述
            link: 'http://m.chinaogroup.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: '', // 分享图标
            success: function() {
              // 用户确认分享后执行的回调函数
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
            }
          });
          
          // 分享给朋友
          wx.onMenuShareAppMessage({
            title: '中奥科技官网', // 分享标题
            desc: '中奥科技官网', // 分享描述
            link: 'http://m.chinaogroup.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: '', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
              // 用户确认分享后执行的回调函数
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
            }
          });
          
          // 分享到QQ
          wx.onMenuShareQQ({
            title: '中奥科技官网', // 分享标题
            desc: '中奥科技官网', // 分享描述
            link: 'http://m.chinaogroup.com/#/first', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: '', // 分享图标
            success: function() {
              // 用户确认分享后执行的回调函数
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
            }
          });
    
    
            
            // 分享到QQ空间
            wx.onMenuShareQZone({
              title: '中奥科技官网', // 分享标题
              desc: '中奥科技官网', // 分享描述
              link: 'http://m.chinaogroup.com/#/first', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: '', // 分享图标
              success: function() {
                // 用户确认分享后执行的回调函数
              },
              cancel: function() {
                // 用户取消分享后执行的回调函数
              }
            });
        });
        wx.error(function(res) {
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
          console.log('weixin 验证失败');
          console.log(res);
        });
      })
    },

   
  },

  created() {
    this.share()
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/common/px2rem.scss';
  .first {
    flex: 1;
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    .main {
      height: 100%;
      width: 100%;
      background-size: cover;
      background-attachment: fixed;
      background-image: url('http://zhongao-web.oss-cn-hangzhou.aliyuncs.com/36d3980a949a4c0a8f14e5280b821258.png');
      // background-size: 100%;
      background-repeat: no-repeat;
      position: relative;
      display: flex;
      justify-content: center;
      .main-logo {
        padding-top: 14.8%;
        // height: 100%;
        width: px2rem(598);
        img{
          width: 100%;
        }
      }
    }
  }
</style>
