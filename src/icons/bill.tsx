import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      fill="#FF0B91"
      d="M21.25 25.625H8.75c-3.75 0-6.25-1.875-6.25-6.25v-8.75c0-4.375 2.5-6.25 6.25-6.25h12.5c3.75 0 6.25 1.875 6.25 6.25v8.75c0 4.375-2.5 6.25-6.25 6.25"
      opacity={0.4}
    />
    <path
      fill="#FF0B91"
      d="M15 18.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5M23.75 9.688H20a.944.944 0 0 1-.937-.938c0-.512.425-.937.937-.937h3.75c.512 0 .938.425.938.937a.944.944 0 0 1-.938.938M10 22.188H6.25a.944.944 0 0 1-.937-.938c0-.512.425-.937.937-.937H10c.512 0 .938.425.938.937a.944.944 0 0 1-.938.938"
    />
  </svg>
);
export default SvgBill;
