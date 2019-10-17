<template>
  <div class="disabuse">
    <div class="box">
      <div class="box_img">
        <img src="../../assets/images/wenhao_ico.png" alt="">
      </div>
      <p class="box_text">针对客户在购买IPTV时常见的一些问题,在这里进行统一解答,建议先认真阅读,如果还有什么不明白的可以随时咨询我们。</p>

    </div>
    <div class="box_two">
      <p class="text_blue">问: 引视 IPTV系统在用户不能上外网的情况下可否部署？</p>
      <p>答:可以部署,用户是否能上网与是否能看IPTV无关,但服务器必须24小时联网。</p>
    </div>
    <div class="box_two">
      <p class="text_blue">问:部署PTV直播+点播需要几台服务器,需要多大的硬盘？</p>
      <p>答:直播一台、点播一台、直播系统盘16G以上,点播系统盘6 0G以上，点播数据存储硬盘建议不小于10TB。</p>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.box{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  box-shadow: -2px 2px 6px #ccc;
  border-radius: 20px;
  padding: 35px 0;
  margin-bottom: 52px;
  .box_text{
    font-size: 26px;
    color: #535353;
    width: 610px;
    padding-left: 10px;
  }
  .box_img{
    width: 70px;
    height: 70px;
  }
}
.box_two{
  overflow: hidden;
  box-shadow: -2px 2px 6px #ccc;
  border-radius: 20px;
  margin-bottom: 25px;
  p{
    padding: 22px 0 25px 10px ;
  }
  .text_blue{
    background: #2929cc;
    color: #fff;
  }
}
</style>