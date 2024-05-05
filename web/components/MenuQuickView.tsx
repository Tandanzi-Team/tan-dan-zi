"use client"

import styled from "styled-components"
import { useRouter } from "next/navigation";

import AddButton from "../public/add.svg";

export default function MenuQuickView() {
  const router = useRouter();

  return (
    <Container>
      <Header>
        <TodayMe>오늘의 식단</TodayMe>
        <TodayInfoWrapper>
          탄수화물
        </TodayInfoWrapper>
        <TodayInfoWrapper>
          단백질
        </TodayInfoWrapper>
        <TodayInfoWrapper>
          지방
        </TodayInfoWrapper>
        <TodayInfoWrapper>
          칼로리
        </TodayInfoWrapper>
        <ButtonWrapper>
          <AddButton
            onClick={() => router.push("/record")}
          />
        </ButtonWrapper>
      </Header>
      <Row>
        <TimeCell>아침</TimeCell>
        <MenuCell>부대찌개(1그릇)</MenuCell>
        <NutritionCell>20g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>200kcal</NutritionCell>
      </Row>
      <Row>
        <TimeCell>아침</TimeCell>
        <MenuCell>공기밥</MenuCell>
        <NutritionCell>20g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>200kcal</NutritionCell>
      </Row>
      <Row>
        <TimeCell>점심</TimeCell>
        <MenuCell>닭가슴살 샐러드</MenuCell>
        <NutritionCell>20g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>200kcal</NutritionCell>
      </Row>
      <Row>
        <TimeCell>저녁</TimeCell>
        <MenuCell>까르보나라</MenuCell>
        <NutritionCell>20g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>200kcal</NutritionCell>
      </Row>
      <Row>
        <TimeCell>저녁</TimeCell>
        <MenuCell>아이스크림</MenuCell>
        <NutritionCell>20g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>200kcal</NutritionCell>
      </Row>
      <Row>
        <TimeCell>저녁</TimeCell>
        <MenuCell>닭다리</MenuCell>
        <NutritionCell>20g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>200kcal</NutritionCell>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0rem; /* 행 사이 간격 */
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  overflow: auto;
  max-height: 500px;
`;

const TodayInfoWrapper = styled.div`
  padding-right: 4.8rem;
  font-size: 1.3rem;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.3rem;
`;

const TodayMe = styled.h1`
  margin-right: 320px;
  font-size: 2.5rem;
  font-weight: 700;
  color: #212B36;
`;

const Row = styled.div`
  display: flex;
  gap: 7rem; /* 셀 사이 간격 */
  padding: 1.8rem 0rem;
  border-bottom: 1px solid #eaeaea;
  font-size: 1.2rem;

  &:last-child {
    border-bottom: none;
  }
`;

const TimeCell = styled.div`
  width: 100px;
  text-align: center;
`;

const MenuCell = styled.div`
  align-items: left;
  width: 250px;
  text-align: left;
`;

const NutritionCell = styled.div`
  width: 100px;
  text-align: center;
`;
