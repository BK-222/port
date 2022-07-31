const router = new VueRouter({
	// mode: 'history',
	routes: [
		{ path: '/', redirect: '/main' },
		{ path: '/main', component: mainPage },
		{ path: '/about', component: aboutPage },
		{ path: '/projects', component: projectsPage },
		{ path: '/dev-skills', component: devSkillsPage },
		{ path: '/contact', component: contactPage },
		{ path: '/:notFound(.*)', component: notFound }
	]
});