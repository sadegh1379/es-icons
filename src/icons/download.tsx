import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="url(#download_svg__a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M6.213 7.787 7.92 9.493l1.706-1.706"
    />
    <path
      stroke="url(#download_svg__b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7.92 2.667v6.78"
    />
    <path
      stroke="url(#download_svg__c)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M13.333 8.12c0 2.947-2 5.334-5.334 5.334S2.666 11.067 2.666 8.12"
    />
    <defs>
      <linearGradient
        id="download_svg__a"
        x1={9.626}
        x2={8.261}
        y1={9.493}
        y2={6.763}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient
        id="download_svg__b"
        x1={8.92}
        x2={6.963}
        y1={9.447}
        y2={9.158}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient
        id="download_svg__c"
        x1={13.333}
        x2={9.066}
        y1={13.454}
        y2={4.92}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgDownload;
