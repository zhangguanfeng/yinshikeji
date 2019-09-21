<template>
  <div class="index">
    <!-- 引视商用系统桌面部分 -->
    <div class="content">
      <div class="content_title">
        <div class="content_title_line">
          <span></span>
        </div>
        <div class="content_title_text">
          <h3>引视商用系统桌面</h3>
          <div>了解详情 <i class="iconfont icon-youjiantou"></i></div>
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
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569657947&di=6fee945d10ec8468f2f6722075e92bd7&imgtype=jpg&er=1&src=http%3A%2F%2Fpics3.baidu.com%2Ffeed%2F0823dd54564e92584fdb0c4253e8a95dcdbf4e1b.jpeg%3Ftoken%3D42c2c21fd6999741b6ed45f1552ea020%26amp%3Bs%3DFF94CB08EA73329486AC59870300E0AB" alt="">
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
          <i class="iconfont icon-laba"></i>
        </div>
        <p>多年来引视已成功为数百家ISP电信企业，酒店，小区提供完整的直播点播，网络机房，认证计费缓存加速解决方案，经多年稳定运行验证，深受客户好评</p>
      </div>
      <div class="content_img">
        <div>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569062148211&di=7b80fa461c50b11fa0a114f9f0338d64&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20130416%2FImg372885486.jpg" alt="">
        </div>
        <div>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569062653463&di=645c5040208b5c1016f2fc260ff8344c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F30%2F20161030225012_avtrh.thumb.700_0.png" alt="">
        </div>
      </div>
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
          <i class="iconfont icon-qushi"></i>
          <span>新趋势</span>
        </div>
        <div class="content_supplier_advantage">
          <i class="iconfont icon-diannao"></i>
          <span>技术领先</span>
        </div>
        <div class="content_supplier_advantage">
          <i class="iconfont icon-gou"></i>
          <span>完善服务</span>
        </div>
        <div class="content_supplier_advantage">
          <i class="iconfont icon-cost"></i>
          <span>降低成本</span>
        </div>
        <div class="content_supplier_advantage">
          <i class="iconfont icon-huojian"></i>
          <span>智能体验</span>
        </div>
        <div class="content_supplier_advantage">
          <i class="iconfont icon-wangluo"></i>
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
      <div class="content_contact">
        <div class="content_contact_number">
          <i class="iconfont icon-weixin-copy weixin"></i>
          <span>微信</span>
        </div>
        <div class="content_contact_number">
          <i class="iconfont icon-dianhua shouji"></i>
          <span>手机号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// 引视商用系统桌面部分
.content_title {
  padding-top: 82px;
  .ziTiswipe {
  box-sizing: border-box;
  box-shadow:2px -2px 6px #ccc;
  width: 100%;
  border: 2px solid #dcdcdc;
  border-radius: 20px;
  padding: 25px 0px ;
  color: #545454;
  font-size: 28px;
  font-weight: 500;
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
  margin: 30px 0;
  font-size: 30px;
  color: #292bcb;
  div {
    font-size: 25px;
    color: #666;
    i{
      font-size: 20px;
      color: #292bcb;
    }
  }
}
// 公共样式结束

// 最新资讯部分
.content_video{
  height: 375px;
  background: #ccc;
  overflow: hidden;
  img{
    width: 100%;
  }
}
// 成功案例&解决方案
.content{
  .content_prompt{
    position: relative;
    box-sizing: border-box;
    box-shadow:2px -2px 6px #ccc;
    width: 100%;
    border: 2px solid #dcdcdc;
    border-radius: 20px;
    padding: 25px 0 ;
    color: #545454;
    font-size: 28px;
    font-weight: 500;
    padding-left: 82px;
    margin-bottom: 47px;
    div{
      position: absolute;
      top: 20px;
      left: 15px;
      width: 42px;
      height: 42px;
      i{
        font-size: 50px;
        color: #292bcb;
      }
    }
  }
  .content_img{
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      width: 344px;
      height: 236px;
      background: #ccc;
      border-radius: 20px;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
  }
}
// 酒店行业最具潜力供应商之一
.content_supplier{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .content_supplier_advantage{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 212px;
    height: 254px;
    color: #292bcb;
    border: 2px solid #ccc;
    border-radius: 20px;
    box-shadow:2px -2px 6px #ccc;
    &:nth-child(-n+3){
    margin-bottom: 20px;
    }
    i{
      font-size: 100px;
    }
    span{
      font-size: 30px;
      font-weight: 600;
    }
  }
}
// 联系方式
.content_contact{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 118px;
  .content_contact_number{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 334px;
    height: 254px;
    border-radius: 20px;
    border: 2px solid #ccc;
    box-shadow:2px -2px 6px #ccc;
    color: #292bcb;

     i{
      font-size: 100px;
    }
    .weixin{
      color: #3fd056;
    }
    .shouji{
      color: #2a62fe;
    }
    span{
      font-size: 30px;
      font-weight: 600;
    }
    
  }
}
</style>