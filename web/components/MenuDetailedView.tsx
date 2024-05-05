"use client"

import styled from "styled-components"
import { useRouter } from "next/navigation";

import Trash from "../public/trash.svg"

export default function MenuDetailedView() {
  return (
    <Container>
      <Header>
        <TodayMe>오늘의 나는</TodayMe>
        <TodayWeight>56kg</TodayWeight>
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
        <TodayInfoWrapper>
          당류
        </TodayInfoWrapper>
        <TodayInfoWrapper>
          나트륨
        </TodayInfoWrapper>
      </Header>
      <Row>
        <TrashWrapper>
          <Trash/>
        </TrashWrapper>
        <TimeCell>아침</TimeCell>
        <MenuCell>부대찌개(1그릇)</MenuCell>
        <NutritionCell>20g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>200kcal</NutritionCell>
        <NutritionCell>30g</NutritionCell>
        <NutritionCell>600mg</NutritionCell>
      </Row>
      <Row>
        <TrashWrapper>
          <Trash/>
        </TrashWrapper>
        <TimeCell>아침</TimeCell>
        <MenuCell>공기밥</MenuCell>
        <NutritionCell>20g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>200kcal</NutritionCell>
        <NutritionCell>30g</NutritionCell>
        <NutritionCell>600mg</NutritionCell>
      </Row>
      <Row>
        <TrashWrapper>
          <Trash/>
        </TrashWrapper>
        <TimeCell>점심</TimeCell>
        <MenuCell>닭가슴살 샐러드</MenuCell>
        <NutritionCell>20g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>200kcal</NutritionCell>
        <NutritionCell>30g</NutritionCell>
        <NutritionCell>600mg</NutritionCell>
      </Row>
      <Row>
        <TrashWrapper>
          <Trash/>
        </TrashWrapper>
        <TimeCell>저녁</TimeCell>
        <MenuCell>까르보나라</MenuCell>
        <NutritionCell>20g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>200kcal</NutritionCell>
        <NutritionCell>30g</NutritionCell>
        <NutritionCell>600mg</NutritionCell>
      </Row>
      <Row>
        <TrashWrapper>
          <Trash/>
        </TrashWrapper>
        <TimeCell>저녁</TimeCell>
        <MenuCell>아이스크림</MenuCell>
        <NutritionCell>20g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>200kcal</NutritionCell>
        <NutritionCell>30g</NutritionCell>
        <NutritionCell>600mg</NutritionCell>
      </Row>
      <Row>
        <TrashWrapper>
          <Trash/>
        </TrashWrapper>
        <TimeCell>저녁</TimeCell>
        <MenuCell>닭다리</MenuCell>
        <NutritionCell>20g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>10g</NutritionCell>
        <NutritionCell>200kcal</NutritionCell>
        <NutritionCell>30g</NutritionCell>
        <NutritionCell>600mg</NutritionCell>
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
  padding-right: 3rem;
  font-size: 1.3rem;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.3rem;
`;

const TodayMe = styled.h1`
  margin-right: -60px;
  font-size: 2.5rem;
  font-weight: 700;
  color: #212B36;
`;

const TodayWeight = styled.span`
  margin-right: 220px;
  font-size: 2.5rem;
  font-weight: 700;
  color: #8A92A6;
`;

const Row = styled.div`
  display: flex;
  gap: 8rem; /* 셀 사이 간격 */
  padding: 1.8rem 0rem;
  border-bottom: 1px solid #eaeaea;
  font-size: 1.2rem;

  &:last-child {
    border-bottom: none;
  }
`;

const TrashWrapper = styled.div`
  margin-left: .3rem;
  margin-right: -3rem;
  cursor: pointer;
`;

const TimeCell = styled.div`
  width: 100px;
  text-align: center;
  margin-right: -3rem;
`;

const MenuCell = styled.div`
  width: 250px;
  align-items: left;
  text-align: left;
`;

const NutritionCell = styled.div`
  width: 100px;
  text-align: center;
`;
