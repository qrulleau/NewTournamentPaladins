<template>
	<div class="background-main card">
		<h3>Groupe A</h3>
		<div class="d-flex head">
			<div class="club">
				<h4>Equipes</h4>
			</div>
			<div class="game-played">
				<h4>Matchs joués</h4>
			</div>
			<div class="game-lost">
				<h4>Matchs Perdus</h4>
			</div>
			<div class="game-win">
				<h4>Matchs Gagnés</h4>
			</div>
			<div class="point">
				<h4>Points</h4>
			</div>
		</div>
		<div class="body">
			<div class="d-flex stats-game">
				<div class="club">
					<p>Contact Blanc</p>
				</div>
				<div class="game-played">
					<p>1</p>
				</div>
				<div class="game-lost">
					<p>2</p>
				</div>
				<div class="game-win">
					<p>3</p>
				</div>
				<div class="point">
					<p>1</p>
				</div>
			</div>
			<div class="d-flex stats-game">
				<div class="club">
					<p>Chocolatine</p>
				</div>
				<div class="game-played">
					<p>1</p>
				</div>
				<div class="game-lost">
					<p>2</p>
				</div>
				<div class="game-win">
					<p>3</p>
				</div>
				<div class="point">
					<p>1</p>
				</div>
			</div>
			<div class="d-flex stats-game">
				<div class="club">
					<p>Sylical</p>
				</div>
				<div class="game-played">
					<p>1</p>
				</div>
				<div class="game-lost">
					<p>2</p>
				</div>
				<div class="game-win">
					<p>3</p>
				</div>
				<div class="point">
					<p>1</p>
				</div>
			</div>
			<div class="d-flex stats-game">
				<div class="club">
					<p>Viper Solar</p>
				</div>
				<div class="game-played">
					<p>1</p>
				</div>
				<div class="game-lost">
					<p>2</p>
				</div>
				<div class="game-win">
					<p>3</p>
				</div>
				<div class="point">
					<p>1</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h4 {
	font-weight: 500;
	font-size: 18px;
}
h3 {
	color: black;
	margin-bottom: 16px;
	font-size: 18px;
}
.card {
	padding: 28px;
	width: 1147px;
	margin: 0 auto 36px auto;
	border-radius: 11px;
}
.card:last-child {
	margin-bottom: 0;
}
.club {
	width: 45%;
}
.game-played,
.game-win,
.game-lost {
	width: 15%;
	text-align: center;
}
.point {
	width: 10%;
	text-align: center;
}
.stats-game {
	border-bottom: 1px solid #000000;
	padding-bottom: 16px;
	margin-bottom: 20px;
	padding-left: 16px;
}
.stats-game:last-child {
	border-bottom: none;
	padding-bottom: 0;
	margin-bottom: 0;
}
.body {
	margin-top: 31px;
}
</style>
