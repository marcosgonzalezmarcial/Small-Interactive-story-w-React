import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  order: 0;
  flex: 1 1 auto;
  align-self: stretch;
  padding: 1.3rem;
  font-size: 25px;
  margin-right: 5px;
`;

export default function RightButton(props) {
  return (
    <MyButton onClick={props.sumar} className="rightButton">
      Siguiente
    </MyButton>
  );
}
