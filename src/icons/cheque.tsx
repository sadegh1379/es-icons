import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheque = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      fill="#8649FF"
      d="M18.75 27.5a.944.944 0 0 1-.937-.937V3.438c0-.513.425-.938.937-.938s.938.425.938.938v23.125a.944.944 0 0 1-.938.937"
    />
    <path
      fill="#8649FF"
      d="M7.5 25H15V5H7.5c-2.762 0-5 2.238-5 5v10c0 2.762 2.238 5 5 5M22.5 25h-3.75V5h3.75c2.762 0 5 2.238 5 5v10c0 2.762-2.238 5-5 5"
      opacity={0.4}
    />
    <path
      fill="#8649FF"
      d="M8.75 20.313a.944.944 0 0 1-.937-.938v-8.75c0-.512.425-.937.937-.937s.938.425.938.937v8.75a.944.944 0 0 1-.938.938"
    />
  </svg>
);
export default SvgCheque;
