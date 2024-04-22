"use client"

import styled from "styled-components";
import { useRouter } from "next/navigation";
import GoogleLogo from "../../public/google.svg"

export default function Login () {
  const router = useRouter();

  return (
    <>
    <Container>
      <Direction>
        오늘도 탄단지를 기록해 볼까요?
      </Direction>
      <Title>
        탄단지 로그인
      </Title>
      <InputWrapper>
        <InputTitle>이메일</InputTitle>
        <InputContainer placeholder="이메일 주소를 입력해 주세요" />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>비밀번호</InputTitle>
        <InputContainer placeholder="비밀번호를 입력해 주세요" type="password" />
      </InputWrapper>
      <Button type="button" onClick={() => router.push("/main")}>
        로그인
      </Button>
      <GoogleLoginButton>
        <GoogleLogoWrapper>
          <GoogleLogo />
        </GoogleLogoWrapper>
        구글로 로그인 하기
      </GoogleLoginButton>
      <GotoSignUp>
        계정이 없으신가요?
        <StyledLink href="/signup">회원가입 하기</StyledLink>
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
  padding: 1.25rem;
`;

const Title = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #212B36;
`;

const Direction = styled.div`
  text-align: center;
  margin-bottom: 0.3rem;
  font-size: 1rem;
  color: #8A92A6;
`;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 25rem;
  margin-bottom: 1.8rem;
`;

const InputTitle = styled.div`
  text-align: left;
  font-size: 1rem;
  color: #000000;
  margin-bottom: 10px;
`;

const InputContainer = styled.input`
  width: 100%;
  padding: 0.9rem;
  border: 1px solid #E2E8F0;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  background-color: #ffffff;

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #64748B;
    font-size: 0.9rem;
    font-weight: 200;
    opacity: 0.5;
  }

  &::-ms-input-placeholder { /* Microsoft Edge */
    color: #64748B;
    font-size: 0.9rem;
    font-weight: 200;
    opacity: 0.5;
  }
  
  &:focus {
    border-color: transparent;
    outline: 1px solid #4339F2;
  }
`;

const Button = styled.button`
  width: 80%;
  max-width: 400px;
  padding: 0.9rem 0px;
  margin: 1.25rem 0rem;
  background-color: #4339F2;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  font-size: 15px;
  color: #ffffff;
  border: none;
`;

const GoogleLoginButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2rem;
  background-color: #EFF4FB;
  border: 1px solid #E2E8F0;
  color: #64748B;
`;

const GoogleLogoWrapper = styled.div`
  margin-right: 10px;
  background-color: #EFF4FB;
`;

const GotoSignUp = styled.div`
  text-align: center;
  margin-top: 1.25rem;
  color: #232D42;
`;

const StyledLink = styled.a`
  margin-left: 5px;
  font-weight: 700;
  color: #4339F2;
  cursor: pointer;
  text-decoration: none;
`;
