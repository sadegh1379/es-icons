import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBankCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#222F3A"
      d="M14.167 17.083H5.834c-2.5 0-4.167-1.25-4.167-4.166V7.083c0-2.916 1.667-4.166 4.167-4.166h8.333c2.5 0 4.167 1.25 4.167 4.166v5.834c0 2.916-1.667 4.166-4.167 4.166"
      opacity={0.4}
    />
    <path
      fill="#222F3A"
      d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M15.833 6.458h-2.5a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h2.5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625M6.667 14.792h-2.5a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h2.5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625"
    />
  </svg>
);
export default SvgBankCard;
