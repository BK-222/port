const projectsModule = {
	namespaced: true,
	state: function() {
		return {
			projects: [
				{
					id: 1,
					title: 'Discord bot',
					img: '_img/psychopass.jpg',
					link: 'https://github.com/BK-222/discord-bot',
					gitHub: 'https://github.com/BK-222/discord-bot',
					tech: 'Node.js'
				},
				{
					id: 2,
					title: 'Simple playable battle app.',
					img: '_img/psychopass.jpg',
					link: 'https://priceless-edison-9dd932.netlify.app/',
					gitHub: 'https://github.com/BK-222/tms',
					tech: 'Vue'
				},
				{
					id: 3,
					img: '_img/psychopass.jpg',
					title: 'Landing page',
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