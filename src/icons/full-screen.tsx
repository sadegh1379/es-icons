import * as React from 'react';
import type { SVGProps } from 'react';
const SvgFullScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 1 1 13M13 5V1H9M1 9v4h4"
    />
  </svg>
);
export default SvgFullScreen;
