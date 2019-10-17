<template>
  <div class="productIntroduce">
    <div class="box">
      <div class="box_text">
        <p class="box_text_p"> 引视IPTV系统是一套针对宽带运营商、酒店、等大流量场景的直播、点播系统解决方案。基于引视自主研发的IPTV系统开发,采用HLS流媒体协议输出,具有超高带机量(10-20W用户量)
          ,部署简单,对原有网络无需任何改动,无需双口光猫,支持通过无线观看,支持多种类型节目源等诸多优势,配合引视主动式视频缓存系统可以构建完善的直播点播一体化系统。</p>
      </div>
      <div class="box_img">
        <img src="../../assets/images/chanping1.png" alt="">
      </div>
    </div>
    <!-- 产品优势 -->
    <div class="box">
      <div class="title">
        <div class="content_title_line">
          <span></span>
        </div>
        <div class="content_title_text">
          <h3>产品优势</h3>
        </div>
      </div>
      <h2 class="title_two">简单易用的后台管理</h2>
      <div class="box_text">
        <p>引视IPTV系统后台具有优秀的交互UI,功能菜单简单清晰 ,我们在设计U时充分考虑到各个水平和年龄层的用户群体,规避了一些专业词汇的使用,真正做到让用户一看就懂,十分钟就可轻松上手。针对一些繁琐的诸如频道编辑和节目单排序编辑等,我们为此设计了快速导入和可视化排序组件,轻松点击鼠标即可完成所有操作。</p>
        <div class="box_text_plist">
          <p>1、唯一支持极速转发模式、音视频同步纠正、智能码率纠正,让低端设备跑出高端效果。</p>
          <p>2、频道实时监控系统可根据设定时间实时监控频道状态,帮助用户发现未知问题。</p>
          <p>3、完善的计划任务流程,可针对整个系统或者某些特殊频道进行定时重启等操作。</p>
          <p>4、支持时移、回看,采用全新的压缩算法无损画质回放,精彩瞬间不会错过。</p>
          <p>5、将操作系统与软件包完美整合，安装系统仅需一分钟,全中文傻瓜安装向导。</p>
        </div>
      </div>
      <div class="box_img">
        <img src="../../assets/images/chanping2.png" alt="">
      </div>
    </div>
    <!-- 客户端APK -->
    <div class="box">
      <div class="title">
        <div class="content_title_line">
          <span></span>
        </div>
        <div class="content_title_text">
          <h3>最好的客户端APK</h3>
        </div>
      </div>
      <div class="box_text">
        <p>引视拥有最完善的Android客户端应用,我们针对不同年龄段的终端用户开发了不同U的版本，年轻人用U1华丽,老年人用简单直观。采用自研的Android播放器框架,对各类终端设备提供完美的播放解码支持。新的版本中我们还加入了智能解码模式,针对一些低端机顶盒播放高清视频卡顿问题提供完善的解决方案。</p>
        <div class="box_text_plist">
          <p>1、多种客户端可供选择(纯直播、纯点播、直播点播一体） ，并提供适合不同年龄层的U版本。</p>
          <p>2、所有动画效果采用JAVA原生开发，不会因为动画导致机顶盒卡顿。</p>
          <p>3、每一行代码亲手写，不适用任何开源组件保证了APK的完美兼容性。</p>
          <p>4、国内唯一支持点播播放中选集自动生成缩略图,方便用户浏览不同剧集的内容。</p>
          <p>5、支持多种解码模式(智能解码、硬解码、软解码)同时提供硬件加速支持。</p>
        </div>
      </div>
      <div class="box_img">
        <img src="../../assets/images/chanping3.png" alt="">
      </div>
    </div>
    <!-- 客户端UI展示 -->
    <div class="box">
      <div class="title">
        <div class="content_title_line">
          <span></span>
        </div>
        <div class="content_title_text">
          <h3>客户端UI展示</h3>
        </div>
      </div>
      
      <div class="box_img">
        <img src="../../assets/images/chanping1.png" alt="">
      </div>
      <div class="box_img">
        <img src="../../assets/images/chanping3.png" alt="">
      </div>
    </div>
    <!-- 联系方法 -->
    <div class="box">
      <div class="content_title">
        <div class="content_title_line">
          <span></span>
        </div>
        <div class="content_title_text">
          <h3>联系方式</h3>
        </div>
      </div>
      <div class="content_contact">
        <div class="content_contact_number">
          <div class="content_contact_number_img">
            <img src="../../assets/images/weixin.png" alt="">
          </div>
          <span>微信</span>
          <p>TCWMsys</p>
        </div>
        <div class="content_contact_number">
          <div class="content_contact_number_img">
            <img src="../../assets/images/dianhua.png" alt="">
          </div>
          <span>手机号</span>
          <P>18029997099</P>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="less" scoped>
  .box {
    margin-bottom: 86px;
    .box_text {
      // margin-top: 57px;
      border: 1px solid #ccc;
      border-radius: 20px;
      padding: 35px 25px;
      box-shadow: 2px -2px 6px #ccc;

      .box_text_p {
        text-indent: 2em;
      }
      p{
        text-align: justify;
        text-justify: inter-ideograph;
        font-size: 26px;
        color: #535353;
      }
    }
    .box_img {
      margin-top: 42px;
    }
    // 产品优势
    .title_two{
      font-size: 40px;
      text-align: center;
      margin-bottom: 30px;
    }
    .box_text_plist{
      margin-top: 52px;
    }
  }
  // 联系方式
.content_contact{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 118px;
  .content_contact_number{
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    width: 334px;
    height: 254px;
    border-radius: 20px;
    border: 2px solid #ccc;
    box-shadow:2px -2px 6px #ccc;
    color: #292bcb;
    .content_contact_number_img{
      
      width: 96px;
      height: 96px;
    }
    span{
      font-size: 30px;
      font-weight: 600;
    }
    
  }
}

  // 公共样式开始
  .content_title_line {
    width: 286px;
    border-top: 2px solid #292bcb;

    span {
      display: block;
      width: 40px;
      border-top: 3px solid #292bcb;

    }
  }

  .content_title_text {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    font-size: 35px;
    color: #292bcb;
  }

  // 公共样式结束

</style>
