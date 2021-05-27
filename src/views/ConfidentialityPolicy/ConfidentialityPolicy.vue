<template>
	<div class="background-bleu">
		<div class="container">
			<HeaderNav class="pt-100"></HeaderNav>
			<h2 class="title text-center">Politique de confidentialité</h2>
			<section class="presentation">
				<h3>Qui sommes-nous ?</h3>
				<p>L’adresse de notre site Web est : www.paladinsfrenchtournament.fr</p>
			</section>
			<section class="personnal-information">
				<h3>Utilisation des données personnelles collectées</h3>
				<h4>Commentaires</h4>
				<p>
					Quand vous laissez un commentaire sur notre site web, les données inscrites dans le formulaire de commentaire, mais aussi votre adresse IP
					et l’agent utilisateur de votre navigateur sont collectées pour nous aider à la détection des commentaires indésirables.
				</p>
				<p>
					Une chaîne anonymisée créée à partir de votre adresse de messagerie (également appelée hash) peut être envoyée au service Gravatar pour
					vérifier si vous utilisez ce dernier. Les clauses de confidentialité du service Gravatar sont disponibles ici :
					https://automattic.com/privacy/. Après validation de votre commentaire, votre photo de profil sera visible publiquement à coté de votre
					commentaire.
				</p>
				<h4>Médias</h4>
				<p>
					Si vous êtes un utilisateur ou une utilisatrice enregistré·e et que vous téléversez des images sur le site web, nous vous conseillons
					d’éviter de téléverser des images contenant des données EXIF de coordonnées GPS. Les visiteurs de votre site web peuvent télécharger et
					extraire des données de localisation depuis ces images.
				</p>
				<h4>Formulaire de Contact</h4>
				<p>
					Lorsque vous nous adressez une demande à l’aide de notre formulaire de contact, les données personnelles que nous enregistrons sont : Votre
					pseudo et l’adresse email.
				</p>
				<h4>Cookies</h4>
				<p>
					Si vous déposez un commentaire sur notre site, il vous sera proposé d’enregistrer votre nom, adresse de messagerie et site web dans des
					cookies. C’est uniquement pour votre confort afin de ne pas avoir à saisir ces informations si vous déposez un autre commentaire plus tard.
					Ces cookies expirent au bout d’un an.
				</p>
				<p>
					Si vous vous rendez sur la page de connexion, un cookie temporaire sera créé afin de déterminer si votre navigateur accepte les cookies. Il
					ne contient pas de données personnelles et sera supprimé automatiquement à la fermeture de votre navigateur.
				</p>
				<p>
					Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos
					préférences d’écran. La durée de vie d’un cookie de connexion est de deux jours, celle d’un cookie d’option d’écran est d’un an. Si vous
					cochez « Se souvenir de moi », votre cookie de connexion sera conservé pendant deux semaines. Si vous vous déconnectez de votre compte, le
					cookie de connexion sera effacé.
				</p>
				<p>
					En modifiant ou en publiant une publication, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie ne comprend aucune
					donnée personnelle. Il indique simplement l’ID de la publication que vous venez de modifier. Il expire au bout d’un jour.
				</p>
				<h4>Contenu embarqué depuis d'autre sites</h4>
				<p>
					Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré depuis
					d’autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site.
				</p>
				<p>
					Ces sites web pourraient collecter des données sur vous, utiliser des cookies, embarquer des outils de suivis tiers, suivre vos interactions
					avec ces contenus embarqués si vous disposez d’un compte connecté sur leur site web.
				</p>
				<h4>Statistiques et mesures d’audience</h4>
				<p>
					Afin d’établir une mesure d’audience, nous comptabilisons le nombre de visites, de pages vues, et analysons l’activité des visiteurs de
					b:pulp. Des cookies contenant des informations non nominatives peuvent-être utilisés à cette fin, que vous pouvez refuser ou supprimer dans
					les options de votre navigateur sans que cela empêche l’accès aux pages du site. Nous utilisons pour ces statistiques les outils de mesure
					d’audience Google Analytics.
				</p>
				<p>
					Afin d’affiner ces analyses statistiques et de lutter contre des attaques informatique ou des fraudes b:pulp peut aussi enregistrer
					provisoirement les adresses IP associées aux consultations effectuées sur le site.
				</p>
			</section>
			<section class="data-securisation">
				<h3>Sécurisation des données</h3>
				<p>
					Le respect de la sécurité des données est une priorité de b:pulp, respect assuré par la mise en œuvre des mesures techniques permettant de
					protéger vos Données Personnelles de façon appropriée.
				</p>
				<p>
					b:pulp s’engage à mettre en œuvre tous les moyens nécessaires en vue de garantir la sécurité et la confidentialité des Données Personnelles
					traitées et, à prendre toutes les mesures techniques et organisationnelles appropriées afin de restreindre les risques de perte, de
					déformation, de détérioration ou de mauvaise utilisation de celles-ci, ainsi que les risques d’accès aux Données Personnelles par des tiers
					non autorisés.
				</p>
				<p>
					En cas de faille de sécurité, pouvant constituer un risque pour vos droits et libertés, b:pulp s’engage à alerter l’autorité de contrôle
					dans les meilleurs délais et si possible dans les 72 h après en avoir pris connaissance, ainsi que les personnes concernées dans les
					conditions prévues par la réglementation.
				</p>
				<p>Cette obligation s’impose à l’ensemble des collaborateurs de b:pulp et aux prestataires.</p>
			</section>
			<section class="contact-information">
				<h3>INFORMATION DE CONTACT</h3>
				<p>
					Pour toute information complémentaire sur la protection de vos données personnelles, vous pouvez transmettre votre requête par courriel à
					l’adresse suivante : paladinsfrenchteam@gmail.fr
				</p>
				<p>Ce site est édité, par :</p>
				<p><strong>Quentin Rulleau</strong></p>
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
section {
	margin-bottom: 60px;
	p {
		margin-bottom: 25px;
		line-height: 150%;
	}
	h3 {
		font-size: 36px;
		margin-bottom: 40px;
	}
	h4 {
		font-weight: 900;
		font-size: 18px;
		margin-bottom: 20px;
	}
}
h2 {
	margin-bottom: 180px;
}
</style>
