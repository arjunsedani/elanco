import * as React from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ApplyActive = React.forwardRef<SVGSVGElement, StyledSvgProps>(
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
          d="M0.834477 2.67689C1.72446 1.66318 3.10361 1.17687 4.46273 1.3975C4.53248 1.40714 4.59405 1.44645 4.63044 1.50458C5.09474 2.17234 5.40217 2.92965 5.53127 3.72366V5.10827L8.22994 7.75381C8.61892 8.13743 8.68078 8.72918 8.37899 9.17979C8.0772 9.6304 7.49199 9.82008 6.96877 9.63689V9.66458L5.08085 7.84612C4.79928 7.57592 4.34362 7.57675 4.0631 7.84796C3.78259 8.11918 3.78345 8.55808 4.06502 8.82827L6.70139 11.3667C6.77705 11.4396 6.86876 11.4951 6.96973 11.5292V20.7987C6.96973 21.0536 7.18426 21.2603 7.44889 21.2603H17.0322C17.5615 21.2603 17.9906 21.6735 17.9906 22.1833C17.9906 22.6931 17.5615 23.1064 17.0322 23.1064H6.49056C5.69665 23.1064 5.05306 22.4865 5.05306 21.7218V13.1317C5.05327 13.0633 5.02204 12.9984 4.96777 12.9544C3.30123 11.6049 1.66344 10.2775 1.69889 8.80058V4.64212C1.69865 4.6052 1.68946 4.56885 1.67206 4.53596L0.80956 2.93073C0.764174 2.84898 0.773988 2.749 0.834477 2.67689ZM18.4678 10.0606C18.8648 10.0606 19.1866 10.3705 19.1866 10.7529V11.2301C19.1868 11.2981 19.2179 11.3626 19.2719 11.4064C20.8521 12.6913 22.3356 13.9652 22.3011 15.3683V19.5267C22.3015 19.5636 22.3107 19.6 22.328 19.6329L23.1905 21.239C23.2343 21.3195 23.2245 21.4173 23.1656 21.4883C22.277 22.5017 20.8994 22.9887 19.5411 22.7695C19.4717 22.759 19.4105 22.7199 19.3734 22.6624C18.9101 21.9955 18.6027 21.2396 18.4726 20.447V19.1547C18.4724 19.0943 18.4476 19.0363 18.4036 18.9932L15.7739 16.4086C15.365 16.0051 15.3203 15.3755 15.6685 14.9222C16.0167 14.4689 16.6549 14.3259 17.175 14.5846L19.1578 16.5018C19.3384 16.6817 19.6056 16.7537 19.8569 16.6903C20.1082 16.6268 20.3043 16.4377 20.37 16.1956C20.4356 15.9535 20.3606 15.6962 20.1736 15.5224L17.819 13.2544C17.7742 13.2114 17.749 13.1529 17.7491 13.092V10.7529C17.7491 10.3705 18.0709 10.0606 18.4678 10.0606ZM12.2396 16.8775C12.6366 16.8775 12.9584 17.1875 12.9584 17.5698C12.9584 17.9522 12.6366 18.2621 12.2396 18.2621H8.88544C8.48848 18.2621 8.16669 17.9522 8.16669 17.5698C8.16669 17.1875 8.48848 16.8775 8.88544 16.8775H12.2396ZM14.1563 13.1233C14.5532 13.1233 14.875 13.4333 14.875 13.8157C14.875 14.198 14.5532 14.508 14.1563 14.508H8.88544C8.48848 14.508 8.16669 14.198 8.16669 13.8157C8.16669 13.4333 8.48848 13.1233 8.88544 13.1233H14.1563ZM18.7084 5.50796C18.7084 2.95896 16.563 0.892578 13.9167 0.892578C11.2703 0.892578 9.12502 2.95896 9.12502 5.50796C9.12502 8.05697 11.2703 10.1233 13.9167 10.1233C16.5617 10.1203 18.7052 8.0557 18.7084 5.50796ZM16.6479 4.35781L14.3844 7.26366C14.1587 7.55603 13.8111 7.73826 13.4337 7.76212C13.4021 7.76212 13.3704 7.76212 13.3379 7.76212C12.9928 7.76255 12.662 7.62952 12.4198 7.39289L11.2525 6.27135C11.0656 6.09761 10.9905 5.84024 11.0562 5.59816C11.1219 5.35608 11.318 5.16697 11.5693 5.10349C11.8205 5.04002 12.0878 5.11208 12.2684 5.29196L13.1309 6.12273C13.1796 6.17037 13.2475 6.195 13.3168 6.19012C13.3862 6.18483 13.45 6.15125 13.4921 6.09781L15.4979 3.52612C15.652 3.32825 15.904 3.22458 16.1589 3.25416C16.4138 3.28375 16.633 3.44209 16.7339 3.66955C16.8348 3.897 16.802 4.15902 16.6479 4.35689V4.35781Z"
          fill="#9BA4AB"
        />
      </StyledSVG>
    );
  },
);

export default ApplyActive;
