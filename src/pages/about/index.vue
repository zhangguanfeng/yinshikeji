<template>
  <div class="about">
    <div class="swipes">
      <h2>技术实力</h2>
      <mt-swipe :auto="4000" >
        <mt-swipe-item>
          <div class="img">
            <div class="about_icon">
              <div class="about_icon_unit">
                <div class="about_icon_unit_img">
                  <img src="../../assets/images/IPTV_ico.png" alt="">
                </div>
                <span>IPTV系统</span>
              </div>
              <div class="about_icon_unit">
                <div class="about_icon_unit_img">
                  <img src="../../assets/images/Linux_ico.png" alt="">
                </div>
                <span>Linux路由</span>
              </div>
              <div class="about_icon_unit">
                <div class="about_icon_unit_img">
                  <img src="../../assets/images/huancun_ico.png" alt="">
                </div>
                <span>缓存系统</span>
              </div>
            </div>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="swipesTwo">
            <div class="dynamic_information_text">
              <span></span>
              <p>引视公司成立于2018年。</p>
            </div>
            <div class="dynamic_information_text">
              <span></span>
              <p>是一家专业从事Linux路由、缓存系统、IPTV系统、的专业科技公司。</p>
            </div>
            <div class="dynamic_information_text">
              <span class="dian"></span>
              <p>我们立志于为中小宽度运营商提供从机房建设到市场运营，从软件到硬件的一揽子解决方案。</p>
            </div>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="swipesTwo">
            <div class="dynamic_information_text">
              <span class="dian"></span>
              <p>公司的核心团队成员均拥有多年大型Linxu系统软件开发经验并在行业内取得多个重大技术突破和创新成果。</p>
            </div>
            <div class="dynamic_information_text">
              <span></span>
              <p>腾龙系列产品一直深爱用户的好评。</p>
            </div>
            <div class="dynamic_information_text">
              <span></span>
              <p>“服务无止境，技术永创新”来做出我们的承诺。</p>
            </div>
            <div class="dynamic_information_text">
              <span></span>
              <p>在未来我们将以更好的更优秀的产品为广大客户提供优质服务。</p>
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="dynamic_information">
      <h3>独有技术专利</h3>
      <div class="dynamic_information_left">
        <div class="dynamic_information_text">
          <span></span>
          <p>动态内存切片技术。</p>
        </div>
        <div class="dynamic_information_text">
          <span></span>
          <p>HLS高速预读技术。</p>
        </div>
        <div class="dynamic_information_text">
          <span></span>
          <p>基于intel DPDK的低功耗视频编码技术。</p>
        </div>
        <div class="dynamic_information_text">
          <span></span>
          <p>主动视频缓存技术。</p>
        </div>
        <div class="dynamic_information_text">
          <span></span>
          <p>Android高速软解播放器框架。</p>
        </div>
      </div>
      <div class="picture">
        <img src="../../assets/images/about1.png" alt="">
      </div>
    </div>
    <div class="contact">
      <h2>联系方式</h2>
      <div class="about_icon">
        <div class="about_icon_unit">
          <div class="about_icon_unit_img">
            <img src="../../assets/images/weixin.png" alt="">
          </div>
          <span>微信</span>
          <p>hz1380013800</p>
        </div>
        <div class="about_icon_unit">
          <div class="about_icon_unit_img">
            <img src="../../assets/images/QQ .png" alt="">
          </div>
          <span>QQ</span>
          <p>478269761</p>
        </div>
        <div class="about_icon_unit">
          <div class="about_icon_unit_img">
            <img src="../../assets/images/dianhua.png" alt="">
          </div>
          <span>手机号</span>
          <p>13829914910</p>
        </div>
      </div>
    </div>
    <div class="site">
      <h2>公司位置</h2>
      <div class="about_icon">
        <p><i class="iconfont icon-dingwei"></i> 惠州市惠城区江北云山东路18号信息产业园A605</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "about",
    data() {
      return {
      }
    },
  };

</script>

<style lang="less" scoped>

/deep/.mint-swipe-indicator{
  background: #2929cc ;
  width: 15px ;
  height: 15px ;
  opacity:1;
}
/deep/.is-active{
  background: #fff;
}
  .about {

    // 轮播部分
    .swipes {
      margin-top: 40px;
      border-radius: 30px;
      box-shadow: 0px 0px 20px #ebebfa;
      overflow: hidden;
      
      h2 {
        padding-top: 22px;
        padding-bottom: 42px;
        font-size: 35px;
        font-weight: 800;
        color: #2929cc;
        text-align: center;
      }

      .mint-swipe {
        height: 280px;

        .img {
          width: 100%;
          height: 100%;
          overflow: hidden;
          text-align: center;
          padding: 0 28px;
          box-sizing: border-box;

          .about_icon {
            display: flex;
            justify-content: space-between;
            height: 203px;

            .about_icon_unit {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              color: #2929cc;

              span {
                font-weight: 800;
              }
              .about_icon_unit_img{
                border-radius: 50%;
                background: #eee;
                width: 132px;
                height: 132px;
              }
              // 
            }
          }

          img {
            width: 100%;
          }
        }
      }
    }
    .swipesTwo {
        box-sizing: border-box;
        padding-left: 22px ;
        .dynamic_information_text {
          box-sizing: border-box;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 25px;
          padding-top: 20px;
          &:first-child {
            padding-top: 0;
          }

          // margin-left: 30px;
          .dian{
            width: 15px;
          }
          span {
            display: inline-block;
            border-radius: 50%;
            width: 10px;
            height: 10px;
            margin-right: 15px;
            background: #292bcb;
          }

          p {
            color: #2929cc;
          }
        }
      }

    // 技术专利部分
    .dynamic_information {
      position: relative;
      margin-top: 42px;
      margin-bottom: 42px;
      box-sizing: border-box;
      box-shadow: 0px 0px 20px #ebebfa;
      width: 100%;
      border: 1px solid #dcdcdc;
      border-radius: 20px;
      // height: 363px;
      padding: 22px 30px;

      h3 {
        text-align: center;
        color: #2929cc;
        font-size: 35px;
        margin-bottom: 42px;
      }

      .dynamic_information_left {
        box-sizing: border-box;

        .dynamic_information_text {
          box-sizing: border-box;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 25px;
          padding-top: 30px;

          &:first-child {
            padding-top: 0;
          }

          // margin-left: 30px;

          span {
            display: inline-block;
            border-radius: 50%;
            width: 10px;
            height: 10px;
            margin-right: 15px;
            background: #292bcb;
          }

          p {
            color: #2929cc;
          }
        }
      }

      .picture {
        position: absolute;
        top: 120px;
        right: 30px;
        width: 280px;
        height: 260px;
        z-index: -1;

        img {
          width: 100%;
        }
      }
    }

    // 联系信息部分
    .contact {
      margin-bottom: 42px;
      border-radius: 30px;
      box-shadow: 0px 0px 20px #ebebfa;
      width: 100%;
      // height: 372 px;
      overflow: hidden;
      // text-align: center;
      padding: 0 28px;
      box-sizing: border-box;

      h2 {
        padding-top: 22px;
        padding-bottom: 42px;
        font-size: 35px;
        font-weight: 800;
        color: #2929cc;
        text-align: center;
      }

      .about_icon {
        display: flex;
        justify-content: space-between;

        .about_icon_unit {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 60px;
          color: #2929cc;
          .about_icon_unit_img{
                border-radius: 50%;
                width: 132px;
                height: 132px;
              }
          .weixin {
            color: #3fcf56;
          }
          .QQ{
            color: #1296db;
          }
          .shouji {
            color: #2b61fe;
          }

          span {
            padding-top: 40px;
            padding-bottom: 22px;
          }

          i {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 132px;
            height: 132px;
            font-size: 110px;
          }
        }
      }
    }

    // 地址部分
    .site {
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding: 0 28px;
      box-sizing: border-box;
      box-shadow: 0px 0px 20px #ebebfa;
      border-radius: 20px;
      margin-bottom: 132px;

      h2 {
        padding-top: 22px;
        padding-bottom: 42px;
        font-size: 35px;
        font-weight: 800;
        color: #2929cc;
        text-align: center;
      }

      .about_icon {
        color: #2929cc;
        font-size: 28px;
        padding-bottom: 60px;
        i{
          font-size: 30px;
          font-weight: 800;
        }
      }
    }
  }

</style>
