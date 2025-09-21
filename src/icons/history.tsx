import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#history_svg__a)">
      <path d="M8.734.667A7.285 7.285 0 0 0 1.71 6.149l-.488-.738a.667.667 0 1 0-1.112.733l1.467 2.223A.72.72 0 0 0 2 8.65c.174.035.355 0 .504-.097l2.2-1.482a.667.667 0 1 0-.744-1.106l-1 .675A5.94 5.94 0 1 1 8.734 14a5.93 5.93 0 0 1-4.854-2.548.667.667 0 1 0-1.093.762A7.254 7.254 0 0 0 16 8 7.31 7.31 0 0 0 8.734.667" />
      <path d="M8.667 3.967A.667.667 0 0 0 8 4.633V8a.7.7 0 0 0 .195.471l2 2.018a.676.676 0 0 0 .943.005.667.667 0 0 0 .004-.943L9.333 7.726V4.633a.667.667 0 0 0-.666-.666" />
    </g>
    <defs>
      <clipPath id="history_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHistory;
