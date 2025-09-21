import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRules = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#222F3A"
      d="M10 18.333A8.336 8.336 0 0 1 1.667 10C1.667 5.4 5.4 1.667 10 1.667S18.334 5.4 18.334 10 14.6 18.333 10 18.333"
      opacity={0.4}
    />
    <path
      fill="#222F3A"
      d="M10.2 13.958A3.96 3.96 0 0 1 6.243 10a3.96 3.96 0 0 1 3.959-3.958c.958 0 1.891.35 2.608.991a.63.63 0 0 1 .058.884.63.63 0 0 1-.883.058A2.7 2.7 0 0 0 10.2 7.3a2.714 2.714 0 0 0-2.709 2.708 2.714 2.714 0 0 0 2.709 2.709c.65 0 1.291-.242 1.783-.675a.63.63 0 0 1 .883.058.63.63 0 0 1-.058.883 4 4 0 0 1-2.608.975"
    />
  </svg>
);
export default SvgRules;
