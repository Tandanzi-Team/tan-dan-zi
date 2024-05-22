import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { NumberValue } from 'd3';

interface WeightData {
  value: NumberValue;
  date: string;
  weight: number;
}

interface WeightChartProps {
  data: WeightData[];
}

const WeightChart: React.FC<WeightChartProps> = ({ data }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.date)) as [Date, Date])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.weight)!])
      .range([height, 0]);

    const line = d3.line<WeightData>()
      .x(d => xScale(new Date(d.date)))
      .y(d => yScale(d.weight))
      .curve(d3.curveBasis);  // 곡선형 차트를 위한 설정

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#34B53A")
      .attr("stroke-width", 2)
      .attr("d", line);

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append("g")
      .call(d3.axisLeft(yScale));

    const area = d3.area<WeightData>()
      .x(d => xScale(new Date(d.date)))
      .y0(height)
      .y1(d => yScale(d.value))
      .curve(d3.curveMonotoneX); // 라인을 부드럽게

    svg.append("path")
      .datum(data)
      .attr("fill", "green")
      .attr("d", area);

  }, [data]);

  return <svg ref={ref} />;
}

export default WeightChart;
