<template>
	<div class="background-image">
		<div class="container">
			<HeaderNav class="pt-100" />
			<h2 class="text-center">calendrier</h2>
			<div class="d-flex selection-currently flex-start">
				<h3 class="active">MATCH à VENIR</h3>
				<h3>DERNIER RÉSULTATS</h3>
			</div>
			<AnnounceMatch />
			<AnnounceMatch class="mt-20" />
			<AnnounceMatch class="mt-20" />
			<AnnounceMatch class="mt-20" />
			<AnnounceMatch class="mt-20" />
		</div>
	</div>
	<FooterNav />
</template>

<script>
import HeaderNav from '../../components/layout/TheNavBar.vue';
import FooterNav from '../../components/layout/TheFooter.vue';
import AnnounceMatch from '../../components/common/AnnounceMatchCalendarPage.vue';
export default {
	components: {
		HeaderNav,
		FooterNav,
		AnnounceMatch,
	},
};
</script>

<style lang="scss" scoped>
.background-image {
	background-image: url(../../src/assets/background/MatchDetailPage.jpg);
	background-repeat: no-repeat;
	background-color: #080b15;
	padding-bottom: 44px;
}
.mt-20 {
	margin-top: 20px;
}
.selection-currently {
	margin: 120px 0 40px 0;
	h3 {
		color: #aba7a7;
		font-size: 16px;
		font-weight: 900;
		text-transform: uppercase;
		margin-right: 30px;
	}
}
h3:last-child {
	margin-right: 0;
}
h3.active {
	color: white;
}
</style>
