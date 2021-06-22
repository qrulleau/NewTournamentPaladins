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
// first round
// import SylicalVSGPT from '../views/MatchDetail/firstTour/SylicalVsGpt.vue';
// import MinervaVSAbdul from '../views/MatchDetail/firstTour/MinervaVsAbdul.vue';
// import JoblessVsLightning from '../views/MatchDetail/firstTour/JoblessVsLightning.vue';
// import AlpagaVsTourcoing from '../views/MatchDetail/firstTour/AlpagaVsTourcoing.vue';

// second round
// import SylicalVSAbdul from '../views/MatchDetail/secondTour/SylicalVsAbdul.vue';
// import MinervaVSTourcoing from '../views/MatchDetail/secondTour/MinervaVsTourcoing.vue';
// import JoblessVsGPT from '../views/MatchDetail/secondTour/JoblessVsGpt.vue';
// import AlpagaVsLightning from '../views/MatchDetail/secondTour/AlpagaVsLightning.vue';

// third round
// import AlpagaVsGpt from '../views/MatchDetail/thirdTour/AlpagaVsGpt.vue';
// import JoblessVsAbdul from '../views/MatchDetail/thirdTour/JoblessVsAbdul.vue';
// import MinervaVsSylical from '../views/MatchDetail/thirdTour/MinervaVsSylical.vue';
// import TourcoingVsLightning from '../views/MatchDetail/thirdTour/TourcoingVsLightning.vue';

//fourth round
import AlpagaVsAbdul from '../views/MatchDetail/fourthTour/AlpagaVsAbdul.vue';
import JoblessVsSylical from '../views/MatchDetail/fourthTour/SylicalVsJobless.vue';
import MinervaVsLightning from '../views/MatchDetail/fourthTour/MinervaVsLightning.vue';
import TourcoingVsGpt from '../views/MatchDetail/fourthTour/TourcoingVsGpt.vue';

// fifth round
import AlpagaVsSylical from '../views/MatchDetail/fifthTour/AlpagaVsSylical.vue';
import LightningVsGpt from '../views/MatchDetail/fifthTour/LightningVsGpt.vue';
import MinervaVsJobless from '../views/MatchDetail/fifthTour/MinervaVsJobless.vue';
import TourcoingVsAbdul from '../views/MatchDetail/fifthTour/TourcoingVsAbdul.vue';

// sixth round
import JoblessVsAlpaga from '../views/MatchDetail/sixthTour/JoblessVsAlpaga.vue';
import LightningVsAbdul from '../views/MatchDetail/sixthTour/LightningVsAbdul.vue';
import MinervaVsGpt from '../views/MatchDetail/sixthTour/MinervaVsGpt.vue';
import SylicalVsTourcoing from '../views/MatchDetail/sixthTour/SylicalVsTourcoing.vue';

// seventh round
import GptVsAbdul from '../views/MatchDetail/seventhTour/GptVsAbdul.vue';
import SylicalVsLightning from '../views/MatchDetail/seventhTour/SylicalVsLightning.vue';
import MinervaVsAlpaga from '../views/MatchDetail/seventhTour/MinervaVsAlpaga.vue';
import TourcoingVsJobless from '../views/MatchDetail/seventhTour/TourcoingVsJobless.vue';

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

// //third round
import AlpagaVsGptDone from '../views/MatchDetailDone/thirdTour/AlpagaVsGpt.vue';
import JoblessVsAbdulDone from '../views/MatchDetailDone/thirdTour/JoblessVsAbdul.vue';
import MinervaVsSylicalDone from '../views/MatchDetailDone/thirdTour/MinervaVsSylical.vue';
import TourcoingVsLightningDone from '../views/MatchDetailDone/thirdTour/TourcoingVsLightning.vue';

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
		path: '/alpaga-vs-abdul',
		component: AlpagaVsAbdul,
	},
	{
		path: '/jobless-vs-sylical',
		component: JoblessVsSylical,
	},
	{
		path: '/minerva-vs-lightning',
		component: MinervaVsLightning,
	},
	{
		path: '/tourcoing-vs-gpt',
		component: TourcoingVsGpt,
	},
	{
		path: '/alpaga-vs-sylical',
		component: AlpagaVsSylical,
	},
	{
		path: '/lightning-vs-gpt',
		component: LightningVsGpt,
	},
	{
		path: '/minerva-vs-jobless',
		component: MinervaVsJobless,
	},
	{
		path: '/tourcoing-vs-abdul',
		component: TourcoingVsAbdul,
	},
	{
		path: '/jobless-vs-alpaga',
		component: JoblessVsAlpaga,
	},
	{
		path: '/lightning-vs-abdul',
		component: LightningVsAbdul,
	},
	{
		path: '/minerva-vs-gpt',
		component: MinervaVsGpt,
	},
	{
		path: '/sylical-vs-tourcoing',
		component: SylicalVsTourcoing,
	},
	{
		path: '/gpt-vs-abdul',
		component: GptVsAbdul,
	},
	{
		path: '/sylical-vs-lightning',
		component: SylicalVsLightning,
	},
	{
		path: '/minerva-vs-alpaga',
		component: MinervaVsAlpaga,
	},
	{
		path: '/tourcoing-vs-jobless',
		component: TourcoingVsJobless,
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
