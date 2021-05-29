<template>
	<div class="background-image">
		<div class="container">
			<HeaderNav class="pt-100" />
			<h2 class="text-center title">Detail du match</h2>
			<div class="container-body">
				<div class="background-description-mat">
					<div class="d-flex justify">
						<p class="status">Online</p>
					</div>
					<div class="d-flex justify item-align-center">
						<span class="line"></span>
						<h3>Champion League of paladins</h3>
						<span class="line"></span>
					</div>
					<h4 class="text-center">Saison 2021</h4>
					<div class="d-flex item-align-center">
						<div class="d-flex item-align-center">
							<div class="description-team">
								<h5>NAVI</h5>
								<p class="grey">Champion du monde 2018</p>
							</div>
							<img src="../../assets/LogoDetailMatch/navi.png" alt="" />
						</div>
						<div class="text-center schedule">
							<p>16 juin vendredi 23h00</p>
							<p class="grey">Best of 3</p>
						</div>
						<div class="d-flex item-align-center">
							<img src="../../assets/LogoDetailMatch/fnatic.png" alt="" />
							<div class="description-team">
								<h5 class="text-right">fnatic</h5>
								<p class="grey">Champion du monde 2017</p>
							</div>
						</div>
					</div>
					<div class="text-center result">
						<p class="orange">Résultat Final</p>
						<p class="score">1 - 2</p>
					</div>
				</div>
				<section id="team">
					<h3 class="underline-red">Team</h3>
					<div class="d-flex selection-currently flex-start">
						<a
							:class="isActive ? 'active' : ''"
							@click="
								toggle();
								CurrentTeam = 'FirstTeam';
							"
							>FNATIC</a
						>
						<a
							:class="!isActive ? 'active' : ''"
							@click="
								toggle();
								CurrentTeam = 'SecondTeam';
							"
							>NAVI</a
						>
					</div>
					<section v-if="CurrentTeam === 'FirstTeam'">
						<div class="d-flex">
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../assets/ProfilPlayer/pettiote.jpg" alt="" />
									<div class="position-absolute">
										<h4>Pettiote</h4>
										<p class="red">Healeuse</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../assets/ProfilPlayer/dinopierre.jpg" alt="" />
									<div class="position-absolute">
										<h4>Dinopierre</h4>
										<p class="red">DPS</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../assets/ProfilPlayer/lystale.jpg" alt="" />
									<div class="position-absolute">
										<h4>Lystale</h4>
										<p class="red">DPS</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../assets/ProfilPlayer/kitara.jpg" alt="" />
									<div class="position-absolute">
										<h4>Kitara</h4>
										<p class="red">Flex</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../assets/ProfilPlayer/moutonPower.jpg" alt="" />
									<div class="position-absolute">
										<h4>Mouton Power</h4>
										<p class="red">Tank</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section v-if="CurrentTeam === 'SecondTeam'">
						<div class="d-flex">
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../assets/ProfilPlayer/kurt.jpg" alt="" />
									<div class="position-absolute">
										<h4>Kurt</h4>
										<p class="red">Tank</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../assets/ProfilPlayer/kurofs.jpg" alt="" />
									<div class="position-absolute">
										<h4>KuroFS</h4>
										<p class="red">Healeur</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../assets/ProfilPlayer/ottoo.jpg" alt="" />
									<div class="position-absolute">
										<h4>Ottooo</h4>
										<p class="red">Tank</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../assets/ProfilPlayer/maurice.jpg" alt="" />
									<div class="position-absolute">
										<h4>Maurice</h4>
										<p class="red">DPS</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../assets/ProfilPlayer/mowgli.jpg" alt="" />
									<div class="position-absolute">
										<h4>Mowgli</h4>
										<p class="red">DPS</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>
				<section id="map">
					<h3 class="underline-red">Map</h3>
					<div class="d-flex">
						<div class="map-games">
							<div class="position-relative">
								<img src="../../assets/Map/mangrove.jpg" alt="" />
								<div class="position-absolute">
									<h4>Mangrove</h4>
									<p class="orange">Remporté par FNATIC</p>
								</div>
							</div>
						</div>
						<div class="map-games">
							<div class="position-relative">
								<img src="../../assets/Map/chuteJaguar.jpg" alt="" />
								<div class="position-absolute">
									<h4>Chute du jaguar</h4>
									<p class="orange">Remporté par FNATIC</p>
								</div>
							</div>
						</div>
						<div class="map-games">
							<div class="position-relative">
								<img src="../../assets/Map/IleGrenouille.jpg" alt="" />
								<div class="position-absolute">
									<h4>île grenouille</h4>
									<p class="orange">Remporté par FNATIC</p>
								</div>
							</div>
						</div>
					</div>
				</section>
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
	data() {
		return {
			CurrentTeam: 'FirstTeam',
			isActive: true,
		};
	},
	methods: {
		toggle() {
			this.isActive = !this.isActive;
			console.log(this.CurrentTeam);
		},
	},
};
</script>

<style lang="scss" scoped>
.background-description-mat {
	background-image: url(../../src/assets/background/MatchDetailDescriptionPage.jpg);
	background-repeat: no-repeat;
	margin-bottom: 40px;
	padding: 34px 60px;
	.status {
		background-color: #c5400f;
		padding: 7px 12px;
		width: 73px;
		text-align: center;
		border-radius: 10px;
		font-weight: bold;
		margin-bottom: 32px;
	}
}

.background-image {
	background-image: url(../../src/assets/background/MatchDetailPage.jpg);
	background-repeat: no-repeat;
	background-color: #080b15;
}
span.line {
	width: 118px;
	height: 1px;
	background-color: #ffffff;
	opacity: 30%;
}
.justify {
	justify-content: center;
	h3 {
		margin: 0 16px;
	}
}
h4 {
	margin: 14px 0 48px 0;
}
.description-team {
	margin-right: 80px;
	h5 {
		font-size: 24px;
		font-weight: 900;
		text-transform: uppercase;
		margin-bottom: 4px;
	}
	p {
		font-weight: 900;
	}
}
.description-team:last-child {
	margin-left: 80px;
	margin-right: 0;
}
.schedule {
	font-weight: 900;
}
.schedule p:last-child {
	margin-top: 12px;
}
.result {
	font-weight: 900;
	font-size: 48px;
	margin-top: 92px;
	.orange {
		font-size: 16px;
		margin-bottom: 16px;
	}
}
.underline-red {
	border-bottom: 3px solid #c5400f;
	width: max-content;
	font-weight: 900;
	font-size: 24px;
}
.selection-currently {
	margin: 36px 0 28px 0;
	a {
		color: #aba7a7;
		font-size: 16px;
		font-weight: 900;
		text-transform: uppercase;
		margin-right: 30px;
	}
}
a:last-child {
	margin-right: 0;
}
a.active {
	color: white;
}
.container-body {
	width: 1200px;
	margin: 120px auto 0 auto;
}
.position-relative {
	position: relative;
}
.position-absolute {
	position: absolute;
	bottom: 4px;
	right: 0;
	left: 0;
	top: 70%;
	background: linear-gradient(270deg, rgba(23, 23, 33, 0) -3.11%, #171721 95.17%);
	padding: 28px 0 12px 8px;
	h4 {
		margin: 0 0 4px 0;
		font-size: 18px;
		font-weight: 900;
	}
	p {
		font-weight: 500;
	}
}
section#team {
	padding-bottom: 27px;
}
section#map {
	padding-bottom: 60px;
	h3 {
		margin-bottom: 40px;
	}
}
.map-games {
	.position-absolute {
		top: 60%;
	}
}
</style>
