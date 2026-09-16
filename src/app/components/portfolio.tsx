import type { CSSProperties, ReactNode } from "react";
import { Github, Mail, Moon, Sun } from "lucide-react";
import { InlineMarkdownContent } from "./inline-markdown";

const mono: CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-7 text-[15px] uppercase tracking-[0.2em] text-muted-foreground" style={mono}>
      {children}
    </h2>
  );
}

export function ThemeToggle({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
      aria-pressed={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun className="size-4" strokeWidth={1.5} /> : <Moon className="size-4" strokeWidth={1.5} />}
      <span>{isDark ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}

export function SocialLinks({ iconOnly = false }: { iconOnly?: boolean }) {
  const iconSize = iconOnly ? "size-6" : "size-6";
  return (
    <div className={iconOnly ? "flex justify-center gap-5" : "flex gap-5"}>
      <a href="mailto:benjamin.c.levine@stonybrook.edu" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Email Ben Levine" title="Email">
        <Mail className={iconSize} strokeWidth={1.5} />
      </a>
      <a href="https://github.com/bclevine" target="_blank" rel="noreferrer" className="pl-1 text-muted-foreground transition-colors hover:text-foreground" aria-label="Ben Levine on GitHub" title="GitHub">
        <Github className={iconSize} strokeWidth={1.5} />
      </a>
      <a href="https://orcid.org/0000-0001-8000-1959" target="_blank" rel="noreferrer" className="flex size-6 items-center justify-center rounded-full border border-current border-[1.5px] text-[12px] font-medium leading-none text-muted-foreground transition-colors hover:text-foreground" aria-label="Ben Levine on ORCID" title="ORCID">
        iD
      </a>
    </div>
  );
}

type Publication = { id: string; year: string; title: string; authors: string; venue: string; url?: string; note?: string };

function PublicationAuthors({ authors }: { authors: string }) {
  return <>{authors.split(/(B\. Levine)/g).map((part, index) => part === "B. Levine" ? <span key={index} className="rounded-sm bg-accent px-1 py-px font-medium text-foreground">{part}</span> : <span key={index}>{part.split(/(et al\.)/g).map((authorPart, authorIndex) => authorPart === "et al." ? <em key={authorIndex}>{authorPart}</em> : authorPart)}</span>)}</>;
}

export function PublicationList({ publications, title }: { publications: readonly Publication[]; title: string }) {
  return (
    <div>
      <h3 className="mb-4 text-[12px] text-muted-foreground" style={mono}>{title}</h3>
      <div>
        {publications.map((publication) => (
          <article key={publication.id} className="flex gap-5 border-t border-border py-4">
            <span className="mt-0.5 w-9 shrink-0 py-0.5 text-[12px] text-muted-foreground" style={mono}>{publication.year}</span>
            <div>
              {publication.url ? <a href={publication.url} className="text-[13px] font-medium text-foreground underline decoration-border underline-offset-4 hover:text-muted-foreground"><InlineMarkdownContent content={publication.title} /></a> : <span className="text-[13px] font-medium text-foreground"><InlineMarkdownContent content={publication.title} /></span>}
              <p className="mb-0.5 text-[12px] text-muted-foreground"><PublicationAuthors authors={publication.authors} /></p>
              <p className="text-[12px] italic text-muted-foreground">{publication.venue}</p>
              {publication.note && <span className="mt-1.5 inline-block border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground" style={mono}>{publication.note}</span>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

type TeachingCourse = { id: string; code: string; title: string; role: string; term: string };
type TeachingGroup = { id: string; institution: string; entries: readonly TeachingCourse[] };

export function TeachingGroups({ groups }: { groups: readonly TeachingGroup[] }) {
  return <div className="space-y-8">{groups.map((group) => <div key={group.id}><h3 className="mb-4 text-[12px] text-muted-foreground" style={mono}>{group.institution}</h3><div className="space-y-4">{group.entries.map((course) => <div key={course.id} className="flex gap-5"><span className="mt-px w-24 shrink-0 py-0.5 text-[12px] text-muted-foreground" style={mono}>{course.code}</span><div className="min-w-0"><p className="text-[14px] text-foreground">{course.title}</p><p className="mt-0.5 text-[12px] text-muted-foreground">{course.role}<span className="mx-1.5">·</span>{course.term}</p></div></div>)}</div></div>)}</div>;
}
