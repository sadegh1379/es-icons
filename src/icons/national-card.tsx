import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNationalCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <path
      fill="#106C9D"
      d="M16.25 23.833a.82.82 0 0 1-.812-.812V2.979c0-.444.368-.812.812-.812s.813.368.813.812v20.042a.82.82 0 0 1-.813.812"
    />
    <path
      fill="#106C9D"
      d="M6.5 21.667H13V4.333H6.5a4.33 4.33 0 0 0-4.333 4.334v8.666A4.33 4.33 0 0 0 6.5 21.667M19.5 21.667h-3.25V4.333h3.25a4.33 4.33 0 0 1 4.333 4.334v8.666a4.33 4.33 0 0 1-4.333 4.334"
      opacity={0.4}
    />
    <path
      fill="#106C9D"
      d="M7.583 17.604a.82.82 0 0 1-.812-.812V9.208c0-.444.368-.812.812-.812s.813.368.813.812v7.584a.82.82 0 0 1-.813.812"
    />
  </svg>
);
export default SvgNationalCard;
