const projectsPage = {
	template:
	'<div>\
		<h3 class="text-xl">List of some of the projects.</h3>\
			<ul>\
				<project-item v-for="project in projects"\
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
	</div>',
	computed: {
		projects: function() {
			const projects = this.$store.getters['projects/projects'];
			return projects;
		}
	}
}