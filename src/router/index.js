import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import WriteView from '../views/WriteView.vue'
import SignupView from '../views/SignupView.vue'
import SigninView from '../views/SigninView.vue'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path:'/board/detail/:seq',
    name:'Detail',
    component:DetailView
  },

  {
    path:'/board/write/:seq?',
    name:'Write',
    component:WriteView
  },

  {
    path:'/signup',
    name:'signup',
    component:SignupView
  },

  {
    path:'/login',
    name:'signin',
    component:SigninView
  },


  // {
  //   path:'/board/write/:id?',
  //   name:'Write', 
  //   component:WriteView
  // }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
