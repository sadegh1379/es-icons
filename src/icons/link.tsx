import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.36 16a7.28 7.28 0 0 1-1.694-4.667C2.666 7.307 5.959 4 9.999 4h6.667c4.027 0 7.333 3.307 7.333 7.333 0 4.027-3.293 7.334-7.333 7.334h-3.333"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M27.64 16a7.28 7.28 0 0 1 1.693 4.667c0 4.027-3.293 7.334-7.333 7.334h-6.667C11.307 28 8 24.694 8 20.667s3.293-7.333 7.333-7.333h3.334"
    />
  </svg>
);
export default SvgLink;
