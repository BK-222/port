const projectsModule = {
	namespaced: true,
	state: function() {
		return {
			projects: [
				{
					id: 1,
					title: 'Simple playable battle app.',
					img_1: '_img/screens/slayer_1.png',
					img_2: '_img/screens/slayer_2.png',
					img_3: '_img/screens/slayer_3.png',
					link: 'https://priceless-edison-9dd932.netlify.app/',
					gitHub: 'https://github.com/BK-222/tms',
					tech: 'Vue'
				},
				{
					id: 2,
					title: 'Discord bot',
					img_1: '_img/screens/beato_1.png',
					img_2: '_img/screens/beato_2.png',
					img_3: '_img/screens/beato_3.png',
					link: 'https://github.com/BK-222/discord-bot',
					gitHub: 'https://github.com/BK-222/discord-bot',
					tech: 'Node.js'
				},
				{
					id: 3,
					title: 'Landing page',
					img_1: '_img/screens/landing_1.png',
					img_2: '_img/screens/landing_2.png',
					img_3: '_img/screens/landing_3.png',
					link: 'https://bk-222.github.io/animeet/',
					gitHub: 'https://github.com/BK-222/animeet',
					tech: 'Plain HTML/CSS with .js scroller'
				}
			]
		}
	},
	getters: {
		projects: function(state) {
			return state.projects;
		}
	}
}