import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEditSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8.84 2.4 3.366 8.193c-.206.22-.406.654-.446.954l-.247 2.16c-.087.78.473 1.313 1.247 1.18l2.146-.367c.3-.053.72-.273.927-.5l5.473-5.793c.947-1 1.374-2.14-.1-3.534C10.9.913 9.786 1.4 8.84 2.4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7.926 3.367A4.084 4.084 0 0 0 11.559 6.8M2 14.667h12"
    />
  </svg>
);
export default SvgEditSolid;
