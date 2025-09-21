import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowCircleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="url(#arrow-circle-down_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2"
    />
    <path
      stroke="url(#arrow-circle-down_svg__b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.706 12.243 2.829 2.828 2.828-2.828"
    />
    <path
      stroke="url(#arrow-circle-down_svg__c)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.535 8v7.071"
    />
    <defs>
      <linearGradient
        id="arrow-circle-down_svg__a"
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
        id="arrow-circle-down_svg__b"
        x1={9.706}
        x2={15.363}
        y1={12.243}
        y2={12.243}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient
        id="arrow-circle-down_svg__c"
        x1={8.999}
        x2={16.07}
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
export default SvgArrowCircleDown;
