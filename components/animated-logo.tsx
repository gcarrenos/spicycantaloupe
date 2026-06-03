"use client";

import { useId } from "react";

const LOGO_SRC = "/clone-ur-own-logo.png";
const VIEWBOX = "0 0 966 350";

type AnimatedLogoProps = {
  className?: string;
  size?: "header" | "hero";
};

export function AnimatedLogo({ className = "", size = "header" }: AnimatedLogoProps) {
  const uid = useId().replace(/:/g, "");
  const glowId = `logo-glow-${uid}`;
  const shimmerId = `logo-shimmer-${uid}`;
  const maskId = `logo-mask-${uid}`;

  const sizeClass =
    size === "hero" ? "h-14 md:h-[4.25rem]" : "h-9 md:h-10";

  return (
    <span className={`logo-fx inline-block ${sizeClass} ${className}`}>
      <svg
        viewBox={VIEWBOX}
        className="h-full w-auto overflow-visible"
        aria-label="CLONE-UR-OWN"
        role="img"
      >
        <defs>
          <filter
            id={glowId}
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.62  0 0 0 0 0.31  0 0 0 0 1  0 0 0 0.85 0"
              result="purpleGlow"
            />
            <feMerge>
              <feMergeNode in="purpleGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id={shimmerId} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9f50ff" stopOpacity="0" />
            <stop offset="42%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="58%" stopColor="#32d74b" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#9f50ff" stopOpacity="0" />
            <animate
              attributeName="x1"
              values="-500;1466;-500"
              dur="5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="x2"
              values="0;1966;0"
              dur="5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y1"
              values="175;175;175"
              dur="5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="275;275;275"
              dur="5s"
              repeatCount="indefinite"
            />
          </linearGradient>

          <mask id={maskId}>
            <image href={LOGO_SRC} width="966" height="350" />
          </mask>
        </defs>

        <image
          href={LOGO_SRC}
          width="966"
          height="350"
          className="logo-fx-glow-layer"
          filter={`url(#${glowId})`}
          style={{ mixBlendMode: "screen" }}
        />
        <image
          href={LOGO_SRC}
          width="966"
          height="350"
          style={{ mixBlendMode: "screen" }}
        />
        <rect
          width="966"
          height="350"
          fill={`url(#${shimmerId})`}
          mask={`url(#${maskId})`}
          className="logo-fx-shimmer"
        />
      </svg>
    </span>
  );
}
