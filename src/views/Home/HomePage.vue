<template>
	<div>
		<section class="landing-page">
			<div class="background-image">
				<div class="container">
					<HeaderNav class="pt-100" />
					<div class="small-container">
						<div class="d-flex pt-140 item-align-center pb-414">
							<div>
								<h2>Introduction</h2>
								<h3>
									Paladins <br />
									French Tournament
								</h3>
								<p class="description">
									La championne League of Paladins a <br />
									officiellement commencé, du cash à gagné, <br />tenter votre chance !
								</p>
								<router-link class="background-main" to="">Plus d'info -></router-link>
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
								<div class="mt-36">
									<span class="red-underline"></span>
									<div class="background-white">
										<div class="d-flex item-align-center">
											<div>
												<p class="black">
													CONTACT<br />
													BLANC
												</p>
											</div>
											<div class="black text-center">
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
		</section>
		<div class="background-black">
			<div class="small-container">
				<div class="d-flex text-center">
					<div class="stats">
						<h3>2,050k</h3>
						<p>Youtube stream</p>
					</div>
					<div class="stats">
						<h3>25+</h3>
						<p>Teams</p>
					</div>
					<div class="stats">
						<h3>210€</h3>
						<p>Cashprice</p>
					</div>
					<div class="stats">
						<h3>Vues twitch</h3>
						<p>3000</p>
					</div>
				</div>
			</div>
		</div>
		<section class="background-image-match">
			<div class="text-center">
				<h3 class="red">Champions League of Paladins</h3>
				<h4>FUTURES MATCH</h4>
				<AnnounceMatch />
				<AnnounceMatch />
				<AnnounceMatch />
				<div class="pt-36 text-center">
					<router-link to="/calendrier" class="background-main">En voir plus</router-link>
				</div>
			</div>
		</section>
		<section class="background-bleu text-center subscribe">
			<p class="slogan"><span class="red">Tu veux participer ?</span> Inscrit toi avec ton equipe !</p>
			<h3>Tente ta chance</h3>
			<div class="container-logo">
				<div class="d-flex item-align-center">
					<span class="line"></span>
					<p>paladins french tournament</p>
					<span class="line"></span>
				</div>
			</div>
			<p>
				Peut importe ton age, rassemble 5 joueurs, rejoind le discord et tente de battre les equipes francaise de paladins. <br />
				nos regles sont simple : insultes & cheat sont interdit , flame, emote et tout autres procédés du jeu sont autorisé ! Alors rejoind nous !
			</p>
			<div class="container-button">
				<div class="d-flex">
					<button class="background-main" ref="">Inscrit toi</button>
					<button class="reversal-background" ref="https://discord.gg/Z9J5ejTe">Rejoind le discord</button>
				</div>
			</div>
		</section>
		<FooterNav />
	</div>
</template>

<script>
import HeaderNav from '../../components/layout/TheNavBar.vue';
import FooterNav from '../../components/layout/TheFooter.vue';
import AnnounceMatch from '../../components/common/AnnounceMatchHomePage.vue';
export default {
	components: {
		HeaderNav,
		FooterNav,
		AnnounceMatch,
	},
};
</script>

<style lang="scss">
.flex-start {
	justify-content: flex-start !important;
}
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
.background-bleu {
	background-color: #080b15;
}
.background-main {
	background: linear-gradient(180deg, #c5400f 0%, #b91911 100%);
}
.background-bleu button.reversal-background {
	background: inherit;
	border-image-slice: 1;
	border-width: 2px;
	border-image-source: linear-gradient(180deg, #c5400f 0%, #b91911 100%);
}
.container {
	width: 1624px;
	margin: 0 auto;
}
.black {
	color: black;
}
.red {
	color: #b91911;
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
button,
a.background-main,
input[type='button'] {
	font-weight: bold;
	font-size: 18px;
	width: 180px;
	height: 50px;
	text-align: center;
	cursor: pointer;
}
a.background-main {
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 300ms;
}
a.background-main:hover {
	background: linear-gradient(180deg, #b90911 0%, #c5400f 100%);
	transition: 3000ms;
}
button.background-main,
input[type='button'] {
	border: none;
}
a {
	text-decoration: none;
	color: white;
}
.item-align-center {
	align-items: center;
}
.text-center {
	text-align: center;
}
.background-image {
	background-image: url(../../src/assets/background/HomePage.jpg);
}
.background-image-match {
	background-image: url(../../src/assets/background/HomePageSchedule.jpg);
}
.pt-100 {
	padding-top: 100px;
}
.pt-140 {
	padding-top: 140px;
}
.small-container {
	width: 1346px;
	margin: 0 auto;
}
.mt-36 {
	margin-top: 36px;
}
.pt-36 {
	padding-top: 36px;
	display: flex;
	justify-content: center;
}
.pb-414 {
	padding-bottom: 414px;
}
.stats {
	margin: 50px 0px;
	h3 {
		margin-bottom: 16px;
		font-size: 30px;
		font-weight: bold;
	}
	p {
		color: #c5400f;
		font-size: 18px;
	}
}
section.landing-page {
	h2 {
		font-size: 18px;
		font-weight: 400;
	}
	h3 {
		font-size: 48px;
		font-weight: 700;
		margin: 24px 0 14px 0;
	}
	p.description {
		margin-bottom: 92px;
		font-size: 18px;
		line-height: 150%;
	}
	span.red-underline {
		background-color: #b91911;
		width: 323px;
		height: 3px;
		display: block;
	}
}
section.background-image-match {
	padding: 48px 0 36px 0;
}
section.subscribe {
	padding: 92px 0 120px 0;
	.slogan {
		font-size: 26px;
		margin-bottom: 60px;
		line-height: inherit;
	}
	p {
		font-size: 18px;
		line-height: 150%;
	}
	.container-button {
		width: 440px;
		margin: 48px auto 0 auto;
	}
	h3 {
		font-size: 48px;
	}
	.container-logo {
		width: 240px;
		margin: 28px auto 36px auto;
	}
	span.line {
		width: 50px;
		height: 1px;
		background-color: #ffff;
		display: block;
	}
}
</style>
