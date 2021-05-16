<template>
	<div class="width">
		<div class="d-flex background-blue">
			<div class="Tea">
				<img src="../../assets/LogoTeam/navi.png" alt="" />
				<h5>NAVI</h5>
			</div>
			<div>
				<h2>Amsterdam game center</h2>
				<p class="red">20 mars, 2020 14:30</p>
				<h3>VS</h3>
				<h4 class="orange">View Match</h4>
				<div class="d-flex">
					<button><i class="fab fa-youtube"></i></button>
					<button></button>
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
.background-blue {
	background: rgba(8, 11, 21, 0.73);
}
.width {
	width: 1346px;
	margin: 20px auto;
}
</style>
