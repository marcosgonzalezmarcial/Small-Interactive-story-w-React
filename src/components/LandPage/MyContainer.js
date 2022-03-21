import React from "react";
import styled from "styled-components";
import imgFondo from "../../assets/LandPageBackground.jpg";

const MyContainerStyled = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 0.7fr 1.3fr;
  gap: 0px 0px;
  grid-template-areas:
    "Header"
    "Main";
  width: 100.2%;
  height: 92.1%;
  background-image: url(${imgFondo});
`;

export default function MyContainer(props) {
  return (
    <MyContainerStyled className="container primerHijodeApp">
      {props.children}
    </MyContainerStyled>
  );
}
