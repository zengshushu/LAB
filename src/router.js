import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home.vue";
import test from "./components/test.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    { 
      path: '/test', 
      component: test
    },

  ]
})
