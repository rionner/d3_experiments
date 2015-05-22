d3.csv("/CHI_2015_playoffs.csv", function(data) {
  console.log(data);

	var circles = [];

	var view = d3.select("svg");

	view.selectAll("circle")
		.data(data)
		.enter()
			.append('circle');

	view.selectAll('circle')
		.data(data)
			.attr('r', function(d) {return d.GP*10 + 'px';})
			.attr('cx', function(d) {return d.GP+100 + 'px';})
			.attr('cy', function(d) {return d.GP+100 + 'px';})

		return svg;
});





function projectData(data){

	var circles = [];



  var bubbles = d3_body.selectAll('circle')
       .data(data)
       .enter()
       .append('circle')

	bubbles = d3_body.selectAll('circle')
      .data(data)
      .transition()
        .duration(100)
        .attr('r', function(d){ return d.r; })
        .attr('cx', function(d){ return d.cx; })
        .attr('cy', function(d){ return d.cy; })
        .style('fill', function(d){ return d.fill; })
        .style('opacity', function(d){ return d.opacity; });

  d3_body.selectAll('circle').data(data).exit().remove();
}
