import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMicrophoneFillColored = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="url(#microphone-fill-colored_svg__a)"
      d="M12 21.93c-5.04 0-9.15-4.1-9.15-9.15V10.9c0-.39.32-.7.7-.7s.7.32.7.7v1.88c0 4.27 3.47 7.74 7.74 7.74s7.74-3.47 7.74-7.74V10.9c0-.39.32-.7.7-.7s.7.32.7.7v1.88c.02 5.05-4.09 9.15-9.13 9.15"
      opacity={0.4}
    />
    <path
      fill="url(#microphone-fill-colored_svg__b)"
      d="M12 2C8.64 2 5.9 4.74 5.9 8.1v4.69c0 3.36 2.74 6.1 6.1 6.1s6.1-2.74 6.1-6.1V8.1C18.1 4.74 15.36 2 12 2m2.18 8.59a.61.61 0 0 1-.75.43 5.9 5.9 0 0 0-3.12 0c-.33.09-.66-.1-.75-.43a.61.61 0 0 1 .43-.75c1.23-.34 2.53-.34 3.76 0 .33.09.52.42.43.75m.85-2.77a.6.6 0 0 1-.78.36 6.9 6.9 0 0 0-4.74 0 .61.61 0 0 1-.79-.36c-.11-.31.05-.66.37-.78 1.8-.65 3.78-.65 5.57 0 .32.12.48.47.37.78"
    />
    <defs>
      <linearGradient
        id="microphone-fill-colored_svg__a"
        x1={21.13}
        x2={10.467}
        y1={21.93}
        y2={5.312}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <linearGradient
        id="microphone-fill-colored_svg__b"
        x1={18.1}
        x2={2.066}
        y1={18.89}
        y2={7.308}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgMicrophoneFillColored;
