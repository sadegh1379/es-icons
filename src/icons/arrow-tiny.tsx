import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowTiny = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 8 14"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.82 12.92V1.08c0-.96-1.16-1.44-1.84-.76L.8 5.5a2.13 2.13 0 0 0 0 3.01l1.97 1.97 3.21 3.21c.68.67 1.84.19 1.84-.77"
    />
  </svg>
);
export default SvgArrowTiny;
