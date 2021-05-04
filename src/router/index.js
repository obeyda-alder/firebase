import Vue from 'vue'
import VueRouter from 'vue-router'

import EmployeeList from '@/components/EmployeeList.vue'
import AddEmployee from '@/components/AddEmployee.vue'
import ShowEmployee from '@/components/ShowEmployee.vue'
import EditEmployee from '@/components/EditEmployee.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EmployeeList',
    component: EmployeeList
  },
  {
    path: '/add',
    name: 'AddEmployee',
    component: AddEmployee
  },
  {
    path: '/show/:id',
    name: 'ShowEmployee',
    component: ShowEmployee
  },
  {
    path: '/edit/:id',
    name: 'EditEmployee',
    component: EditEmployee
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
