<template>
	<div>
		<div class="background-image">
			<div class="container">
				<HeaderNav class="pt-100" />
				<div class="small-container">
					<div class="d-flex mt-245 item-align-center pb-349">
						<div>
							<h3>Introduction</h3>
							<h2>Nouveau Tournois Paladins</h2>
							<p>La championne League of Paladins a officiellement commencé, du cash à gagné, tenter votre chance !</p>
							<router-link to="">Plus d'info -></router-link>
						</div>
						<div>
							<div>
								<span class="red-underline"></span>
								<embed width="323" height="172" src="https://www.youtube.com/embed/hwVYNqkNuGk" />
								<div class="background-white">
									<div class="d-flex item-align-center">
										<div>
											<img src="../../assets/LogoTeam/pg.png" alt="" />
										</div>
										<p class="orange">VS</p>
										<div>
											<img src="../../assets/LogoTeam/vitality.png" alt="" />
										</div>
									</div>
								</div>
							</div>
							<div>
								<span class="red-underline"></span>
								<div class="background-white mt-36">
									<div class="d-flex item-align-center">
										<div>
											<p class="black">
												CONTACT<br />
												BLANC
											</p>
										</div>
										<div class="black">
											<p class="orange">Match à venir</p>
											<p class="black">20/12/2021</p>
										</div>
										<div>
											<p class="black">SYLICAL</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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

<style lang="scss">
.d-flex {
	display: flex;
	justify-content: space-between;
}
.background-black {
	background-color: black;
}
.background-white {
	background-color: white;
}
.container {
	width: 1624px;
	margin: 0 auto;
}
.black {
	color: black;
}
.red {
	color: #ff3147;
}
.orange {
	color: #c5400f;
}
* {
	box-sizing: border-box;
	scroll-behavior: smooth;
	font-family: 'Roboto', sans-serif;
	padding: 0;
	margin: 0;
	color: white;
}
a {
	text-decoration: none;
	color: white;
}
.item-align-center {
	align-items: center;
}
.background-image {
	background-image: url(../../src/assets/background/HomePage.jpg);
}
.pt-100 {
	padding-top: 100px;
}
.mt-245 {
	margin-top: 245px;
}
.small-container {
	width: 1346px;
	margin: 0 auto;
}
.mt-36 {
	margin-top: 36px;
}
.pb-349 {
	padding-bottom: 349px;
}
</style>
