// Data for the chart
const data = [5, 10, 15, 20, 25];

// Create SVG element
const svg = d3.select("svg");

// Set up scales
const xScale = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([0, 500])
    .paddingInner(0.1);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 300]);

// Add bars to chart
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", (d) => 300 - yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => yScale(d))
    .attr("fill", "blue");

// Add labels to bars
svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text((d) => d)
    .attr("x", (d, i) => xScale(i) + xScale.bandwidth() / 2)
    .attr("y", (d) => 295 - yScale(d))
    .attr("text-anchor", "middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "14px")
    .attr("fill", "white");