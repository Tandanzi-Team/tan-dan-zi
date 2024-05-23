import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface LegendData {
  name: string;
  color: string;
  value: number;
}

interface LegendComponentProps {
  colors: string[];
  index: number;
  data?: LegendData[];
}

// StackedBarsChart 컴포넌트는 막대 차트를 그리는 React 함수형 컴포넌트
// 이 컴포넌트는 data와 colors를 props로 받아옴
const StackedBarsChart: React.FC<LegendComponentProps> = ({ data = [], colors, index }) => {
  // useRef는 DOM 요소에 접근하기 위해 사용되며 여기서는 SVG 요소에 접근하는 데 사용됨
  const ref = useRef<HTMLDivElement>(null);

  // useEffect는 컴포넌트의 라이프사이클에서 side effects를 수행하기 위해 사용됨
  useEffect(() => {
    if (!ref.current) return; // ref가 없다면 종료

    // D3를 사용하여 SVG 내의 모든 SVG 요소를 선택하고, 그 요소들을 제거하여 차트를 리셋
    d3.select(ref.current).selectAll("svg").remove();

    // margin, width, height는 차트의 여백과 크기를 정의하는 객체와 변수
    const margin = { top: 20, right: 25, bottom: 40, left: 25 };
    const width = 100;
    const barWidth = width - margin.left - margin.right;
    const height = 760;
    const barHeight = height - margin.top - margin.bottom;
    const borderRadius = 25; // 막대의 둥근 모서리를 정의하는 반경

    // const titles = ["03/28", "권장비율"]; // x축에 표시될 데이터

    // d3.select를 통해 차트를 그릴 요소를 선택하고, 새로운 SVG 요소를 생성
    // 그 후, SVG 내의 "g" 요소에 변형(transform)을 적용하여 여백을 설정
    const svg = d3.select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // yScale은 y축의 스케일을 정의하는 함수 이 스케일은 데이터 값에 따라 y 위치를 결정
    const yScale = d3.scaleLinear()
      .range([barHeight, 0])
      .domain([0, 100]);

    // stackData는 데이터의 누적 값을 계산하여 각 막대의 시작과 끝 위치를 정의
    // 데이터를 바탕으로 누적 합계를 계산하고, 각 세그먼트의 시작과 끝 값을 객체에 추가
    let cumulative = 0;
    const stackData = data.map((d, i) => {
      const gap = 1.5; // 여백 값을 설정 이 값을 조절하여 간격의 크기를 변경할 수 있음
      let newCumulative = cumulative + d.value;
      let segment = {
        start: cumulative,
        end: newCumulative - (i < data.length - 1 ? gap : 0) // 마지막 요소가 아니라면 간격을 추가
      };
      cumulative = newCumulative;
      return {
        ...d,
        start: segment.start, // 현재 세그먼트의 시작 값
        end: segment.end, // 현재 세그먼트의 끝 값
        color: colors[i] // 색상을 지정
      };
    });

    // x축 추가하기 전에 타이틀 설정
    svg.selectAll(".chart-title")
      // .data([titles[index]])
      .enter()
      .append("text")
      .attr("class", "chart-title")
      .attr("text-anchor", "middle") // 텍스트 중앙 정렬
      .attr("x", 26)
      .attr("y", 720)
      .attr("dy","-0.5rem") // y축 라벨에서 약간 떨어지도록 조정
      // .style("font-size", "1rem")
      // .style("font-weight", "400")
      // .text(d => d);

    // 바 차트 그리기 - "rect" 요소를 사용하여 막대를 그림
    svg.selectAll(".bar")
      .data(stackData)
      .join("rect")
      .attr("class", "bar")
      .attr("y", d => yScale(d.end)) // y 위치는 스케일 함수를 사용하여 계산
      .attr("height", d => yScale(d.start) - yScale(d.end)) // 막대의 높이 계산
      .attr("width", barWidth) // 막대의 너비 설정
      .attr("fill", d => d.color) // 막대의 색상 설정
      .attr("rx", borderRadius) // 둥근 모서리의 x방향 반경 설정
      .attr("ry", borderRadius); // 둥근 모서리의 y방향 반경 설정

    // y축 추가 - d3.axisLeft 함수를 사용하여 y축을 SVG에 추가
    svg.append("g")
      // .call(d3.axisLeft(yScale).ticks(6))
      .call(g => g.select(".domain").remove()) // y축의 도메인 라인(축 라인)을 제거
      .call(g => g.selectAll(".tick text").attr("x", -10).attr("dy", -4)); // y축 틱 텍스트 위치 조정

  // 라이프사이클의 의존성 배열에 "data"와 "colors"를 포함시켜,
  // 이 값들이 변경될 때마다 useEffect 훅이 실행되도록 함
  }, [ data, colors, index ]); 

  // 차트 컨테이너를 반환 여기서 "ref"는 d3가 실제 DOM 요소를 선택할 수 있도록 참조
  return <div ref={ref} />;
};

export default StackedBarsChart;
