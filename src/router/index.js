import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Download from '../pages/download/index.vue'
import Dynamic from '../pages/dynamic/index .vue'
import titleContent from '../components/titleContent.vue'
import Plan from '../pages/plan/index.vue'
import About from '../pages/about/index.vue'
import Product from '../pages/product/index.vue'
import Tutorial from '../pages/tutorial/index.vue'
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
        {
          path: 'plan',
          name: 'plan',
          component: Plan,
        },
        {
          path: 'about',
          name: 'about',
          component: About,
        },
        {
          path: 'product',
          name: 'product',
          component: Product,
        },
        {
          path: 'tutorial',
          name: 'tutorial',
          component: Tutorial,
        },
      ]
    }
  ]
})
