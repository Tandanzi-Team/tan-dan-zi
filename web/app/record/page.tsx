"use client";

import styled from "styled-components";

import NavigatonBar from "../../components/NavigatonBar";
import MenuDetailedView from "../../components/views/MenuDetailedView";
import Calendar from "../../public/calendar.svg";

export default function Record() {
  return (
    <Container>
      <NavigatonBar />
      <MainContent>
        <ContentWrapper>
          <UserInfoWrapper>
            <UserName>최연수</UserName>
            <Date>2024/03/28</Date>
            <CalendarWrapper>
              <Calendar />
            </CalendarWrapper>
          </UserInfoWrapper>
          <TodayInfoWrapper>
            <TodayInfo>
              <InfoTitle>오늘 식사 기록하기</InfoTitle>
              <SearchButton>🔎  영양 성분 검색하기 (예: 공기밥)</SearchButton>
            </TodayInfo>
            <TodayInfo>
              <InfoTitle>오늘 몸무게 기록하기</InfoTitle>
              <ButtonWrapper>
                <InputWeight>✏️  몸무게 입력하기 (예: 60)</InputWeight>
                <RecordButton>입력</RecordButton>
              </ButtonWrapper>
            </TodayInfo>
            <TodayMenu>
              <MenuDetailedView />
            </TodayMenu>
          </TodayInfoWrapper>
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

const CalendarWrapper = styled.div`
  margin-left: 1.25rem;
  cursor: pointer;
`;

const TodayInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    2,
    5fr
  ); // 2개의 요소 각각에 반반 5fr 분량의 공간 할당
  gap: 20px;
  padding: 20px;
  align-items: start;
  width: 100%;
`;

const TodayInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1000px;
  height: 350px;
  margin-top: -1rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
`;

const InfoTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #212B36;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 440px;
  height: 30px;
  padding: 0.9rem 0px;
  margin-top: 1.5rem;
  border-radius: 10px;
  text-align: center;
  font-size: 15px;
  background-color: #F8F8F8;
  color: #8a92a6;
  border: none;
  cursor: pointer;
`;

const InputWeight = styled.button`
  width: 330px;
  height: 30px;
  padding: 0.9rem 0px;
  margin-top: 1.5rem;
  border-radius: 10px;
  text-align: center;
  font-size: 15px;
  background-color: #F8F8F8;
  color: #8a92a6;
  border: none;
  cursor: pointer;
`;

const RecordButton = styled(SearchButton)`
  width: 100px;
  margin-left: 10px;
  background-color: #4339F2;
  color: #FFFFFF;
`;

const TodayMenu = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  height: 547px;
  padding: 2rem;
  align-items: left;
  text-align: left;
  background-color: #ffffff;
  border-radius: 10px;
`;
