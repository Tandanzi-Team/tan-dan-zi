'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import NavigatonBar from '../../components/NavigatonBar';
import MenuQuickView from '../../components/views/MenuQuickView';
import ChartComponent from '../../components/charts/TodayChart';
import StackedBarChart from '../../components/charts/StackedBarChart';
import LegendComponent from '../../components/charts/Legend';

export default function Main() {
  const router = useRouter();

  const current = [
    { name: '탄수화물', value: 40, color: '#ff3a29' },
    { name: '단백질', value: 20, color: '#ffb200' },
    { name: '지방', value: 40, color: '#4339f2' },
  ];
  const ideal = [
    { name: '탄수화물', value: 50, color: '#fb9990' },
    { name: '단백질', value: 30, color: '#fbd57c' },
    { name: '지방', value: 20, color: '#9d98f5' },
  ];

  const getCurrentColors = () => current.map((item) => item.color);
  const getIdealColors = () => ideal.map((item) => item.color);

  return (
    <Container>
      <NavigatonBar />
      <MainContent>
        <ContentWrapper>
          <UserInfoWrapper>
            <UserName>최연수</UserName>
            <Date>2024/03/28</Date>
          </UserInfoWrapper>
          <TodayInfoWrapper>
            <TodayInfo>
              <InfoTitle>오늘의 몸무게</InfoTitle>
              <InfoFigure>56kg</InfoFigure>
              <InfoWrapper>
                <InfoStandard>어제보다</InfoStandard>
                <InfoCompare>-1kg</InfoCompare>
              </InfoWrapper>
              <InfoGraph>
                <ChartComponent />
              </InfoGraph>
            </TodayInfo>
            <TodayInfo>
              <InfoTitle>오늘의 칼로리</InfoTitle>
              <InfoFigure>5000kcal</InfoFigure>
              <InfoWrapper>
                <InfoStandard>어제보다</InfoStandard>
                <InfoCompare>-20kcal</InfoCompare>
              </InfoWrapper>
              <InfoGraph>
                <ChartComponent />
              </InfoGraph>
            </TodayInfo>
            <TodayInfo>
              <InfoTitle>오늘의 탄수화물</InfoTitle>
              <InfoFigure>20g</InfoFigure>
              <InfoWrapper>
                <InfoStandard>어제보다</InfoStandard>
                <InfoCompare>-2g</InfoCompare>
              </InfoWrapper>
              <InfoGraph>
                <ChartComponent />
              </InfoGraph>
            </TodayInfo>
            <TodayInfo>
              <InfoTitle>오늘의 단백질</InfoTitle>
              <InfoFigure>20g</InfoFigure>
              <InfoWrapper>
                <InfoStandard>어제보다</InfoStandard>
                <InfoCompare>-10g</InfoCompare>
              </InfoWrapper>
              <InfoGraph>
                <ChartComponent />
              </InfoGraph>
            </TodayInfo>
            <TodayInfo>
              <InfoTitle>오늘의 지방</InfoTitle>
              <InfoFigure>50g</InfoFigure>
              <InfoWrapper>
                <InfoStandard>어제보다</InfoStandard>
                <InfoCompare>+100g</InfoCompare>
              </InfoWrapper>
              <InfoGraph>
                <ChartComponent />
              </InfoGraph>
            </TodayInfo>
            <TodayMenu>
              <MenuQuickView />
            </TodayMenu>
          </TodayInfoWrapper>
        </ContentWrapper>
        <TodayTandanzi>
          <TodayTandanziTitle>
            오늘의 탄단지 비율
            <LegendComponent
              data={current}
              colors={getCurrentColors()}
              index={0}
            />
            <ChartsContainer>
              <StackedBarChart
                data={current}
                colors={getCurrentColors()}
                index={0}
              />
              <StackedBarChart
                data={ideal}
                colors={getIdealColors()}
                index={1}
              />
            </ChartsContainer>
          </TodayTandanziTitle>
        </TodayTandanzi>
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

const TodayInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
  align-items: start;
  width: 100%;
`;

const TodayInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 350px;
  margin-top: -1rem;
  padding: 2rem;
  text-align: left;
  background-color: #ffffff;
  border-radius: 10px;
`;

const InfoTitle = styled.div`
  font-size: 1rem;
  color: #212b36;
  margin: 0px 0px -50px 8px;
`;

const InfoFigure = styled.div`
  font-size: 2.5rem;
  color: #111827;
  font-weight: 700;
  margin: 0px 0px -30px 7px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.5rem;
`;

const InfoCompare = styled.div`
  font-size: 1.25rem;
  color: #34b53a;
`;

const InfoStandard = styled.div`
  font-size: 0.875rem;
  color: #8a92a6;
`;

const InfoGraph = styled.div`
  margin: 0px 0px -10px 7px;
`;

const TodayMenu = styled.div`
  grid-column: 1 / -1; // 첫 번째부터 마지막 컬럼까지
  width: 100%;
  height: 547px;
  padding: 2rem;
  align-items: left;
  text-align: left;
  background-color: #ffffff;
  border-radius: 10px;
`;

const TodayTandanzi = styled.div`
  grid-column: 3; // 세 번째 column에 배치
  display: flex;
  flex-direction: column;
  margin-top: 5.1rem;
  width: 26.25rem;
  height: 57.3rem;
  align-items: left;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
`;

const TodayTandanziTitle = styled.div`
  font-size: 1.5rem;
  text-align: left;
  color: #212b36;
  margin: 0px 0px -3.75rem 0.5rem;
`;

const ChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 3rem;
`;
