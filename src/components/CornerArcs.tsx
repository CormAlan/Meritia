import React from "react";

type Props = {
  className?: string;
  positionClassName?: string;
  opacityClassName?: string;
  colorClassName?: string;
  size?: number;
  strokeWidth?: number;
};

const CornerArcs: React.FC<Props> = ({
  className = "",
  positionClassName = "absolute -top-24 -right-24",
  opacityClassName = "opacity-[0.08]",
  colorClassName = "text-primary",
  size = 520,
  strokeWidth = 2,
}) => {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className={`${positionClassName} ${opacityClassName} ${colorClassName}`}
        width={size}
        height={size}
        viewBox="0 0 520 520"
        fill="none"
      >
        <path
          d="M520 120C420 120 360 180 360 280"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M520 170C450 170 410 210 410 280"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M520 220C480 220 460 240 460 280"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CornerArcs;