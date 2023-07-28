import { styled } from "styled-components";
import poster from "../../image/Group 106.png";

function MainPage() {
  const Circles = Array.from({ length: 5 }, (_, index) => (
    <Circle key={index} />
  ));
  const Posters = Array.from({ length: 4 }, (_, index) => (
    <Poster key={index} src={poster} alt={`Poster ${index + 1}`} />
  ));
  return (
    <MainContainer>
      <TopBgTicket>
        <CircleWarp>{Circles}</CircleWarp>
        {Posters}
      </TopBgTicket>
      <BottomBgTicket>
        <CircleWarp>{Circles}</CircleWarp>
        {Posters}
      </BottomBgTicket>
    </MainContainer>
  );
}

const Poster = styled.img`
  margin: 30px 0px 10px 80px;
  width: 200px;
  height: 350px;
`;

const MainContainer = styled.div`
  margin-top: -450px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

const TopBgTicket = styled.div`
  display: flex;
  background: #ffd670;
  width: 1200px;
  height: 400px;
  margin-top: 80px;
  border-radius: 10px 0px 0px 10px;
`;

const BottomBgTicket = styled.div`
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
