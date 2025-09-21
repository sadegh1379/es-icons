import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrashSolid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 3.987a68 68 0 0 0-6.68-.334q-1.98 0-3.96.2L2 3.987M5.668 3.314l.147-.874C5.92 1.807 6 1.334 7.128 1.334h1.747c1.126 0 1.213.5 1.313 1.113l.147.866M12.567 6.093l-.433 6.714c-.074 1.046-.134 1.86-1.994 1.86H5.86c-1.86 0-1.92-.814-1.993-1.86l-.433-6.714M6.887 11h2.22M6.332 8.334h3.333"
    />
  </svg>
);
export default SvgTrashSolid;
