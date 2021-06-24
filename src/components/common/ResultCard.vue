<template>
	<div class="background-main card">
		<h3>Groupe A</h3>
		<div class="d-flex head">
			<div class="club">
				<h4>Equipes</h4>
				<h4 class="responsive">Equipes</h4>
			</div>
			<div class="bo-win">
				<h4>BO gagné</h4>
				<h4 class="responsive">BO G</h4>
			</div>
			<div class="game-played">
				<h4>Matchs joués</h4>
				<h4 class="responsive">MJ</h4>
			</div>
			<div class="game-lost">
				<h4>Matchs Perdus</h4>
				<h4 class="responsive">MP</h4>
			</div>
			<div class="game-win">
				<h4>Matchs Gagnés</h4>
				<h4 class="responsive">MG</h4>
			</div>
			<div class="point">
				<h4>Points</h4>
				<h4 class="responsive">Pts</h4>
			</div>
		</div>
		<div class="body">
			<div class="d-flex stats-game">
				<div class="club">
					<p>ABDUL JOESTAR</p>
				</div>
				<div class="bo-win">
					<p>3</p>
				</div>
				<div class="game-played">
					<p>6</p>
				</div>
				<div class="game-lost">
					<p>0</p>
				</div>
				<div class="game-win">
					<p>6</p>
				</div>
				<div class="point">
					<p>6</p>
				</div>
			</div>
			<div class="d-flex stats-game">
				<div class="club">
					<p>ALPAGA</p>
				</div>
				<div class="bo-win">
					<p>3</p>
				</div>
				<div class="game-played">
					<p>6</p>
				</div>
				<div class="game-lost">
					<p>0</p>
				</div>
				<div class="game-win">
					<p>6</p>
				</div>
				<div class="point">
					<p>6</p>
				</div>
			</div>
			<div class="d-flex stats-game">
				<div class="club">
					<p>SYLICAL</p>
				</div>
				<div class="bo-win">
					<p>2</p>
				</div>
				<div class="game-played">
					<p>6</p>
				</div>
				<div class="game-lost">
					<p>2</p>
				</div>
				<div class="game-win">
					<p>4</p>
				</div>
				<div class="point">
					<p>4</p>
				</div>
			</div>
			<div class="d-flex stats-game">
				<div class="club">
					<p>TOURCOING ETERNALS</p>
				</div>
				<div class="bo-win">
					<p>2</p>
				</div>
				<div class="game-played">
					<p>7</p>
				</div>
				<div class="game-lost">
					<p>3</p>
				</div>
				<div class="game-win">
					<p>4</p>
				</div>
				<div class="point">
					<p>4</p>
				</div>
			</div>
			<div class="d-flex stats-game">
				<div class="club">
					<p>GPT E-SPORT</p>
				</div>
				<div class="bo-win">
					<p>1</p>
				</div>
				<div class="game-played">
					<p>6</p>
				</div>
				<div class="game-lost">
					<p>4</p>
				</div>
				<div class="game-win">
					<p>2</p>
				</div>
				<div class="point">
					<p>2</p>
				</div>
			</div>
			<div class="d-flex stats-game">
				<div class="club">
					<p>JOBLESS</p>
				</div>
				<div class="bo-win">
					<p>1</p>
				</div>
				<div class="game-played">
					<p>6</p>
				</div>
				<div class="game-lost">
					<p>4</p>
				</div>
				<div class="game-win">
					<p>2</p>
				</div>
				<div class="point">
					<p>2</p>
				</div>
			</div>
			<div class="d-flex stats-game">
				<div class="club">
					<p>MINERVA</p>
				</div>
				<div class="bo-win">
					<p>0</p>
				</div>
				<div class="game-played">
					<p>7</p>
				</div>
				<div class="game-lost">
					<p>6</p>
				</div>
				<div class="game-win">
					<p>1</p>
				</div>
				<div class="point">
					<p>1</p>
				</div>
			</div>
			<div class="d-flex stats-game">
				<div class="club">
					<p>LIGHTNING</p>
				</div>
				<div class="bo-win">
					<p>0</p>
				</div>
				<div class="game-played">
					<p>6</p>
				</div>
				<div class="game-lost">
					<p>6</p>
				</div>
				<div class="game-win">
					<p>0</p>
				</div>
				<div class="point">
					<p>0</p>
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
	width: 1300px;
	margin: 0 auto 36px auto;
	border-radius: 11px;
}
.card:last-child {
	margin-bottom: 0;
}
.club {
	width: 45%;
	p {
		padding-left: 16px;
	}
}
.game-played,
.game-win,
.game-lost,
.bo-win {
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
}
.stats-game:last-child {
	border-bottom: none;
	padding-bottom: 0;
	margin-bottom: 0;
}
.body {
	margin-top: 31px;
}
@media screen and (max-width: 1330px) {
	.card {
		width: calc(100% - 30px);
	}
}
@media screen and (min-width: 550px) {
	h4.responsive {
		display: none;
	}
}
@media screen and (max-width: 550px) {
	h4 {
		display: none;
		&.responsive {
			display: block;
		}
	}
}
</style>
