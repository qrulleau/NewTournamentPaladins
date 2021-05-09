<template>
	<div>
		<div class="background-image">
			<div class="container">
				<HeaderNav class="pt-100" />
			</div>
		</div>
		<FooterNav />
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
.background-image {
	background-image: url(../../src/assets/background/TeamPage.jpg);
}
</style>
