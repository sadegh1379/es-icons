import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThreeLine = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M3.5 7.789h18M3.5 12.789h18M3.5 17.789h18"
    />
  </svg>
);
export default SvgThreeLine;
