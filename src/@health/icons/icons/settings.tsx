import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const Settings = forwardRef(
  (props: StyledSvgProps, ref: Ref<SVGSVGElement>) => {
    return (
      <StyledSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ref={ref}
        width="1.5em"
        height="1.5em"
        useFillColorOnly
        {...props}
      >
        <path
          d="M12.33 21.75h-.66c-.5 0-.99-.17-1.38-.48-.39-.31-.68-.74-.8-1.23a.923.923 0 00-.21-.42.814.814 0 00-.34-.24.986.986 0 00-.41-.07c-.14 0-.28.05-.4.13-.47.28-.98.39-1.47.33s-.96-.29-1.32-.64l-.47-.47a2.259 2.259 0 01-.34-2.75c.1-.17.14-.3.15-.44s-.01-.28-.07-.41a.838.838 0 00-.25-.34.872.872 0 00-.37-.19c-.53-.13-.97-.42-1.28-.81s-.48-.89-.48-1.38v-.66c0-.5.17-.99.48-1.38.31-.39.74-.68 1.23-.8.19-.05.31-.11.42-.21a.94.94 0 00.25-.34.96.96 0 00.07-.41.824.824 0 00-.13-.4c-.28-.47-.39-.98-.33-1.48s.29-.96.64-1.32l.47-.47a2.259 2.259 0 012.76-.33c.15.09.29.13.43.15.14.01.28-.01.41-.07.13-.05.25-.14.34-.25.09-.11.16-.23.19-.37.13-.53.42-.97.81-1.28.39-.31.88-.48 1.38-.48h.66c.5 0 .99.17 1.38.48.39.31.68.74.8 1.23.05.19.11.31.2.42.09.11.21.19.34.25.13.05.27.08.41.07.14-.01.28-.05.4-.13.47-.28.99-.39 1.47-.33.5.06.96.29 1.32.64l.46.46c.35.36.58.83.64 1.32.06.5-.05 1.01-.31 1.44-.09.15-.14.29-.15.43-.01.14.01.29.07.42.05.13.14.25.25.34.11.09.23.16.37.19.53.13.97.42 1.28.81.31.39.48.89.48 1.39v.66c0 .5-.17.99-.48 1.38s-.74.68-1.23.8h-.05c-.14.05-.27.11-.37.21-.11.09-.19.21-.24.34a.96.96 0 00-.07.41c0 .14.05.28.13.4.28.47.39.98.33 1.48-.06.49-.29.96-.64 1.32l-.47.47a2.259 2.259 0 01-2.75.34.924.924 0 00-.86-.08c-.13.05-.25.14-.34.25s-.16.24-.19.37c-.13.53-.42.97-.81 1.28-.39.31-.88.48-1.38.48zM8.6 17.81c.31 0 .63.06.92.18.34.14.66.37.9.65.25.29.42.63.51.99a.755.755 0 00.74.62h.66a.763.763 0 00.73-.57c.1-.41.28-.75.52-1.04.24-.28.55-.51.9-.65s.73-.21 1.1-.18c.38.03.74.14 1.06.34.19.11.35.15.52.13.17-.02.32-.1.44-.21l.47-.47a.73.73 0 00.21-.44.79.79 0 00-.1-.48c-.22-.36-.33-.73-.36-1.1-.03-.37.03-.75.18-1.1.14-.34.37-.66.65-.9.28-.25.62-.42.99-.51h.04a.87.87 0 00.42-.28c.1-.13.16-.29.16-.46v-.66a.763.763 0 00-.57-.73c-.41-.1-.75-.28-1.04-.52a2.39 2.39 0 01-.65-.9 2.6 2.6 0 01-.18-1.1c.03-.37.14-.74.34-1.06.11-.18.15-.35.13-.52a.79.79 0 00-.21-.44l-.46-.46a.73.73 0 00-.44-.21.805.805 0 00-.48.1c-.36.22-.73.33-1.1.36-.38.03-.75-.03-1.1-.18-.35-.14-.66-.37-.9-.65s-.42-.62-.51-.98a.79.79 0 00-.28-.46c-.13-.1-.3-.16-.46-.16h-.66a.763.763 0 00-.73.57c-.1.41-.28.75-.52 1.04a2.42 2.42 0 01-2 .83c-.37-.03-.74-.15-1.06-.34a.795.795 0 00-.52-.13.79.79 0 00-.44.21l-.46.46a.73.73 0 00-.21.44c-.02.17.02.33.1.48.22.36.33.73.36 1.1.03.37-.03.75-.18 1.1a2.4 2.4 0 01-1.64 1.41.79.79 0 00-.46.28c-.1.13-.16.3-.16.46v.66a.763.763 0 00.57.73 2.39 2.39 0 011.68 1.42c.14.35.2.73.18 1.1-.03.37-.14.74-.34 1.06-.11.18-.15.35-.13.52.02.17.1.32.21.44l.47.47c.12.12.27.19.44.21.17.02.33-.02.48-.1.37-.22.73-.33 1.1-.36h.18zm11.22-4.01z"
          fill="#9ba4ab"
        />
        <path
          d="M12 14.83c-1.56 0-2.83-1.27-2.83-2.83S10.44 9.17 12 9.17s2.83 1.27 2.83 2.83-1.27 2.83-2.83 2.83zm0-4.15c-.73 0-1.33.6-1.33 1.33s.6 1.33 1.33 1.33 1.33-.6 1.33-1.33-.6-1.33-1.33-1.33z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default Settings;
