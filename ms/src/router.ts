import Vue from 'vue';
import Router from 'vue-router';
//引入views
import Home from './views/Home.vue';
import Production from './views/Production.vue';
import Experience from './views/Experience.vue';
import About from './views/About.vue';
import Me from './views/Me.vue';



//引入components
import Navs from './components/Navs.vue';
import Demos from './components/Demos.vue';
import Footers from './components/Footers.vue';


//引入mines
import Works from './mines/Works.vue';
import Works1 from './mines/Works1.vue';
import Works2 from './mines/Works2.vue';
import Skill from './mines/Skill.vue';
import Informations from './mines/Informations.vue';
import Introductions from './mines/Introductions.vue';
import Certificate from './mines/Certificate.vue';



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
      path: '/experience',
      name: 'experience',
      component: Experience,
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
      path: '/footers',
      name: 'footers',
      component: Footers,
    },{
      path: '/works',
      name: 'works',
      component: Works,
    },{
      path: '/works1',
      name: 'works1',
      component: Works1,
    },{
      path: '/works2',
      name: 'works2',
      component: Works2,
    },{
      path: '/skill',
      name: 'skill',
      component: Skill,
    },{
      path: '/informations',
      name: 'informations',
      component: Informations,
    },{
      path: '/introductions',
      name: 'introductions',
      component: Introductions,
    },{
      path: '/certificate',
      name: 'certificate',
      component: Certificate,
    },
  ],
});
