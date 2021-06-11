<template>
	<div class="background-main box">
		<h3 class="text-center">{{ TeamName }}</h3>
		<div class="d-flex">
			<p>{{ Player1 }}</p>
			<p class="role black">{{ RolePlayer1 }}</p>
		</div>
		<div class="d-flex">
			<p>{{ Player2 }}</p>
			<p class="role black">{{ RolePlayer2 }}</p>
		</div>
		<div class="d-flex">
			<p>{{ Player3 }}</p>
			<p class="role black">{{ RolePlayer3 }}</p>
		</div>
		<div class="d-flex">
			<p>{{ Player4 }}</p>
			<p class="role black">{{ RolePlayer4 }}</p>
		</div>
		<div class="d-flex">
			<p>{{ Player5 }}</p>
			<p class="role black">{{ RolePlayer5 }}</p>
		</div>
		<div class="d-flex">
			<p>{{ Sub1 }}</p>
			<p class="role black">{{ RoleSub1 }}</p>
		</div>
		<div class="d-flex no-margin">
			<p>{{ Sub2 }}</p>
			<p class="role black">{{ RoleSub2 }}</p>
		</div>
		<div class="d-flex social-network flex-start">
			<i class="fab fa-twitter"></i>
			<i class="fab fa-twitch"></i>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'TeamName',
		'Player1',
		'RolePlayer1',
		'Player2',
		'RolePlayer2',
		'Player3',
		'RolePlayer3',
		'Player4',
		'RolePlayer4',
		'Player5',
		'RolePlayer5',
		'Sub1',
		'RoleSub1',
		'Sub2',
		'RoleSub2',
	],
};
</script>
<style lang="scss" scoped>
.d-flex {
	margin-bottom: 16px;
	:nth-last-child(3) {
		background-color: white;
	}

	.role {
		font-weight: bold;
		font-size: 18px;
	}
}
.flex-start {
	justify-content: flex-start;
	i {
		font-size: 25px;
	}
	.fa-twitter {
		margin-right: 24px;
	}
}
.no-margin,
.social-network {
	margin-bottom: 0;
}
.social-network {
	margin-top: 40px;
}
.box {
	border-radius: 25px;
	padding: 28px 20px 30px 20px;
	width: 288px;
	h3 {
		margin-bottom: 48px;
		font-size: 24px;
	}
}
</style>
