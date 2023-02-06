import { ReactElement } from "react";

import StatusWarningMedium from "@health/icons/icons/statusWarningMedium";
import { styled } from "@health/theme-common";

import NoRecords from "../../../assets/images/noRecords.svg";
import ServerError from "../../../assets/images/serverError.svg";

import { FallbackType } from "../../../models/enums";
import { theme } from "../../../utils/styleTheme";

import {
  ErrorHeading,
  ErrorSubHeading,
} from "../../ErrorMessage/styled.component";

const FallBackUIWrapper = styled.div<{ height: string }>`
  width: 100%;
  background: ${theme.color_white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.space_16} ${theme.space_0};
  height: ${({ height }) => height};
  border-radius: 0 0 ${theme.space_8} ${theme.space_8};
`;

const StyledImg = styled.img`
  padding-bottom: ${theme.space_32};
`;

const StyledStatusWarning = styled(StatusWarningMedium)`
  margin-bottom: 10px;
`;

export type FallBackUIV2Props = {
  errorType: FallbackType;
  errorTitle: string | ReactElement[];
  errorMessage: string;
  ctaButton?: ReactElement;
  height?: string;
  dataTestId?: string;
  className?: string;
};

const FallBackUiV2 = ({
  errorType,
  errorTitle,
  errorMessage,
  ctaButton,
  height = "100%",
  dataTestId = "tbl-fallback-ui",
  className,
}: FallBackUIV2Props) => {
  const fallBackImage = () => {
    switch (errorType) {
      case FallbackType.NO_DATA:
        return <StyledImg src={NoRecords} data-testid="img-no-records" />;
      case FallbackType.WARNING:
        return <StyledStatusWarning data-testid="img-warning" />;
      default:
        return <StyledImg src={ServerError} data-testid="img-server-error" />;
    }
  };

  return (
    <FallBackUIWrapper
      data-testid={dataTestId}
      height={height}
      className={className}
    >
      {fallBackImage()}
      <ErrorHeading>{errorTitle}</ErrorHeading>
      <ErrorSubHeading>{errorMessage}</ErrorSubHeading>
      {ctaButton}
    </FallBackUIWrapper>
  );
};

export default FallBackUiV2;
