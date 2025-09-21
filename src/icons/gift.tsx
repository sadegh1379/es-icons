import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGift = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      fill="red"
      d="M24.963 12.5v10c0 3.75-1.25 5-5 5h-10c-3.75 0-5-1.25-5-5v-10z"
      opacity={0.4}
    />
    <path
      fill="red"
      d="M26.875 8.75V10c0 1.375-.663 2.5-2.5 2.5H5.625c-1.912 0-2.5-1.125-2.5-2.5V8.75c0-1.375.587-2.5 2.5-2.5h18.75c1.837 0 2.5 1.125 2.5 2.5"
    />
    <path
      fill="red"
      d="M14.551 6.25h-6.9a1.17 1.17 0 0 1 .037-1.625L9.463 2.85a1.2 1.2 0 0 1 1.688 0zM22.337 6.25h-6.9l3.4-3.4a1.2 1.2 0 0 1 1.688 0l1.774 1.775c.45.45.463 1.162.038 1.625"
      opacity={0.4}
    />
    <path
      fill="red"
      d="M11.174 12.5v6.425c0 1 1.1 1.587 1.938 1.05l1.175-.775a1.25 1.25 0 0 1 1.375 0l1.112.75a1.246 1.246 0 0 0 1.938-1.037V12.5z"
      opacity={0.6}
    />
  </svg>
);
export default SvgGift;
