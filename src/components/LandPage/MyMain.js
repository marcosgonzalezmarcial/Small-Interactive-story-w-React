import React from "react";
import styled from "styled-components";

const MyMainStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.8fr 1.2fr;
  gap: 0px 0px;
  grid-template-areas:
    "text-area"
    "confirm-button";
  grid-area: Main;
  height: 70vh;
`;

export default function MyMain(props) {
  return <MyMainStyled>{props.children}</MyMainStyled>;
}
