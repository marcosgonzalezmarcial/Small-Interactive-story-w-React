import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    height: 100vh;
    
}

.flex-container {
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
}

.section-flex-item {
  order: 0;
  flex: 1 1 auto;
  align-self: stretch;
}

.buttons {
  margin-top: 5px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: flex-start;
}

.styled-button {
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
}
`;

export default GlobalStyles;
