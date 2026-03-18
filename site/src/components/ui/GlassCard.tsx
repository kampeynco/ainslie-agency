import { cn } from "@/lib/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6",
        "bg-glass-bg backdrop-blur-xl",
        "border border-border-subtle",
        "transition-all duration-300",
        hover && "hover:bg-glass-bg-hover hover:border-border-hover hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
