import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBtcGradient = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="url(#btc-gradient_svg__a)"
      d="M14.97 12.75H9.53v2.83h5.44c.95 0 1.73-.64 1.73-1.42s-.78-1.41-1.73-1.41"
    />
    <path
      fill="url(#btc-gradient_svg__b)"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m2.97 15.08h-1.65v1.42c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.42h-1.21v1.42c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.42H7.05c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.98V8.42h-.98c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.06V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.42h1.21V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.42h.88c1.55 0 2.92 1.36 2.92 2.92 0 .67-.24 1.28-.62 1.78 1.01.49 1.7 1.45 1.7 2.56 0 1.59-1.45 2.9-3.23 2.9"
    />
    <path
      fill="url(#btc-gradient_svg__c)"
      d="M15.62 9.83c0-.66-.62-1.42-1.42-1.42H9.53v2.83h4.67c.78.01 1.42-.63 1.42-1.41"
    />
    <defs>
      <linearGradient
        id="btc-gradient_svg__a"
        x1={16.699}
        x2={14.766}
        y1={15.58}
        y2={10.683}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient
        id="btc-gradient_svg__b"
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
        id="btc-gradient_svg__c"
        x1={15.619}
        x2={13.456}
        y1={11.24}
        y2={6.585}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgBtcGradient;
