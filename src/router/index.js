import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '../views/Home/HomePage.vue';
import Calendar from '../views/Calendar/CalendarPage.vue';
import Result from '../views/Result/ResultPage.vue';
import Team from '../views/Team/TeamPage.vue';
import ContactPage from '../views/Contact/ContactPage.vue';
import MatchDetailDone from '../views/MatchDetail/MatchDetailDone.vue';
import LegaleNotice from '../views/LegaleNotice/LegaleNotice.vue';
import ConfidentialityPolicy from '../views/ConfidentialityPolicy/ConfidentialityPolicy.vue';
import CookiePolicy from '../views/CookiePolicy/CookiePolicy.vue';
import NewTournament from '../views/Article/NewTournament.vue';
import Regulations from '../views/Regulations/Regulations.vue';
//import AppError from '../views/AppError.vue';

//liste des matchs
//first round
import SylicalVSGPT from '../views/MatchDetail/firstTour/SylicalVsGpt.vue';
import MinervaVSAbdul from '../views/MatchDetail/firstTour/MinervaVsAbdul.vue';
import JoblessVsLightning from '../views/MatchDetail/firstTour/JoblessVsLightning.vue';
import AlpagaVsTourcoing from '../views/MatchDetail/firstTour/AlpagaVsTourcoing.vue';

//second round
import SylicalVSAbdul from '../views/MatchDetail/secondTour/SylicalVsAbdul.vue';
import MinervaVSTourcoing from '../views/MatchDetail/secondTour/MinervaVsTourcoing.vue';
import JoblessVsGPT from '../views/MatchDetail/secondTour/JoblessVsGpt.vue';
import AlpagaVsLightning from '../views/MatchDetail/secondTour/AlpagaVsLightning.vue';

//third round
import AlpagaVsGpt from '../views/MatchDetail/thirdTour/AlpagaVsGpt.vue';
import JoblessVsAbdul from '../views/MatchDetail/thirdTour/JoblessVsAbdul.vue';
import MinervaVsSylical from '../views/MatchDetail/thirdTour/MinervaVsSylical.vue';
import TourcoingVsLightning from '../views/MatchDetail/thirdTour/TourcoingVsLightning.vue';

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
		path: '/sylical-vs-gpt',
		component: SylicalVSGPT,
	},
	{
		path: '/minerva-vs-abduljoestar',
		component: MinervaVSAbdul,
	},
	{
		path: '/jobless-vs-lightning',
		component: JoblessVsLightning,
	},
	{
		path: '/alpaga-vs-tourcoing',
		component: AlpagaVsTourcoing,
	},
	{
		path: '/alpaga-vs-lightning',
		component: AlpagaVsLightning,
	},
	{
		path: '/jobless-vs-gpt',
		component: JoblessVsGPT,
	},
	{
		path: '/minerva-vs-tourcoing',
		component: MinervaVSTourcoing,
	},
	{
		path: '/sylical-vs-abdul',
		component: SylicalVSAbdul,
	},
	{
		path: '/alpaga-vs-gpt',
		component: AlpagaVsGpt,
	},
	{
		path: '/jobless-vs-abdul',
		component: JoblessVsAbdul,
	},
	{
		path: '/minerva-vs-sylical',
		component: MinervaVsSylical,
	},
	{
		path: '/tourcoing-vs-lightning',
		component: TourcoingVsLightning,
	},
	{
		path: '/match-detail-done',
		component: MatchDetailDone,
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
