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
						<h3>Champion League of Paladins</h3>
						<span class="line"></span>
					</div>
					<h4 class="text-center">Saison 2021</h4>
					<div class="d-flex item-align-center">
						<div class="d-flex item-align-center team">
							<div class="description-team">
								<h5>GPT E-sport</h5>
							</div>
						</div>
						<div class="text-center schedule">
							<p>26 juin samedi 14h00</p>
							<p class="grey">Best of 3</p>
						</div>
						<div class="d-flex item-align-center team">
							<div class="description-team">
								<h5 class="text-right">Lightning</h5>
							</div>
						</div>
					</div>
					<div class="text-center result">
						<p class="orange">Résultat Final</p>
						<!-- <p class="score">2 - 0</p> -->
					</div>
				</div>
				<section id="team">
					<h3 class="underline-red">Team</h3>
					<div class="d-flex selection-currently flex-start">
						<a
							:class="isActive ? 'active' : ''"
							@click="
								toggle();
								[(CurrentTeam = 'FirstTeam')];
							"
							>GPT E-sport</a
						>
						<a
							:class="!isActive ? 'active' : ''"
							@click="
								toggle();
								[(CurrentTeam = 'SecondTeam')];
							"
							>Lightning</a
						>
					</div>
					<section v-if="CurrentTeam === 'FirstTeam'">
						<div class="d-flex">
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/GPT/potato.jpg" alt="" />
									<div class="position-absolute">
										<h4>PotatoHunterz</h4>
										<p class="red">Heal</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/GPT/tobo.jpg" alt="" />
									<div class="position-absolute">
										<h4>Tobo14</h4>
										<p class="red">flex</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/GPT/midorino.jpg" alt="" />
									<div class="position-absolute">
										<h4>MidoriNoO</h4>
										<p class="red">Tank</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/GPT/alpha.jpg" alt="" />
									<div class="position-absolute">
										<h4>Alpha867</h4>
										<p class="red">DPS</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/GPT/lastguadian.jpg" alt="" />
									<div class="position-absolute">
										<h4>TheLastGuadian</h4>
										<p class="red">Tank</p>
									</div>
								</div>
							</div>
						</div>
						<div class="d-flex sub">
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/GPT/lorminator.jpg" alt="" />
									<div class="position-absolute">
										<h4>Lorminator2001</h4>
										<p class="red">Sub</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/GPT/lucas.jpg" alt="" />
									<div class="position-absolute">
										<h4>LucasDrifter</h4>
										<p class="red">Sub</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section v-if="CurrentTeam === 'SecondTeam'">
						<div class="d-flex">
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/Lightning/arcan.jpg" alt="" />
									<div class="position-absolute">
										<h4>Arcan</h4>
										<p class="red">Tank</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/Lightning/kurt.jpg" alt="" />
									<div class="position-absolute">
										<h4>Kurt135</h4>
										<p class="red">Tank</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/Lightning/zrp.jpg" alt="" />
									<div class="position-absolute">
										<h4>Zrp73</h4>
										<p class="red">DPS</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/Lightning/kurt.jpg" alt="" />
									<div class="position-absolute">
										<h4>Major Blaze5151</h4>
										<p class="red">DPS</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/Lightning/lystale.jpg" alt="" />
									<div class="position-absolute">
										<h4>Lystale</h4>
										<p class="red">Heal</p>
									</div>
								</div>
							</div>
						</div>
						<div class="d-flex sub">
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/Lightning/yasaina.jpg" alt="" />
									<div class="position-absolute">
										<h4>Yasayna</h4>
										<p class="red">Sub</p>
									</div>
								</div>
							</div>
							<div class="player-profil">
								<div class="position-relative">
									<img src="../../../assets/ProfilPlayer/Lightning/alarme.jpg" alt="" />
									<div class="position-absolute">
										<h4>AlarmeColver</h4>
										<p class="red">Sub</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<!-- <section id="map">
						<h3 class="underline-red">Map</h3>
						<div class="d-flex">
							<div class="map-games">
								<div class="position-relative">
									<img src="../../../assets/Map/stoneKeep.jpg" alt="" />
									<div class="position-absolute">
										<h4>Donjon de pierre</h4>
										<p class="orange">Remporté par Tourcoing Eternal</p>
									</div>
								</div>
							</div>
							<div class="map-games">
								<div class="position-relative">
									<img src="../../../assets/Map/mangrove.jpg" alt="" />
									<div class="position-absolute">
										<h4>Mangrove</h4>
										<p class="orange">Remporté par Tourcoing Eternal</p>
									</div>
								</div>
							</div>
						</div>
					</section> -->
				</section>
			</div>
		</div>
	</div>
	<FooterNav />
</template>

<script>
import HeaderNav from '../../../components/layout/TheNavBar.vue';
import FooterNav from '../../../components/layout/TheFooter.vue';
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
	background-image: url('https://i.ibb.co/VDXV2Cc/Match-Detail-Description-Page.jpg');
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
.sub {
	margin-top: 20px;
	justify-content: flex-start;
	.player-profil:nth-child(2) {
		margin-left: 16px;
	}
}
.background-image {
	background-image: url('https://i.ibb.co/8gsyjC4/Match-Detail-Page.png');
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
	border-left: 6px solid #c5400f;
	width: max-content;
	font-weight: 900;
	font-size: 24px;
	padding-left: 8px;
}
.selection-currently {
	margin: 36px 0 28px 0;
	a {
		color: #aba7a7;
		font-size: 16px;
		font-weight: 900;
		text-transform: uppercase;
		margin-right: 30px;
		cursor: pointer;
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
	bottom: 0;
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
	padding-bottom: 60px;
}
a.active {
	font-weight: 900;
	padding-bottom: 8px;
	border-bottom: 4px solid #b91911;
}
section#map {
	padding-bottom: 60px;
	h3 {
		margin: 40px 0;
	}
}
section#map {
	.d-flex {
		justify-content: flex-start;
		.map-games:last-child {
			margin-left: 25.5px;
		}
	}
}
@media screen and (max-width: 1230px) {
	.container-body {
		width: 100%;
	}
}
@media screen and (max-width: 1000px) {
}
</style>
