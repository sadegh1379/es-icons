import * as React from 'react';
import type { SVGProps } from 'react';
const SvgScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.5 9.789v-2.5c0-2.49 2.01-4.5 4.5-4.5h2.5M15.5 2.789H18c2.49 0 4.5 2.01 4.5 4.5v2.5M22.5 16.789v1.5c0 2.49-2.01 4.5-4.5 4.5h-1.5M9.5 22.789H7c-2.49 0-4.5-2.01-4.5-4.5v-2.5M17.5 10.289v5q0 3-3 3h-4q-3 0-3-3v-5q0-3 3-3h4q3 0 3 3"
    />
    <path
      stroke="#212121"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.5 12.789h-14"
    />
  </svg>
);
export default SvgScanner;
