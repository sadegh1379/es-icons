import type { SVGProps } from 'react';
const SvgMobileSolid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M14 5.5h-4M20 7v10c0 4-1 5-5 5H9c-4 0-5-1-5-5V7c0-4 1-5 5-5h6c4 0 5 1 5 5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M12 19.101a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1"
    />
  </svg>
);
export default SvgMobileSolid;
