import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloseCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 18.333c4.584 0 8.334-3.75 8.334-8.333S14.584 1.667 10 1.667 1.667 5.417 1.667 10s3.75 8.333 8.333 8.333M7.642 12.358l4.716-4.716M12.358 12.358 7.642 7.642"
    />
  </svg>
);
export default SvgCloseCircle;
