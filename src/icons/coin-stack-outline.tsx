import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoinStackOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.125}
      d="M11.25 12.75A2.25 2.25 0 0 0 9 10.5m0 0A2.25 2.25 0 1 0 9 15a2.25 2.25 0 1 1 0 4.5m0-9v-.75m0 9.75a2.25 2.25 0 0 1-2.25-2.25M9 19.5v.75m7.5 3h6.75v-1.5m-4.5-2.25h4.5V18m-3.75-2.25h3.75v-1.5M19.5 12h3.75v-1.5m-6-2.25h6v-1.5M7.5 4.5h15.75V.75h-18V4.5m12 10.5a8.251 8.251 0 0 0-16.5 0 8.251 8.251 0 0 0 16.5 0"
    />
  </svg>
);
export default SvgCoinStackOutline;
