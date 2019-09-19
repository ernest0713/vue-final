import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/pages/Login'
import HelloWorld from '@/components/HelloWorld'


Vue.use(VueRouter);


export default new VueRouter({
	routes:[
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld,	
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
		},
	],
});