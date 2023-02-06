import { colors, styled } from "@health/theme-common";

import { theme } from "../../utils/styleTheme";

export const ImageContainer = styled.div`
  text-align: center;
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
  justify-content: center;
  align-items: center;
`;

export const ErrorHeading = styled.h6`
  font-family: inherit;
  text-align: center;
  padding: 0 24px;
  margin: 0;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: ${colors.color_slate70};
`;

export const ErrorSubHeading = styled.span`
  font-family: inherit;
  text-align: center;
  padding: 0 24px;
  margin-top: ${theme.space_4};
  font-size: 16px;
  line-height: 20px;
  font-weight: ${theme.fontWeightRegular};
  color: ${colors.color_slate50};
`;
