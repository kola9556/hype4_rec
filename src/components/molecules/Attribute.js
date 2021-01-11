import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { media, constant } from "../../utils/index";
import Minus from "../atoms/Minus";
import Plus from "../atoms/Plus";
import AddModal from "./AddModal";

const VerticalLine = styled.div`
  width: ${constant.verticalLineWidth.phone};
  display: flex;
  padding: 2rem 0;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
  border-right: solid 1.5px ${({ theme }) => theme.greyFont};
  p {
    padding-right: 1rem;
    font-size: 1.3rem;
    font-weight: 300;
    color: ${({ theme }) => theme.greyFont};
  }

  ${media.tablet`
  width: ${constant.verticalLineWidth.tablet};
  `}
`;

const AttributeSection = styled.div`
  width: ${constant.sectionsWidth.phone};
  display: flex;
  align-items: center;

  ${media.desktop`
    width: ${constant.sectionsWidth.desktop};
`}
`;

const HorizontalLine = styled.div`
  height: 1.5px;
  border-top: 1.5px solid ${({ theme }) => theme.greyFont};
  flex-grow: 1;
`;

const AttributeWrapper = styled.div`
  width: ${constant.attributeWrapperWidth.phone};
  margin: 1rem 0;
  display: inline-block;
  background: linear-gradient(to top, rgba(95, 121, 246, 1), rgba(187, 131, 252, 1));
  border-radius: 0.5rem;
  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.05);
  padding-left: 0.8rem;

  span {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    margin: 0;
    padding: 2rem 0;
    padding-left: 1rem;
    font-weight: 800;
    font-size: 1.3rem;
  }

  ${media.tablet`
  width: ${constant.attributeWrapperWidth.tablet};
  `}
`;

const AdditionalAttributte = styled.div`
  p {
    width: 50%;
    border: 1px solid ${({ theme }) => theme.greyFont};
    border-radius: 0.4rem;
    padding: 0.7rem 0 0.7rem 0.4rem;
    margin-right: 0.5rem;
  }
`;

const AdAttrVerticalLine = styled(VerticalLine)`
  p {
    padding: 0;
    padding-right: 0rem;
    font-size: 1.3rem;
    font-weight: 300;
    color: ${({ theme }) => theme.greyFont};
    border: none;
  }
`;

const PositionedPlus = styled.div`
  margin-bottom: 2rem;
  display: block;
  position: relative;

  left: calc(${constant.verticalLineWidth.phone} - ${constant.plus.small.size} / 2);

  ${media.tablet`
  left: calc(${constant.verticalLineWidth.tablet} - ${constant.plus.small.size} / 2);
  `}
`;

const Attribute = ({
  name,
  id,
  additionals,
  buttonClick,
  additionalMinusClick,
  extended,
  addFormSubmit,
}) => {
  const atrRef = useRef(null);
  const verticalLine = useRef(null);
  const verticalLineAdditional = useRef(null);
  const [height, setHeight] = useState(0);

  const handleSettingHeight = (ref) => {
    setHeight(ref.current.offsetHeight);
  };
  useEffect(() => {
    //Makes vertical line the same height as AttributeWrapper
    handleSettingHeight(atrRef);
    verticalLine.current.style.height = `${height}px`;
  });

  const handleAdditionalPlusClick = () => {
    //Displays modal
    const myModal = document.querySelector(`.${id}`);
    myModal.style.display = "flex";
  };

  return (
    <>
      {extended ? (
        <>
          {/*With Additional attributes*/}
          <AddModal modalId={id} name={name} formSubmit={addFormSubmit} />
          <AttributeSection>
            <VerticalLine ref={verticalLine}>
              <p>And</p>
            </VerticalLine>
            <HorizontalLine />
            <AttributeWrapper ref={atrRef}>
              <span>
                <p>{name}</p>
                <Minus onClick={buttonClick} />
              </span>
              {additionals
                ? additionals.map((add) => (
                    <AdditionalAttributte key={add + Math.random()}>
                      <span>
                        <AdAttrVerticalLine ref={verticalLineAdditional}>
                          <p>Or</p>
                        </AdAttrVerticalLine>
                        <HorizontalLine />
                        <p>{add}</p>
                        <Minus onClick={() => additionalMinusClick(id, add, atrRef)} />
                      </span>
                    </AdditionalAttributte>
                  ))
                : null}

              {additionals.length ? (
                <AdditionalAttributte>
                  <span>
                    <PositionedPlus>
                      <Plus plusButtonClick={handleAdditionalPlusClick} id={id} />
                    </PositionedPlus>
                  </span>
                </AdditionalAttributte>
              ) : null}
            </AttributeWrapper>
          </AttributeSection>
        </>
      ) : (
        <>
          {/*Without additional attributes*/}
          <AttributeSection>
            <VerticalLine ref={verticalLine}>
              <p>And</p>
            </VerticalLine>
            <HorizontalLine />
            <AttributeWrapper ref={atrRef}>
              <span>
                <p>{name}</p>
                <Minus onClick={buttonClick} />
              </span>
            </AttributeWrapper>
          </AttributeSection>
        </>
      )}
    </>
  );
};

export default Attribute;
