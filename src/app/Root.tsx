import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { SECTIONS, SECTION_LABELS, type Section } from "./data";
import "katex/dist/katex.min.css";
import { SocialLinks, ThemeToggle } from "./components/portfolio";

const MONO: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };
const SERIF: React.CSSProperties = { fontFamily: "'EB Garamond', serif", fontWeight: 400 };

export type ThemeOutletContext = {
  isDark: boolean;
  toggleTheme: () => void;
};

export default function Root() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isResearchPage = location.pathname === "/research";
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActiveSection(hit.target.id as Section);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome, location.pathname]);

  function isActive(s: Section) {
    if (isHome) return activeSection === s;
    if (isResearchPage) return s === "research";
    return false;
  }

  const toggleTheme = () => setIsDark((current) => !current);

  return (
    <div
      className="min-h-screen bg-background text-foreground text-[15px]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-50 rounded border border-border bg-background px-3 py-2 text-sm text-foreground focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>
      <div className="mx-auto flex min-h-screen w-full max-w-6xl">
        <aside className="sticky top-0 hidden h-screen w-48 shrink-0 flex-col overflow-y-auto border-r border-border md:flex">
        <div className="px-7 pt-10 pb-6">
          <img
            src="/headshot.jpg"
            alt="Ben Levine"
            className="mb-5 h-30 w-30 rounded-full border border-border object-cover"
          />
          {/* <div
            className="mb-5 h-30 w-30 rounded-full border border-border bg-muted/30"
            aria-label="Headshot placeholder"
            role="img"
          /> */}
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2" style={MONO}>
            {/* Dr. */}
          </p>
          <Link to="/" className="block">
            <h1 className="text-[1.6rem] leading-snug text-foreground" style={SERIF}>
              Ben Levine
              {/* <br /> */}
              {/* Levine */}
            </h1>
          </Link>
          <p className="text-[13px] text-muted-foreground mt-3 leading-relaxed">
            Ph.D. Candidate,
            <br />
            Physics & Astronomy
          </p>
          <p className="text-[12px] text-muted-foreground italic mt-1">Stony Brook University</p>
        </div>

        <div className="border-b border-border px-7 pb-5 pt-2"><SocialLinks /></div>

        <nav className="px-7 py-4 flex-1">
          <ul className="space-y-2">
            {SECTIONS.map((s) => (
              <li key={s}>
                <Link
                  to={`/#${s}`}
                  className={`text-[14px] text-left w-full leading-none py-px ${
                    isActive(s)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={isActive(s) ? "location" : undefined}
                >
                  {SECTION_LABELS[s]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto border-t border-border px-7 py-4">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>

        </aside>

        <main id="main-content" className="min-w-0 flex-1" tabIndex={-1}>
          <Outlet context={{ isDark, toggleTheme } satisfies ThemeOutletContext} />
        </main>
      </div>
    </div>
  );
}
