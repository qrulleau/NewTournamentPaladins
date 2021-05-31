<template>
	<div class="background-image">
		<div class="container">
			<HeaderNav class="pt-100" />
		</div>
		<h2 class="text-center title">Contact</h2>
		<div class="container-body">
			<div class="d-flex baseline">
				<div class="width">
					<h2 class="red">Pour entrer en contact :</h2>
					<h3 class="question">
						Si tu as une question, <br />
						n'hésites pas à nous contacter
					</h3>
					<p>
						Nous sommes joignables par ces différentes méthodes: email,
						formulaire de contact, discord (AlarmeColver#4001, Pettiote#3049,
						NekrosComing#2334) .
					</p>
					<div class="background-black-opacity box">
						<div class="d-flex item-align-center flex-start">
							<i class="fas fa-envelope"></i>
							<p>PaladinsFrenchTournament@gmail.com</p>
						</div>
						<div class="d-flex item-align-center flex-start">
							<i class="fas fa-map-pin"></i>
							<p>3750 Brookside Pkwy, Alpharetta, GA 30022, États-Unis</p>
						</div>
					</div>
					<h4>Follow</h4>
					<div class="flex social-network">
						<a
							href="https://www.twitch.tv/paladinsfrenchtournament"
							target="_blank"
						>
							<i class="fab fa-twitch"></i>
						</a>
						<a
							href="https://www.youtube.com/channel/UCvp93_l5E8GValdzstpcXeA"
							target="_blank"
						>
							<i class="fab fa-youtube"></i>
						</a>
						<a href="https://twitter.com/PFTofficiel" target="_blank">
							<i class="fab fa-twitter"></i>
						</a>
					</div>
				</div>
				<div class="form">
					<form action="https://formspree.io/f/xbjqoyye" method="post">
						<div class="input">
							<label for="pseudonyme">Pseudonyme</label>
							<input
								type="text"
								id="pseudonyme"
								name="pseudonyme"
								class="background-black-opacity"
								required
							/>
						</div>
						<div class="input">
							<label for="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								class="background-black-opacity"
								required
							/>
						</div>
						<div class="input">
							<label for="subject">Sujet du message</label>
							<input
								type="text"
								id="subject"
								name="subject"
								class="background-black-opacity"
								required
								minlength="15"
							/>
						</div>
						<div class="input">
							<label for="message">Message</label>
							<input
								type="message"
								id="message"
								name="message"
								class="background-black-opacity"
								required
							/>
						</div>
						<input class="background-main" type="submit" value="Envoyer" />
					</form>
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
.width {
	width: 45%;
	.question {
		margin: 13px 0;
		font-size: 24px;
		font-weight: bold;
	}
	.red {
		font-size: 16px;
	}
	p {
		line-height: 150%;
	}
}
.baseline {
	align-items: baseline;
}
.background-image {
	background-image: url('https://i.ibb.co/T1ZPhY6/contactpage.jpg');
}
.input {
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;
}
.background-black-opacity {
	background-color: #010000;
	opacity: 77%;
	border: none;
}
.form input {
	border-top: 1px solid #b91911;
	width: 504px;
	height: 35px;
	padding-left: 12px;
}
.form input[type='submit'] {
	width: 180px;
	height: 50px;
	border: none;
	cursor: pointer;
	padding-left: 0;
	font-weight: bold;
	font-size: 18px;
}
.form input[type='message'] {
	padding-bottom: 108px;
	padding-top: 20px;
}
.container-body {
	width: 1112px;
	margin: 0px auto;
	padding-bottom: 101px;
}
label {
	margin-bottom: 8px;
}
h2 {
	margin-top: 133px;
	font-size: 36px;
}

.box {
	padding: 23px 28px;
	margin: 20px 0 24px 0;
}
.question {
	margin: 12px 0;
	font-size: 24px;
	font-weight: bold;
}
.fab {
	padding: 10px;
	border-radius: 21px;
	border: 1px solid white;
	font-size: 20px;
	margin-right: 21px;
	margin-top: 12px;
}
.fas {
	font-size: 23px;
	margin-right: 20px;
}
.flex-start:last-child {
	margin-top: 20px;
}
.fa-map-pin {
	margin-left: 5px;
	margin-right: 25px;
}
.social-network i:hover {
	background: white;
	transition: 350ms;
	color: #b91911;
}
</style>
