<template>
	<div class="width">
		<div class="d-flex background-blue item-align-center">
			<div class="Team">
				<img src="../../assets/LogoTeam/navi.png" alt="" />
				<h5>NAVI</h5>
			</div>
			<div class="description">
				<h2>Amsterdam game center</h2>
				<p class="red">20 mars, 2020 14:30</p>
				<h3>VS</h3>
				<h4 class="orange">Regarder le match</h4>
				<div class="d-flex">
					<a
						href="https://www.twitch.tv/paladinsfrenchtournament"
						target="_blank"
					>
						<i class="fab fa-twitch red"></i>
					</a>
					<a
						href="https://www.youtube.com/channel/UCvp93_l5E8GValdzstpcXeA"
						target="_blank"
					>
						<i class="fab fa-youtube red"></i>
					</a>
				</div>
			</div>
			<div>
				<img src="../../assets/LogoTeam/fnatic.png" alt="" />
				<h5>FNATIC</h5>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2,
h3,
h4,
p {
	text-transform: uppercase;
}
h2,
p {
	font-size: 16px;
}
p {
	margin: 16px 0 48px 0;
	font-weight: bold;
}
h4 {
	font-size: 18px;
	margin: 24px 0 16px 0;
}
h5 {
	font-weight: bold;
	margin-top: 36px;
}
h3 {
	font-size: 36px;
}
.background-blue {
	background: rgba(8, 11, 21, 0.73);
	padding: 28px 132px;
}
.width {
	width: 1346px;
	margin: 20px auto;
}
.fab {
	padding: 10px;
	border-radius: 10px;
	background-color: white;
	font-size: 20px;
}
i:hover {
	background: linear-gradient(180deg, #c5400f 0%, #b91911 100%);
	transition: 350ms;
	color: white;
}
</style>
