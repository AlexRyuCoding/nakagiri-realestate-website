import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "muted" | "primary";
}

export function Section({
  id,
  children,
  className,
  background = "default",
}: SectionProps) {
  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
    primary: "bg-primary/5",
  };

  return (
    <section
      id={id}
      className={cn("section", backgroundClasses[background], className)}
    >
      <div className="container">{children}</div>
    </section>
  );
}
