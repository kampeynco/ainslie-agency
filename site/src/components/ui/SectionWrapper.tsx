"use client";

import { cn } from "@/lib/cn";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "py-20 md:py-28 px-4",
        "section-fade",
        isVisible && "visible",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
