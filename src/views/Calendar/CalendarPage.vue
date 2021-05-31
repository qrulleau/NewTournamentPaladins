<template>
	<div class="background-image">
		<div class="container">
			<HeaderNav class="pt-100" />
			<h2 class="text-center title">Calendrier</h2>
			<div class="d-flex selection-currently flex-start">
				<a
					:class="isActive ? 'active' : ''"
					@click="
						toggle();
						[(CurrentMatch = 'ComingMatch')];
					"
					>MATCH à VENIRS</a
				>
				<a
					:class="!isActive ? 'active' : ''"
					@click="
						[(CurrentMatch = 'LastResult')];
						toggle();
					"
					>DERNIERs RÉSULTATS</a
				>
			</div>
			<section v-if="CurrentMatch === 'ComingMatch'">
				<AnnounceMatch />
				<AnnounceMatch class="mt-20" />
				<AnnounceMatch class="mt-20" />
				<AnnounceMatch class="mt-20" />
				<AnnounceMatch class="mt-20" />
			</section>
			<section v-if="CurrentMatch === 'LastResult'">
				<AnnounceMatchDone />
				<AnnounceMatchDone class="mt-20" />
				<AnnounceMatchDone class="mt-20" />
				<AnnounceMatchDone class="mt-20" />
				<AnnounceMatchDone class="mt-20" />
			</section>
		</div>
	</div>
	<FooterNav />
</template>

<script>
import HeaderNav from '../../components/layout/TheNavBar.vue';
import FooterNav from '../../components/layout/TheFooter.vue';
import AnnounceMatch from '../../components/common/AnnounceMatchCalendarPage.vue';
import AnnounceMatchDone from '../../components/common/AnnounceMatchDoneCalendarPage.vue';
export default {
	components: {
		HeaderNav,
		FooterNav,
		AnnounceMatch,
		AnnounceMatchDone,
	},
	data() {
		return {
			CurrentMatch: 'ComingMatch',
			isActive: true,
		};
	},
	methods: {
		toggle() {
			this.isActive = !this.isActive;
		},
	},
};
</script>

<style lang="scss" scoped>
.background-image {
	background-image: url('https://i.ibb.co/8gsyjC4/Match-Detail-Page.png');
	background-repeat: no-repeat;
	background-color: #080b15;
	padding-bottom: 44px;
}
.mt-20 {
	margin-top: 20px;
}
.selection-currently {
	margin: 120px 0 40px 0;
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
</style>
