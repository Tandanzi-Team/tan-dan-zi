"use client"

import styled from "styled-components";
import Image from 'next/image';
import { useRouter } from "next/navigation";

import Logo from "../public/logo.svg";
import Main from "../public/main.svg";
import Record from "../public/record.svg";
import Detail from "../public/detail.svg";

export default function NavigatonBar () {
  const router = useRouter();

  return (
    <Container>
      <IconWrapper>
        <Logo
          onClick={() => router.push("/")}
        />
      </IconWrapper>
      <Border/>
      <IconWrapper>
        <Main
          onClick={() => router.push("/main")}
        />
      </IconWrapper>
      <IconWrapper>
        <Record
          onClick={() => router.push("/record")}
        />
      </IconWrapper>
      <IconWrapper>
        <Detail
          onClick={() => router.push("/detail")}
        />
      </IconWrapper>
      <ProfileImage>
        <Image
          src="/profile.png"
          alt="Profile Image"
          layout="fill"
          objectFit="cover"
          onClick={() => router.push("/mypage")}
        />
      </ProfileImage>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  width: 100px;
  padding: 1.25rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #FFFFFF;
  border-radius: 0px 20px 20px 0px;
  z-index: 1000;
`;

const IconWrapper = styled.div`
  margin: 30px;
  cursor: pointer;
`;

const Border = styled.div`
  margin: 20px;
  border: .03rem solid #dcdcdc;
  width: 50px;
`;

const ProfileImage = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin: 600px 0px 0px 0px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #E2E8F0;
  cursor: pointer;
`;
