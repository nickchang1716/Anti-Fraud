import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/Home.vue'
import AboutPage from './components/About.vue'


export default createRouter({
  history : createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
})