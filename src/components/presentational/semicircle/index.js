import React from 'react';

const Semicircle = ({ width, deg, strokeWidth, color, backgroundColor }) => {
  if (deg > 180) deg = 180
  const circlePos = width / 2;
  const circleR = width / 2 - strokeWidth;

  return (
    <svg width={width} height={width / 2} overflow='hidden'>
      <circle cx={circlePos} cy={circlePos} r={circleR} stroke={color} strokeWidth={strokeWidth} fill="transparent" />
      <rect transform={`rotate(${deg - 90} ${circlePos} ${circlePos})`} width={width} height={width} x={width / 2} y={0} fill={backgroundColor} />
    </svg>
  )
}

export default Semicircle