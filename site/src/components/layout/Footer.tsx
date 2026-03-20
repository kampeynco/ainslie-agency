import Link from "next/link";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-20 px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto text-center md:text-left">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="text-xl font-headline italic text-primary mb-6 block hover:opacity-80 transition-opacity"
          >
            Ainslie Agency
          </Link>
          <p className="text-sm text-on-surface-variant font-light leading-relaxed">
            Editorial authority in AI search engine optimization for the
            generative era. Helping businesses get recommended by ChatGPT,
            Perplexity, and Gemini.
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h5 className="text-primary font-bold mb-6 text-xs uppercase tracking-widest">
            Solutions
          </h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                AI Visibility Audit
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Citation Building
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Semantic Mapping
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="text-primary font-bold mb-6 text-xs uppercase tracking-widest">
            Company
          </h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li>
              <a href="#mechanism" className="hover:text-primary transition-colors">
                About the Mechanism
              </a>
            </li>
            <li>
              <a href="#case-studies" className="hover:text-primary transition-colors">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h5 className="text-primary font-bold mb-6 text-xs uppercase tracking-widest">
            Connect
          </h5>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-primary transition-colors"
              >
                Contact Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 text-center text-xs text-on-surface-variant font-light tracking-widest opacity-60">
        &copy; {new Date().getFullYear()} Ainslie Agency. Editorial Authority in
        AI Search.
      </div>
    </footer>
  );
}
