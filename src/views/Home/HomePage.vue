<template>
	<div>
		<section class="landing-page">
			<div class="background-image">
				<div class="container">
					<HeaderNav class="pt-100" />
					<div class="small-container">
						<div class="d-flex pt-140 item-align-center pb-371px">
							<div>
								<h3>INTRODUCTION</h3>
								<p class="description">
									La champions League of Paladins a<br />
									officiellement commencé, du cash à gagner, <br />
									tentez votre chance !
								</p>
								<router-link class="background-main" to="/nouveau-tournoi"
									>Plus d'info -></router-link
								>
							</div>
							<div>
								<div>
									<span class="red-underline"></span>
									<embed
										width="323"
										height="172"
										src="https://www.youtube.com/embed/hwVYNqkNuGk"
									/>
									<div class="background-white padding">
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
									<div class="background-white announce">
										<div class="d-flex item-align-center">
											<div>
												<p class="black team-name">
													CONTACT<br />
													BLANC
												</p>
											</div>
											<div class="black text-center">
												<p class="orange">Match à venir</p>
												<p class="black">20/12/2021</p>
											</div>
											<div>
												<p class="black team-name">SYLICAL</p>
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

		<div class="modal-background" v-if="showModal">
			<div class="modal-content">
				<div>
					<div class="d-flex flex-end">
						<a @click="showModal = false">
							<i class="fas fa-times-circle"></i>
						</a>
					</div>
					<h2 class="text-center red">Inscription</h2>
					<div class="modal-container">
						<form action="https://formspree.io/f/xeqvggyp" method="post">
							<div class="d-flex flex-column section">
								<label for="team-name">Nom de l'équipe</label>
								<input
									type="text"
									name="team-name"
									id="team-name"
									placeholder="EX: Chocolatine"
								/>
							</div>
							<div class="d-flex flex-column section">
								<label for="capitaine-name"
									>Pseudo du capitaine dans le jeu & pseudo discord</label
								>
								<input
									type="text"
									name="capitaine-name"
									id="capitaine-name"
									placeholder="EX: AlarmeColver, AlarmeColver #4001"
								/>
							</div>
							<div class="section">
								<label for="team-player-name"
									>Pseudos des 4 autres joueurs de l’équipe dans le jeu &
									pseudos discord</label
								>
								<div class="d-flex team width">
									<input
										type="text"
										placeholder="EX: AlarmeColver, AlarmeColver #4001"
										name="team-player-name"
										id="team-player-name"
									/>
									<input
										type="text"
										placeholder="EX: AlarmeColver, AlarmeColver #4001"
										name="team-player-name"
										id="team-player-name"
									/>
								</div>
								<div class="d-flex width">
									<input
										type="text"
										placeholder="EX: AlarmeColver, AlarmeColver #4001"
										name="team-player-name"
										id="team-player-name"
									/>
									<input
										type="text"
										placeholder="EX: AlarmeColver, AlarmeColver #4001"
										name="team-player-name"
										id="team-player-name"
									/>
								</div>
							</div>
							<div class="section sub">
								<label for="team-sub-name"
									>Pseudo des 2 subs dans le jeu et pseudo discord*</label
								>
								<p class="italic">
									* une même personne peut sub plusieurs équipes
								</p>
								<div class="d-flex width">
									<input
										type="text"
										placeholder="EX: AlarmeColver, AlarmeColver #4001"
										name="team-sub-name"
										id="team-sub-name"
									/>
									<input
										type="text"
										placeholder="EX: AlarmeColver, AlarmeColver #4001"
										name="team-sub-name"
										id="team-sub-name"
									/>
								</div>
							</div>
							<div class="d-flex flex-start section">
								<input type="checkbox" name="" id="" />
								<p>
									En nous inscrivant, nous acceptons
									<router-link to="/reglement" class="rules"
										>le réglement du tournoi</router-link
									>
								</p>
							</div>
							<div class="d-flex flex-center">
								<input type="submit" value="Envoyer" class="background-main" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

		<div class="background-black">
			<div class="small-container">
				<div class="d-flex text-center">
					<div class="stats">
						<h3>0</h3>
						<p>Youtube stream</p>
					</div>
					<div class="stats">
						<h3>0</h3>
						<p>Teams</p>
					</div>
					<div class="stats">
						<h3>150€</h3>
						<p>Cashprice</p>
					</div>
					<div class="stats">
						<h3>Vues twitch</h3>
						<p>0</p>
					</div>
				</div>
			</div>
		</div>
		<section class="background-bleu text-center subscribe">
			<p class="slogan">
				<span class="red">Tu veux participer ?</span> Inscris toi avec ton
				équipe !*
			</p>
			<p class="italic text-center">
				Inscription disponible jusqu'au 13 juin 2021 pour la Champions League of
				Pladins <br />
				Début du tournoi le 19 juin dans l'après midi !
			</p>
			<h3>Tente ta chance</h3>
			<div class="container-logo">
				<div class="d-flex item-align-center">
					<span class="line"></span>
					<p>Paladins French Tournament</p>
					<span class="line"></span>
				</div>
			</div>
			<p>
				Peu importe ton âge, rassemble 5 joueurs, rejoins le discord et tente de
				battre les équipes françaises de Paladins.<br />
				Nos règles sont simples : insultes & cheats sont interdits. Flames,
				émotes et tout autre procédé du jeu sont autorisés ! Alors rejoins nous
				!
			</p>
			<div class="container-button">
				<div class="d-flex">
					<button class="background-main" @click="showModal = true">
						Inscris toi
					</button>
					<a
						class="reversal-background"
						href="https://discord.gg/473E97gf"
						target="_blank"
						>Rejoins le discord</a
					>
				</div>
			</div>
		</section>
		<section class="background-image-match">
			<div class="text-center">
				<h3 class="red">Champions League of Paladins</h3>
				<h4>FUTURES MATCH</h4>
				<AnnounceMatch />
				<AnnounceMatch />
				<AnnounceMatch />
				<div class="pt-36 text-center">
					<router-link to="/calendrier" class="background-main"
						>En voir plus</router-link
					>
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
	data() {
		return {
			showModal: false,
		};
	},
};
</script>

<style lang="scss">
.flex-start {
	justify-content: flex-start !important;
}
.flex-center {
	justify-content: center !important;
}
.d-flex {
	display: flex;
	justify-content: space-between;
}
.flex-column {
	flex-direction: column;
}
.flex-end {
	justify-content: flex-end;
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
.reversal-background {
	border: 2px solid #b91911;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 180px;
	font-weight: bold;
	&:hover {
		background-color: #b91911;
		transition: 350ms;
	}
}
h1 {
	font-size: 24px;
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
.grey {
	color: #afafbc;
}
.italic {
	font-style: italic;
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
h2.title {
	margin-top: 108px;
	font-size: 36px;
}
select,
option {
	padding: 10px 8px;
	color: black;
	font-weight: 500;
}
.item-align-center {
	align-items: center;
}
.text-center {
	text-align: center;
}
.text-left {
	text-align: left;
}
.text-right {
	text-align: right;
}
.background-image {
	background-image: url('https://i.ibb.co/gZ3tZjQ/HomePage.jpg');
}
.background-image-match {
	background-image: url('https://i.ibb.co/JHgnRfv/Home-Page-Schedule.jpg');
	background-repeat: no-repeat;
}
.pt-100 {
	padding-top: 80px;
}
.pt-140 {
	padding-top: 140px;
}
.small-container {
	width: 1346px;
	margin: 0 auto;
}
.padding {
	padding: 10px 42px;
}
.mt-36 {
	margin-top: 36px;
}
.pt-36 {
	padding: 4px 0 30px 0;
	display: flex;
	justify-content: center;
}
.pb-371px {
	padding-bottom: 371px;
}
.announce {
	padding: 24px 16px 24px 12px;
	.team-name {
		font-size: 14px;
		font-weight: bold;
		text-align: center;
	}
	.orange {
		margin-bottom: 28px;
		font-size: 13px;
		font-weight: 900;
		text-transform: uppercase;
	}
	p {
		font-size: 18px;
		font-weight: bold;
	}
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
	h3 {
		font-size: 30px;
		font-weight: 700;
		text-transform: uppercase;
		margin-bottom: 28px;
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
	padding: 48px 0 0px 0;
	h3 {
		font-size: 24px;
		margin-bottom: 15px;
	}
	h4 {
		font-size: 18px;
		margin-bottom: 40px;
	}
}
section.subscribe {
	padding: 92px 0 120px 0;
	.slogan {
		font-size: 26px;
		margin-bottom: 16px;
		line-height: inherit;
	}
	.italic {
		margin-bottom: 28px;
		font-size: 13px;
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
.modal-background {
	position: fixed;
	background-color: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	.modal-content {
		background-color: #ffffff;
		padding: 18px 28px 28px 28px;
		width: 720px;
		border-radius: 20px;

		.modal-container {
			width: 550px;
			margin: 0 auto;
		}
		label,
		p {
			color: black;
		}
		p {
			margin-left: 20px;
		}
		label {
			font-size: 18px;
			font-weight: 500;
			margin-bottom: 12px;
		}
		.fa-times-circle {
			color: #b90911;
			font-size: 24px;
			cursor: pointer;
		}
		.fa-times-circle:hover {
			transform: scale(1.2);
			transition: 350ms;
		}
		.rules {
			color: black;
			border-bottom: 1px solid black;
		}
		input {
			background-color: #c5400f;
			color: white;
			border: none;
			padding: 8px;
			::placeholder {
				color: white;
			}
			&[type='submit'] {
				margin-top: 12px;
				padding: 12px 28px;
				text-transform: uppercase;
				font-weight: 700;
				cursor: pointer;
			}
		}
		.section {
			margin-bottom: 20px;
		}
		.team input {
			margin-bottom: 8px;
			margin-top: 12px;
		}
		.italic {
			margin: 8px 0 16px 0;
		}
		.width input {
			width: 244px;
		}
	}
}
@media screen and (max-width: 1600px) {
	.container {
		width: calc(100% - 30px);
	}
}
</style>
