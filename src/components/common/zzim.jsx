import React, { useState } from "react";
import styled from "styled-components";
import heartFilled from "../common/img/heart-filled.png";
import heartOutline from "../common/img/heart-outline.png";

const HeartButton = styled.button`
  position: absolute;
  margin-left: 80px;
  margin-top: -30px;
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

const ZZim = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Toggle the clicked state
    if (!clicked) alert("찜이 되었습니다");
    else alert("찜이 취소되었습니다");
  };

  return (
    <div>
      <HeartButton onClick={handleClick}>
        <HeartIcon src={clicked ? heartFilled : heartOutline} alt="Heart" />
      </HeartButton>
    </div>
  );
};

export default ZZim;
