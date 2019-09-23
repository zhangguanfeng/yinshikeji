<template>
  <div class="download">
    <div class="content_contact">
      <div class="content_contact_number">
        <i class="iconfont icon-dianshi "></i>
        <span>IPTV机顶盒/电视端桌面下载</span>
      </div>
      <div class="content_contact_number">
        <i class="iconfont icon-ziyuan "></i>
        <span>手机IPTV机顶盒/电视端桌面下载</span>
      </div>
      <div class="content_contact_number">
        <i class="iconfont icon-shouji "></i>
        <span>IPTV手机端桌面下载</span>
      </div>
      <div class="content_contact_number">
        <i class="iconfont icon-xiayixiang "></i>
        <span>IPTV手机端桌面下载</span>
      </div>
      <div class="content_contact_number">
        <i class="iconfont icon-luyouqi "></i>
        <span>路由系统下载</span>
      </div>
      <div class="content_contact_number">
        <i class="iconfont icon-huojian"></i>
        <span>路由升级配置下载</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "download"
};
</script>

<style lang="less" scoped>
.download {
  margin-top: 34px;
  .content_contact {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 118px;
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
      color: #292bcb;
      &:nth-child(-n+4){
        margin-bottom: 22px;
      }

      i {
        font-size: 100px;
      }
      span {
        font-size: 25px;
        font-weight: 600;
        color: #010631;
        text-align: center;
        padding: 0 40px;
      }
    }
  }
}
</style>