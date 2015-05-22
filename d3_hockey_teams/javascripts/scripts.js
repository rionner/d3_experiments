d3.json("/teams.json", function (json) {

	var teams_data = json;

	var rows = d3.select('#teams-field')
		.selectAll('div')
		.data(teams_data);

	var team = rows.enter()
		.append('div')
		.text(function(d){return d.name;});

	rows = d3.select('#teams-field')
		.selectAll('div')
		.transition()
			.duration(3000)
			.style("color", "white")
			.style("background-color", function(d){
				if (d.conference == "Western") {
					return "red"
				};
			});

});
