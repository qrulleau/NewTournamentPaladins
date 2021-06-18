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
	position: relative;
	padding-bottom: 12px;
}
a:after {
	background: none repeat scroll 0 0 transparent;
	bottom: 0;
	content: '';
	display: block;
	height: 2px;
	left: 50%;
	position: absolute;
	background: #fff;
	transition: width 0.3s ease 0s, left 0.3s ease 0s;
	width: 0;
}
a:hover:after {
	width: 100%;
	left: 0;
}
</style>
