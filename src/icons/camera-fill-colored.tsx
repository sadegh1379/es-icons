import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCameraFillColored = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="url(#camera-fill-colored_svg__a)"
      d="M6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.753 3.753 0 0 0 18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45C15.37 2.75 14.17 2 13.15 2h-2.29c-1.03 0-2.23.75-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6 3.83 6 2.11 7.83 2.25 9.99l.52 8.26C2.89 20.31 4 22 6.76 22"
      opacity={0.4}
    />
    <path
      fill="url(#camera-fill-colored_svg__b)"
      d="M13.5 8.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
    <path
      fill="url(#camera-fill-colored_svg__c)"
      d="M12 18.13a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76"
    />
    <defs>
      <linearGradient
        id="camera-fill-colored_svg__a"
        x1={21.758}
        x2={1.764}
        y1={22}
        y2={2.49}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient
        id="camera-fill-colored_svg__b"
        x1={14.25}
        x2={13.35}
        y1={8.75}
        y2={6.05}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient
        id="camera-fill-colored_svg__c"
        x1={15.38}
        x2={8.62}
        y1={18.13}
        y2={11.37}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgCameraFillColored;
