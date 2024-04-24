"use client";

import styled from "styled-components";
import NavigatonBar from "../../components/NavigatonBar";

export default function Detail() {
  return (
    <Container>
      <NavigatonBar />
      <MainContent>
        <ContentWrapper>
          <UserInfoWrapper>
            <UserName>최연수</UserName>
            <Date>2024/03/28</Date>
          </UserInfoWrapper>
          <ChartsWrapper>
            <TandanziWrapper>
              <ChartTitle>최근 10일 탄단지 비율</ChartTitle>
              <Chart>{/* 그래프 */}</Chart>
            </TandanziWrapper>
            <DetailedWrapper>
              <DetailedChart>
                <ChartInfoWrapper>
                  <ChartFigure>55kg</ChartFigure>
                  <ChartTitle>평균 몸무게</ChartTitle>
                  <ChartStandard>최근 10일 기준</ChartStandard>
                </ChartInfoWrapper>
                <Chart>{/* 그래프 */}</Chart>
              </DetailedChart>
              <DetailedChart>
                <ChartInfoWrapper>
                  <ChartFigure>2000kcal</ChartFigure>
                  <ChartTitle>평균 섭취 칼로리</ChartTitle>
                  <ChartStandard>최근 10일 기준</ChartStandard>
                </ChartInfoWrapper>
                <Chart>{/* 그래프 */}</Chart>
              </DetailedChart>
            </DetailedWrapper>
          </ChartsWrapper>
        </ContentWrapper>
      </MainContent>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 100vh;
  width: 100vw;
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: auto 0px;
  gap: -10px; // 두 columns 사이의 간격 10px
  align-items: start;
  padding: 3rem 0rem 0rem 8rem;
  overflow-y: auto;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  font-size: 2.5rem;
  margin-left: 1.25rem;
  margin-bottom: 1.6rem;
`;

const UserName = styled.div`
  color: #212b36;
  font-weight: 700;
`;

const Date = styled.div`
  margin-left: 1.25rem;
  color: #8a92a6;
  font-weight: 400;
`;

const ChartsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    2,
    5fr
  ); // 2개의 요소 각각에 반반 5fr 분량의 공간 할당
  gap: 1.25rem;
  padding: 20px;
  align-items: start;
  width: 100%;
  margin-top: -1rem;
`;

const TandanziWrapper = styled.div`
  width: 1580px;
  height: 57.3rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
`;

const DetailedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 440px;
  gap: 1.25rem;
`;

const DetailedChart = styled.div`
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  height: calc((57.3rem - 1.25rem) / 2); // 두 그래프의 높이가 TandanziWrapper와 같도록 설정
`;

const ChartInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 0.3rem;
  z-index: 1000;
`;

const ChartFigure = styled.div`
  margin-bottom: 0.3rem;
  font-size: 2.7rem;
  color: #111827;
  font-weight: 500;
`;

const ChartTitle = styled.h2`
  margin-bottom: 0.7rem;
  font-size: 1.3rem;
  color: #212b36;
`;

const ChartStandard = styled.div`
  font-size: 0.9rem;
  color: #8a92a6;
`;

const Chart = styled.div`
  align-items: center;
  justify-content: center;
  /* 그래프를 구현하는 추가 스타일과 로직 */
`;
