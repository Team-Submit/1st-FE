import { styled } from "styled-components";


function MainHeader() {
    return (
      <>
        <header>
          <TopLine></TopLine>
          <BottomLine></BottomLine>
        </header>
        <Nav>
          <LeftBody>
            <LogoSet>
              <TopLogo>
                MO<TopLogoColorizeText>vie</TopLogoColorizeText>
                <TopLogoColorizeText>ster</TopLogoColorizeText>
              </TopLogo>
              <BottomLogo>MOMA</BottomLogo>
            </LogoSet>
            <ProfileSet>
              <ProfileImage></ProfileImage>
              <ProfileTextSet>
                <ProfileName>
                  이름 들어갈 곳 <ResizeText>님</ResizeText>
                </ProfileName>
                <EnglishName>Enter The Name</EnglishName>
                <LogOutButton>로그아웃</LogOutButton>
              </ProfileTextSet>
            </ProfileSet>
            <AddSeparatingLine></AddSeparatingLine>
            <LickButtonSet>
              <FeaturedMoviesOfTheMonthBtn>
                이달의 영화 추천
              </FeaturedMoviesOfTheMonthBtn>
              <TheaterAroundBtn>주변 극장</TheaterAroundBtn>
              <ScheduledToBeReleasedBtn>개봉 예정</ScheduledToBeReleasedBtn>
              <ShowingBtn>상영 중</ShowingBtn>
              <WantBtn>찜</WantBtn>
            </LickButtonSet>
          </LeftBody>
        </Nav>
      </>
    );
  }
  
  export default MainHeader;
  
  const TopLine = styled.div`
    background-color: #ff9900;
    width: 100%;
    height: 20px;
  `;
  
  const BottomLine = styled.div`
    position: absolute;
    top: 50px;
    left: 80px;
    background-color: #d9d9d9;
    width: 1754px;
    height: 2px;
  `;
  
  const LeftBody = styled.div`
    width: 547px;
    height: 100%;
    padding-top: 80px;
  `;
  
  const Nav = styled.nav`
    display: flex;
    align-items: center;
  `;
  
  const LogoSet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  const TopLogo = styled.div`
    font-size: 30px;
    padding-right: 203px;
    display: flex;
    line-height: 0.1px;
    color: #ff9900;
  `;
  
  const BottomLogo = styled.div`
    font-size: 96px;
    padding-right: 70px;
    color: #ff9900;
    font-weight: bold;
  `;
  const TopLogoColorizeText = styled.span`
    color: #fcbe61;
  `;
  
  const ProfileSet = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px 0 40px 55px;
  `;
  
  const ProfileImage = styled.div`
    width: 160px;
    height: 160px;
    border: 2px solid #d9d9d9;
    border-radius: 20px;
    background-color: white; // image 넣을 것
  `;
  
  const ProfileTextSet = styled.div`
    line-height: 40px;
    padding: 13px 20px;
  `;
  
  const ProfileName = styled.div`
    font-size: 32px;
  `;
  
  const ResizeText = styled.span`
    font-size: 27px;
  `;
  
  const EnglishName = styled.div`
    font-size: 20px;
    color: #888282;
    margin-top: -8px;
    padding-left: 4px;
  `;
  
  const LogOutButton = styled.button`
    width: 125px;
    height: 37px;
    border-radius: 8px;
    border: 2px solid #ffd089;
    font-size: 15px;
    color: #ff9900;
    margin: 6px 0 0 4px;
    background-color: white;
  `;
  
  const AddSeparatingLine = styled.div`
    width: 410px;
    height: 2px;
    background-color: #d9d9d9;
    position: absolute;
    left: 65px;
  `;
  
  const LickButtonSet = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 73px;
  `;
  
  const FeaturedMoviesOfTheMonthBtn = styled.button`
    width: 200px;
    height: 51px;
    border-radius: 20px;
    border: 2px solid #ff9900;
    font-size: 17px;
    background-color: white;
    margin: 8px 0;
    color: #ff9900;
    font-weight: bold;
    margin-top: 30px;
    &:hover {
      box-shadow: 0 0 15px #c5c5c5;
      transform: translateY(-4px);
    }
    &:active {
      color: white;
      background-color: #ff9900;
      transform: translateY(-4px);
    }
  `;
  
  const TheaterAroundBtn = styled.button`
    width: 145px;
    height: 51px;
    border-radius: 20px;
    border: 2px solid #ff9900;
    font-size: 17px;
    background-color: white;
    margin: 8px 0;
    color: #ff9900;
    font-weight: bold;
    &:hover {
      box-shadow: 0 0 15px #c5c5c5;
      transform: translateY(-4px);
    }
    &:active {
      color: white;
      background-color: #ff9900;
      transform: translateY(-4px);
    }
  `;
  
  const ScheduledToBeReleasedBtn = styled.button`
    width: 145px;
    height: 51px;
    border-radius: 20px;
    border: 2px solid #ff9900;
    font-size: 17px;
    background-color: white;
    margin: 8px 0;
    color: #ff9900;
    font-weight: bold;
    &:hover {
      box-shadow: 0 0 15px #c5c5c5;
      transform: translateY(-4px);
    }
    &:active {
      color: white;
      background-color: #ff9900;
      transform: translateY(-4px);
    }
  `;
  
  const ShowingBtn = styled.button`
    width: 121px;
    height: 51px;
    border-radius: 20px;
    border: 2px solid #ff9900;
    font-size: 17px;
    background-color: white;
    margin: 8px 0;
    color: #ff9900;
    font-weight: bold;
    &:hover {
      box-shadow: 0 0 15px #c5c5c5;
      transform: translateY(-4px);
    }
    &:active {
      color: white;
      background-color: #ff9900;
      transform: translateY(-4px);
    }
  `;
  
  const WantBtn = styled.button`
    width: 100px;
    height: 51px;
    border-radius: 20px;
    border: 2px solid #ff9900;
    font-size: 17px;
    background-color: white;
    margin: 8px 0;
    color: #ff9900;
    font-weight: bold;
    &:hover {
      box-shadow: 0 0 15px #c5c5c5;
      transform: translateY(-4px);
    }
    &:active {
      color: white;
      background-color: #ff9900;
      transform: translateY(-4px);
    }
  `;
  