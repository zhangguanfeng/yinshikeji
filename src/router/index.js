import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Download from '../pages/download/index.vue'
import Dynamic from '../pages/dynamic/index .vue'
import titleContent from '../components/titleContent.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: "titleContent",
      children:[
        {
          path: 'titleContent',
          name: 'titleContent',
          component: titleContent,
        },
        {
          path: 'download',
          name: 'download',
          component: Download,
        },
        {
          path: 'dynamic',
          name: 'dynamic',
          component: Dynamic,
        },
      ]
    }
  ]
})
