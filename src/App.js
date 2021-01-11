import React from "react";
import styled from "styled-components";
import Graph from "./components/organisms/Graph";
import MainTemplate from "./components/templates/MainTemplate";

const Alignator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 3rem;
    width: 80%;
    text-align: center;
  }
`;

const App = () => {
  return (
    <MainTemplate>
      <Alignator>
        <h1>Zadanie rekrutacyjne Hype4</h1>
        <Graph />
      </Alignator>
    </MainTemplate>
  );
};

export default App;
