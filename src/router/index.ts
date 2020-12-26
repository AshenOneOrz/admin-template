import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Blank from '@/layout/BlankView.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Blank,
		children: [
			{
				path: '/123',
				name: 'Home',
				component: () => import('@/views/About.vue'),
				redirect: '',
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
