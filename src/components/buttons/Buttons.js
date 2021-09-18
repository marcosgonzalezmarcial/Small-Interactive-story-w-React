import React from "react";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";
import styled from "styled-components";

export default function Buttons() {
  const MyButtons = styled.div`
    margin-top: 5px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: flex-start;
  `;
  return (
    <MyButtons>
      <LeftButton></LeftButton>
      <RightButton></RightButton>
    </MyButtons>
  );
}
