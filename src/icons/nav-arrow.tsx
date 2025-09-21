import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNavArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 6"
    {...props}
  >
    <path stroke="#888" strokeLinecap="round" strokeLinejoin="round" d="m11 .5-5 5-5-5" />
  </svg>
);
export default SvgNavArrow;
