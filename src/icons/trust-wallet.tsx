import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTrustWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    className="trust-wallet_svg__h-auto trust-wallet_svg__w-[160px]"
    viewBox="0 0 293 80"
    {...props}
  >
    <g clipPath="url(#trust-wallet_svg__a)">
      <path
        d="M133.461 18.695h13.937v7.807c4.566-7.016 9.821-7.807 17.513-7.807v13.796h-3.503c-9.218 0-13.63 4.337-13.63 12.93v14.663h-14.317zM211.41 60.084h-14.313v-3.946c-3.126 3.628-7.386 5.204-12.638 5.204-9.974 0-15.613-5.914-15.613-16.79V18.695h14.314v22.629c0 5.12 2.513 8.115 6.775 8.115s7.159-2.92 7.159-7.882V18.695h14.314v41.39zM214.908 47.305h13.406c.611 2.995 2.667 4.255 7.612 4.255 4.038 0 6.398-.944 6.398-2.678 0-1.343-1.143-2.212-4.413-2.92l-10.813-2.444c-7.235-1.652-10.891-5.831-10.891-12.536 0-8.833 6.471-13.404 19.036-13.404 12.564 0 18.731 4.455 19.801 13.998h-13.323c-.226-2.52-2.82-4.063-7.082-4.063-3.425 0-5.629 1.102-5.629 2.761 0 1.419 1.443 2.52 4.342 3.236l11.344 2.76c7.461 1.81 11.044 5.598 11.044 11.746 0 8.516-7.388 13.562-19.945 13.562s-20.865-5.44-20.865-14.273h-.022M293.858 31.569V18.695h-35.332v12.881h10.543v28.508h14.241V31.57zM129.476 31.569V18.695h-35.33v12.881h10.544v28.508h14.243V31.57zM1.47 11.421 36.61 0v79.066C11.51 68.523 1.47 48.317 1.47 36.898z"
        className="trust-wallet_svg__default-transition trust-wallet_svg__text-trustBlue trust-wallet_svg__[transition-property:color] trust-wallet_svg__dark:text-trustGreen"
        style={{
          fill: 'currentColor'
        }}
      />
      <path
        fill="url(#trust-wallet_svg__b)"
        d="M71.752 11.421 36.612 0v79.066c25.1-10.543 35.14-30.749 35.14-42.168z"
        className="trust-wallet_svg__default-transition trust-wallet_svg__opacity-0 trust-wallet_svg__[transition-property:opacity] trust-wallet_svg__dark:opacity-100"
      />
      <path
        fill="url(#trust-wallet_svg__c)"
        d="M71.752 11.421 36.612 0v79.066c25.1-10.543 35.14-30.749 35.14-42.168z"
        className="trust-wallet_svg__default-transition trust-wallet_svg__opacity-100 trust-wallet_svg__[transition-property:opacity] trust-wallet_svg__dark:opacity-0"
      />
    </g>
    <defs>
      <linearGradient
        id="trust-wallet_svg__b"
        x1={35.129}
        x2={63.892}
        y1={89.004}
        y2={-15.029}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.26} stopColor="#48FF91" />
        <stop offset={0.66} stopColor="#0094FF" />
        <stop offset={0.8} stopColor="#0038FF" />
        <stop offset={0.89} stopColor="#0500FF" />
      </linearGradient>
      <linearGradient
        id="trust-wallet_svg__c"
        x1={61.762}
        x2={35.219}
        y1={-4.57}
        y2={78.953}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.02} stopColor="#00F" />
        <stop offset={0.08} stopColor="#0094FF" />
        <stop offset={0.16} stopColor="#48FF91" />
        <stop offset={0.42} stopColor="#0094FF" />
        <stop offset={0.68} stopColor="#0038FF" />
        <stop offset={0.9} stopColor="#0500FF" />
      </linearGradient>
      <clipPath id="trust-wallet_svg__a">
        <path fill="#fff" d="M.814 0H292.75v79.066H.814z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrustWallet;
