import React from "react";
import styled from "styled-components";

const MinusWrapper = styled.button`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1.5rem;
  outline: none;
  border: none;
  border-radius: 50%;
  background: rgb(235, 50, 82);
  background: linear-gradient(0deg, rgba(228, 70, 95, 1) 0%, rgba(228, 138, 153, 1) 100%);
  box-shadow: 2px 12px 16px -2px rgba(237, 95, 104, 0.53);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 75%;
    height: 15%;
    background: white;
  }
`;

const Minus = ({ onClick }) => {
  return (
    <MinusWrapper onClick={onClick}>
      <div />
    </MinusWrapper>
  );
};

export default Minus;
