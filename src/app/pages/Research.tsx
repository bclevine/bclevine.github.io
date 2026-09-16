import { useEffect } from "react";
import { Link, useLocation, useOutletContext } from "react-router";
import { Moon, Sun } from "lucide-react";
import { type ThemeOutletContext } from "../Root";
import { SectionLabel } from "../components/portfolio";

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

export default function Research() {
  const { isDark, toggleTheme } = useOutletContext<ThemeOutletContext>();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    });

    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <div className="relative max-w-3xl space-y-14 px-6 py-8 pb-24 sm:px-10 sm:py-10 md:px-14 md:py-14 md:pb-24">
      <button
        type="button"
        onClick={toggleTheme}
        className="absolute top-8 right-6 flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:text-foreground sm:top-10 sm:right-10 md:hidden"
        aria-pressed={isDark}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        title={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? <Sun className="size-4" strokeWidth={1.5} /> : <Moon className="size-4" strokeWidth={1.5} />}
      </button>

      <Link
        to="/"
        className="text-[11px] text-muted-foreground hover:text-foreground block"
        style={MONO}
      >
        ← Home
      </Link>
    
    <SectionLabel>Coming soon...</SectionLabel>
    </div>
  );
}