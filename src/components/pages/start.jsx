import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import recoImg from "../common/img/recomend.png";

function StartPage() {
  const navigate = useNavigate();

  const goToSign = () => {
    navigate("/SignIn");
  };

  const goToLogIn = () => {
    navigate("/LogIn"); 
  };

  return (
    <MainDiv>
      <BgImg>
        <PLogdiv>
          <TextLog>로그인</TextLog> 후 이용이 가능합니다
          <LogInButton onClick={goToLogIn}>로그인</LogInButton>
        </PLogdiv>
        <PSigndiv>
          아직 회원이 아니신가요?
          <SignUpButton onClick={goToSign}>가입하기</SignUpButton>
        </PSigndiv>
      </BgImg>
    </MainDiv>
  );
}

const LogInButton = styled.button`
  font-size: 18px;
  margin-left: 20px;
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background-color: #ff9900;
  color: #fff;
  border: none;
`;

const SignUpButton = styled.button`
  color: #fff;
  border-radius: 20px;
  background-color: #ff9900;
  border: none;
  width: 80px;
  padding: 10px;
`;

const TextLog = styled.div`
  color: #ff9900;
`;

const PSigndiv = styled.div`
  top: 540px;
  left: 820px;
  position: absolute;
  font-size: 20px;
`;

const PLogdiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
`;

const MainDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const BgImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${recoImg});
`;

export default StartPage;
