"use client";

import {
  motion,
  animate,
  useMotionValue
} from "motion/react";

import {
  type ComponentPropsWithoutRef,
  useId,
  useRef,
  useState,
} from "react";

type LiquidBlurSweepButtonProps = ComponentPropsWithoutRef<"button"> & {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: number | string;
  blurIntensity?: number;
};

/**
 * The animation is entirely inside the SVG text layers. The sharp label is
 * masked out beneath the travelling strip while a blurred copy is revealed in
 * exactly the same place, leaving the button surface completely unchanged.
 */
export function LiquidBlurSweepButton({
  text = "Continue",
  backgroundColor = "#111827",
  textColor = "#ffffff",
  borderRadius = 14,
  blurIntensity = 10,
  className,
  style,
  onMouseEnter,
  ...buttonProps
}: LiquidBlurSweepButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const labelRef = useRef<SVGTextElement>(null);
  const [waveWidth, setWaveWidth] = useState(52);
  const sweepX = useMotionValue(-52);
  const uid = useId().replace(/:/g, "");
  const blurFilterId = `${uid}-blur`;
  const blurMaskId = `${uid}-blur-mask`;
  const sharpMaskId = `${uid}-sharp-mask`;
  const blurGradientId = `${uid}-blur-gradient`;
  const sharpGradientId = `${uid}-sharp-gradient`;

  const startSweep = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonBounds = buttonRef.current?.getBoundingClientRect();
    const labelBounds = labelRef.current?.getBoundingClientRect();

    if (buttonBounds && labelBounds) {
      const labelStart = labelBounds.left - buttonBounds.left;
      const labelEnd = labelStart + labelBounds.width;
      const nextWaveWidth = Math.max(buttonBounds.width * 0.26, 100);
      const enteredFromLeft = event.clientX <= buttonBounds.left + buttonBounds.width / 2;
      const origin = enteredFromLeft ? labelStart - nextWaveWidth : labelEnd;
      const destination = enteredFromLeft ? labelEnd : labelStart - nextWaveWidth;

      setWaveWidth(nextWaveWidth);
      sweepX.stop();
      sweepX.set(origin);
      animate(sweepX, destination, {
        type: "spring",
        stiffness: 120,
        damping: 28,
        mass: 0.6,
        visualDuration: 0.62,
        bounce: 0,
      });
    }

    onMouseEnter?.(event);
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`relative inline-flex h-12 min-w-50 items-center justify-center overflow-hidden px-6 shadow-[0_12px_30px_rgba(15,23,42,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 ${className ?? ""}`}
      style={{ backgroundColor, borderRadius, ...style }}
      onMouseEnter={startSweep}
      {...buttonProps}
    >
      <span className="sr-only">{text}</span>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        fill={textColor}
      >
        <defs>
          <filter id={blurFilterId} x="-30%" y="-50%" width="160%" height="200%">
            <feGaussianBlur stdDeviation={blurIntensity} />
          </filter>

          {/* White reveals the blurred text; transparent edges make the pass seamless. */}
          <linearGradient id={blurGradientId} x1="0%" x2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="24%" stopColor="white" stopOpacity="0.35" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="76%" stopColor="white" stopOpacity="0.35" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          {/* Black removes only the sharp letters directly below the blur strip. */}
          <linearGradient id={sharpGradientId} x1="0%" x2="100%">
            <stop offset="0%" stopColor="white" />
            <stop offset="24%" stopColor="#999" />
            <stop offset="50%" stopColor="black" />
            <stop offset="76%" stopColor="#999" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>

          <mask id={blurMaskId} maskUnits="userSpaceOnUse">
            <rect width="100%" height="100%" fill="black" />
            <motion.rect x={sweepX} width={waveWidth} height="100%" fill={`url(#${blurGradientId})`} />
          </mask>

          <mask id={sharpMaskId} maskUnits="userSpaceOnUse">
            <rect width="100%" height="100%" fill="white" />
            <motion.rect x={sweepX} width={waveWidth} height="100%" fill={`url(#${sharpGradientId})`} />
          </mask>
        </defs>

        <text
          ref={labelRef}
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-sm font-semibold"
          mask={`url(#${sharpMaskId})`}
        >
          {text}
        </text>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-sm font-semibold"
          filter={`url(#${blurFilterId})`}
          mask={`url(#${blurMaskId})`}
        >
          {text}
        </text>
      </svg>
    </button>
  );
}

const Button01 = () => (
  <LiquidBlurSweepButton text="Experience the sweep" />
);

export default Button01;