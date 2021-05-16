import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '../views/Home/HomePage.vue';
import Calendar from '../views/Calendar/CalendarPage.vue';
import Result from '../views/Result/ResultPage.vue';
import Team from '../views/Team/TeamPage.vue';
import ContactPage from '../views/Contact/ContactPage.vue';
//import AppError from '../views/AppError.vue';

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
	// {
	// 	path: '/:catchAll(.*)',
	// 	component: AppError,
	// },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
