d3.csv("/CHI_2015_playoffs.csv", function(data) {
  console.log(data);

	var circles = [];

	var view = d3.select("svg");

	var bubbles = view.selectAll("circle")
		.data(data)
		.enter()
			.append('circle');

	bubbles = view.selectAll('circle')
		.data(data)
			.transition()
			.delay(1000)
				.attr('r', function(d) {return '20px';})
				.attr('cx', function(d) {return d.GP*30 + 'px';})
				.attr('cy', function(d) {return d.GP*15 + 'px';})

				.delay(1000)
				.style('fill', function(d){
					if (d.game_outcome == "W"){
						return "red";
					}
					else if ((d.Opponent == "Nashville Predators") && (d.game_outcome == "L")){
						return "blue";
					}
					else if ((d.Opponent == "Anaheim Ducks") && (d.game_outcome == "L")) {
						return "orange";
					}
					else {
						return "gray";
					};

		view.selectAll('circle').data(data).exit().remove();
	});
});
