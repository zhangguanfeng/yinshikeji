<template>
  <div class="headerBar">
    <!-- 导航栏 -->
        <div class="navbar">
          <router-link
            :to="{name: 'index'}"
            v-for="item in titleList"
            :key="item.id"
          >
            <span :class="{isPitch :item.isPitch}" @click="handleisPitch(item.id)">
              {{item.tlitle}}
            </span>
          </router-link>

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
          isPitch:true,
          tlitle: "首页"
        },
        {
          id: 2,
          isPitch:false,
          tlitle: "产品中心"
        },
        {
          id: 3,
          isPitch:false,
          tlitle: "解决方案"
        },
        {
          id: 4,
          isPitch:false,
          tlitle: "教程中心"
        },
        {
          id: 5,
          isPitch:false,
          tlitle: "软件下载"
        }
      ],
    }
  },
  methods: {
    handleisPitch(id) {
      this.titleList.forEach(e => {
        if(e.id==id){
          e.isPitch = true
        }else{
          e.isPitch = false
        }
      });
    }
  },
}
</script>

<style lang="less" scoped>
/* 导航栏 */
.isPitch{
  font-size: 35px;
  border-bottom: 5px solid #fff;
}
.navbar {
  background: #292bcb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5%;
  font-size: 30px;
  span {
    color: #fff;
    font-weight: 600;
  }
}
</style>