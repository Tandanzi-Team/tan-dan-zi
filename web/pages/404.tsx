import styled from "styled-components";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import ErrorImg from "../public/error.svg"

export default function Custom404() {
  const router = useRouter();

  return (
    <>
    <Container>
      <ImageWrapper>
        <ErrorImg/>
      </ImageWrapper>
      <ContentsWrapper>
        <Title>
          아앗! 😨 문제가 발생했어요<br/>
          문제가 반복되면 알려주세요
        </Title>
        <ButtonWrapper>
          <ButtonToMain type="button" onClick={() => router.push("/main")}>
            메인으로
          </ButtonToMain>
          <ButtonToReport type="button">
            <Link
              href={"https://dev-ella.channel.io/home"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit"}}
            >
            오류 제보하기
            </Link>
          </ButtonToReport>
        </ButtonWrapper>
      </ContentsWrapper>
    </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
`;

const ImageWrapper = styled.div`
  margin: -500px 330px 0px 0px;
  width: 100px;
  height: 100px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin: 0px 0px 30px 0px;
  text-align: left;
  font-size: 2.5rem;
  font-weight: 700;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonToMain = styled.button`
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

const ButtonToReport = styled.button`
  margin: 0px 0px 50px 20px;
  text-align: center;
  width: 130px;
  padding: 15px 5px;
  border: 1px solid #4339F2;
  background-color: #ffffff;
  border-radius: 10px;
  font-size: 15px;
  color: #4339F2;
  cursor: pointer;
`;