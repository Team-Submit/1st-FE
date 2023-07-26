import { styled } from "styled-components";

function MainPage() {
  return (
    <MainContainer>
      <TopBgTicket>
        <CircleWarp>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
        </CircleWarp>
      </TopBgTicket>
      <BottomBgTicket>
        <CircleWarp>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
        </CircleWarp>
      </BottomBgTicket>
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

const TopBgTicket = styled.b`
  display: flex;
  background: #ffd670;
  width: 1200px;
  height: 400px;
  margin-top: 80px;
  border-radius: 10px 0px 0px 10px;
`;

const BottomBgTicket = styled.b`
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
  justify-content: space-evenly;
  margin-left: -18px;
`;

const Circle = styled.div`
  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export default MainPage;
