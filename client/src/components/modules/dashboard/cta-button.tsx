import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight02Icon, ArrowRight02Icon, CallIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type IconType = "arrow" | "arrow-right" | "call";

interface CtaButtonProps {
  label: string;
  variant?: "primary" | "dark";
  icon?: IconType;
  className?: string;
  color?: string;
  bgColor?: string;
}

const iconMap = {
  arrow: ArrowUpRight02Icon,
  "arrow-right": ArrowRight02Icon,
  call: CallIcon,
};

export const CtaButton = ({ label, variant = "primary", icon = "arrow", className, color, bgColor }: CtaButtonProps) => {
  const IconComponent = iconMap[icon];
  const resolvedTextColor = color ?? (variant === "dark" ? "#031129" : "#ffffff");
  const resolvedBgColor =
    bgColor ?? (variant === "primary" ? "var(--primary-color, hsl(var(--cta-primary)))" : "#ffffff");

  return (
    <Button
      style={{ color: resolvedTextColor, backgroundColor: resolvedBgColor }}
      className={cn(
        "group relative min-h-11 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[10px] hover:bg-cta-primary/80 shadow-cta-primary/20 border-white shadow-xl bg-cta-primary px-5 text-white transition-all duration-300",
        className
      )}
    >
      <HugeiconsIcon icon={IconComponent} fill="white" className="relative size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span className="relative font-sans text-[14px] font-semibold tracking-[-0.8px]">{label}</span>
    </Button>
  );
};