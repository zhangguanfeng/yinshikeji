<template>
  <div class="product">
    <nav class="tab_list">
      <h4 class="tab_title" v-for="t in tab" :key="t.id" @click="demoClick(t.id)" :class="{demoColor:t.id == tabColor}">
      {{t.title}}
      </h4>
    </nav>
    <div class="conten" v-show="content[0].id === tabColor">
      <ProductIntroduce/>
    </div>
    <div class="conten" v-show="content[1].id === tabColor">
      <PorductScheme/>
    </div>
    <div class="conten" v-show="content[2].id === tabColor">
      <ProductSystem/>
    </div>
    <div class="conten" v-show="content[3].id === tabColor">
      <ProductClientScreenshot/>
    </div>
    <div class="conten" v-show="content[4].id === tabColor">
      <ProductDisabuse/>
    </div>
    
  </div>
</template>

<script>
import ProductIntroduce from './productIntroduce'
import ProductClientScreenshot from './productClientScreenshot'
import ProductSystem from './productSystem'
import PorductScheme from './porductScheme'
import ProductDisabuse from './productDisabuse'
  export default {
    name: 'product',
    components: {
      ProductIntroduce,
      ProductClientScreenshot,
      ProductSystem,
      PorductScheme,
      ProductDisabuse
    },
    data() {
      return {
        tab: [{
            id: 1,
            title: '产品介绍'
          },
          {
            id: 2,
            title: '部署方案'
          },
          {
            id: 3,
            title: '系统截图'
          },
          {
            id: 4,
            title: '客户端截图'
          },
          {
            id: 5,
            title: '答疑解惑'
          },
        ],
        tabColor:1,
        content: [
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 4},
          {id: 5},
        ]

      }
    },
    methods: {
      demoClick: function (id) {
        this.tabColor = id;
      }
    }
  }

</script>

<style lang="less" scoped>
  .tab_list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    .tab_title{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 30px;
      font-weight: 600;
      cursor: pointer;
    }
  }
  .demoColor {
    color: #2929cc;
  }
  .conten{
    margin-top: 55px;
  }
 
</style>
