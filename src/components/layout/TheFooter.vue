<template>
	<footer>
		<div class="background-black">
			<div class="container">
				<div class="d-flex item-align-center">
					<div>
						<img src="https://i.ibb.co/3B7wVMh/logo-Tournament.png" alt="" />
					</div>
					<div class="d-flex ml-60">
						<div class="row">
							<h4>Lien du site</h4>
							<router-link @click="scrollToTop()" to="/">Home</router-link>
							<router-link @click="scrollToTop()" to="/reglement"
								>Règlement</router-link
							>
							<router-link @click="scrollToTop()" to="/contact"
								>Contact</router-link
							>
						</div>
						<div class="row">
							<h4>Tournois & Equipes</h4>
							<router-link @click="scrollToTop()" to="/calendrier"
								>Calendrier</router-link
							>
							<router-link @click="scrollToTop()" to="/equipes"
								>Equipes</router-link
							>
							<router-link @click="scrollToTop()" to="/resultat"
								>Résultats</router-link
							>
						</div>
						<div class="row">
							<h4>Aspect légal</h4>
							<router-link
								@click="scrollToTop()"
								to="/politique-confidentialite"
								>Politique de confidentialité</router-link
							>
							<router-link @click="scrollToTop()" to="/politique-cookie"
								>Politique de cookies</router-link
							>
							<router-link @click="scrollToTop()" to="/mention-legales"
								>Mentions Légales</router-link
							>
						</div>
						<div class="row special-width">
							<h4>À propos</h4>
							<p>
								Paladins French Tournament est basé en France, créé par des
								joueurs pour des joueurs, à l’écoute de la communauté afin de
								faire perdurer Paladins !.
							</p>
						</div>
					</div>
				</div>
				<div class="d-flex copyright">
					<p>Copyright 2021 Paladins French Tournament. Tous droits réservés</p>
					<p>Design & developed by Quentin Rulleau</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	methods: {
		scrollToTop() {
			window.scrollTo(0, 0);
		},
	},
};
</script>

<style lang="scss" scoped>
.row {
	a {
		display: block;
	}
}
.special-width {
	width: 19%;
}
h4 {
	margin-bottom: 36px;
}
a {
	margin-bottom: 12px;
}
.copyright {
	margin-top: 80px;
}
.background-black {
	padding: 80px 40px;
}
.ml-60 {
	margin-left: 60px;
}
</style>
