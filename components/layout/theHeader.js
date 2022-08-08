const theHeader = {
	template:
	'<div>\
		<nav class="flex justify-end mb-2 lg:mb-0">\
			<ul class="flex items-center mt-1 mr-6 font-bold text-sm overflow-x-auto">\
				<li class="m-5 hover-text-cyan-500 delay-100">\
					<router-link to="/about"><span class="text-cyan-500 pr-1">#01.</span>About</router-link>\
				</li>\
				<li class="m-5 hover-text-cyan-500 delay-100">\
					<router-link to="/projects"><span class="text-cyan-500 pr-1">#02.</span>Projects</router-link>\
				</li>\
				<li class="m-5 hover-text-cyan-500 delay-100 whitespace-nowrap">\
					<router-link to="/dev-skills"><span class="text-cyan-500 pr-1">#03.</span>Dev. Skills</router-link>\
				</li>\
				<li class="m-5">\
					<base-link to="/contact">Contact</base-link>\
				</li>\
			</ul>\
		</nav>\
	</div>'
}