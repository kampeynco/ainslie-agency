import { cn } from "@/lib/cn";

interface GradientTextProps {
  children: React.ReactNode;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
}

export function GradientText({ children, as: Tag = "span", className }: GradientTextProps) {
  return <Tag className={cn("gradient-text", className)}>{children}</Tag>;
}
