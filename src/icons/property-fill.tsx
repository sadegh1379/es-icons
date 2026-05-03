import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPropertyFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12 1.875-10 7.5v2.5h1.25v8.75H7v-6.25h3.75v6.25h10v-8.75H22v-2.5L19.5 7.5V3.125h-3.75v1.563zm1.25 12.5H17v3.75h-3.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPropertyFill;
