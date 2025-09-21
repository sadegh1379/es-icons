import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNoData = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 117 135"
    {...props}
  >
    <path
      fill="#BBDEFB"
      d="M36.328 93.66H8.525a3.7 3.7 0 0 0-2.06.627 3.732 3.732 0 0 0-.562 5.725l27.803 27.897a3.705 3.705 0 0 0 5.705-.564 3.73 3.73 0 0 0 .625-2.067V97.381c0-2.055-1.66-3.72-3.708-3.72"
    />
    <g filter="url(#no-data_svg__a)">
      <path
        fill="#E3F2FD"
        d="M87.962 128.999H36.328a3.714 3.714 0 0 1-3.708-3.72v-20.456a3.715 3.715 0 0 0-3.708-3.721H8.525a3.714 3.714 0 0 1-3.709-3.72V5.72C4.816 3.666 6.476 2 8.525 2h79.437a3.715 3.715 0 0 1 3.709 3.72V125.28c0 2.054-1.66 3.72-3.709 3.72"
      />
    </g>
    <path
      fill="#E3F2FD"
      d="M87.963 2H48.244v126.999h39.72a3.714 3.714 0 0 0 3.707-3.72V5.721c0-2.055-1.66-3.721-3.708-3.721"
    />
    <path
      stroke="url(#no-data_svg__b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={6}
      d="m110.228 113.563-6.593-6.639m-28.017 3.319c4.112 0 8.184-.815 11.983-2.4a31.3 31.3 0 0 0 10.16-6.835 31.6 31.6 0 0 0 6.787-10.23 31.72 31.72 0 0 0 0-24.133 31.6 31.6 0 0 0-6.788-10.23 31.3 31.3 0 0 0-10.159-6.835 31.1 31.1 0 0 0-11.983-2.4 31.2 31.2 0 0 0-22.142 9.235 31.64 31.64 0 0 0-9.171 22.297c0 8.362 3.299 16.383 9.171 22.296a31.2 31.2 0 0 0 22.142 9.235"
    />
    <defs>
      <linearGradient
        id="no-data_svg__b"
        x1={110.228}
        x2={43.846}
        y1={113.563}
        y2={47.641}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A97" />
        <stop offset={1} stopColor="#53AE94" />
      </linearGradient>
      <filter
        id="no-data_svg__a"
        width={94.853}
        height={135}
        x={0.816}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.168627 0 0 0 0 0.207843 0 0 0 0 0.454902 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_10066_19461" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_10066_19461" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgNoData;
