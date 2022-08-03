const projectsPage = {
	template:
	'<div>\
		<div class="flex flex-col items-center">\
			<h3 class="text-xl">#02. Projects</h3>\
			<h4>Some of the projects I\'ve built</h4>\
			<ul class="w-full">\
				<project-item class="mx-auto" v-for="project in projects"\
					:key="project.id"\
					:title="project.title"\
					:img_1="project.img_1"\
					:img_2="project.img_2"\
					:img_3="project.img_3"\
					:link="project.link"\
					:gitHub="project.gitHub"\
					:tech="project.tech"\
				></project-item>\
			</ul>\
		</div>\
		<the-footer></the-footer>\
	</div>',
	computed: {
		projects: function() {
			const projects = this.$store.getters['projects/projects'];
			return projects;
		}
	}
}