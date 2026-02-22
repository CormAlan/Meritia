import React from "react";

type Props = {
  className?: string;
  /** Defaults mimic Index: top-right, slightly off-canvas */
  positionClassName?: string;
  /** Tailwind opacity utility OR arbitrary (e.g. "opacity-[0.10]") */
  opacityClassName?: string;
  /** Tailwind text color token (uses currentColor for strokes) */
  colorClassName?: string;
  /** Size in px for the SVG; defaults to 520 like Index */
  size?: number;
};

const BrandShapes: React.FC<Props> = ({
  className = "",
  positionClassName = "absolute -top-24 -right-24",
  opacityClassName = "opacity-[0.10]",
  colorClassName = "text-primary-foreground",
  size = 520,
}) => {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        className={`${positionClassName} ${opacityClassName} ${colorClassName}`}
        width={size}
        height={size}
        viewBox="0 0 520 520"
        fill="none"
      >
        <path
          d="M90 140C150 60 290 40 360 90C430 140 470 260 420 350C370 440 240 480 150 420C60 360 30 220 90 140Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M150 170C190 110 280 100 330 140C380 180 410 260 380 320C350 380 260 410 190 370C120 330 110 230 150 170Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default BrandShapes;