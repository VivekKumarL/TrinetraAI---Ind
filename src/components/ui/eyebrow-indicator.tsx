import * as React from "react";

interface EyebrowIndicatorProps {
  label?: string;
  color?: string; // CSS color string for background color
  className?: string;
}

export function EyebrowIndicator({
  label = "",
  color,
  className,
}: EyebrowIndicatorProps) {
  // style for background color if color prop passed
  const style = color ? { backgroundColor: color } : undefined;

  const baseClasses =
    "inline-block rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white";

  return (
    <span
      className={`${baseClasses} ${className ?? ""}`}
      style={style}
      aria-label={label || undefined}
    >
      {label}
    </span>
  );
}

/* you can use it like this <EyebrowIndicator label="" color="red" className="w-10 h-4" />
<EyebrowIndicator label="New" color="#10B981" />
<EyebrowIndicator label="" color="red" className="w-10 h-4" />
<EyebrowIndicator color="blue" className="w-8 h-2" /> */
