import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="#3498db"
    strokeLinecap="round"
    strokeWidth={4}
    viewBox="0 0 50 50"
    {...props}
  >
    <circle cx={25} cy={25} r={20} strokeDasharray={90} strokeDashoffset={30} />
  </svg>
);
export default SvgSpinner;
