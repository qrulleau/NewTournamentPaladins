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
							Player5="TheLastGuardian"
							RolePlayer5="Tank"
							Sub1="Lorminator2001"
							RoleSub1="Sub"
							Sub2="LucasDrifter"
							RoleSub2="Sub"
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
							Player5="Terichess"
							RolePlayer5="Tank"
							Sub1="Nøctali"
							RoleSub1="Sub"
							Sub2="AlarmeColver"
							RoleSub2="Sub"
						/>
						<TeamCard
							TeamName="MINERVA"
							Player1="pharmaceutique"
							RolePlayer1="Heal"
							Player2="zikouz"
							RolePlayer2="DPS"
							Player3="genesect500"
							RolePlayer3="Tank"
							Player4="cartix777"
							RolePlayer4="Tank"
							Player5="Wyseer"
							RolePlayer5="DPS"
							Sub1="Metroidgamer45"
							RoleSub1="Sub"
						/>
						<TeamCard
							TeamName="AdbulJoestar"
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
</style>
