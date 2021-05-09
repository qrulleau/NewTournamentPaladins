<template>
	<footer>
		<div class="background-black white">
			<div class="container">
				<div class="d-flex item-align-center">
					<div>
						<h1>Logo<span>Tournois</span></h1>
					</div>
					<div class="d-flex">
						<div class="row">
							<h4>Lien du site</h4>
							<router-link to="/contact">Contact</router-link>
							<router-link to="/home">Home</router-link>
							<router-link to="">Reglement</router-link>
						</div>
						<div class="row">
							<h4>Tournois & Equipes</h4>
							<router-link to="/calendar">Calendrier</router-link>
							<router-link to="/team">Equipes</router-link>
							<router-link to="/result">Résultat</router-link>
						</div>
						<div class="row">
							<h4>Légales</h4>
							<router-link to="">Politique de confidentialité</router-link>
							<router-link to="">Politique de cookie</router-link>
							<router-link to="">Gestion des cookies</router-link>
						</div>
						<div class="row">
							<h4>à propos</h4>
							<p>
								Le NomTournois est basé en France, crée par des joueurs pour des joueurs, à l’écoute de la communauté Afin de faire perduré Paladins !
							</p>
						</div>
					</div>
				</div>
				<div class="d-flex copyright">
					<p>Copyright 2021 NomTournois. Tous droits réservés</p>
					<p>Design & developed by quentin Rulleau</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row a {
	display: block;
}
</style>
