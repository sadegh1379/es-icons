import type { SVGProps } from 'react';

const SvgPlusFill = (props: SVGProps<SVGSVGElement>) => {
  console.log("loaded SvgPlusFill.")
  return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16h16m-8 8V8"
    />
  </svg>
)};
export default SvgPlusFill;
