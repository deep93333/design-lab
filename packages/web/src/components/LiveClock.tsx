import { useState, useEffect } from "react";
import NumberFlow from "@number-flow/react";

const TIMEZONE = "America/Montreal";

export const LiveClock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const parts = formatter.formatToParts(now);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const period = parts.find((p) => p.type === "dayPeriod")?.value?.toLowerCase() ?? "am";

  return (
    <p className="text-xs text-foreground/30 font-[500] tracking-tight" style={{ fontVariantNumeric: "tabular-nums" }}>
      <NumberFlow value={hour} />
      :
      <NumberFlow value={minute} format={{ minimumIntegerDigits: 2 }} />
      {period} in Montréal, Canada
    </p>
  );
};
