import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-bold font-[family-name:var(--font-heading)] gradient-text">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold font-[family-name:var(--font-heading)]">
          Page Not Found
        </h1>
        <p className="mt-2 text-text-muted max-w-md mx-auto">
          This page doesn&apos;t exist — but your business should exist in AI search.{" "}
          <GradientText>Let&apos;s fix that.</GradientText>
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button href="/">Go Home</Button>
          <Button href="/#services" variant="secondary">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
