import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCandlestick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M5.5 2v2M5.5 9.667v2.666"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.2}
      d="M5.033 4.333a.867.867 0 0 0-.867.867v3.6c0 .479.388.867.867.867h.933a.867.867 0 0 0 .867-.867V5.2a.867.867 0 0 0-.867-.867z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M11.5 4.333v3.334M11.5 11v2.667"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.2}
      d="M11.033 7.667a.867.867 0 0 0-.867.866v1.6c0 .479.388.867.867.867h.933a.867.867 0 0 0 .867-.867v-1.6a.867.867 0 0 0-.867-.866z"
    />
  </svg>
);
export default SvgCandlestick;
