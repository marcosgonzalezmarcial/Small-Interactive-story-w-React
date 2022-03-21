import React from "react";
import styled from "styled-components";

const ConfirmButtonAreaStyled = styled.div`
  grid-area: "confirm-button";
  order: 0;
  flex: 0.8 1 auto;
  align-self: center;
  text-align: center;
`;

export default function ConfirmButtonArea(props) {
  return <ConfirmButtonAreaStyled>{props.children}</ConfirmButtonAreaStyled>;
}
