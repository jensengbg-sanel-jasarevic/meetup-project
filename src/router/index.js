import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUpEvent from '../views/SignUpEvent.vue'
import ReviewEvent from '../views/ReviewEvent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signupevent/:id',
    name: 'SignUpEvent',
    component: SignUpEvent
  },
  {
    path: '/reviewevent/:id',
    name: 'ReviewEvent',
    component: ReviewEvent
  },
  {
    path: '/previousevents',
    name: 'PreviousEvents',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PreviousEvents.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
