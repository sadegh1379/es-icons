import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 7"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m1.72 6.033 4.346-4.346a1.324 1.324 0 0 1 1.867 0l4.346 4.346"
    />
  </svg>
);
export default SvgChevron;
