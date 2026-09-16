export const SECTIONS = ["about", "research", "publications", "teaching", "outreach", "cv"] as const;
export type Section = (typeof SECTIONS)[number];

export const SECTION_LABELS: Record<Section, string> = {
  about: "About", research: "Research", publications: "Publications", teaching: "Teaching", outreach: "Outreach", cv: "CV",
};

export interface ResearchArea {
  id: string;
  title: string;
  description: readonly string[];
}
export interface Publication {
  id: string;
  year: string;
  title: string;
  authors: string;
  venue: string;
  url?: string;
  note?: string;
}
export interface TeachingEntry {
  id: string;
  code: string;
  title: string;
  role: string;
  term: string;
}
export interface TeachingGroup {
  id: string;
  institution: string;
  entries: readonly TeachingEntry[];
}
export interface EducationEntry {
  id: string;
  year: string;
  degree: string;
  institution: string;
  advisor: string;
  note?: string;
}
export interface AwardEntry {
  id: string;
  year: string;
  title: string;
}
export interface OutreachEntry {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const researchAreas: readonly ResearchArea[] = [
  { id: "blending", title: "Galaxy Blending", description: ["Blending occurs when two or more objects overlap on the sky. For deep, ground-based photometric surveys, over half of the detected sources are expected to exhibit some degree of blending. I authored a paper showing that blending does not significantly impact LSST-like galaxy clustering cosmology analyses, although it may generate biases on nonlinear scales."] },
  { id: "halo-triaxiality", title: "Dark Matter Halo Triaxiality", description: ["Dark matter halos are typically treated as spherical in analytical modeling for cosmology experiments, but they are actually triaxial spheroids, and the orientation of these spheroids affects the measured weak lensing signal. I authored a paper showing that selecting round or elliptical lens galaxies — which is likely to be a proxy for the orientation of their host halos — generates a large bias in the galaxy-galaxy lensing signal. This bias propagates into a 2–3σ bias in cosmological and HOD parameters."] },
  { id: "hod-modeling", title: "HOD Modeling for LSST", description: ["I am involved in creating the modeling pipeline for the LSST DESC DP2 galaxy-galaxy lensing key project. Alongside my collaborators, I am developing software to efficiently model the small-scale tangential shear signal for arbitrary halo occupation frameworks, and to forecast optimal analysis choices for DP2 science."] },
  { id: "cirrus", title: "Galactic Cirrus", description: ["Galactic cirrus can be a significant source of contamination in extragalactic surveys. For LSST, we will need fast, automated, and targeted methods to mask regions with heavy cirrus contamination. I am developing a new algorithm to detect cirrus directly from optical images, to be used in LSST cosmology analyses."] },
];

export const majorPublications: readonly Publication[] = [
  { id: "rubin-view-a360", year: "2026", title: "A Rubin View of A360", authors: "A. von der Linden, ..., B. Levine, et al.", venue: "In prep." },
  { id: "lens-ellipticity-bias", year: "2026", title: "Lens Ellipticity Bias in the DES Y3 redMaGiC Sample", authors: "B. Levine, et al.", venue: "In prep." },
  { id: "lsst-blending", year: "2025", title: "Galaxy Clustering with LSST: Effects of Number Count Bias from Blending", authors: "B. Levine, et al.", venue: "OJA, 8", url: "https://astro.theoj.org/article/136427-galaxy-clustering-with-lsst-effects-of-number-count-bias-from-blending" },
  { id: "bachelors-thesis", year: "2022", title: "Brightest Cluster Galaxies in Strongly-Lensing Galaxy Clusters and Richness- and Redshift-Matched Samples", authors: "B. Levine", venue: "Bachelor's Thesis, The University of Chicago", url: "https://knowledge.uchicago.edu/record/4947?ln=en" },
];

export const contributingPublications: readonly Publication[] = [
  { id: "cluster-triaxiality", year: "2026", title: "Constraining Galaxy Cluster Triaxiality via Weak Lensing -- I. Preparation for the Rubin Data Beyond Leading Order", authors: "S. Fu, ..., B. Levine, et al.", venue: "Submitted to ApJ", url: "https://arxiv.org/abs/2605.06587" },
  { id: "bcg-ellipticity", year: "2026", title: "Brightest Cluster Galaxy ellipticity as proxy for halo shape: Orientation bias, assembly bias, and potential selection effects in SZ-selected clusters", authors: "R. Srinivasan, ..., B. Levine, et al.", venue: "Submitted to OJA", url: "https://arxiv.org/abs/2603.23689" },
  { id: "hod-estimation", year: "2026", title: "Halo Occupation Distribution estimation performance for LSST data", authors: "P. Cataldi, ..., B. Levine, et al.", venue: "A&A, 712 A114", url: "https://www.aanda.org/articles/aa/full_html/2026/08/aa59674-26/aa59674-26.html" },
  { id: "rubin-dp1", year: "2026", title: "The Vera C. Rubin Observatory Data Preview 1", authors: "Vera C. Rubin Observatory Team, including B. Levine", venue: "AJ, 171 360", url: "https://iopscience.iop.org/article/10.3847/1538-3881/ae521f" },
  { id: "interstellar-comet", year: "2026", title: "NSF-DOE Vera C. Rubin Observatory Observations of Interstellar Comet 3I/ATLAS (C/2025 N1)", authors: "C. Chandler, ..., B. Levine, et al.", venue: "ApJL, 1001 L35", url: "https://iopscience.iop.org/article/10.3847/2041-8213/ae4b3a" },
  { id: "cool-lamps-viii", year: "2025", title: "COOL-LAMPS. VIII. Known wide-separation lensed quasars and their host galaxies reveal a lack of evolution in $M_{BH}/M_{\\star}$ since $z\\sim3$", authors: "A. Cloonan, ..., B. Levine, et al.", venue: "ApJ, 987 194", url: "https://iopscience.iop.org/article/10.3847/1538-4357/addabf" },
  { id: "cool-lamps-vii", year: "2025", title: "COOL-LAMPS. VII. Quantifying Strong-lens Scaling Relations with 177 Cluster-scale Gravitational Lenses in DECaLS", authors: "S. Mork, ..., B. Levine, et al.", venue: "ApJ, 979 184", url: "https://iopscience.iop.org/article/10.3847/1538-4357/ada24c" },
  { id: "rubin-m1m3", year: "2024", title: "Rubin M1M3 support system dynamic performance", authors: "B. Quint, ..., B. Levine, et al.", venue: "Proc. SPIE 13094, Ground-based and Airborne Telescopes X, 1309429", url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13094/3019268/Rubin-M1M3-support-system-dynamic-performance/10.1117/12.3019268.short?tab=ArticleLink" },
  { id: "human-expert-inspection", year: "2023", title: "The impact of human expert visual inspection on the discovery of strong gravitational lenses", authors: "K. Rojas, ..., B. Levine, et al.", venue: "MNRAS, 523 3", url: "https://academic.oup.com/mnras/article/523/3/4413/7191857" },
  { id: "cool-lamps-iv", year: "2023", title: "COOL-LAMPS. IV. A Sample of Bright Strongly-Lensed Galaxies at $3<z<4$", authors: "Y. Zhang, ..., B. Levine, et al.", venue: "ApJ, 950 58", url: "https://iopscience.iop.org/article/10.3847/1538-4357/acc9be" },
];

export const teachingGroups: readonly TeachingGroup[] = [
  { id: "stony-brook", institution: "Stony Brook University", entries: [
    { id: "hs-wise-instructor", code: "HS WISE", title: "High School Women in Science and Engineering (HS WISE)", role: "Lead Instructor", term: "Fall 2023–Spring 2026" },
    { id: "hs-wise-lecturer", code: "HS WISE", title: "HS WISE Computational Astrophysics Course", role: "Guest Lecturer", term: "Spring 2025" },
    { id: "ast-200", code: "AST\u00A0200", title: "Current Astronomical Research at Stony Brook", role: "Guest Lecturer", term: "Spring 2025" },
    { id: "ast-443-phy-517", code: "AST\u00A0443 / PHY\u00A0517", title: "Observational Techniques in Astronomy", role: "Teaching Assistant", term: "Fall 2022, Fall 2023, Spring 2024" },
  ] },
  { id: "chicago", institution: "The University of Chicago", entries: [
    { id: "astr-119", code: "ASTR\u00A0119", title: "Physics of Stars: An Introduction", role: "Teaching Assistant", term: "Summer 2021" },
  ] },
];

export const outreachEntries: readonly OutreachEntry[] = [
  { id: "hs-wise", year: "2023–26", title: "Stony Brook University High School Women in Science and Engineering (HS WISE)", description: "Lead instructor for afterschool Astronomy & Astrophysics classes for local high school students. Designed original lectures and laboratory activities, culminating in a poster symposium at the end of the year." },
  { id: "custer-observatory", year: "2023–26", title: "Custer Institute and Observatory", description: "Volunteer educator at local public observatory on Long Island." },
];
export const educationEntries: readonly EducationEntry[] = [
  { id: "sbu-phd", year: "2027, exp.", degree: "Ph.D., Physics & Astronomy", institution: "Stony Brook University", advisor: "Anja von der Linden", note: "Dissertation: Ablabla" },
  { id: "uchicago-bs", year: "2022", degree: "B.S., Astronomy & Astrophysics", institution: "The University of Chicago", advisor: "Michael D. Gladders", note: "Honors Thesis: Brightest Cluster Galaxies in Strongly-Lensing Galaxy Clusters and Richness- and Redshift-Matched Samples" },
];
export const awardEntries: readonly AwardEntry[] = [
  { id: "doe-scgsr-2026", year: "2026", title: "DOE Office of Science Graduate Student Research (SCGSR) Award" },
  { id: "gerald-brown-2026-2024", year: "2026, 24", title: "Gerald Brown Prize for Outstanding Research" },
  { id: "suny-great-2025", year: "2025", title: "SUNY Graduate Research Empowering and Accelerating Talent (GREAT) Award" },
  { id: "teaching-excellence-2024", year: "2024", title: "Excellence in Teaching - Teaching Assistant Award" },
  { id: "nsf-grfp-2024", year: "2024", title: "NSF Graduate Research Fellowship Program (GRFP) Honorable Mention" },
  { id: "david-fox-2023", year: "2023", title: "David Fox Prize for Outstanding Teaching Assistant" },
  { id: "lourie-fellowship-2023", year: "2023", title: "Lourie Summer Research Fellowship" },
  { id: "uchicago-deans-list", year: "2022, 19", title: "University of Chicago Dean's List" },
  { id: "uchicago-summer-scholar-2022", year: "2022", title: "University of Chicago Summer Research Scholar Grant" },
  { id: "national-merit-2018-2022", year: "2018–22", title: "National Merit Scholarship" },
];
