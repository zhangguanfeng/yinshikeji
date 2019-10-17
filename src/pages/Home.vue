<template>
  <div class="index">
    <!-- 头部背景颜色 -->
    <div class="beij">
    </div>
    <!-- 内容 -->
    <div class="w">
      <div>
        <!-- 头部导航栏 -->
        <headerBar/>
        <!-- 标题内容 -->
        <!-- <titleContent/> -->
        <router-view></router-view>
      </div>
    </div>
    <!-- 遮罩层 -->
    <!-- <div class="zhezhao"></div> -->
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
.zhezhao{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  z-index: 5;
}



</style>
