<template>
	<header>
		<div class="container">
			<div class="d-flex">
				<div>
					<h1 class="white">logo<span>Tournois</span></h1>
				</div>
				<nav>
					<div class="d-flex">
						<router-link to="/">Home</router-link>
						<router-link to="/calendar">Calendrier</router-link>
						<router-link to="/resultat">Résultat</router-link>
						<router-link to="/team">Equipes</router-link>
						<router-link to="/contact">Contact</router-link>
					</div>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
span {
	font-weight: bold;
}
a {
	margin-left: 44px;
}
</style>
