<template>
	<div class="background-image">
		<div class="container">
			<HeaderNav class="pt-100" />
		</div>
		<div class="text-center">
			<h2 class="title">Classement</h2>
			<select name="choix du tournois" v-model="TournamentChoice" id="">
				<option value="" disabled>Liste des tournois disponibles</option>
				<option value="ChampionsLeague">Champions League of Paladins</option>
			</select>
		</div>
		<!-- <section v-show="TournamentChoice === 'ChampionsLeague'">
			<ResultCard />
			<ResultCard />
			<ResultCard />
			<ResultCard />
		</section> -->
	</div>
	<FooterNav />
</template>

<script>
import HeaderNav from '../../components/layout/TheNavBar.vue';
import FooterNav from '../../components/layout/TheFooter.vue';
import ResultCard from '../../components/common/ResultCard.vue';

export default {
	components: {
		HeaderNav,
		FooterNav,
		ResultCard,
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
	background-image: url('https://i.ibb.co/wrrgJw9/Result-Page.jpg');
	background-repeat: no-repeat;
	background-color: #080b15;
	padding-bottom: 93px;
}
h2.title {
	margin-bottom: 48px;
}
select {
	margin-bottom: 140px;
}
</style>
