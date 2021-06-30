import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '../views/Home/HomePage.vue';
import Calendar from '../views/Calendar/CalendarPage.vue';
import Result from '../views/Result/ResultPage.vue';
import Team from '../views/Team/TeamPage.vue';
import ContactPage from '../views/Contact/ContactPage.vue';
import MatchDetailDone from '../views/MatchDetailDone/MatchDetailDone.vue';
import LegaleNotice from '../views/LegaleNotice/LegaleNotice.vue';
import ConfidentialityPolicy from '../views/ConfidentialityPolicy/ConfidentialityPolicy.vue';
import CookiePolicy from '../views/CookiePolicy/CookiePolicy.vue';
import NewTournament from '../views/Article/NewTournament.vue';
import Regulations from '../views/Regulations/Regulations.vue';
//import AppError from '../views/AppError.vue';

//liste des matchs

// match en cours
//semifinal
import SemiFinal from '../views/MatchDetail/semiFinal/JoblessVsAlpaga.vue';
import SemiFinalBis from '../views/MatchDetail/semiFinal/TourcoingVsAbdul.vue';

//match finis
//first round
import SylicalVSGPTDone from '../views/MatchDetailDone/firstTour/SylicalVsGpt.vue';
import JoblessVsLightningDone from '../views/MatchDetailDone/firstTour/JoblessVsLightning.vue';
import MinervaVsAbdulDone from '../views/MatchDetailDone/firstTour/MinervaVsAbdul.vue';
import AlpagaVsTourcoingDone from '../views/MatchDetailDone/firstTour/AlpagaVsTourcoing.vue';

//second round
import AlpagaVsLightningDone from '../views/MatchDetailDone/secondTour/AlpagaVsLightning.vue';
import JoblessVsGptDone from '../views/MatchDetailDone/secondTour/JoblessVsGpt.vue';
import MinervaVsTourcoingDone from '../views/MatchDetailDone/secondTour/MinervaVsTourcoing.vue';
import SylicalVSAbdulDone from '../views/MatchDetailDone/secondTour/SylicalVsAbdul.vue';

// third round
import AlpagaVsGptDone from '../views/MatchDetailDone/thirdTour/AlpagaVsGpt.vue';
import JoblessVsAbdulDone from '../views/MatchDetailDone/thirdTour/JoblessVsAbdul.vue';
import MinervaVsSylicalDone from '../views/MatchDetailDone/thirdTour/MinervaVsSylical.vue';
import TourcoingVsLightningDone from '../views/MatchDetailDone/thirdTour/TourcoingVsLightning.vue';

//fourth round
import AlpagaVsAbdulDone from '../views/MatchDetailDone/fourthTour/AlpagaVsAbdul.vue';
import JoblessVsSylicalDone from '../views/MatchDetailDone/fourthTour/SylicalVsJobless.vue';
import MinervaVsLightningDone from '../views/MatchDetailDone/fourthTour/MinervaVsLightning.vue';
import TourcoingVsGptDone from '../views/MatchDetailDone/fourthTour/TourcoingVsGpt.vue';

//fifth round
import AlpagaVsSylicalDone from '../views/MatchDetailDone/fifthTour/AlpagaVsSylical.vue';
import LightningVsGptDone from '../views/MatchDetailDone/fifthTour/LightningVsGpt.vue';
import MinervaVsJoblessDone from '../views/MatchDetailDone/fifthTour/MinervaVsJobless.vue';
import TourcoingVsAbdulDone from '../views/MatchDetailDone/fifthTour/TourcoingVsAbdul.vue';

// sixth round
import JoblessVsAlpagaDone from '../views/MatchDetailDone/sixthTour/JoblessVsAlpaga.vue';
import LightningVsAbdulDone from '../views/MatchDetailDone/sixthTour/LightningVsAbdul.vue';
import MinervaVsGptDone from '../views/MatchDetailDone/sixthTour/MinervaVsGpt.vue';
import SylicalVsTourcoingDone from '../views/MatchDetailDone/sixthTour/SylicalVsTourcoing.vue';

// seventh round
import GptVsAbdulDone from '../views/MatchDetailDone/seventhTour/GptVsAbdul.vue';
import SylicalVsLightningDone from '../views/MatchDetailDone/seventhTour/SylicalVsLightning.vue';
import MinervaVsAlpagaDone from '../views/MatchDetailDone/seventhTour/MinervaVsAlpaga.vue';
import TourcoingVsJoblessDone from '../views/MatchDetailDone/seventhTour/TourcoingVsJobless.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage,
	},
	{
		path: '/calendrier',
		component: Calendar,
	},
	{
		path: '/resultat',
		component: Result,
	},
	{
		path: '/equipes',
		component: Team,
	},
	{
		path: '/contact',
		component: ContactPage,
	},
	{
		path: '/first-semi-final',
		component: SemiFinal,
	},
	{
		path: '/second-semi-final',
		component: SemiFinalBis,
	},
	{
		path: '/alpaga-vs-abdul',
		component: AlpagaVsAbdulDone,
	},
	{
		path: '/jobless-vs-sylical',
		component: JoblessVsSylicalDone,
	},
	{
		path: '/minerva-vs-lightning',
		component: MinervaVsLightningDone,
	},
	{
		path: '/tourcoing-vs-gpt',
		component: TourcoingVsGptDone,
	},
	{
		path: '/alpaga-vs-sylical',
		component: AlpagaVsSylicalDone,
	},
	{
		path: '/lightning-vs-gpt',
		component: LightningVsGptDone,
	},
	{
		path: '/minerva-vs-jobless',
		component: MinervaVsJoblessDone,
	},
	{
		path: '/tourcoing-vs-abdul',
		component: TourcoingVsAbdulDone,
	},
	{
		path: '/jobless-vs-alpaga',
		component: JoblessVsAlpagaDone,
	},
	{
		path: '/lightning-vs-abdul',
		component: LightningVsAbdulDone,
	},
	{
		path: '/minerva-vs-gpt',
		component: MinervaVsGptDone,
	},
	{
		path: '/sylical-vs-tourcoing',
		component: SylicalVsTourcoingDone,
	},
	{
		path: '/gpt-vs-abdul',
		component: GptVsAbdulDone,
	},
	{
		path: '/sylical-vs-lightning',
		component: SylicalVsLightningDone,
	},
	{
		path: '/minerva-vs-alpaga',
		component: MinervaVsAlpagaDone,
	},
	{
		path: '/tourcoing-vs-jobless',
		component: TourcoingVsJoblessDone,
	},
	{
		path: '/sylical-vs-gpt',
		component: SylicalVSGPTDone,
	},
	{
		path: '/minerva-vs-abduljoestar',
		component: MinervaVsAbdulDone,
	},
	{
		path: '/jobless-vs-lightning',
		component: JoblessVsLightningDone,
	},
	{
		path: '/alpaga-vs-tourcoing',
		component: AlpagaVsTourcoingDone,
	},
	{
		path: '/alpaga-vs-lightning',
		component: AlpagaVsLightningDone,
	},
	{
		path: '/jobless-vs-gpt',
		component: JoblessVsGptDone,
	},
	{
		path: '/minerva-vs-tourcoing',
		component: MinervaVsTourcoingDone,
	},
	{
		path: '/sylical-vs-abdul',
		component: SylicalVSAbdulDone,
	},
	{
		path: '/alpaga-vs-gpt',
		component: AlpagaVsGptDone,
	},
	{
		path: '/jobless-vs-abdul',
		component: JoblessVsAbdulDone,
	},
	{
		path: '/minerva-vs-sylical',
		component: MinervaVsSylicalDone,
	},
	{
		path: '/tourcoing-vs-lightning',
		component: TourcoingVsLightningDone,
	},
	{
		path: '/mention-legales',
		component: LegaleNotice,
	},
	{
		path: '/politique-confidentialite',
		component: ConfidentialityPolicy,
	},
	{
		path: '/politique-cookie',
		component: CookiePolicy,
	},
	{
		path: '/nouveau-tournoi',
		component: NewTournament,
	},
	{
		path: '/reglement',
		component: Regulations,
	},
	{
		path: '/:catchAll(.*)',
		component: HomePage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	},
});

export default router;
