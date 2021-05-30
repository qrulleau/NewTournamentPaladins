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
						<TeamCard />
						<TeamCard />
						<TeamCard />
						<TeamCard />
					</div>
					<div class="d-flex margin">
						<TeamCard />
						<TeamCard />
						<TeamCard />
						<TeamCard />
					</div>
					<div class="d-flex margin">
						<TeamCard />
						<TeamCard />
						<TeamCard />
						<TeamCard />
					</div>
					<div class="d-flex mb60">
						<TeamCard />
						<TeamCard />
						<TeamCard />
						<TeamCard />
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
