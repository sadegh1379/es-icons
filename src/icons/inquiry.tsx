import * as React from 'react';
import type { SVGProps } from 'react';
const SvgInquiry = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path fill="#53AE94" d="M23.75 10a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5" />
    <path
      fill="#53AE94"
      d="M23.75 11.875a5.633 5.633 0 0 1-5.625-5.625c0-.9.238-1.737.613-2.5H9.4c-4.312 0-6.9 2.575-6.9 6.9v9.937c0 4.338 2.588 6.913 6.9 6.913h9.937c4.326 0 6.9-2.575 6.9-6.9v-9.338c-.75.375-1.587.613-2.487.613"
      opacity={0.4}
    />
  </svg>
);
export default SvgInquiry;
