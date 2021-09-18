import React from "react";
import styled from "styled-components";

const MyTextAreaStyled = styled.h3`
  grid-area: "text-area";
  order: 0;
  flex: 0.8 1 auto;
  align-self: center;
  text-align: center;
  font-size: 2rem;
  margin: 0 25%;
  line-height: 50px;
  letter-spacing: 3px;
  text-shadow: 0.5px 0.5px #2d0080a0;
  color: #7829e05f;
  padding-bottom: 4rem;
`;

export default function MyTextArea(props) {
  return <MyTextAreaStyled>{props.children}</MyTextAreaStyled>;
}
