import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/pages/Login'
// import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Products from '@/components/pages/Products'
import CustomerOrder from '@/components/pages/CustomerOrder'


Vue.use(VueRouter);


export default new VueRouter({
	routes:[
		{
			path: '/login',
			name: 'Login',
			component: Login,
			meta: {	requireCheck: true }
		},
		{
			path: '/admin',
			name: 'dashboard',
			component: Dashboard,
			children: [
				{
					path: 'products',
					name: 'Products',
					component: Products,
					meta: {	requireCheck: true }
				},
			],
		},
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard,
			children: [
				{
					path: '/customer_order',
					name: 'CustomerOrder',
					component: CustomerOrder,
				},
			]
		},
		{
			path: '*',
			redirect: 'login',
		},
	],
});