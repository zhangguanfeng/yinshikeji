<template>
  <div class="system">
    <img src="../../assets/images/chanping2.png" alt="">
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
          <p>18029997099</p>
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
  // 联系方式
.content{
  margin-top: 80px;
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
}

</style>