<template>
	<div class="background-bleu">
		<div class="container">
			<HeaderNav></HeaderNav>
			<h2 class="title text-center">Mentions légales</h2>
			<section class="presentation">
				<h3>1. Présentation du site.</h3>
				<p>
					En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs
					du site www.bpulp.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
				</p>
				<div class="contact-information">
					<p><strong>Propriétaire</strong> : Quentin Rulleau – 335 rue des vignes Jaux, FRANCE</p>
					<p><strong>Créateur</strong> : Quentin Rulleau</p>
					<p><strong>Responsable publication</strong> : Quentin Rulleau – quentin.rulleau@yahoo.com</p>
					<p>Le responsable publication est une personne physique ou une personne morale.</p>
					<p><strong>Webmaster</strong> : Quentin Rulleau – quentin.rulleau@yahoo.com</p>
				</div>
			</section>
			<section class="general-condition-of-use">
				<h3>2. Conditions générales d’utilisation du site et des services proposés.</h3>
				<p>
					L’utilisation du site www.paladinsfrenchtournament.fr implique l’acceptation pleine et entière des conditions générales d’utilisation
					ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site
					www.paladinsfrenchtournament.fr sont donc invités à les consulter de manière régulière.
				</p>
				<p>
					Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois
					décidée par Quentin Rulleau, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.
				</p>
				<p>
					Le site www.paladinsfrenchtournament.fr est mis à jour régulièrement par Quentin Rulleau. De la même façon, les mentions légales peuvent
					être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en
					prendre connaissance.
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
