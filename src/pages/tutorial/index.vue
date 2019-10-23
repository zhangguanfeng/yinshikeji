<template>
  <div class="tutorial">
    <h3 class="title">酒店IPTV</h3>
    <div class="rolling_title2_list">
      <div class="title2_list">
      <h4 v-for="item in titleList" :key="item.id" :class="{demoColor:item.id == tabColor}"
        @click="handleClickId(item.id)">
        {{item.title}}
      </h4>
      <!-- <div class="title2_icon" @click="handleShowDialog">
        <img src="../../assets/images/jzzx_more_ico.png" alt="">
      </div> -->
    </div>
    </div>
    
    <div class="swipe">
      <el-carousel type="card" height="300px" :autoplay="false" ref="carousel" @click.native="handlechange()">
        <el-carousel-item name='1'>
          <div class="conten">
            <div class="icon">
              <img src="../../assets/images/jzzx_1_ico.png" alt="">
            </div>
            <div class="conten_text">
              <p>输入酒店名称,酒店地址,和选择所属运营商的当地区域的频道列表即可快速创建酒店(简单的配置已经全部初始化,默认会有3个房间号选择), 后台创建好酒店后,接下来初始化桌面APP</p>
            <div class="conten_img">
              <img src="../../assets/images/jiaocheng1.png" alt="">
            </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item name='2'>
          <div class="conten">
            <div class="icon">
              <img src="../../assets/images/jzzx_2_ico.png" alt="">
            </div>
            <div class="conten_text">
              <p>打开桌面APP后,第一个页面会提示输入账号名称这个账号名称在个人后台的个人资料中可进行查看</p>
              <div class="conten_img">
                <img src="../../assets/images/jiaocheng2.png" alt="">
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item name='3'>
          <div class="conten">
            <div class="icon">
              <img src="../../assets/images/jzzx_3_ico.png" alt="">
            </div>
            <div class="conten_text">
              <p>打开APP，输入别名</p>
            <div class="conten_img">
              <img src="../../assets/images/jiaocheng3.png" alt="">
            </div>
            </div>
            
          </div>
        </el-carousel-item>
        <el-carousel-item name='4'>
          <div class="conten">
            <div class="icon">
              <img src="../../assets/images/jzzx_4_ico.png" alt="">
            </div>
            <div class="conten_text">
              <p>选择酒店</p>
            <div class="conten_img">
              <img src="../../assets/images/jiaocheng4.png" alt="">
            </div>
            </div>
            
          </div>
        </el-carousel-item>
        <el-carousel-item name='5'>
          <div class="conten">
            <div class="icon">
              <img src="../../assets/images/jzzx_5_ico.png" alt="">
            </div>
            <div class="conten_text">
              <p>选择房间绑定</p>
            <div class="conten_img">
              <img src="../../assets/images/jiaocheng5.png" alt="">
            </div>
            </div>
            
          </div>
        </el-carousel-item>
        <el-carousel-item name='6'>
          <div class="conten">
            <div class="icon">
              <img src="../../assets/images/jzzx_6_ico.png" alt="">
            </div>
            <div class="conten_text">
              <p>绑定房间后进入到主界面，至此，配置完成</p>
            <div class="conten_img">
              <img src="../../assets/images/jiaocheng6.png" alt="">
            </div>
            </div>
            
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <div class="dialog" v-show="isShow">
      <div class="dialog_title">
        <h3>酒店IPTV</h3>
        <div class="quxiao" @click="handleHiddenDialog">
          <img src="../../assets/images/quxiao_ico.png" alt="">
        </div>
      </div>
      <p class="dialog_title_text">教程中心</p>
      <ul>
        <li v-for="item in iconList" :key="item.id" @click="handleId(item.id)">
          <div class="icon">
            <img :src="'/static/img/jc' + item.id  + '.png'" alt="">
          </div>
          <span>{{item.iconName}}</span>
        </li>
        
      </ul>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'tutorial',
    data() {
      return {
        titleList: [
          {id: 1,title: '快速配置'},
          {id: 2,title: '房间配置'},
          {id: 3,title: '欢迎页配置'},
          {id: 4, title: '公告页配置'},
          {id: 5, title: '首页配置'},
          {id: 6, title: '模块配置'},
        ],
        tabColor: 1,
        iconList:[
          {id:1,iconName:'快速配置'},
          {id:2,iconName:'房间配置'},
          {id:3,iconName:'欢迎页配置'},
          {id:4,iconName:'公告页配置'},
          {id:5,iconName:'首页配置'},
          {id:6,iconName:'模块配置'},
          {id:7,iconName:'直播列表和播放器配置'},
          {id:8,iconName:'服务配置'},
          {id:9,iconName:'购物配置'},
          {id:10,iconName:'风景配置'},
          {id:11,iconName:'关于我们配置'},
          {id:12,iconName:'多语言配置'},
          {id:13,iconName:'采集配置'},
          {id:14,iconName:'酒店管理员应用'},
        ],
        isShow:false
      }
    },
    methods: {
      handlechange() {
        this.tabColor = this.$refs.carousel.activeIndex + 1

      },
      handleClickId(id) {
        this.$refs.carousel.setActiveItem(id - 1)
        this.tabColor = id
      },
      handleShowDialog(){
        this.isShow = true
      },
      handleHiddenDialog(){
        this.isShow = false
      },
      handleId(id){
        this.$refs.carousel.setActiveItem(id - 1)
        this.tabColor = id
        this.isShow = false
      }
      
    },
  }

</script>

<style lang="less" scoped>
  .demoColor {
    color: #2929cc;
  }
  // 对话框
  // .dialog{
  //   box-sizing: border-box;
  //   position: fixed;
  //   left: 0;
  //   bottom: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: #fff;
  //   padding: 50px 20px ;
  //   z-index: 20;
  //   .dialog_title{
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;
  //     h3{
  //       color: #001abf;
  //       font-size: 38px;
  //     }
  //     .quxiao{
  //       width: 35px;
  //       height: 35px;
  //     }
  //   }
  //   .dialog_title_text{
  //     margin-bottom: 30px;
  //   }
  //   ul{
  //     display: flex;
  //     flex-wrap: wrap;
  //     justify-content: space-around;
  //     li{
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: space-between;
  //     align-items: center;
  //     margin-bottom: 56px;
  //     // margin-right: 7px;
  //     span{
  //       display: block;
  //       width: 170px;
  //       text-align: center;
  //     }
  //     .icon{
  //        width: 155px;
  //        height: 155px;
  //      }
  //     }
  //   }
    
    
  // }
  .rolling_title2_list::-webkit-scrollbar{
    display: none;
  }
  .tutorial {
    margin-top: 25px;
    .title {
      color: #001abf;
      font-size: 38px;
      margin-bottom: 20px;
    }
    .rolling_title2_list{
      overflow-y: hidden;
        .title2_list {
        width: 130%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        h4 {
          font-weight: 500;
          font-size: 30px;
        }
      }
    }
    

    .title2_icon {
      width: 50px;
      height: 50px;
    }
  }

  .el-carousel__item {
    background: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 6px #e9e9ed;

    // width: 400px;
  }
  // 轮播图
  .swipe {
    position: absolute;
    left: 0;
    bottom: -100%;
    // height: 800px;
    width: 100%;
    background: #e9e9ed;
    padding-top: 40px;

    .conten {
      padding-left: 20px;

      .icon {
        margin: 20px 0 33px 0px;
        width: 80px;
        height: 80px;
      }

      p {
        color: #001abf;
        font-size: 20px;
        text-align: justify;
        text-justify: inter-ideograph;
      }

      .conten_img {
        padding-right: 20px;
      }
      .conten_text{
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

  }

</style>
