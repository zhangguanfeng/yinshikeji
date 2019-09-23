<template>
  <div class="index">
    <!-- 头部背景颜色 -->
    <div class="beij">
    </div>
    <!-- 内容 -->
    <div class="w">
      <div class="headers">
        <!-- 头部导航栏 -->
        <headerBar/>
        <!-- 标题内容 -->
        <!-- <titleContent/> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import headerBar from '../components/headerBar'
import titleContent from "../components/titleContent";
export default {
  components: {
    headerBar,
    // titleContent,
  },
  name: "home",
  data() {
    return {
      
    };
  }
};
</script>

<style lang="less" scoped>
.index {
  position: relative;
  .beij {
    position: absolute;
    left: 0;
    top: 0;
    background: #292bcb;
    height: 300px;
    width: 100%;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    z-index: -1;
  }
  .w {
    padding: 0px 25px;
  }
}



</style>
