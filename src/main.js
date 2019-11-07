// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import App from './App'
import router from './router'
import './bus';
import currencyFilter from './filters/currency'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
axios.defaults.withCredentials = true;

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);

/* eslint-disable no-new */  

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})


//功能:驗證是否使用者為持續登入狀態
//切換到不同頁面時觸發，可以在route上的meta設定一個變數(requireCheck)來判斷是否放行
router.beforeEach((to, from, next) => {
  console.log('to',to,'from',from,'next',next);
  if(to.meta.requireCheck){
  	console.log(to.meta.requireCheck);
  	const api = `${process.env.APIPATH}/api/user/check`;
		      axios.post(api).then((response) => {
		        console.log(response.data);
		        if(response.data.success){
		        	next();
		        } else {
		        	alert(response.data.message);
		        	next({ redirect: 'login', });
		        }
		   	  })
  } else {
  	next();
  }
})
