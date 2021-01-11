import { media, constant, theme } from "../../utils/index";
import styled from "styled-components";

const LabelWrapper = styled.div`
  width: ${constant.labelWidth.phone};
  padding: ${constant.labelPadding.phone};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.backgroundBlue};
  background: ${`linear-gradient(0deg, ${theme.backgroundBlue} 10%, ${theme.backgroundViolet} 100%)`};
  border-radius: 5px;

  p {
    margin: 0;
    font-size: ${constant.labelFont.phone};
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 5px rgba(89, 89, 89, 1);
  }

  ${media.tablet`
      width: ${constant.labelWidth.tablet};
      padding: ${constant.labelPadding.tablet};

      p{
        font-size: ${constant.labelFont.tablet};
      }
  `}
`;

const Label = ({ children }) => (
  <LabelWrapper>
    <p>{children}</p>
  </LabelWrapper>
);

export default Label;
