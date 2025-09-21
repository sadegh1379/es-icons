import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMyPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 26"
    {...props}
  >
    <path
      stroke="url(#my-phone_svg__a)"
      strokeOpacity={0.8}
      strokeWidth={1.5}
      d="M12.84 1H5.668a3.536 3.536 0 0 0-4 4v16a3.536 3.536 0 0 0 4 4h10.667a3.537 3.537 0 0 0 4-4V8.494a2 2 0 0 0-.585-1.413"
    />
    <path
      fill="url(#my-phone_svg__b)"
      d="M13.903 6.045a.42.42 0 0 1-.31-.11.43.43 0 0 1-.105-.31V2.85q0-.205.115-.31a.45.45 0 0 1 .325-.11q.176 0 .275.07.105.065.19.22l1.075 1.93h-.175l1.07-1.93a.64.64 0 0 1 .19-.22.5.5 0 0 1 .28-.07q.2 0 .305.11.11.105.11.31v2.775a.43.43 0 0 1-.105.31q-.105.11-.31.11a.42.42 0 0 1-.31-.11.43.43 0 0 1-.105-.31v-1.72h.105l-.805 1.4a.6.6 0 0 1-.15.165.34.34 0 0 1-.205.055.35.35 0 0 1-.205-.055.5.5 0 0 1-.145-.165l-.81-1.405h.115v1.725a.43.43 0 0 1-.105.31q-.105.11-.31.11m5.484 0q-.22 0-.34-.12-.12-.125-.12-.355V4.2l.19.505-1.15-1.655a.387.387 0 0 1 .045-.515.43.43 0 0 1 .31-.105.5.5 0 0 1 .255.07.64.64 0 0 1 .215.225l.7 1.03h-.18l.7-1.035a.7.7 0 0 1 .215-.225.5.5 0 0 1 .26-.065q.19 0 .295.095t.11.24a.47.47 0 0 1-.09.295l-1.14 1.645.185-.505v1.37q0 .475-.46.475"
    />
    <path
      fill="url(#my-phone_svg__c)"
      fillOpacity={0.6}
      d="M10 10.733V20.6a.4.4 0 0 1-.4.4H7.666a1.767 1.767 0 0 1-2-2v-6.667a1.768 1.768 0 0 1 2-2H9.6a.4.4 0 0 1 .4.4m4.333-.4h-1.934a.4.4 0 0 0-.4.4v3.534a.4.4 0 0 0 .4.4h3.534a.4.4 0 0 0 .4-.4v-1.934a1.768 1.768 0 0 0-2-2m2 8.667v-1.933a.4.4 0 0 0-.4-.4H12.4a.4.4 0 0 0-.4.4V20.6a.4.4 0 0 0 .4.4h1.933a1.768 1.768 0 0 0 2-2"
    />
    <defs>
      <linearGradient
        id="my-phone_svg__a"
        x1={20.37}
        x2={-2.965}
        y1={25.035}
        y2={6.87}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient
        id="my-phone_svg__b"
        x1={21}
        x2={14.062}
        y1={8}
        y2={0.071}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient
        id="my-phone_svg__c"
        x1={16.351}
        x2={5.648}
        y1={21.017}
        y2={10.315}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgMyPhone;
