import { CSSProperties, ReactElement, ReactNode } from "react";

import {
  ErrorHeading,
  ErrorMessageContainer,
  ErrorSubHeading,
  ImageContainer,
} from "./styled.component";

export interface ErrorMessageProps {
  errorLogo: ReactNode;
  heading: string | ReactElement[];
  subHeading: string | ReactElement[];
  styles?: CSSProperties;
  headingStyles?: CSSProperties;
  subHeadingStyles?: CSSProperties;
  contentStyles?: CSSProperties;
  className?: string;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const {
    errorLogo,
    heading,
    subHeading,
    styles,
    headingStyles,
    subHeadingStyles,
    className,
    contentStyles,
  } = props;

  return (
    <div
      data-testid="error-message"
      className={className}
      style={{ ...styles }}
    >
      <ImageContainer data-testid="icn-error-logo">{errorLogo}</ImageContainer>
      <ErrorMessageContainer style={contentStyles}>
        <ErrorHeading style={headingStyles}>{heading}</ErrorHeading>
        <ErrorSubHeading style={subHeadingStyles}>{subHeading}</ErrorSubHeading>
      </ErrorMessageContainer>
    </div>
  );
};

export default ErrorMessage;
