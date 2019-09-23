// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/Chongzhi.css'
// 引入字体图标
import './assets/iconfont/font_1428289_ztg200wcbah/iconfont.css'
// 计算rem插件
import 'lib-flexible/flexible'
// 引入ui框架
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
