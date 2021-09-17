import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

export default function LeftButton(props) {
  const MyButton = styled.button`
    order: 0;
    flex: 1 1 auto;
    align-self: stretch;
    padding: 1.3rem;
    font-size: 25px;
  `;
  return <MyButton className="left-button">Anterior</MyButton>;
}
