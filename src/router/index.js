import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import ContactForm from '../components/ContactForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactForm
  },

]

const router = new VueRouter({
  routes
})

export default router
