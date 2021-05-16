<template>
	<div class="background-image">
		<div class="container">
			<HeaderNav class="pt-100" />
		</div>
		<h2 class="text-center">Contact</h2>
		<div class="container-body">
			<div class="d-flex baseline">
				<div class="width">
					<h2 class="red">Pour entrer en contact :</h2>
					<h3 class="question">
						Si tu as une question, <br />
						n'hesite pas à nous contacter
					</h3>
					<p>
						Nous sommes joignables par ces differentes methodes: email, formulaire de contact, discord (AlarmeColver#4001, Pettiote#3049,
						NekrosComing#2334) .
					</p>
					<div class="background-black-opacity box">
						<p>hello@warzon.com</p>
						<p>33 avenue de mon cul, France</p>
					</div>
					<h4>Follow</h4>
				</div>
				<div class="form">
					<div class="input">
						<label for="name">Pseudonyme</label>
						<input type="text" id="name" name="name" class="background-black-opacity" required />
					</div>
					<div class="input">
						<label for="name">Email</label>
						<input type="text" id="name" name="name" class="background-black-opacity" required />
					</div>
					<div class="input">
						<label for="">Sujet du message</label>
						<input type="text" id="name" name="name" class="background-black-opacity" required minlength="15" />
					</div>
					<div class="input">
						<label for="">Message</label>
						<input type="message" id="message" name="" class="background-black-opacity" required />
					</div>
					<input class="background-main" type="button" value="Envoyer" />
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
	background-image: url(../../src/assets/background/ContactPage.jpg);
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
}
.form input[type='button'] {
	width: 180px;
	height: 50px;
}
.form input[type='message'] {
	height: 112px;
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
</style>
