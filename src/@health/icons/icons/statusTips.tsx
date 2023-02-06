import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const StatusTips = React.forwardRef<SVGSVGElement, StyledSvgProps>(
  (props, ref) => {
    return (
      <StyledSVG
        ref={ref}
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          d="M13.875 21.5C14.0485 21.5046 14.2098 21.5943 14.3012 21.7419C14.3925 21.8895 14.4007 22.0738 14.323 22.229L13.987 22.9C13.6487 23.5764 12.9563 24.0027 12.2 24H11.8C11.0429 24.0016 10.3505 23.5732 10.014 22.895L9.67799 22.224C9.60032 22.069 9.60849 21.8848 9.69956 21.7373C9.79064 21.5898 9.95162 21.5 10.125 21.5H13.875ZM12 5.99999C14.839 5.99789 17.3504 7.83993 18.2012 10.5484C19.0521 13.257 18.0452 16.2042 15.715 17.826C15.5803 17.9194 15.4999 18.073 15.5 18.237V19C15.5 19.5523 15.0523 20 14.5 20H9.49999C8.94771 20 8.49999 19.5523 8.49999 19V18.238C8.50005 18.074 8.41971 17.9204 8.28499 17.827C5.96084 16.2019 4.95852 13.2577 5.80837 10.5521C6.65823 7.84651 9.16407 6.0042 12 5.99999ZM23 12C23.5523 12 24 12.4477 24 13C24 13.5523 23.5523 14 23 14H21C20.4477 14 20 13.5523 20 13C20 12.4477 20.4477 12 21 12H23ZM3 12C3.55228 12 4 12.4477 4 13C4 13.5523 3.55228 14 3 14H0.999999C0.447715 14 0 13.5523 0 13C0 12.4477 0.447715 12 0.999999 12H3ZM19.778 3.808C20.1685 3.41761 20.8015 3.41761 21.192 3.808C21.5824 4.1985 21.5824 4.83149 21.192 5.22199L19.425 6.98999C19.1739 7.24995 18.8021 7.3542 18.4525 7.26269C18.1028 7.17117 17.8298 6.89813 17.7383 6.5485C17.6468 6.19887 17.751 5.82707 18.011 5.57599L19.778 3.808ZM2.82018 3.82018C3.20591 3.43444 3.82962 3.42902 4.222 3.808L5.98999 5.57599C6.36896 5.96837 6.36354 6.59208 5.97781 6.97781C5.59208 7.36354 4.96837 7.36896 4.57599 6.98999L2.808 5.22199C2.42903 4.82962 2.43444 4.20591 2.82018 3.82018ZM12 0C12.5523 0 13 0.447715 13 0.999999V3.5C13 4.05228 12.5523 4.49999 12 4.49999C11.4477 4.49999 11 4.05228 11 3.5V0.999999C11 0.447715 11.4477 0 12 0Z"
          fill="#12CA98"
        />
      </StyledSVG>
    );
  },
);

export default StatusTips;
