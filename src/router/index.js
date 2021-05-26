import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactForm from '../components/ContactForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/contact',
    name: 'Contact',
    component: ContactForm
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router