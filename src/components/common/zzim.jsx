import React, { useState } from 'react';
import styled from 'styled-components';
import heartFilled from '../src/img/heart-filled.png';
import heartOutline from '../src/img/heart-outline.png';

const HeartButton = styled.button`
  width: 24px;
  height: 22px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const HeartIcon = styled.img`
  width: 24px;
  height: 22px;
`;

const App = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Toggle the clicked state
  };

  return (
    <div>
      <HeartButton onClick={handleClick}>
        <HeartIcon src={clicked ? heartFilled : heartOutline} alt="Heart" />
      </HeartButton>
    </div>
  );
};

export default App;
