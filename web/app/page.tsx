"use client"

import styled from "styled-components";
import { useRouter } from "next/navigation";
import IntroImg from "../public/intro.svg"

export default function Intro () {
  const router = useRouter();

  return (
    <>
    <Container>
      <Title>
        먹은 음식의 탄단지를 기록하고<br/>
        건강한 삶을 유지해 보세요
      </Title>
      <IntroImg/>
      <Direction>
        일상에서 탄단지 비율을 어떻게 챙기고 계신가요?<br/>
        일반적인 영양성분 비율은 탄수화물 55~65%, 단백질 7~20%, 지방 15~30% 랍니다.<br/>
        다이어트 중이라면 탄수화물 50~60%, 단백질 20~30%, 지방 30~40%를 추천드려요.
      </Direction>
      <Button type="button" onClick={() => router.push("/login")}>
        탄단지 시작하기
      </Button>
      <GotoSignUp>
        계정이 없으신가요?
        <StyledLink href="/signup"> 회원가입 하기</StyledLink>
      </GotoSignUp>
    </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
`;

const Title = styled.div`
  margin: 0px 0px 30px 0px;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
`;

const Direction = styled.div`
  margin: 20px 0px 50px 0px;
  text-align: center;
  font-size: 16px;
  color: #000000;
  opacity: 0.4;
`;

const Button = styled.button`
  margin: 0px 0px 50px 0px;
  text-align: center;
  width: 130px;
  padding: 15px 5px;
  background-color: #4339F2;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  color: #ffffff;
`;

const GotoSignUp = styled.div`
  margin: 0px 0px 50px 0px;
`;

const StyledLink = styled.a`
  margin: 20px 0px 15px 0px;
  text-align: center;
  font-weight: 800;
  color: #4339F2;
  cursor: pointer;
`;