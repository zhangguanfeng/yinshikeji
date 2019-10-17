<template>
  <div class="headerBar">
    <!-- 导航栏 -->
    <div class="rolling_navbar">
      <div class="navbar">
        <router-link
          :to="{path: item.name}"
          v-for="item in titleList"
          :key="item.id"
        >
          <span
            :class="{isPitch :item.isPitch}"
            @click="handleisPitch(item.id)"
          >
            {{item.tlitle}}
          </span>
        </router-link>

      </div>
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
      titleList: [
        {
          id: 1,
          isPitch: false,
          tlitle: "首页",
          name: "titleContent"
        },
        {
          id: 2,
          isPitch: false,
          tlitle: "产品中心",
          name: "product"
        },
        {
          id: 3,
          isPitch: false,
          tlitle: "解决方案",
          name: "plan"
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
          tlitle: "软件下载",
          name: "download"
        },
        {
          id: 6,
          isPitch: false,
          tlitle: "公司动态",
          name: "dynamic"
        },
        {
          id: 7,
          isPitch: false,
          tlitle: "关于我们",
          name: "about"
        },
      ]
    };
  },
  methods: {
    handleisPitch() {
      // console.log(this.$route);
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
.isPitch {
  font-size: 35px;
  border-bottom: 5px solid #fff;
}
.headerBar {
  /* 导航栏 */
  .rolling_navbar::-webkit-scrollbar{
    display: none;
  }
  .rolling_navbar{
    overflow-y: hidden;
    .navbar {
    background: #292bcb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5%;
    font-size: 30px;
    width: 140%;
    span {
      color: #fff;
      font-weight: 600;
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