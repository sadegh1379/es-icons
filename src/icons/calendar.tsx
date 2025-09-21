import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 19"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.111}
      d="M6.864 1.863v2.221M12.785 1.863v2.221M3.532 7.113h12.585M16.487 6.675v6.293c0 2.221-1.11 3.702-3.702 3.702H6.862c-2.59 0-3.701-1.48-3.701-3.702V6.675c0-2.22 1.11-3.701 3.701-3.701h5.923c2.591 0 3.702 1.48 3.702 3.701"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.666}
      d="M9.82 10.525h.007M7.079 10.525h.007M7.079 12.746h.007"
    />
  </svg>
);
export default SvgCalendar;
