<template>
  <div class="download">
    <div class="content_contact">
      <div class="content_contact_number " :class="{iscarste:item.ble}" v-for="item in contactList" :key="item.id"
        @click="handleShow(item.id)">
        <i :class="[ item.classname ,{iscarste:item.ble}] "></i>
        <span>{{item.title}}</span>
      </div>
    </div>
    <!-- 电视端桌面下载 -->
    <div class="dialog" v-show="isShow == 1">
      <div class="dialog_box">
        <span class="dialog_box_icon">
          <img src="../../assets/images/download.png" alt="">
        </span>
        <h3>引视 IPTV桌面系统V1.6稳定版发布</h3>
        <div class="dialog_box_text">
          <a href="http://cloud.nhw6.com:9191/iptvsoft/tv/itvdesk-1.6.apk" target="_blank"><span>
              <img src="../../assets/images/download.png" alt="">
            </span> 点击下载</a>
          <p>
            <span>
              <img src="../../assets/images/update.png" alt="">
            </span>
            更新日志—重大更新</p>
          <p>
            <span>
              <img src="../../assets/images/star.png" alt="">
            </span>
            修复机顶盒绑定房间问题</p>
        </div>
        <p class="date">2019-06-25</p>
      </div>
      <i class="iconfont icon-close_cricle iconSize" @click="handleHleed()"></i>
    </div>
    <!-- 电视端播放器下载 -->
    <div class="dialog" v-show="isShow == 2">
      <div class="dialog_box">
        <span class="dialog_box_icon">
          <img src="../../assets/images/download.png" alt="">
        </span>
        <h3>引视 IPTV桌面系统V1.3稳定版发布</h3>
        <div class="dialog_box_text">
          <a href="http://cloud.nhw6.com:9191/iptvsoft/tv/itvplayer-1.3.apk" target="_blank"><span>
              <img src="../../assets/images/download.png" alt="">
            </span> 点击下载</a>
          <p>
            <span>
              <img src="../../assets/images/update.png" alt="">
            </span>
            更新日志—重大更新</p>
          <p>
            <span>
              <img src="../../assets/images/star.png" alt="">
            </span>
            添加多源切换</p>
        </div>
        <p class="date">2019-06-25</p>
      </div>
      <i class="iconfont icon-close_cricle iconSize" @click="handleHleed()"></i>
    </div>
    <!-- 手机端桌面下载 -->
    <div class="dialog" v-show="isShow == 3">
      <div class="dialog_box">
        <span class="dialog_box_icon">
          <img src="../../assets/images/download.png" alt="">
        </span>
        <h3>IPTV手机端桌面稳定版V1.1发布</h3>
        <div class="dialog_box_text">
          <a href="http://cloud.nhw6.com:9191/iptvsoft/phone/phone-hotel-1.1.apk" target="_blank"><span>
              <img src="../../assets/images/download.png" alt="">
            </span> 点击下载</a>
          <p>
            <span>
              <img src="../../assets/images/update.png" alt="">
            </span>
            更新日志—重大更新</p>
          <p>
            <span>
              <img src="../../assets/images/star.png" alt="">
            </span>
            改善稳定性，适配机型</p>
        </div>
        <p class="date">2019-05-10</p>
      </div>
      <i class="iconfont icon-close_cricle iconSize" @click="handleHleed()"></i>
    </div>
    <!-- 手机端播放器下载 -->
    <div class="dialog" v-show="isShow == 4">
      <div class="dialog_box">
        <span class="dialog_box_icon">
          <img src="../../assets/images/download.png" alt="">
        </span>
        <h3>IPTV手机端播放器稳定版V1.1发布</h3>
        <div class="dialog_box_text">
          <a href="http://cloud.nhw6.com:9191/iptvsoft/phone/phone-player-1.1.apk" target="_blank"><span>
              <img src="../../assets/images/download.png" alt="">
            </span> 点击下载</a>
          <p>
            <span>
              <img src="../../assets/images/update.png" alt="">
            </span>
            更新日志—重大更新</p>
          <p>
            <span>
              <img src="../../assets/images/star.png" alt="">
            </span>
            改善稳定性，适配机型</p>
        </div>
        <p class="date">2019-05-10</p>
      </div>
      <i class="iconfont icon-close_cricle iconSize" @click="handleHleed()"></i>
    </div>
    <!-- 路由系统下载 -->

    <div class="dialog" v-show="isShow == 5">
      <div class="dialog_box">
        <span class="dialog_box_icon">
          <img src="../../assets/images/download.png" alt="">
        </span>
        <h3>路由系统稳定版V1.20发布</h3>
        <div class="dialog_box_text">
          <a href="http://cloud.nhw6.com:9191/iptvsoft/router/nss_x64_v1.20.GHO" target="_blank"><span>
              <img src="../../assets/images/download.png" alt="">
            </span> 点击下载</a>
          <p>
            <span>
              <img src="../../assets/images/update.png" alt="">
            </span>
            更新日志—重大更新</p>
          <p>
            <span>
              <img src="../../assets/images/star.png" alt="">
            </span>
            修复解码内存泄漏BUG</p>
        </div>
        <p class="date">2019-05-10</p>
      </div>
      <i class="iconfont icon-close_cricle iconSize" @click="handleHleed()"></i>
    </div>
    <!-- 路由升级配置下载 -->
    <div class="dialog" v-show="isShow == 6">
      <div class="dialog_box">
        <span class="dialog_box_icon">
          <img src="../../assets/images/download.png" alt="">
        </span>
        <h3>路由升级配置v1.57发布</h3>
        <div class="dialog_box_text">
          <a href="http://cloud.nhw6.com:9191/iptvsoft/router/namiao-x64-1.57.1909241569330144.bin" target="_blank"><span>
              <img src="../../assets/images/download.png" alt="">
            </span> 点击下载</a>
          <p>
            <span>
              <img src="../../assets/images/update.png" alt="">
            </span>
            更新日志—重大更新</p>
          <p>
            <span>
              <img src="../../assets/images/star.png" alt="">
            </span>
            添加iptv LAN口</p>
        </div>
        <p class="date">2019-06-10</p>
      </div>
      <i class="iconfont icon-close_cricle iconSize" @click="handleHleed()"></i>
    </div>
    <!-- 遮罩层 -->
    <div class="zhezhao" v-show="isShow"></div>
  </div>
</template>

<script>
  export default {
    name: "download",
    data() {
      return {
        isShow: 0,
        contactList: [{
            id: 1,
            ble: false,
            title: "IPTV机顶盒/电视端桌面下载",
            classname: "iconfont icon-dianshi"
          },
          {
            id: 2,
            ble: false,
            title: "IPTV机顶盒/电视端播放器下载",
            classname: "iconfont icon-ziyuan"
          },
          {
            id: 3,
            ble: false,
            title: "IPTV手机端桌面下载",
            classname: "iconfont icon-shouji"
          },
          {
            id: 4,
            ble: false,
            title: "IPTV手机端播放器下载",
            classname: "iconfont icon-xiayixiang"
          },
          {
            id: 5,
            ble: false,
            title: "路由系统下载",
            classname: "iconfont icon-luyouqi"
          },
          {
            id: 6,
            ble: false,
            title: "路由升级配置下载",
            classname: "iconfont icon-huojian"
          }
        ]
      };
    },
    methods: {
      handleShow(id) {
        this.contactList.forEach(i => {
          if (i.id == id) {
            i.ble = true;
          } else {
            i.ble = false;
          }
        });
        this.isShow = id;
      },
      handleHleed() {
        this.contactList.forEach(i => {
          i.ble = false;
        });
        this.isShow = 0;
      }
    }
  };

</script>

<style lang="less" scoped>
  .iscarste {
    background: #2929cc;
    color: #fff !important;
  }

  .download {
    margin-top: 34px;

    .content_contact {
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 118px;

      .content_contact_number {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 334px;
        height: 254px;
        border-radius: 20px;
        border: 2px solid #ccc;
        box-shadow: 2px -2px 6px #ccc;
        color: #010631;

        &:nth-child(-n + 4) {
          margin-bottom: 22px;
        }

        i {
          color: #292bcb;

          font-size: 100px;
        }

        span {
          font-size: 25px;
          font-weight: 600;
          text-align: center;
          padding: 0 40px;
        }
      }
    }
  }

  .dialog {
    position: absolute;
    left: 90px;
    top: 247px;
    z-index: 5;
    text-align: center;

    .iconSize {
      font-size: 60px;
      color: #fff;
    }

    .dialog_box {
      height: 900px;
      width: 570px;
      padding-top: 240px;
      border-radius: 30px;
      border: #ccc solid 2px;
      box-sizing: border-box;
      color: #292bcb;
      background: #fff;
      text-align: center;

      .dialog_box_icon {
        display: inline-block;
        width: 135px;
      }

      h3 {
        // width: 305px;
        padding: 0 120px;
        font-size: 35px;
        margin-top: 50px;
        margin-bottom: 62px;
      }

      .dialog_box_text {
        text-align: left;
        font-size: 20px;
        padding-left: 50px;

        a {
          color: #292bcb;
        }

        span {
          display: inline-block;
          width: 35px;
          height: 35px;

          img {
            vertical-align: middle;
          }
        }

      }

      .date {
        margin-top: 60px;
      }
    }
  }

  .zhezhao {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    z-index: 2;
  }

</style>
