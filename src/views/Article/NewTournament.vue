<template>
	<div class="background-bleu">
		<div class="container">
			<HeaderNav class="pt-100"></HeaderNav>
			<h2 class="title text-center">Un nouveau tournoi sur Paladins !</h2>
			<section>
				<h3>L’arrivée d’un tournoi</h3>
				<p>
					Après 1 mois de travail, une nouvelle organisation, la paladins french
					tournament à l’honneur de vous annoncer l’arrivée d’un tournoi unique
					sur la scène paladins francaise, la champions League of Paladins.
				</p>
				<p>
					Notre objectif est simple : mettre en avant la scène Paladins
					notamment la scène francophone par la création de multiples tournois
					sous differentes formes tout en respectant les joueurs et la
					communauté.
				</p>
				<p>
					Pour notre premier tournoi, nous avons choisis d’orienter notre
					tournoi vers la compétitivité et la performance en equipe. Le concept
					est le suivant :
				</p>
				<p>
					Phase de poule : Après le recensement de toutes les équipes inscrites,
					elles vont devoir se battre les unes contre les autres. Deux equipes
					par poules seront selectionnées pour participer au bracket à
					elimination directe.
				</p>
				<p>
					Pour ce premier tournoi afin de récompenser les 2 meilleures teams
					francaises, un cashprice de 150€ sera à gagner, 100€ pour les premiers
					et 50€ pour les deuxièmes. les inscriptions se fermeront le 13 juin
					2020 et débutera le 19 juin dans l'après midi
				</p>
			</section>
			<section>
				<h3>Modalités</h3>
				<p>
					Les règles sont consultables en totalité sur le site ou sur le
					discord.
				</p>
				<p>
					les inscriptions se font par le site sur la page d’accueil en
					remplissant le formulaire. Attention, toute inscription implique
					l'acceptation du règlement.
				</p>
			</section>
			<section>
				<h3>Réseaux sociaux</h3>
				<p>
					Afin de vous tenir au courant des évènements en cours mais aussi
					futurs, les communications se feront via le twitter et le discord
					officiel de l’évènement. Par ailleurs vous pourrez consulter la chaîne
					twitch du tournoi pour pouvoir suivre vos équipes préférées et les
					supporters.
				</p>
				<p>
					Si vous n’avez pas pu assister au match en live, vous pourrez les
					revoir sur la chaîne youtube officiel du tournoi où elles seront
					postées.
				</p>
				<p>
					Chaque match diffusé sur twitch sera casté ainsi vous pourrez assister
					dans les meilleures conditions à ces matchs compétitifs
				</p>
				<div class="flex social-network">
					<a
						href="https://www.twitch.tv/paladinsfrenchtournament"
						target="_blank"
					>
						<i class="fab fa-twitch"></i>
					</a>
					<a
						href="https://www.youtube.com/channel/UCvp93_l5E8GValdzstpcXeA"
						target="_blank"
					>
						<i class="fab fa-youtube"></i>
					</a>
					<a href="https://twitter.com/PFTofficiel" target="_blank">
						<i class="fab fa-twitter"></i>
					</a>
					<a href="https://discord.gg/YgTqBrhQUW" target="_blank">
						<i class="fab fa-discord"></i>
					</a>
				</div>
			</section>
			<section>
				<h3>Le futur</h3>
				<p>
					Après la champions League of Paladins qui est le premier tournoi qui
					vous est proposé, la paladins french tournament vous proposera
					différents formats qui font vibrer la communauté notamment un tournoi
					uniquement clavier souris ainsi qu’un tournoi manette et d’autres.
				</p>
				<p>
					Alors n’hésitez pas à nous rejoindre sur les différents réseaux
					sociaux pour être informé et que le meilleur gagne !
				</p>
			</section>
		</div>
		<FooterNav></FooterNav>
	</div>
</template>

<script>
import HeaderNav from '../../components/layout/TheNavBar.vue';
import FooterNav from '../../components/layout/TheFooter.vue';
export default {
	components: {
		HeaderNav,
		FooterNav,
	},
};
</script>

<style lang="scss" scoped>
.fab {
	padding: 10px;
	border-radius: 21px;
	border: 1px solid white;
	font-size: 20px;
	margin-right: 21px;
}
.fab:hover {
	color: #b91911;
	transition: 350ms;
	background-color: white;
}
h2 {
	margin-bottom: 120px;
}
section {
	margin-bottom: 40px;
	h3 {
		margin-bottom: 40px;
	}
	p {
		line-height: 150%;
		margin-bottom: 12px;
	}
}
.social-network {
	margin-top: 32px;
}
</style>
