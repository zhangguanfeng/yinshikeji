<template>
  <div class="index">
    
    <!-- 字体轮播 -->
    <div class="ziTiswipe">
      <div class="icon_laba">
        <img src="../assets/images/laba_ico.png" alt="">
      </div>
      <mt-swipe :show-indicators="false">
        <mt-swipe-item>
          <p>引视 Android客户端至今启动量2，563，886次</p>
        </mt-swipe-item>
        <mt-swipe-item>
          <p>引视 Android客户端至今启动量2，563，886次</p>
        </mt-swipe-item>
        <mt-swipe-item>
          <p>引视 Android客户端至今启动量2，563，886次</p>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 切换图标 -->
    <div class="qieHuanIcon">
      <span>
        <img
          src="../assets/images/qiehuan.png"
          alt=""
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.index {
  // 字体轮播
  .ziTiswipe {
    position: relative;
    box-shadow: 2px -2px 6px #ccc;
    margin-top: 45px;
    height: 86px;
    width: 100%;
    border: 2px solid #dcdcdc;
    border-radius: 20px;
    text-align: center;
    line-height: 86px;
    p {
      color: #292bcb;
      font-weight: 500;
      font-size: 28px;
    }
    .icon_laba {
      position: absolute;
      left: 15px;
      top: 18px;
      width: 45px;
      height: 45px;
      img{
        width: 100%;
      }
    }
  }
  // 切换图标
  .qieHuanIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 32px;
      height: 32px;
      img {
        width: 100%;
      }
    }
  }
}
</style>