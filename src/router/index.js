import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AdminView from '../views/AdminView.vue';
import ProductView from '../views/ProductView.vue';
import SingleProductView from '../views/SingleProductView.vue';
import ContactView from '../views/ContactView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: AdminView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView
  },
  {
    path: '/products/:id',
    name: 'singleProduct',
    component: SingleProductView
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactView
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
