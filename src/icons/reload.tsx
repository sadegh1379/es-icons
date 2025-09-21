import * as React from 'react';
import type { SVGProps } from 'react';
const SvgReload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#reload_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.667 8a6.67 6.67 0 0 1-6.666 6.667c-3.68 0-5.927-3.707-5.927-3.707m0 0h3.013m-3.013 0v3.333M1.334 8c0-3.68 2.96-6.667 6.667-6.667 4.446 0 6.666 3.707 6.666 3.707m0 0V1.707m0 3.333h-2.96"
      />
    </g>
    <defs>
      <clipPath id="reload_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReload;
