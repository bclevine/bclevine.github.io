import { useEffect } from "react";
import { Link, useLocation, useOutletContext } from "react-router";
import { Moon, Sun } from "lucide-react";
import { awardEntries, contributingPublications, educationEntries, majorPublications, outreachEntries, researchAreas, teachingGroups } from "../data";
import { type ThemeOutletContext } from "../Root";
import { PublicationList, SectionLabel, SocialLinks, TeachingGroups } from "../components/portfolio";
import cvPdf from "../components/images/CV.pdf";
const mono: React.CSSProperties = { fontFamily: "'JetBrains Mono', monospace" };

export default function Home() {
  const { isDark, toggleTheme } = useOutletContext<ThemeOutletContext>();
  const { hash } = useLocation();
  useEffect(() => { const frame = requestAnimationFrame(() => { if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "auto" }); else window.scrollTo({ top: 0, behavior: "auto" }); }); return () => cancelAnimationFrame(frame); }, [hash]);
  return <div className="max-w-3xl space-y-14 px-6 py-8 sm:px-10 sm:py-10 md:space-y-20 md:px-14 md:py-14">
    <header className="border-b border-border pb-7 md:hidden">
      <div className="relative text-center">
        <button type="button" onClick={toggleTheme} className="absolute right-0 top-0 flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:text-foreground" aria-pressed={isDark} aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}>{isDark ? <Sun className="size-4" strokeWidth={1.5} /> : <Moon className="size-4" strokeWidth={1.5} />}</button>
        <img src="/headshot.jpg" alt="Ben Levine" className="mx-auto mb-5 aspect-square size-50 rounded-full border border-border object-cover" />
        <Link to="/" className="block"><h1 className="text-[1.6rem] leading-snug text-foreground" style={{ fontFamily: "'EB Garamond', serif", fontWeight: 400 }}>Ben Levine</h1></Link>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">Ph.D. Candidate,<br />Physics &amp; Astronomy</p>
        <p className="mt-1 text-[12px] italic text-muted-foreground">Stony Brook University</p></div>
      <div className="mt-6"><SocialLinks iconOnly /></div>
      {/* <nav className="mt-6 border-t border-border pt-5" aria-label="Page sections"><ul className="flex flex-wrap justify-center gap-x-4 gap-y-3">{[["about", "About"], ["research", "Research"], ["publications", "Publications"], ["teaching", "Teaching"], ["outreach", "Outreach"], ["cv", "CV"]].map(([id, label]) => <li key={id}><a href={`#${id}`} className="text-[12px] text-muted-foreground transition-colors hover:text-foreground">{label}</a></li>)}</ul></nav> */}
      </header>
    <section id="about"><SectionLabel>About</SectionLabel><div className="space-y-4">
      <p className="text-[15px] leading-[1.8] text-foreground">Hello! I am a Ph.D. Candidate in the Department of Physics and Astronomy at Stony Brook University.</p>
      <p className="text-[15px] leading-[1.8] text-foreground">My research focuses on measuring and mitigating systematic effects in probes of the large-scale structure of the universe. 
        Overcoming these systematics is key to enabling precision observational cosmology experiments.
        I am heavily involved in the LSST Dark Energy Science Collaboration and its ongoing efforts to measure cosmology from the Vera Rubin Observatory's 10-year survey.</p>
      <p className="text-[15px] leading-[1.8] text-foreground">I'm also very interested in scientific outreach and education. 
        I particularly enjoy education at the high school and undergraduate level, 
        in which I can introduce technical skills on top of students' pre-existing conceptual knowledge.</p></div>
    </section>
    <section id="research"><SectionLabel>Research</SectionLabel><div className="space-y-8">{researchAreas.map((area) => <div key={area.id}><Link to={`/research#${area.id}`} className="text-[14px] font-medium text-foreground underline decoration-border underline-offset-4 hover:text-muted-foreground">{area.title}</Link><p className="mt-1.5 text-[14px] leading-[1.8] text-muted-foreground">{area.description[0]}</p></div>)}</div></section>
    <section id="publications"><SectionLabel>Publications &amp; Manuscripts</SectionLabel><div className="space-y-8"><PublicationList title="First Author & Major Contributions" publications={majorPublications} /><PublicationList title="Contributing Author" publications={contributingPublications} /></div></section>
    <section id="teaching"><SectionLabel>Teaching</SectionLabel><TeachingGroups groups={teachingGroups} /></section>
    <section id="outreach"><SectionLabel>Outreach</SectionLabel><div className="space-y-6">{outreachEntries.map((entry) => <article key={entry.id} className="flex gap-5 border-t border-border pt-4"><span className="mt-0.5 w-9 shrink-0 py-0.5 text-[12px] text-muted-foreground" style={mono}>{entry.year}</span><div><h3 className="mb-1 text-[14px] font-medium text-foreground">{entry.title}</h3><p className="text-[13px] leading-[1.7] text-muted-foreground">{entry.description}</p></div></article>)}</div></section>
    <section id="cv" className="pb-24"><SectionLabel>Curriculum Vitae</SectionLabel><div className="space-y-10"><div><h3 className="mb-4 text-[12px] text-muted-foreground" style={mono}>Education</h3><div className="space-y-4">{educationEntries.map((entry) => <div key={entry.id} className="flex gap-5"><span className="mt-0.5 w-9 shrink-0 py-0.5 text-[12px] text-muted-foreground" style={mono}>{entry.year}</span><div><p className="text-[14px] text-foreground">{entry.degree}</p><p className="pb-1 text-[14px] text-muted-foreground">{entry.institution}</p><p className="text-[12px] italic text-muted-foreground">Advisor: {entry.advisor}</p>{entry.note && <p className="text-[12px] italic text-muted-foreground">{entry.note}</p>}</div></div>)}</div></div><div><h3 className="mb-4 text-[12px] text-muted-foreground" style={mono}>Awards &amp; Honors</h3><div className="space-y-0.5">{awardEntries.map((award) => <div key={award.id} className="flex gap-5"><span className="w-18 shrink-0 py-0.5 text-[12px] text-muted-foreground" style={mono}>{award.year}</span><p className="text-[13px] text-foreground">{award.title}</p></div>)}</div></div><a href={cvPdf} download className="text-[13px] text-foreground underline underline-offset-4">Download full CV (PDF)</a></div></section>
  </div>;
}
