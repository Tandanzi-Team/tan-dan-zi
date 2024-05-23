import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface DataPoint {
  day: string;
  value: number;
}

const ChartComponent: React.FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    // 데이터와 SVG 도메인 설정
    const data: DataPoint[] = [
      { day: "2024/03/19", value: 10 },
      { day: "2024/03/20", value: 20 },
      { day: "2024/03/21", value: 70 },
      { day: "2024/03/22", value: 40 },
      { day: "2024/03/23", value: 10 },
      { day: "2024/03/24", value: 60 },
      { day: "2024/03/25", value: 30 },
      { day: "2024/03/26", value: 80 },
      { day: "2024/03/27", value: 10 },
      { day: "2024/03/28", value: 20 },
    ];
    const width = 200;
    const height = 100;

    // SVG 요소를 선택하고, 만약 없다면 추가
    const svg = d3.select(ref.current)
      .selectAll("svg")
      .data([null])
      .join("svg")
      .attr("width", width)
      .attr("height", height);

    // xScale 설정
    const xExtent = d3.extent(data, d => new Date(d.day)) as [Date, Date];
    const xScale = d3.scaleTime()
      .domain(xExtent)
      .range([0, width]);

    // yScale 설정
    const yMax = d3.max(data, d => d.value) as number;
    const yScale = d3.scaleLinear()
      .domain([0, yMax])
      .range([height, 0]);

    // 라인 생성기 설정
    const line = d3.line<DataPoint>()
      .x(d => xScale(new Date(d.day)))
      .y(d => yScale(d.value))
      .curve(d3.curveBasis);

    // 라인 그리기
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#34B53A")
      .attr("stroke-width", 4)
      .attr("d", line);

  }, []);

  return <div ref={ref} />;
};

export default ChartComponent;
