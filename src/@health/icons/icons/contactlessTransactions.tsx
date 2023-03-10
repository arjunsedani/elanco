import React, { Ref, forwardRef } from "react";
import { StyledSVG } from "../components/styled";
import { StyledSvgProps } from "../interfaces";

const ContactlessTransactions = forwardRef(
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
          d="M13 21.75c-.64 0-1.27-.06-1.91-.19a9.68 9.68 0 01-4.99-2.67c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0a8.234 8.234 0 004.22 2.26c1.61.32 3.26.16 4.77-.47a8.266 8.266 0 003.7-3.04c.91-1.36 1.39-2.95 1.39-4.58s-.48-3.22-1.39-4.58a8.266 8.266 0 00-3.7-3.04 8.196 8.196 0 00-4.77-.47c-1.61.32-3.07 1.1-4.22 2.26-.29.29-.77.29-1.06 0a.754.754 0 010-1.06c1.37-1.37 3.09-2.29 4.99-2.67s3.85-.19 5.63.55a9.73 9.73 0 014.38 3.59c1.08 1.61 1.64 3.48 1.64 5.42s-.57 3.81-1.64 5.42a9.73 9.73 0 01-4.38 3.59 9.77 9.77 0 01-3.73.74zm-3.8-5.4H3.8c-.67 0-1.33-.27-1.8-.75-.48-.48-.75-1.12-.75-1.8v-3.6c0-.34.06-.67.19-.98.13-.31.32-.59.55-.83s.52-.42.83-.55c.31-.13.64-.19.97-.19h5.4c.34 0 .67.07.98.19.31.13.59.31.83.55.24.24.42.51.55.83.13.31.19.64.19.98v3.6c0 .34-.06.67-.19.98-.13.31-.32.59-.55.83a2.56 2.56 0 01-1.8.74zm-6.45-4.6v2.05c0 .28.11.54.31.74.2.19.47.31.74.31h5.4c.12 0 .27-.03.4-.08s.24-.13.34-.23c.1-.1.17-.21.23-.34.05-.13.08-.26.08-.4v-2.05h-7.5zm0-1.5l7.5-.05c0-.14-.03-.27-.08-.4a.976.976 0 00-.23-.34c-.1-.1-.21-.18-.34-.23-.13-.05-.26-.08-.4-.08H3.8c-.14 0-.27.03-.4.08s-.24.13-.34.23-.17.21-.23.34c-.05.13-.08.26-.08.4v.05zm14.01 5.5c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06c.33-.33.58-.71.76-1.13a3.45 3.45 0 000-2.68 3.36 3.36 0 00-.76-1.13c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0a5.006 5.006 0 011.08 5.44c-.25.61-.62 1.15-1.08 1.62-.15.15-.34.22-.53.22zm-2.38-1.5c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06c.25-.26.4-.61.4-.97s-.14-.71-.4-.97a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0a2.876 2.876 0 010 4.06c-.15.15-.34.22-.53.22z"
          fill="#9ba4ab"
        />
      </StyledSVG>
    );
  },
);

export default ContactlessTransactions;
