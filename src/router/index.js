import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import PlantList from '../views/PlantList.vue'
import PlantInfo from '../components/PlantInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/plant-list',
    name: 'Plant List',
    component: PlantList,
    props: true
  },
  {
    path: '/plant-info/:slug',
    name: 'Plant Info',
    component: PlantInfo,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/roots-of-medicine/',
  routes
})

export default router
