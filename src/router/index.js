import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '../views/HomePage/HomePage.vue';
import ContactPage from '../views/ContactPage/ContactPage.vue';
//import AppError from '../views/AppError.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage,
	},
	{
		path: '/contact-page',
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
