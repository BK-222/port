const projectsPage = {
	template:
	'<div>\
		This is a projects page.\
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