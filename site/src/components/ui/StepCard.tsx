import { cn } from "@/lib/cn";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function StepCard({ number, title, description, isLast = false }: StepCardProps) {
  return (
    <div className="relative flex gap-6">
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
      )}
      {/* Number circle */}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-bg-surface">
        <span className="text-lg font-bold gradient-text">{number}</span>
      </div>
      {/* Content */}
      <div className={cn("pb-12", isLast && "pb-0")}>
        <h3 className="text-xl font-semibold text-text-heading font-[family-name:var(--font-heading)]">
          {title}
        </h3>
        <p className="mt-2 text-text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
