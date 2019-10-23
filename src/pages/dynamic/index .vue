<template>
  <div class="dynamic">
    <!-- 1 -->
    <div class="content">
      <div class="content_title">
        <div class="content_title_line">
          <span></span>
        </div>
        <div class="content_title_text">
          <h3>引视2019新官方正式上线</h3>
          <div>2019-06-25</div>
        </div>
      </div>
      <!-- 盒子内容 -->
      <div class="dynamic_information">
        <div class="dynamic_information_left">
          <div class="dynamic_information_text">
            <span></span>
            <p>为了方便广大用户查询资料，下载系统，查询技术文档，引视2019新版官网已经正式上线</p>
          </div>
          <div class="dynamic_information_text">
            <span></span>
            <p>新的官网采用element框架设计UI更清爽直观，内容更加丰富</p>
          </div>
          <div class="dynamic_information_text">
            <span></span>
            <p>欢迎新老客户和代理商访问获取更多资讯</p>
          </div>
        </div>
        <div class="dynamic_information_img" >
          <img src="../../assets/images/dynamic1.png" alt="">
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div class="content">
      <div class="content_title">
        <div class="content_title_line">
          <span></span>
        </div>
        <div class="content_title_text">
          <h3>引视全新桌面启动器即将发布</h3>
          <div>2019-06-25</div>
        </div>
      </div>
      <!-- 盒子内容 -->
      <div class="dynamic_information">
        <div class="dynamic_information_left">
          <div class="dynamic_information_text">
            <span></span>
            <p>引视全新桌面启动完全采用人性化UI设计</p>
          </div>
          <div class="dynamic_information_text">
            <span></span>
            <p>适用于任何Android TV设备作为默认界面</p>
          </div>
          <div class="dynamic_information_text">
            <span></span>
            <p>UI设计简单直观适用于各个年龄阶段的用户</p>
          </div>
          <div class="dynamic_information_text">
            <span></span>
            <p>国内首创APK管理推送功能，支持自定义主题和主题在线预览功能</p>
          </div>
        </div>
        <div class="dynamic_information_img" >
          <img src="../../assets/images/dynamic2.png" alt="">
        </div>
      </div>
    </div>
    <!-- 3 -->
    <div class="content">
      <div class="content_title">
        <div class="content_title_line">
          <span></span>
        </div>
        <div class="content_title_text">
          <h3>IPTV手机客户端</h3>
          <div>2019-06-25</div>
        </div>
      </div>
      <!-- 盒子内容 -->
      <div class="dynamic_information">
        <div class="dynamic_information_left">
          <div class="dynamic_information_text">
            <span></span>
            <p>引视PTV系统Android手机客户端 APP正式发布</p>
          </div>
          <div class="dynamic_information_text">
            <span></span>
            <p>手机客户端同样支持直播和点播</p>
          </div>
          <div class="dynamic_information_text">
            <span></span>
            <p>开机LOGO和首页幻灯片可做广告位</p>
          </div>
        </div>
        <div class="dynamic_information_img" >
          <img src="../../assets/images/dynamic3.png" alt="">
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "dynamic"
};
</script>

<style lang="less" scoped>
  @firmColor:#5d5d5d;
.dynamic {
  color: #666;
  margin-top: 60px;
  // 公共样式开始
  .content_title {
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
      div {
        font-size: 25px;
        color: #666;
      }
    }
  }
  // 公共样式结束


  
  // 盒子样式
  .content {
    margin-bottom: 70px;
    .dynamic_information {
      box-sizing: border-box;
      box-shadow: -2px 2px 6px #ccc;
      width: 100%;
      border: 1px solid #dcdcdc;
      border-radius: 20px;
      // height: 363px;
      padding: 42px 30px;
      position: relative;
      .dynamic_information_left {
        .dynamic_information_text {
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 362px;
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
            background: @firmColor;
          }
          p {
            width: 342px;
          }
        }
      }
      .dynamic_information_img{
        position: absolute;
        right: 3%;
        top: 20%;
        width: 300px;
        z-index: -1;
      }
    }
  }
}
</style>