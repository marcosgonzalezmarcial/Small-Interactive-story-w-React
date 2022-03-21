import React from "react";
import styled from "styled-components";

const MyHeaderContainerStyled = styled.div`
  grid-area: "Header";
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: flex-start;
  height: 100%;
`;

export default function MyHeaderContainer(props) {
  return <MyHeaderContainerStyled>{props.children}</MyHeaderContainerStyled>;
}
