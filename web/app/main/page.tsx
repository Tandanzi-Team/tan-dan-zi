'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import NavigatonBar from '../../components/NavigatonBar';
import MenuQuickView from '../../components/MenuQuickView';

export default function Main() {
  const router = useRouter();

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
              <InfoTitle>목표 몸무게까지</InfoTitle>
              <InfoFigure>5kg</InfoFigure>
              <InfoWrapper>
                <InfoCompare>-10kg</InfoCompare>
                <InfoStandard>최근 10일</InfoStandard>
              </InfoWrapper>
              <InfoGraph>그래프</InfoGraph>
            </TodayInfo>
            <TodayInfo>
              <InfoTitle>오늘의 칼로리</InfoTitle>
              <InfoFigure>5000kcal</InfoFigure>
              <InfoWrapper>
                <InfoCompare>-20kcal</InfoCompare>
                <InfoStandard>최근 10일</InfoStandard>
              </InfoWrapper>
              <InfoGraph>그래프</InfoGraph>
            </TodayInfo>
            <TodayInfo>
              <InfoTitle>오늘의 탄수화물</InfoTitle>
              <InfoFigure>20g</InfoFigure>
              <InfoWrapper>
                <InfoCompare>-2g</InfoCompare>
                <InfoStandard>최근 10일</InfoStandard>
              </InfoWrapper>
              <InfoGraph>그래프</InfoGraph>
            </TodayInfo>
            <TodayInfo>
              <InfoTitle>오늘의 단백질</InfoTitle>
              <InfoFigure>20g</InfoFigure>
              <InfoWrapper>
                <InfoCompare>-10g</InfoCompare>
                <InfoStandard>최근 10일</InfoStandard>
              </InfoWrapper>
              <InfoGraph>그래프</InfoGraph>
            </TodayInfo>
            <TodayInfo>
              <InfoTitle>오늘의 지방</InfoTitle>
              <InfoFigure>50g</InfoFigure>
              <InfoWrapper>
                <InfoCompare>+100g</InfoCompare>
                <InfoStandard>최근 10일</InfoStandard>
              </InfoWrapper>
              <InfoGraph>그래프</InfoGraph>
            </TodayInfo>
            <TodayMenu>
              <MenuQuickView />
            </TodayMenu>
          </TodayInfoWrapper>
        </ContentWrapper>
        <TodayTandanzi>
          <TodayTandanziTitle>오늘의 탄단지 비율</TodayTandanziTitle>
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
  grid-template-columns: repeat(
    5,
    1fr
  ); // 5개의 요소 각각에 1fr 분량의 공간 할당
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
  margin: 0px 0px -60px 8px;
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
  margin-left: 0.25rem;
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
  height: 60px;
  margin: 0px 0px -10px 7px;
  /* 그래프를 구현하는 추가 스타일과 로직 */
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
  width: 28rem;
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
