import React from "react";
import styled from "styled-components";

const PlusWrapper = styled.button`
  width: ${({ small }) => (small ? "2.2rem" : "3.5rem")};
  height: ${({ small }) => (small ? "2.2rem" : "3.5rem")};
  outline: none;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(17, 215, 214);
  background: linear-gradient(0deg, rgba(17, 215, 214, 1) 0%, rgba(131, 242, 156, 1) 87%);
  box-shadow: 2px 6px 16px -3px rgba(97, 235, 198, 1);

  div {
    width: 50%;
    height: 8%;
    background: white;
    border-radius: 0.1rem;
    div {
      width: 100%;
      height: 100%;
      background: white;
      transform: rotate(90deg);
      border-radius: 0.1rem;
    }
  }
`;

const Background = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background: white;
  box-shadow: 2px 5px 16px -5px rgba(97, 235, 198, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Plus = ({ small, withBackground, plusButtonClick }) => {
  return (
    <>
      {withBackground ? (
        <Background>
          <PlusWrapper onClick={plusButtonClick} small={small}>
            <div>
              <div />
            </div>
          </PlusWrapper>
        </Background>
      ) : (
        <PlusWrapper onClick={plusButtonClick} small={small}>
          <div>
            <div />
          </div>
        </PlusWrapper>
      )}
    </>
  );
};

export default Plus;
