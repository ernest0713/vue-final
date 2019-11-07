<template>
	<div>
		<nav class="container navbar navbar-expand-md navbar-light bg-white rounded px-4">
		    <router-link to="/">
		    	<h1 class="text-hide"><img class="img-fluid" :src="logo" alt="" width="150" height="60">阿卡講</h1>
		    </router-link>
		    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
		      <span class="navbar-toggler-icon"></span>
		    </button>

		    <div class="collapse navbar-collapse " id="navbarsExample09">
		      <ul class="navbar-nav w-100 d-flex justify-content-around">
		        <li class="nav-item active">
		        	<router-link class="nav-link" to="/index">首頁</router-link>
		          <!-- <a class="nav-link" href="/"><span class="sr-only">(current)</span></a> </li> -->
		        <li class="nav-item">
		        	<router-link class="nav-link" to="/shop">商店</router-link>
		          <!-- <a class="nav-link" href="#">商店</a> -->
		        </li>
		        <li class="nav-item">
		        	<router-link class="nav-link" to="/contact">聯絡我們</router-link>
		          <!-- <a class="nav-link" href="#">聯絡我們</a> -->
		        </li>
		        <li class="nav-item">
		        	<router-link class="nav-link" to="/q&a">Q & A</router-link>
		          <!-- <a class="nav-link" href="#">Q & A</a> -->
		        </li>
		        <li class="nav-item">
		        	<router-link class="btn " to="/login"><i class="far fa-user-circle"></i>Log In</router-link>
		          <!-- <a class="nav-link" href="#">Q & A</a> -->
		        </li>		 		        
		      </ul>
<!-- 		      <div class="ml-4">
		      	<router-link class="btn" to="/login"><i class="far fa-user-circle"></i>Log In</router-link>
		      </div> -->
		          
		    </div>
		</nav>		
	</div>
</template>


<script>
import logo from '@/assets/image/logo.png';
	export default{
		name: "Topbar",
		data(){
			return{
				logo: logo,
			}
		}
	};
</script>

<style lang="scss" scoped>
	
	// img{
	// 	height: 5rem;
	// }
</style>