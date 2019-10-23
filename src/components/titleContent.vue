<template>
  <div class="index">
    <!-- 轮播图和字体部分 -->
    <!-- <swipeCon /> -->
    <!-- 引视商用系统桌面部分 -->
    <div class="content">
      <div class="content_title">
        <div class="content_title_line">
          <span></span>
        </div>
        <div class="content_title_text">
          <h3>引视商用系统桌面</h3>

          <router-link to="product" class="xiangqing">了解详情 <i class="iconfont icon-youjiantou"></i></router-link>
        </div>
        <div class="ziTiswipe">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;基于酒店环境的客制化直播点播解决方案，部署简单对硬件要求低，真正适合酒店场景需求的IPTV系统</p>
        </div>
      </div>
    </div>
    <!-- 最新资讯部分 -->
    <div class="content">
      <div class="content_title">
        <div class="content_title_line">
          <span></span>
        </div>
        <div class="content_title_text">
          <h3>最新资讯</h3>
        </div>
      </div>
      <div class="content_video">
        <video controls="controls" src="http://www.iptv9.cn/static/video/ad.mp4"></video>
      </div>
    </div>
    <!-- 成功案例&解决方案 -->
    <div class="content">
      <div class="content_title">
        <div class="content_title_line">
          <span></span>
        </div>
        <div class="content_title_text">
          <h3>成功案例&解决方案</h3>
        </div>
      </div>
      <div class="content_prompt">
        <div>
          <img src="../assets/images/laba_ico.png" alt="">
        </div>
        <p>多年来引视已成功为数百家ISP电信企业，酒店，小区提供完整的直播点播，网络机房，认证计费缓存加速解决方案，经多年稳定运行验证，深受客户好评</p>
      </div>
      <router-link to="plan" class="content_img">
        <div class="content_img_box">
          <div class="content_img_text">
            <p>老酒店改造方案（实例）</p>
          </div>
          <img src="../assets/images/fangan1.png" alt="">
        </div>
        <div class="content_img_box">
          <div class="content_img_text">
            <p>成功案例</p>
          </div>
          <img src="../assets/images/fangan2.png" alt="">
        </div>

      </router-link>
    </div>
    <!-- 酒店行业最具潜力供应商之一 -->
    <div class="content">
      <div class="content_title">
        <div class="content_title_line">
          <span></span>
        </div>
        <div class="content_title_text">
          <h3>酒店行业最具潜力供应商之一</h3>
        </div>
      </div>
      <div class="content_supplier">
        <div class="content_supplier_advantage">
          <div class="slices_img">
            <img src="../assets/images/slices1.png" alt="">
          </div>
          <span>新趋势</span>
        </div>
        <div class="content_supplier_advantage">
          <div class="slices_img">
            <img src="../assets/images/slices2.png" alt="">
          </div>
          <span>技术领先</span>
        </div>
        <div class="content_supplier_advantage">
          <div class="slices_img">
            <img src="../assets/images/slices3.png" alt="">
          </div>
          <span>完善服务</span>
        </div>
        <div class="content_supplier_advantage">
          <div class="slices_img">
            <img src="../assets/images/slices4.png" alt="">
          </div>
          <span>降低成本</span>
        </div>
        <div class="content_supplier_advantage">
          <div class="slices_img">
            <img src="../assets/images/slices5.png" alt="">
          </div>
          <span>智能体验</span>
        </div>
        <div class="content_supplier_advantage">
          <div class="slices_img">
            <img src="../assets/images/slices6.png" alt="">
          </div>
          <span>全国响应</span>
        </div>
      </div>
    </div>
    <!-- 联系方式 -->
    <div class="content">
      <div class="content_title">
        <div class="content_title_line">
          <span></span>
        </div>
        <div class="content_title_text">
          <h3>联系方式</h3>
        </div>
      </div>
      <el-carousel height="150px" indicator-position="outside">
        <el-carousel-item>
          <div class="content_contact">
            <div class="content_contact_number">
              <div class="content_contact_number_img">
                <img src="../assets/images/weixin.png" alt="">
              </div>
              <p>TCWMsys</p>
            </div>
            <a class="content_contact_number" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=728191908&site=qq&menu=yes">
              <div class="content_contact_number_img">
                <img src="../assets/images/QQ .png" alt="">
              </div>
              <span>QQ</span>
            </a>
            <a class="content_contact_number" href="tel:18029997099">
              <div class="content_contact_number_img">
                <img src="../assets/images/dianhua.png" alt="">
              </div>
              <span>手机号</span>
            </a>
          </div>
        </el-carousel-item>
      </el-carousel>
      <!-- <div class="content_contact">
        <div class="content_contact_number">
          <div class="content_contact_number_img">
            <img src="../assets/images/weixin.png" alt="">
          </div>
          <span>微信</span>
          <p>TCWMsys</p>
        </div>
        <div class="content_contact_number">
          <div class="content_contact_number_img">
            <img src="../assets/images/dianhua.png" alt="">
          </div>
          <span>手机号</span>
          <p>18029997099</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
  import swipeCon from '../components/swipeCon'
  export default {
    name: 'titleContent',
    components: {
      swipeCon,
    }
  };

</script>

<style lang="less" scoped>
  @firmColor:#5d5d5d;
  // 引视商用系统桌面部分
  .content_title {
    padding-top: 82px;
    .xiangqing{
      color:#292bcb;
      i{
        color: #292bcb
      }
    }
    .ziTiswipe {
      box-sizing: border-box;
      box-shadow: 2px -2px 6px #ccc;
      width: 100%;
      border: 2px solid #dcdcdc;
      border-radius: 20px;
      padding: 25px 0px;
      padding-left: 10px;
      color: #545454;
      font-size: 28px;
      font-weight: 500;
    }
  }

  // 公共样式开始
  .content_title_line {
    width: 286px;
    border-top: 2px solid @firmColor;

    span {
      display: block;
      width: 40px;
      border-top: 3px solid @firmColor;

    }
  }

  .content_title_text {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    font-size: 30px;
    color: @firmColor;

    a {
      font-size: 25px;
      color: #666;

      i {
        font-size: 20px;
        color: @firmColor;
      }
    }
  }

  // 公共样式结束

  // 最新资讯部分
  .content_video {
    height: 375px;
    overflow: hidden;

    video {
      width: 100%;
      height: 100%;
    }
  }

  // 成功案例&解决方案
  .content {
    .content_prompt {
      position: relative;
      box-sizing: border-box;
      box-shadow: 2px -2px 6px #ccc;
      width: 100%;
      border: 2px solid #dcdcdc;
      border-radius: 20px;
      padding: 25px 0;
      color: #545454;
      font-size: 28px;
      font-weight: 500;
      padding-left: 82px;
      margin-bottom: 47px;

      div {
        position: absolute;
        top: 30px;
        left: 15px;
        width: 45px;
        height: 45px;

        img {
          width: 100%;
        }
      }
    }

    .content_img {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .content_img_box {
        width: 344px;
        height: 236px;
        border-radius: 20px;
        overflow: hidden;
        position: relative;

        .content_img_text {
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 0;

          p {
            padding-left: 15px;
            // font-size: 8px;
            z-index: 5;
            color: #fff;
          }
        }
      }
    }
  }

  // 酒店行业最具潜力供应商之一
  .content_supplier {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .content_supplier_advantage {
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      padding-top: 22px;
      padding-bottom: 30px;
      width: 212px;
      height: 254px;
      color: @firmColor;
      border: 2px solid #ccc;
      border-radius: 20px;
      box-shadow: 2px -2px 6px #ccc;

      &:nth-child(-n+3) {
        margin-bottom: 20px;
      }

      .slices_img {
        width: 88px;
        height: 88px;

        img {
          width: 100%;
        }
      }

      i {
        font-size: 100px;
      }

      span {
        font-size: 30px;
        font-weight: 600;
      }
    }
  }

  // 联系方式
  .content_contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 118px;

    .content_contact_number {
      box-sizing: border-box;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      align-items: center;
      margin: 10px;
      padding: 30px;
      width: 334px;
      height: 254px;
      border-radius: 20px;
      border: 2px solid #ccc;
      box-shadow: 2px -2px 6px #ccc;
      color: @firmColor;

      .content_contact_number_img {

        width: 96px;
        height: 96px;
      }

      span {
        font-size: 30px;
        font-weight: 600;
      }

    }
  }

</style>
