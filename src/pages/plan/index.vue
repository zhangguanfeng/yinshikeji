<template>
  <div class="plan">
    <!-- 标题区 -->
    <div class="plan_title ">
      <ul>
        <li :class="{isselected :item.selected}" v-for="item in titleList" :key="item.id" @click="handleIsShow(item.id)">{{item.title}}</li>
      </ul>
    </div>
    <!-- 内容区 -->
    <div class="plan_content" v-show="oneShow">
      <div class="plan_content_img">
        <div class="plan_content_img_text">
          <span></span>
          <p>50间老酒店改造方案（实例）</p>
        </div>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569559973463&di=29f36c83cc40eb3a836fa4b46d2f8871&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6b0018f329217b50b48d9478776a24c9825cbef7cd86-IrED2R_fw658" alt="">
      </div>
      <div class="plan_content_img">
        <div class="plan_content_img_text ">
          <span></span>
          <p>200间老酒店改造方案（实例）</p>
        </div>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569560029573&di=6e9005999b1a63ca65826b28d1c5eea0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F22%2F20160922114638_HhTAn.jpeg" alt="">
      </div>
    </div>
    <div v-show="twoShow">你好啊</div>
  </div>
</template>

<script>
export default {
  name:'plan',
  data() {
    return {
      oneShow:true,
      twoShow:false,
      titleList:[
        {
          id:1,
          title:'酒店IPTV解决方案',
          selected:true
        },
        {
          id:2,
          title:'成功案例',
          selected:false
        }
      ]
    }
  },
  methods: {
    handleIsShow(id){
      this.titleList.forEach(e => {
        if(e.id==id){
          e.selected = true;
        }else{
          e.selected = false;
        }
      });
      if(id=='1'){
        this.oneShow = true;
        this.twoShow = false;
      }else{
        this.oneShow = false;
        this.twoShow = true;
      }
    }
  },
}
</script>

<style lang="less" scoped>
.isselected{
  color: #292acd;
  border-bottom: 4px solid #292acd;
}
  .plan{
    .plan_title{
      
      color: #8a8a8a;
      margin-top: 53px;
      margin-bottom: 37px;
      ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 60px;
        li{
          font-size: 35px;
          font-weight: 600;
      }
      }
      
    }
    .plan_content{
      .plan_content_img{
        height: 412px;
        border-radius: 20px;
        overflow: hidden;
        margin-bottom: 37px;
        position: relative;
        .plan_content_img_text{
          width: 100%;
          height: 96px;
          line-height: 96px;
          position: absolute;
          bottom: 0;
          left: 0;
          span{
          display: block;
          height: 96px;
          width: 100%;
          background: #000;          
          opacity: 0.5;
          }
          p{
          padding-left: 20px;
          font-size: 30px;
          font-weight: 600;
          position: absolute;
          bottom: 0;
          left: 0;
          color: #fff;
          }
        }
        img{
          width: 100%;
        }
      }
    }
  }
</style>