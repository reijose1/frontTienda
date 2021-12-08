import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login.vue'
import ProductsHome from '../components/ProductsHome.vue'
import ProductDetail from '../components/ProductDetail.vue'
import SignUp from '../components/SignUp.vue'
import CartTable from '../components/CartTable.vue'


const routes = [
  {
    path: '/',
    name: 'ProductsHome',
    component: ProductsHome
  },
  {
    path: '/ProductDetail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/CartTable',
    name: 'CartTable',
    component: CartTable
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
