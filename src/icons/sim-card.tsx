import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSimCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      fill="#F7931A"
      d="M20 15.862V22.6c0 2.925-1.95 4.862-4.863 4.862H7.362C4.45 27.462 2.5 25.525 2.5 22.6v-9.713c0-2.925 1.95-4.862 4.863-4.862h4.787c1.287 0 2.525.512 3.438 1.425l2.987 2.975A4.86 4.86 0 0 1 20 15.862"
      opacity={0.4}
    />
    <path
      fill="#F7931A"
      d="M27.5 10.312v6.738c0 2.912-1.95 4.862-4.863 4.862H20v-6.05a4.86 4.86 0 0 0-1.425-3.437L15.588 9.45a4.86 4.86 0 0 0-3.438-1.425H10v-.7c0-2.913 1.95-4.863 4.863-4.863h4.787c1.288 0 2.525.513 3.438 1.425l2.987 2.988a4.86 4.86 0 0 1 1.425 3.437"
    />
  </svg>
);
export default SvgSimCard;
