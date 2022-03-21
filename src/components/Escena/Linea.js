import styled from "styled-components";
const AuxP = styled.p`
  padding: 0.9rem;
  border: 2px solid black;
  border-radius: 25px;
  margin: 15px 30px;
  text-align: center;
  background-color: ${(props) => (props.activo === true ? "pink" : "white")};
`;

export default function Linea(props) {
  return <AuxP activo={props.activo}>{props.texto}</AuxP>;
}
