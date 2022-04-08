Vue.component('project-item', {
	template:
	'<div>\
		<base-card class="group transition delay-75 border border-transparent hover-border-cyan-500">\
			<h3 class="mb-2 text-lg font-bold group-hover-text-cyan-500 delay-100">{{ title }}</h3>\
			<div class="flex my-3.5">\
				<div class="bg-norepeat bg-cover bg-center h-16 w-24 mr-3 filter grayscale hover:grayscale-0" :style="{ \'background-image\': `url(${img_1})` }"></div>\
				<div class="bg-norepeat bg-cover bg-center h-16 w-24 mr-3" :style="{ \'background-image\': `url(${img_2})` }"></div>\
				<div class="bg-norepeat bg-cover bg-center h-16 w-24" :style="{ \'background-image\': `url(${img_3})` }"></div>\
			</div>\
			<base-link external><a :href="link">link</a></base-link>\
			<base-link external><a :href="gitHub">code</a></base-link>\
			<p>{{ tech }}</p>\
		</base-card>\
	</div>',
	props: {
		title: { type: String, required: true },
		img_1: { type: String, required: true },
		img_2: { type: String, required: true },
		img_3: { type: String, required: true },
		link: { type: String, required: true },
		gitHub: { type: String, required: true },
		tech: { type: String, required: true }
	}
});