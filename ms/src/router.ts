import Vue from 'vue';
import Router from 'vue-router';
//引入views
import Home from './views/Home.vue';
import Production from './views/Production.vue';
import Experience from './views/Experience.vue';
import About from './views/About.vue';
import Me from './views/Me.vue';
//ele
import Layout from './views/Layout.vue'
import Container from './views/Container.vue'
import Icon from './views/Icon.vue'
import Button from './views/Button.vue'
import Radio from './views/Radio.vue'
import CheckBox from './views/CheckBox.vue'
import Input from './views/Input.vue'
import Cascader from './views/Cascader.vue'
import Select from './views/Select.vue'
import Number from './views/Number.vue'
import Scores from './views/Scores.vue'
import Leave from './views/Leave.vue'
import Leaves from './views/Leaves.vue'
import Leavea from './views/Leavea.vue'
import Tabs from './components/Tabs.vue'



//引入components

import Demos from './components/Demos.vue';




//引入mines
import Works from './mines/Works.vue';
import Works1 from './mines/Works1.vue';
import Works2 from './mines/Works2.vue';

import Informations from './mines/Informations.vue';
import Introductions from './mines/Introductions.vue';
import Certificate from './mines/Certificate.vue';

//引入introductions
import FeiFan from './introductions/FeiFan.vue';



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
      path: '/demos',
      name: 'demos',
      component: Demos,
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
    },{
      path: '/feifan',
      name: 'feifan',
      component: FeiFan,
    }, {
		path: '/layout',
		name: 'layout',
		component: Layout
	}, {
		path: '/container',
		name: 'container',
		component: Container
	}, {
		path: '/icon',
		name: 'icon',
		component: Icon
	}, {
		path: '/button',
		name: 'button',
		component: Button
	}, {
		path: '/radio',
		name: 'radio',
		component: Radio
	}, {
		path: '/checkbox',
		name: 'checkbox',
		component: CheckBox
	}, {
		path: '/input',
		name: 'input',
		component: Input
	}, {
		path: '/cascader',
		name: 'cascader',
		component: Cascader
	}, {
		path: '/select',
		name: 'select',
		component: Select
	}, {
		path: '/number',
		name: 'number',
		component: Number
	}, {
		path: '/leave',
		name: 'leave',
		component: Leave
	}, {
		path: '/leaves',
		name: 'leaves',
		component: Leaves
	},{
		path: '/leavea',
		name: 'leavea',
		component: Leavea
	}, {
		path: '/scores',
		name: 'scores',
		component: Scores
	}, {
		path: '/tabs',
		name: 'tabs',
		component: Tabs
	}
  ],
});
