import React from "react";
import styled from "styled-components";

const MyButtonStyled = styled.button`
  background-color: #34c293da;
  border: 2px solid #518651;
  color: #2c352c;
  padding: 2rem 3rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
  margin: 4px 2px;
  margin-bottom: 12rem;
  border-radius: 50%;
  box-shadow: 3px 3px 3px 3px black;
  cursor: pointer;
  :hover {
    background-color: #34c2a3;
  }
`;

export default function MyButton(props) {
  return (
    <MyButtonStyled onClick={props.onClick}>{props.children}</MyButtonStyled>
  );
}
