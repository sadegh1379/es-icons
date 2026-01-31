import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBarChartFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#bar-chart-fill_svg__a)">
      <path d="M7.435 22H3.522a.65.65 0 0 1-.652-.652V2.652c0-.36.292-.652.652-.652h3.913c.36 0 .652.292.652.652v18.696c0 .36-.292.652-.652.652M20.478 22h-3.913a.65.65 0 0 1-.652-.652V7.869c0-.36.292-.652.652-.652h3.913c.36 0 .652.292.652.652v13.479c0 .36-.292.652-.652.652M13.956 22h-3.913a.65.65 0 0 1-.652-.652v-8.261c0-.36.292-.652.652-.652h3.913c.36 0 .652.292.652.652v8.26c0 .36-.292.653-.652.653" />
      <path d="M13.957 12.435H12V22h1.957c.36 0 .652-.292.652-.652v-8.261a.65.65 0 0 0-.652-.652" />
    </g>
    <defs>
      <clipPath id="bar-chart-fill_svg__a">
        <path fill="#fff" d="M2 2h20v20H2z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBarChartFill;
