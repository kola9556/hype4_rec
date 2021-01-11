import React from "react";
import styled from "styled-components";
import { media, constant } from "../../utils/index";
import Plus from "../atoms/Plus";

const FirstSecWrapper = styled.div`
  width: ${constant.sectionsWidth.phone};

  ${media.desktop`
      width: ${constant.sectionsWidth.desktop};
  `}
`;

const VerticalLine = styled.div`
  width: ${constant.verticalLineWidth.phone};
  padding: 2rem 0;
  display: flex;
  justify-content: flex-end;
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

const FirstLine = styled(VerticalLine)`
  height: 45px;
  padding: 0;
`;

const PositionedPlus = styled.div`
  display: block;
  position: relative;

  left: calc(${constant.verticalLineWidth.phone} - ${constant.plus.size} / 2);

  ${media.tablet`
  left: calc(${constant.verticalLineWidth.tablet} - ${constant.plus.size} / 2);
  `}
`;

const BottomSection = ({ plusWithBackground, plusButtonClick }) => (
  <FirstSecWrapper>
    <FirstLine />
    <PositionedPlus>
      <Plus withBackground={plusWithBackground} plusButtonClick={plusButtonClick} />
    </PositionedPlus>
  </FirstSecWrapper>
);

export default BottomSection;
