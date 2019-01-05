import Vue from 'vue';
import Router from 'vue-router';
//引入views
import Home from './views/Home.vue';



//引入components
import Navs from './components/Navs.vue';
import Demos from './components/Demos.vue';


//引入mines
import Works from './mines/Works.vue';



Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },{
      path: '/navs',
      name: 'navs',
      component: Navs,
    },{
      path: '/demos',
      name: 'demos',
      component: Demos,
    },{
      path: '/works',
      name: 'works',
      component: Works,
    },
  ],
});
