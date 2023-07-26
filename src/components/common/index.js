import { styled } from "styled-components";

function MainPage() {
  return (
    <MainContainer>
      <BgTicket>
        <CircleWarp>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
        </CircleWarp>
      </BgTicket>
      <BgTicket>
        <CircleWarp>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
        </CircleWarp>
      </BgTicket>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

const BgTicket = styled.b`
  display: flex;
  background: #ffd670;
  width: 1200px;
  height: 400px;
  margin-top: 50px;
  border-radius: 10px 0px 0px 10px;
`;

const CircleWarp = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -15px;
`;

const Circle = styled.div`
  background: #fff;
  width: 40px;
  height: 40px;
  margin-top: 32px;
  border-radius: 50%;
`;

export default MainPage;
