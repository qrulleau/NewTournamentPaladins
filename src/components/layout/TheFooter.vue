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
							<router-link @click="scrollToTop()" to="/reglement">Règlement</router-link>
							<router-link @click="scrollToTop()" to="/contact">Contact</router-link>
						</div>
						<div class="row">
							<h4>Tournois & Equipes</h4>
							<router-link @click="scrollToTop()" to="/calendrier">Calendrier</router-link>
							<router-link @click="scrollToTop()" to="/equipes">Equipes</router-link>
							<router-link @click="scrollToTop()" to="/resultat">Résultats</router-link>
						</div>
						<div class="row">
							<h4>Aspect légal</h4>
							<router-link @click="scrollToTop()" to="/politique-confidentialite">Politique de confidentialité</router-link>
							<router-link @click="scrollToTop()" to="/politique-cookie">Politique de cookies</router-link>
							<router-link @click="scrollToTop()" to="/mention-legales">Mentions Légales</router-link>
						</div>
						<div class="row special-width">
							<h4>À propos</h4>
							<p>
								Paladins French Tournament est basé en France, créé par des joueurs pour des joueurs, à l’écoute de la communauté afin de faire
								perdurer Paladins !.
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
}
.special-width {
	width: 19%;
}
h4 {
	margin-bottom: 36px;
}
a {
	margin-bottom: 20px;
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
@media screen and (max-width: 1100px) {
	.item-align-center {
		flex-direction: column-reverse;
		img {
			margin-top: 32px;
		}
	}
	.background-black {
		padding: 40px 0;
	}
	.ml-60 {
		margin-left: 0;
	}
}
@media screen and (max-width: 580px) {
	.ml-60 {
		flex-direction: column;
	}
	.special-width {
		width: inherit;
	}
	.row {
		text-align: center;
		margin-bottom: 16px;
	}
	.background-black {
		padding: 24px 0;
	}
}
</style>
