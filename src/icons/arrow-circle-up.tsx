import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="url(#arrow-circle-up_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2"
    />
    <path
      stroke="url(#arrow-circle-up_svg__b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.364 10.829 12.536 8 9.707 10.83"
    />
    <path
      stroke="url(#arrow-circle-up_svg__c)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.536 15.071v-7.07"
    />
    <defs>
      <linearGradient
        id="arrow-circle-up_svg__a"
        x1={22}
        x2={2}
        y1={22}
        y2={2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient
        id="arrow-circle-up_svg__b"
        x1={15.364}
        x2={9.707}
        y1={10.829}
        y2={10.829}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient
        id="arrow-circle-up_svg__c"
        x1={16.071}
        x2={9}
        y1={11.536}
        y2={11.536}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgArrowCircleUp;
