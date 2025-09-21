import * as React from 'react';
import type { SVGProps } from 'react';
const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10 11.458a.63.63 0 0 0 .625-.625V6.667A.63.63 0 0 0 10 6.042a.63.63 0 0 0-.625.625v4.166a.63.63 0 0 0 .625.625M10.767 13.016a1 1 0 0 0-.175-.275 1 1 0 0 0-.275-.175.83.83 0 0 0-.633 0 1 1 0 0 0-.275.175 1 1 0 0 0-.175.275.8.8 0 0 0-.067.316.8.8 0 0 0 .067.317.9.9 0 0 0 .175.275 1 1 0 0 0 .275.175c.1.042.208.067.316.067a.8.8 0 0 0 .317-.067q.15-.063.275-.175a.9.9 0 0 0 .175-.275.8.8 0 0 0 .067-.317.8.8 0 0 0-.067-.316"
    />
  </svg>
);
export default SvgInfo;
