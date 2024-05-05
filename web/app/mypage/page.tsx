"use client"

import styled from "styled-components";
import Image from 'next/image';
import { useRouter } from "next/navigation";

import NavigatonBar from "../../components/NavigatonBar";
import CameraIcon from "../../public/camera.svg"

export default function MyPage () {
  const router = useRouter();

  return (
    <>
    <Container>
      <NavigatonBar/>
      <ProfileImage>
        <Image
          src="/profile.png"
          alt="Profile Image"
          layout="fill"
          objectFit="cover"
        />
      </ProfileImage>
      <ImageEditButton>
        <CameraIcon/>
      </ImageEditButton>
      <UserName>
        최연수
      </UserName>
      <InputWrapper>
        <InputTitle>이메일</InputTitle>
        <InputContainer placeholder="happymondaysu@gmail.com" />
      </InputWrapper>
      <InputWrapper>
        <InputTitleWrapper>
          <InputTitle>이름</InputTitle>
          <Necessary>*</Necessary>
        </InputTitleWrapper>
        <InputContainer placeholder="이름을 입력해 주세요" />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>나이</InputTitle>
        <InputContainer placeholder="생년월일을 선택해 주세요" />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>성별</InputTitle>
        <InputContainer placeholder="성별을 선택해 주세요" />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>신장(키)</InputTitle>
        <InputContainer placeholder="신장을 입력해 주세요" />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>비밀번호 변경</InputTitle>
        <InputContainer placeholder="새 비밀번호를 입력해 주세요" type="password" />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>비밀번호 확인</InputTitle>
        <InputContainer placeholder="새 비밀번호를 다시 입력해 주세요" type="password" />
      </InputWrapper>
      <Button type="button" onClick={() => router.push("/login")}>
        회원정보 수정
      </Button>
      <Logout>
        로그아웃
      </Logout>
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

const ProfileImage = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 30px 0px 15px 0px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #E2E8F0;
`;

const ImageEditButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translate(150%, -150%);
  width: 30px;
  height: 30px;
  background-color: #4339F2; 
  border-radius: 50%;
  cursor: pointer;
`;

const UserName = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin: -30px 0px 30px 0px;
  color: #212B36;
`;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 25rem;
  margin-bottom: 1.8rem;
`;

const InputTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputTitle = styled.div`
  text-align: left;
  font-size: 1rem;
  color: #000000;
  margin-bottom: 10px;
`;

const Necessary = styled.div`
  text-align: left;
  font-size: 1rem;
  color: #FF3A29;
  margin: 0px 0px 10px 2px;
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
  margin: 1rem 0rem;
  background-color: #4339F2;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  font-size: 15px;
  color: #ffffff;
  border: none;
`;

const Logout = styled.div`
  text-align: center;
  margin: 1rem 0rem 5rem 0rem;
  font-size: 15px;
  color: #8A92A6;
  text-decoration: underline;
  cursor: pointer;
`;
