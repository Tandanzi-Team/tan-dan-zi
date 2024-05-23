import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface LegendData {
  name: string;
  color: string;
}

interface LegendComponentProps {
  colors: string[];
  index: number;
  data?: LegendData[];
}

const LegendComponent: React.FC<LegendComponentProps> = ({ data, colors, index }) => {
  // 여기서 타입을 HTMLDivElement로 지정
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    d3.select(ref.current).selectAll("svg").remove();

    const margin = { top: 10, right: 0, bottom: 10, left: 0 };
    const width = 300;
    const height = 50;

    const svg = d3.select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // 범례 데이터
    const legendData = [
      { name: "탄수화물", color: colors[0] },
      { name: "단백질", color: colors[1] },
      { name: "지방", color: colors[2] }
    ];

    // 범례 추가를 위한 그룹(g) 요소 추가 (첫 번째 차트에만)
    const legend = svg.selectAll(".legend")
      .data(legendData)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(${i * 100}, 10)`);

    // 각 범례 항목에 대한 색상 원 추가
    legend.append("circle")
      .attr("cx", 10)
      .attr("cy", 10)
      .attr("r", 8)
      .style("fill", (d, i) => colors[i]);

    // 각 범례 항목에 대한 텍스트 추가
    legend.append("text")
      .attr("x", 40)
      .attr("y", 15)
      .text(d => d.name)
      .style("font-size", "14px")
      .attr("text-anchor", "start");
  }, [data, colors, index]);

  return <div ref={ref} />;
};

export default LegendComponent;
