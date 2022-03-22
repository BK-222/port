Vue.component('project-item', {
	template:
	'<div>\
		<base-card class="group border border-transparent hover-border-cyan-500">\
			<h3 class="mb-2 text-lg font-bold group-hover-text-cyan-500">{{ title }}</h3>\
			<div class="h-16 w-16" style="background-image: url({{ img }});"></div>\
			<base-link external><a :href="link">link</base-link>\
			<base-link external><a :href="gitHub">code</a></base-link>\
			<p>{{ tech }}</p>\
		</base-card>\
	</div>',
	props: {
		title: { type: String, required: true },
		img: { type: String, required: true },
		link: { type: String, required: true },
		gitHub: { type: String, required: true },
		tech: { type: String, required: true }
	}
});