<template>
	<div class="d-flex background-main card item-align-center">
		<div class="d-flex item-align-center">
			<div class="d-flex item-align-center match-detail">
				<div>
					<img src="../../assets/LogoAnnounceMatch/fnatic.png" alt="" />
					<h3 class="text-center">FNATIC</h3>
				</div>
				<p class="red">VS</p>
				<div>
					<img src="../../assets/LogoAnnounceMatch/navi.png" alt="" />
					<h3 class="text-center">NAVI</h3>
				</div>
			</div>
			<span class="line"></span>
			<div>
				<h4>Champion League of Paladins</h4>
				<p class="status red">ONLINE</p>
				<p class="black">16 juin à 21h</p>
			</div>
			<span class="line"></span>
			<div>
				<h5>Voir le match en live</h5>
				<a href="https://www.twitch.tv/paladinsfrenchtournament">
					<i class="fab fa-twitch"></i>
				</a>
			</div>
		</div>
		<div>
			<a href="#">
				<router-link to="/match-detail">
					<i class="fas fa-arrow-right"></i>
				</router-link>
			</a>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
	padding: 38px 52px;
	border-radius: 10px;
}
span.line {
	width: 1px;
	height: 120px;
	background-color: white;
	margin: 0 52px 0 44px;
}
span:last-child {
	margin-left: 44px;
}
.status {
	background-color: white;
	padding: 7px 12px;
	margin: 10px 0;
	width: 73px;
	font-size: 14px;
	font-weight: bold;
	border-radius: 10px;
}
h3 {
	margin-top: 48px;
}
h5 {
	font-size: 16px;
}
.fa-arrow-right {
	background-color: white;
	padding: 5px 10px;
	color: #b91911;
	border-radius: 9px;
}
.fa-arrow-right:hover {
	color: #c5400f;
	transition: 300ms;
}
.match-detail p {
	font-weight: bold;
	padding: 19px 20px;
	background-color: white;
	border: 3px solid #dcd7d7;
	border-radius: 40px;
	margin: 0 60px;
}
.fa-twitch {
	border: 1px solid white;
	padding: 12px 13px;
	font-size: 21px;
	border-radius: 28px;
}
.fa-twitch:hover {
	background-color: white;
	color: #b91911;
	transition: 350ms;
}
h5 {
	margin-bottom: 17px;
}
</style>
