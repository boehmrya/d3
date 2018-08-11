/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

d3.json("data/buildings.json").then(function(data) {
  console.log(data);


  data.forEach(function(d) {
    d.height = parseFloat(d.height);
  });

  var svg = d3.select("#chart-area").append("svg")
    .attr("width", 500)
    .attr("height", 500);

  var rectangles = svg.selectAll("rect")
    .data(data);

  rectangles.enter()
    .append("rect")
      .attr("x", function(d, i) {
        return (i * 30);
      })
      .attr("y", function() {
        return 10;
      })
      .attr("width", function(d) {
        return 20;
      })
      .attr("height", function(d, i) {
        return d.height;
      })
      .attr("fill", function() {
        return "red";
      });

  console.log(data);
}).catch(function(error) {
  console.log(error);
})
