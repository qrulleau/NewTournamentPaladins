<template>
	<div>
		<div class="background-image">
			<div class="container">
				<HeaderNav class="pt-100" />
			</div>
			<h2 class="text-center title">Liste des équipes</h2>
			<div class="text-center mb148">
				<select name="choix du tournois" v-model="TournamentChoice" id="">
					<option value="" disabled>Liste des tournois</option>
					<option value="ChampionsLeague">Champions League of Paladins</option>
				</select>
			</div>
			<div class="container-body">
				<section v-show="TournamentChoice === 'ChampionsLeague'">
					<div class="d-flex margin">
						<TeamCard
							TeamName="GPT Esport"
							Player1="PotatoHunterz"
							RolePlayer1="Healer"
							Player2="tobo14"
							RolePlayer2="Flex"
							Player3="MidoriNoO"
							RolePlayer3="Flex"
							Player4="Alpha867"
							RolePlayer4="DPS"
							Player5="TheLastGuadian"
							RolePlayer5="Tank"
							Sub1="Lorminator2001"
							RoleSub1="Sub"
							Sub2="LucasDrifter"
							RoleSub2="Sub"
							linkTwitch="https://www.twitch.tv/tobothebigburger"
							linkTwitter="#"
						/>
						<TeamCard
							TeamName="LIGHTNING"
							Player1="Arcan"
							RolePlayer1="Tank"
							Player2="Lystale"
							RolePlayer2="Healer"
							Player3="Kurt135"
							RolePlayer3="Tank"
							Player4="Zrp73"
							RolePlayer4="DPS"
							Player5="Major Blaze5151"
							RolePlayer5="Tank"
							Sub1="Yasayna"
							RoleSub1="Sub"
							Sub2="AlarmeColver"
							RoleSub2="Sub"
							linkTwitch="https://www.twitch.tv/arcangamingg"
							linkTwitter="#"
						/>
						<TeamCard
							TeamName="MINERVA"
							Player1="pharmaceutique"
							RolePlayer1="Tank"
							Player2="zikouz"
							RolePlayer2="DPS"
							Player3="genesect500"
							RolePlayer3="Tank"
							Player4="cartix777"
							RolePlayer4="Heal"
							Player5="Wyseer"
							RolePlayer5="DPS"
							Sub1="Metroidgamer45"
							RoleSub1="Sub"
							linkTwitch="#"
							linkTwitter="#"
						/>
						<TeamCard
							TeamName="Adbul Joestar"
							Player1="Frzo"
							RolePlayer1="Flex"
							Player2="Etsuuu"
							RolePlayer2="Flex"
							Player3="NOWKH"
							RolePlayer3="Flex"
							Player4="Otev"
							RolePlayer4="Flex"
							Player5="FLAASHOU"
							RolePlayer5="Flex"
							Sub1="LaDji"
							RoleSub1="Sub"
							Sub2="Némësys"
							RoleSub2="Sub"
							linkTwitch="https://www.twitch.tv/etsuuuuuuu"
							linkTwitter="https://twitter.com/etsuuu6"
						/>
					</div>
					<div class="d-flex margin">
						<TeamCard
							TeamName="JobLess"
							Player1="Arzën"
							RolePlayer1="Healer"
							Player2="Oxygen"
							RolePlayer2="Flex"
							Player3="Parazigod"
							RolePlayer3="Flex"
							Player4="SOOOOOOOON"
							RolePlayer4="DPS"
							Player5="CodryzerTTV"
							RolePlayer5="DPS"
							Sub1="Møugli"
							RoleSub1="Sub"
							Sub2="XxBenjiGamerxX"
							RoleSub2="Sub"
							linkTwitch="https://www.twitch.tv/paradioxe"
							linkTwitter="https://twitter.com/Paradioxe"
						/>
						<TeamCard
							TeamName="Alpaga"
							Player1="Snaýz"
							RolePlayer1="Tank"
							Player2="BasicBotPlayer"
							RolePlayer2="Healer"
							Player3="Némësys"
							RolePlayer3="Tank"
							Player4="Eclaat"
							RolePlayer4="DPS"
							Player5="envel8"
							RolePlayer5="Tank"
							Sub1="Vespalia"
							RoleSub1="Sub"
							Sub2="Sàphiir"
							RoleSub2="Sub"
							linkTwitch="https://www.twitch.tv/neiiige_"
							linkTwitter="https://twitter.com/snayzzzz"
						/>
						<TeamCard
							TeamName="Sylical"
							Player1="KuroFS"
							RolePlayer1="Heal"
							Player2="Azorare"
							RolePlayer2="Tank"
							Player3="Køsmic"
							RolePlayer3="Tank"
							Player4="Møugli"
							RolePlayer4="DPS"
							Player5="Aymeshin"
							RolePlayer5="DPS"
							Sub1="kitaraaaa"
							RoleSub1="Sub"
							Sub2="BestKindredEU"
							RoleSub2="Sub"
							linkTwitch="https://www.twitch.tv/sylicaltv"
							linkTwitter="https://twitter.com/OrgSylicaL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
						/>
						<TeamCard
							TeamName="Tourcoing Eternals"
							Player1="Dinopierre"
							RolePlayer1="Flex"
							Player2="Lerazo"
							RolePlayer2="Flex"
							Player3="Keema"
							RolePlayer3="Flex"
							Player4="BANG"
							RolePlayer4="Heal"
							Player5="Balhrog"
							RolePlayer5="Tank"
							Sub1="Frost78"
							RoleSub1="Sub"
							Sub2="MoutonPower"
							RoleSub2="Sub"
							linkTwitch="https://www.twitch.tv/dinopierre"
							linkTwitter="https://twitter.com/KeemaOfficiel"
						/>
					</div>
				</section>
			</div>
		</div>
		<FooterNav />
	</div>
</template>

<script>
import HeaderNav from '../../components/layout/TheNavBar.vue';
import FooterNav from '../../components/layout/TheFooter.vue';
import TeamCard from '../../components/common/TeamCard.vue';
export default {
	components: {
		HeaderNav,
		FooterNav,
		TeamCard,
	},
	data() {
		return {
			TournamentChoice: '',
		};
	},
};
</script>

<style lang="scss" scoped>
.background-image {
	background-image: url('https://i.ibb.co/H738mmW/Team-Page2nd.jpg');
	background-repeat: no-repeat;
	background-color: #080b15;
	padding-bottom: 58px;
}

.container-body {
	width: 1272px;
	margin: 0 auto;
}
.margin {
	margin-bottom: 48px;
}
.mb148 {
	padding-bottom: 148px;
}
.mb60 {
	padding-bottom: 60px;
}
h2 {
	margin-bottom: 75px;
}
@media screen and (max-width: 1300px) {
	.container-body {
		width: calc(100% - 30px);
	}
}
@media screen and (max-width: 1200px) {
	.margin {
		flex-direction: column;
		align-items: center;
		margin-bottom: 0;
		.box {
			margin-bottom: 20px;
		}
	}
}
</style>
