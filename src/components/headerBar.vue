<template>
  <div class="headerBar">
    <!-- 导航栏 -->
    <div class="navbar">
      <router-link :to="{path: item.name}" v-for="item in titleList" :key="item.id">
        <div class="navbar_text" @click="handleId(item.id)">
          <span  @click="handleisPitch(item.id)">
            {{item.tlitle}}
          </span>
          <i class="bottom_border" v-show="item.isPitch"></i>
        </div>
        <div class="navbar_text_two" :class="{active:item.id===isShow && item.children}">
          <router-link :to="{path: item2.name}" v-for="(item2,index2) in item.children" :key="index2">
            <span @click="handleHidden">{{item2.tlitle}}</span>
          </router-link>
        </div>
      </router-link>

    </div>
    <!-- 轮播图 -->
    <div class="swipes">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <div class="img">
            <img src="../assets/images/swp1.jpg" alt="">
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="img">
            <img src="../assets/images/swp2.jpg" alt="">

          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="img">
            <img src="../assets/images/swp3.jpg" alt="">

          </div>
        </mt-swipe-item>

      </mt-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: 0,
        titleList: [{
            id: 1,
            isPitch: false,
            tlitle: "首页",
            name: "titleContent"
          },
          {
            id: 2,
            isPitch: false,
            tlitle: "产品",
            name: "product",
            children: [{
                id: 22,
                isPitch: false,
                tlitle: "产品中心",
                name: "product",
              },
              {
                id: 3,
                isPitch: false,
                tlitle: "解决方案",
                name: "plan"
              },

            ]
          },

          // {
          //   id: 4,
          //   isPitch: false,
          //   tlitle: "教程中心",
          //   name: "tutorial"
          // },
          {
            id: 5,
            isPitch: false,
            tlitle: "下载",
            name: "download"
          },
          {
            id: 6,
            isPitch: false,
            tlitle: "服务",
            name: "dynamic",
            children: [{
                id: 6,
                isPitch: false,
                tlitle: "服务中心",
                name: "dynamic",
              },
              {
                id: 7,
                isPitch: false,
                tlitle: "关于我们",
                name: "about"
              },
            ]
          },

        ]
      };
    },
    methods: {
      // 显示下拉框
      handleId(id) {
        this.isShow = id
      },
      // 隐藏下拉框
      handleHidden() {
        this.isShow = 0
      },
      handleisPitch(id) {
        this.titleList.forEach(e => {
          if (e.name == this.$route.name) {
            e.isPitch = true;
          } else {
            e.isPitch = false;
          }
        });
      }
    },
    watch: {
      $route: "handleisPitch"
    },
    mounted() {
      this.handleisPitch();
    }
  };

</script>

<style lang="less" scoped>
  @firmColor: #5d5d5d;

  .isPitch {
    color: @firmColor;
  }
  .navbar_text_two {
        width: 100%;
        height: 0;
        background: rgba(239,245,245, 0.9);
        position: absolute;
        left: 0;
        top: 100px;
        z-index: 66;
        overflow: hidden;
        transition: all .3s;
        a {
          display: block;
          font-size: 20px;
          padding: 0px 50px;
          padding-top: 30px;
          color: #5d5d5d;
        }
      }
  .headerBar {

    /* 导航栏 */
    .navbar {
      background: #292bcb;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 5%;
      font-size: 30px;
      width: 100%;
      position: relative;
      font-weight: 400;
      .active{height: 100vh;}

      

      .navbar_text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        

        .bottom_border {
          display: block;
          width: 40px;
          border-bottom: 8px solid #fff;
          border-radius: 10px;
        }
      }

    }


    /* 轮播图 */
    .swipes {
      .mint-swipe {
        margin-top: 5%;
        height: 412px;
        border-radius: 40px;

        .img {
          width: 100%;
          height: 100%;

          // overflow: hidden;
          img {
            min-width: 100%;
          }
        }
      }
    }
  }

</style>
