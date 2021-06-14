<template>
	<header>
		<div class="container">
			<div class="d-flex item-align-center">
				<div>
					<h1 class="desktop">
						<img src="https://i.ibb.co/3B7wVMh/logo-Tournament.png" alt="" />
					</h1>
					<h1 class="mobile">
						<img src="../../assets/LogoTournament/logoNoText.png" alt="" />
					</h1>
				</div>
				<nav class="nav">
					<div class="d-flex">
						<router-link to="/">Home</router-link>
						<router-link to="/calendrier">Calendrier</router-link>
						<router-link to="/resultat">Résultats</router-link>
						<router-link to="/equipes">Equipes</router-link>
						<router-link to="/contact">Contact</router-link>
					</div>
				</nav>
				<button class="hamburger hamburger--spring" type="button" :class="{ 'is-active': isActive }" @click="test()">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</button>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			isActive: false,
		};
	},
	methods: {
		test() {
			this.isActive = !this.isActive;
			const Nav = document.querySelector('nav');
			Nav.classList.toggle('displayMenu');
		},
	},
};
</script>

<style lang="scss" scoped>
span {
	font-weight: bold;
}
a {
	margin-left: 44px;
}
</style>
