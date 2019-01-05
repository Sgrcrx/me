import Vue from 'vue';
import Router from 'vue-router';
//引入views
import Home from './views/Home.vue';
import Production from './views/Production.vue';
import Mine from './views/Mine.vue';
import About from './views/About.vue';
import Me from './views/Me.vue';



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
      path: '/production',
      name: 'production',
      component: Production,
    },{
      path: '/mine',
      name: 'mine',
      component: Mine,
    },{
      path: '/about',
      name: 'about',
      component: About,
    },{
      path: '/me',
      name: 'me',
      component: Me,
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
