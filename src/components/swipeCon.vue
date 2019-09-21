<template>
  <div class="index">
    <!-- 轮播图 -->
        <div class="swipes">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <div class="img">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569063360981&di=273486b7744a4b7ea4cd416e6e15b983&imgtype=0&src=http%3A%2F%2Fwww.k73.com%2Fup%2Fphoto%2F2014%2F0927%2F105914_69924337.jpg" alt="">
              </div>
            </mt-swipe-item>
            <mt-swipe-item>
              <div class="img">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569063360981&di=bd93175ed3e109ae241c81312d03534a&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2F2%2F24%2F24590C256B176258119A968E22D61F55.jpg" alt="">
              </div>
            </mt-swipe-item>
            <mt-swipe-item>
              <div class="img">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569063400057&di=0636081aeb7d7293e58c464b150022eb&imgtype=0&src=http%3A%2F%2Fimg0.pcgames.com.cn%2Fpcgames%2F1205%2F09%2F2521891_v14.jpg" alt="">
              </div>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <!-- 字体轮播 -->
        <div class="ziTiswipe">
          <div class="icon_laba">
            <i class="iconfont icon-laba"></i>
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
            <img src="../assets/images/qiehuan.png" alt="">
          </span>
        </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.index{
    /* 轮播图 */
.swipes{
  .mint-swipe {
  margin-top: 5%;
  height: 356px;
  border-radius: 30px;
  .img {
    width: 100%;
    height: 100%;
    background: #ccc;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
}
}

// 字体轮播
.ziTiswipe {
  position: relative;
  box-shadow:2px -2px 6px #ccc;
  margin-top: 45px;
  height: 86px;
  width: 100%;
  border: 2px solid #dcdcdc;
  border-radius: 20px;
  text-align: center;
  line-height: 86px;
  p{
    color: #292bcb;
    font-weight: 500;
    font-size: 28px;
  }
  .icon_laba{
    position: absolute;
    left: 15px;
    top: 3px;
    width: 40px;
    height: 40px;
    i{
      font-size: 50px;
      color: #292bcb;
    }
  }
}
// 切换图标
.qieHuanIcon{
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    width: 32px;
    height: 32px;
    img{
      width: 100%;
    }
  }
  
}
}

</style>