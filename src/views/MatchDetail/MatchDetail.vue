<template>
	<div class="background-image">
		<div class="container">
			<HeaderNav class="pt-100" />
			<h2 class="text-center">Detail DU match</h2>
			<div class="background-description-mat">
				<p class="status">Online</p>
				<div class="d-flex">
					<span class="line"></span>
					<h3>Champion League of paladins</h3>
					<span class="line"></span>
				</div>
				<h4>Saison 2021</h4>
				<div class="d-flex">
					<div class="d-flex">
						<div>
							<h5>NAVI</h5>
							<p>Champion du monde 2018</p>
						</div>
						<img src="../../assets/LogoDetailMatch/navi.png" alt="" />
					</div>
					<div>
						<p>16 juin vendredi 23h00</p>
						<p>Best of 3</p>
					</div>
					<div class="d-flex">
						<img src="../../assets/LogoDetailMatch/fnatic.png" alt="" />
						<div>
							<h5>fnatic</h5>
							<p>Champion du monde 2017</p>
						</div>
					</div>
				</div>
				<div class="text-center">
					<p class="red">Résultat Final</p>
					<p class="score">1 - 2</p>
				</div>
			</div>
		</div>
	</div>
	<FooterNav />
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
.background-description-mat {
	background-image: url(../../src/assets/background/MatchDetailDescriptionPage.jpg);
	background-repeat: no-repeat;
}
.background-image {
	background-image: url(../../src/assets/background/MatchDetailPage.jpg);
	background-repeat: no-repeat;
	background-color: #080b15;
}
</style>
