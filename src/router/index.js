import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import News from '@/components/News'
import About from '@/components/About'
import Works from '@/components/Works'
import Links from '@/components/Links'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/links',
      name: 'Links',
      component: Links
    },
    {
      path: '*',
      name: 'Not Found',
      component: PageNotFound,
      title: 'Not Found'
    }
  ]
})
