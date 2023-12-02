d3.csv("finalSoilData.csv").then(function(data) {
            // Parsing dates and converting numerical values
            data.forEach(d => {
                d.visitDate = new Date(d.visitDate);
                d.TP = +d.TP;
                d.TN = +d.TN;
                d.m3_P = +d.m3_P;
                d.m3_Fe = +d.m3_Fe;
                d.m3_Al = +d.m3_Al;
                d.wEX_P = +d.wEX;
                d.wEX_NH3 = +d.wEX_NH3;
                d.wEX_NOx = +d.wEX_NOx;
                d.pH = +d.pH;
                
            });

            // Populate Location Dropdown
            let locations = [...new Set(data.map(d => d.locName))];
            let locationDropdown = d3.select("#locationDropdown");
            locationDropdown.selectAll("option")
                .data(locations)
                .enter()
                .append("option")
                .text(d => d);

            // Populate Variable Dropdown
            let variables = ["TP", "TN", "m3_P", "m3_Fe", "m3_Al", "wEX_P", "wEX_NH3", "wEX_NOx", "pH"];
            let variableDropdown = d3.select("#variableDropdown");
            variableDropdown.selectAll("option")
                .data(variables)
                .enter()
                .append("option")
                .text(d => d);

            // Tooltip
            let tooltip = d3.select(".tooltip");

            // Initial plot
            drawPlot(locations[0], variables[0]);

            // Event Listeners for Dropdowns
            locationDropdown.on("change", function() {
                drawPlot(this.value, variableDropdown.node().value);
            });

            variableDropdown.on("change", function() {
                drawPlot(locationDropdown.node().value, this.value);
            });

            // Function to draw or update plot
            function drawPlot(location, variable) {
                // Filter data based on selection
                let filteredData = data.filter(d => d.locName === location);

                // Group by visitDate and calculate median
                let medianData = Array.from(d3.group(filteredData, d => d.visitDate), ([date, values]) => {
                    return { visitDate: new Date(date), value: d3.median(values, v => v[variable]) };
                });

                // Sort by visitDate
                medianData.sort((a, b) => a.visitDate - b.visitDate);
                
                // Get unique dates for x-axis ticks
                let uniqueDates = filteredData.map(d => d.visitDate)
                                              .filter((v, i, a) => a.indexOf(v) === i);


                // Set up SVG canvas with adjusted dimensions
                let margin = {top: 1, right: 20, bottom: 70, left: 50};
                let width = 900 - margin.left - margin.right;
                let height = 500 - margin.top - margin.bottom;
                d3.select("#plotArea").selectAll("*").remove();
                let svg = d3.select("#plotArea").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                // Scales
                let xScale = d3.scaleTime()
                    .domain(d3.extent(medianData, d => d.visitDate))
                    .range([0, width]);
                let yScale = d3.scaleLinear()
                    .domain([0, d3.max(medianData, d => d.value)])
                    .range([height, 0]);

                // Axes
                let xAxis = d3.axisBottom(xScale)
                              .tickValues(uniqueDates)
                              .tickFormat(d3.timeFormat("%Y-%d-%m"));

                let yAxis = d3.axisLeft(yScale);

                svg.append("g")
                    .attr("class", "axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis)
                    .selectAll("text")
                    .style("text-anchor", "end")
                    .attr("dx", "-1em")
                    .attr("dy", "-.30em")
                    .attr("transform", "rotate(-90)");

                svg.append("g")
                    .attr("class", "axis")
                    .call(yAxis);

                // Axis Labels
                svg.append("text")
                    .attr("class", "axis-label")
                    .attr("text-anchor", "middle")
                    .attr("x", width / 2)
                    .attr("y", height + margin.bottom - 5)
                    //.text("Date");
                svg.append("text")
                    .attr("class", "axis-label")
                    .attr("text-anchor", "middle")
                    .attr("transform", "rotate(-90)")
                    .attr("x", -height / 2)
                    .attr("y", -margin.left + 15)
                    .text(variable);

                // Line
                let line = d3.line()
                    .x(d => xScale(d.visitDate))
                    .y(d => yScale(d.value));

                svg.append("path")
                    .datum(medianData)
                    .attr("class", "line")
                    .attr("d", line);

                // Points
                svg.selectAll(".dot")
                    .data(filteredData)
                    .enter().append("circle")
                    .attr("class", "circle")
                    .attr("r", 5)
                    .attr("cx", d => xScale(d.visitDate))
                    .attr("cy", d => yScale(d[variable]))
                    .on("mouseover", function(event, d) {
                        let formattedDate = d3.timeFormat("%Y-%d-%m")(d.visitDate);
                        tooltip.transition().duration(200).style("opacity", .9);
                        tooltip.html(d[variable] + "<br/>" + formattedDate )
                            .style("left", (event.pageX) + "px")
                            .style("top", (event.pageY - 28) + "px");
                    })
                    .on("mouseout", function(d) {
                        tooltip.transition().duration(500).style("opacity", 0);
                    });
            }
        });