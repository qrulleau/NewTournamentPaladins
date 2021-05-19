<template>
	<div class="background-image">
		<div class="container">
			<HeaderNav class="pt-100" />
		</div>
		<select name="" id=""></select>
		<ResultCard />
		<ResultCard />
		<ResultCard />
		<ResultCard />
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
};
</script>

<style lang="scss" scoped>
.background-image {
	background-image: url(../../src/assets/background/ResultPage.jpg);
	background-repeat: no-repeat;
	background-color: #080b15;
	padding-bottom: 35px;
}
</style>
