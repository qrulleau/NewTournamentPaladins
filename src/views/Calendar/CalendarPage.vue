<template>
	<div class="background-image">
		<div class="container">
			<HeaderNav class="pt-100" />
			<h2 class="text-center title">Calendrier</h2>
			<div class="d-flex selection-currently flex-start">
				<a
					:class="isActive ? 'active' : ''"
					@click="
						[(CurrentMatch = 'ComingMatch')];
						toggle();
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
			<section v-if="CurrentMatch === 'ComingMatch'" class="CurrentMatch">
				<div class="test annonce" v-show="CurrentPage == 0">
					<h4>1er Tour</h4>
					<AnnounceMatch class="mt-20" teamName="Minerva" teamName1="Abdul Joestar" date="19 juin à 14h" link="minerva-vs-abduljoestar" />
					<AnnounceMatch class="mt-20" teamName="Sylical" teamName1="GPT E-sport" date="19 juin à 14h" link="sylical-vs-gpt" />
					<AnnounceMatch class="mt-20" teamName="Jobless" teamName1="Lightning" date="19 juin à 14h" link="jobless-vs-lightning" />
					<AnnounceMatch class="mt-20" teamName="Alpaga" teamName1="Tourcoing Eternal" date="19 juin à 14h" link="alpaga-vs-tourcoing" />
				</div>
				<div class="annonce" v-show="CurrentPage == 1">
					<h4>2nd Tour</h4>
					<AnnounceMatch class="mt-20" teamName="Lightning" teamName1="Alpaga" date="19 juin à 14h" link="alpaga-vs-lightning" />
					<AnnounceMatch class="mt-20" teamName="Tourcoing Eternal" teamName1="Minerva" date="19 juin à 14h" link="minerva-vs-tourcoing" />
					<AnnounceMatch class="mt-20" teamName="GPT E-SPORT" teamName1="Jobless" date="19 juin à 14h" link="jobless-vs-gpt" />
					<AnnounceMatch class="mt-20" teamName="Abdul Joestar" teamName1="Sylical" date="19 juin à 14h" link="sylical-vs-abdul" />
				</div>
				<div class="annonce" v-show="CurrentPage == 2">
					<h4>3eme Tour</h4>
					<AnnounceMatch class="mt-20" teamName="Alpaga" teamName1="GPT E-sport" date="19 juin à 14h" link="alpaga-vs-gpt" />
					<AnnounceMatch class="mt-20" teamName="Jobless" teamName1="Abdul Joestar" date="19 juin à 14h" link="jobless-vs-abdul" />
					<AnnounceMatch class="mt-20" teamName="Minerva" teamName1="Sylical" date="19 juin à 14h" link="minerva-vs-sylical" />
					<AnnounceMatch class="mt-20" teamName="Tourcoing Eternal" teamName1="Lightning" date="19 juin à 14h" link="tourcoing-vs-lightning" />
				</div>
				<section class="pagination">
					<div class="d-flex">
						<a @click="down()"><i class="fas fa-chevron-left"></i></a>
						<a @click="up()"><i class="fas fa-chevron-right"></i></a>
					</div>
				</section>
			</section>
			<!-- <section v-if="CurrentMatch === 'LastResult'">
				<AnnounceMatchDone />
				<AnnounceMatchDone class="mt-20" />
				<AnnounceMatchDone class="mt-20" />
				<AnnounceMatchDone class="mt-20" />
				<AnnounceMatchDone class="mt-20" />
			</section> -->
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
			CurrentPage: 0,
		};
	},
	methods: {
		toggle() {
			this.isActive = !this.isActive;
		},
		up() {
			if (this.CurrentPage === 2) {
				return;
			}
			let currentDiv = document.querySelectorAll('.annonce');
			let RemoveCurrentClass = document.querySelector('.test');

			RemoveCurrentClass.classList.remove('test');
			this.CurrentPage = this.CurrentPage + 1;
			currentDiv[this.CurrentPage].classList.add('test');
		},
		down() {
			if (this.CurrentPage === 0) {
				return;
			}
			let currentDiv = document.querySelectorAll('.annonce');
			let RemoveCurrentClass = document.querySelector('.test');

			RemoveCurrentClass.classList.remove('test');
			this.CurrentPage = this.CurrentPage - 1;
			currentDiv[this.CurrentPage].classList.add('test');
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
	padding-bottom: 8px;
	border-bottom: 4px solid #b91911;
}
section.pagination {
	.d-flex {
		width: 95px;
		margin: 60px auto 0 auto;
		.fas {
			border: 3px solid white;
			border-radius: 50%;
			padding: 7px 11px;
		}
	}
}
section.CurrentMatch {
	.annonce {
		display: none;
	}
	.test {
		display: block !important;
	}
	h4 {
		font-size: 18px;
		font-weight: 600;
		border-left: 4px solid #c5400f;
		padding-left: 8px;
	}
}
</style>
