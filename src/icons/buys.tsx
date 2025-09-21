import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBuys = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="url(#buys_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.5 13.75c0 .97.75 1.75 1.67 1.75h1.88c.8 0 1.45-.68 1.45-1.53 0-.91-.4-1.24-.99-1.45l-3.01-1.05c-.59-.21-.99-.53-.99-1.45 0-.84.65-1.53 1.45-1.53h1.88c.92 0 1.67.78 1.67 1.75"
    />
    <path
      stroke="url(#buys_svg__b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 7.5v9"
    />
    <path
      stroke="url(#buys_svg__c)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2"
    />
    <path
      stroke="url(#buys_svg__d)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 3v4h4"
    />
    <path
      stroke="url(#buys_svg__e)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m22 2-5 5"
    />
    <defs>
      <linearGradient
        id="buys_svg__a"
        x1={14.51}
        x2={7.878}
        y1={15.5}
        y2={10.76}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient
        id="buys_svg__b"
        x1={13}
        x2={11.024}
        y1={16.5}
        y2={16.28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient id="buys_svg__c" x1={22} x2={2} y1={22} y2={2} gradientUnits="userSpaceOnUse">
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient id="buys_svg__d" x1={21} x2={17} y1={7} y2={3} gradientUnits="userSpaceOnUse">
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient id="buys_svg__e" x1={22} x2={17} y1={7} y2={2} gradientUnits="userSpaceOnUse">
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgBuys;
