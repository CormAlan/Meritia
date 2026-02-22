import React from "react";

type Props = {
  className?: string;
  positionClassName?: string;
  opacityClassName?: string;
  colorClassName?: string;
  size?: number;
  spacing?: number;
  dotRadius?: number;
};

const DotGrid: React.FC<Props> = ({
  className = "",
  positionClassName = "absolute -top-12 -right-12",
  opacityClassName = "opacity-[0.10]",
  colorClassName = "text-primary",
  size = 360,
  spacing = 18,
  dotRadius = 1.5,
}) => {
  const patternId = React.useId();

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className={`${positionClassName} ${opacityClassName} ${colorClassName}`}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <defs>
          <pattern id={patternId} x="0" y="0" width={spacing} height={spacing} patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r={dotRadius} fill="currentColor" />
          </pattern>
        </defs>
        <rect width={size} height={size} fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};

export default DotGrid;