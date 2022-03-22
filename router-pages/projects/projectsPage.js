const projectsPage = {
	template:
	'<div>\
		This is a projects page.\
			<ul>\
				<project-item v-for="project in projects"\
					:key="project.id"\
					:title="project.title"\
					:img="project.img"\
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