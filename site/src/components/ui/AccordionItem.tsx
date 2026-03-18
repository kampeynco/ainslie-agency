"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-accent cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-text-heading pr-4">
          {question}
        </span>
        <span
          className={cn(
            "shrink-0 text-2xl text-text-muted transition-transform duration-300",
            isOpen && "rotate-45"
          )}
        >
          +
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-text-muted leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
