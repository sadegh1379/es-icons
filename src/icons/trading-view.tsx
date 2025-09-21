import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTradingView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <g clipPath="url(#trading-view_svg__a)">
      <path
        fill="currentColor"
        d="M11.077 5.52a1.635 1.635 0 1 1-3.27 0 1.635 1.635 0 0 1 3.27 0M7 4H.5v3.27h3.23v4.845H7zm5.73 0h3.77l-3.404 8.115h-3.77z"
      />
    </g>
    <defs>
      <clipPath id="trading-view_svg__a">
        <path fill="currentColor" d="M.5 0h16v16H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTradingView;
