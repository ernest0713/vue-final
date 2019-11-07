<template>
	<div>
		<Topbar/>
		<main>
			<router-view></router-view>			
		</main>
		<Footer/>
	</div>
</template>

<script>
	import Topbar from './Topbar';
	import Footer from './Footer';
	export default{
		name: "index",
		components: {
			Topbar,
			Footer,
		},
	};

</script>

<style scoped>
	
</style>