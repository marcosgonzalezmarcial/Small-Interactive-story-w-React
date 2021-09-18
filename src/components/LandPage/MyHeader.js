import React from "react";
import styled from "styled-components";

const MyHeaderStyled = styled.h1`
  order: 0;
  flex: 0.8 1 auto;
  align-self: center;
  text-align: center;
  font-size: 6rem;
  margin-top: 6rem;
  color: #f06fe5;
  font-family: cursive;
`;

export default function MyHeader(props) {
  return <MyHeaderStyled>{props.children}</MyHeaderStyled>;
}
