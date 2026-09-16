import { useEffect } from "react";
import { Link, useLocation, useOutletContext } from "react-router";
import { Moon, Sun } from "lucide-react";
import blendingWTheta from "../components/images/blending_wtheta.png";
import blendingBTK from "../components/images/blending_btk_illustration.png";
import triaxialityIllustration from "../components/images/triaxiality_illustration.png";
import triaxialityDelSig from "../components/images/triaxiality_dsigma.png";
import cirrusDetection from "../components/images/cirrus_placeholder.png";
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
    
    {/* Blending */}
    <section id="blending">
        <SectionLabel>Galaxy Blending</SectionLabel>
        <p className="text-[14px] leading-[1.8] text-muted-foreground mt-1.5">
            Blending is a photometric systematic that occurs when two or more 
            objects overlap on the sky. In the example shown below, I simulate
            the effect of layering two galaxies (left column) to produce a blend
            (top right), and then apply some LSST-like noise (bottom right).
            For blends like this, where the sources are nearly the same brightness,
            it can be difficult to accurately measure flux, shape, and position 
            from the noisy blended image.
        </p>

        <img
          src={blendingBTK}
          alt="Blending illustration from BTK"
          className="mt-6 h-auto w-100 mx-auto"
        />

        <p className="mt-6 text-[14px] leading-[1.8] text-muted-foreground">  
            In <Link to={"https://astro.theoj.org/article/136427-galaxy-clustering-with-lsst-effects-of-number-count-bias-from-blending"}
                  className="inline break-words text-[14px] font-medium text-foreground hover:text-muted-foreground underline underline-offset-4 decoration-border"
            >
              Levine <em>et al.</em> (2025)
            </Link>,
            I used the LSST DC2 simulated galaxy catalog to study how blending
            affects galaxy clustering measurements in LSST Y1. 
            We generated a blended sample by matching observed sources in the 
            image simulation to nearby galaxies in the base simulation. Galaxies
            with more than one nearby truth object are considered blended.
        </p>
        <p className="mt-6 text-[14px] leading-[1.8] text-muted-foreground">
            For deep, ground-based photometric surveys, we found that over half 
            of the detected sources are expected to exhibit some degree of 
            blending — in agreement with results found from other studies.
            We also found that, after measuring the galaxy clustering signal
            and propagating these measurements into cosmological parameters,
            that blending does not significantly 
            impact LSST-like galaxy clustering cosmology analyses, 
            although it may generate significant biases on nonlinear scales.
        </p>
                    
        <img
          src={blendingWTheta}
          alt="Galaxy clustering measurements for blended and isolated galaxy samples"
          className="mt-6 h-auto w-140 mx-auto img-invert-on-dark"
        />

    </section>

    <div className="border-t border-border flex gap-5"></div>

    {/* Triaxiality */}
    <section id="halo-triaxiality">
        <SectionLabel>Dark Matter Halo Triaxiality</SectionLabel>
        <p className="text-[14px] leading-[1.8] text-muted-foreground mt-1.5">
            Dark matter halos are typically treated as spherical in analytical modeling 
            for cosmology experiments, but they are actually triaxial spheroids. In the 
            image below, notice how the projected surface mass density of an ellipsoid changes
            depending on the viewing angle. In gravitational lensing, the weak lensing
            signal is proportional to the surface mass density, meaning that the orientation 
            of halos can bias the observed lensing.
        </p>

        <img
          src={triaxialityIllustration}
          alt="Toy illustration of halo triaxiality"
          className="mt-6 h-auto w-90 mx-auto img-invert-on-dark"
        />

        <p className="mt-6 text-[14px] leading-[1.8] text-muted-foreground">
            How can such an orientation bias be generated? In galaxy cluster cosmology,
            this effect is well-documented. Clusters oriented along the line of sight appear
            denser and more massive, thereby upscattering into a mass-selected sample. On the 
            other hand, clusters oriented perpendicular to the line of sight appear less dense
            and may drop out of a sample. For clusters, it has been shown that the orientation
            of the cluster is traced by the orientation of the central galaxy of the halo.
        </p>

        <p className="mt-6 text-[14px] leading-[1.8] text-muted-foreground">
            Cluster-scale halos are not the only sample of interest for cosmology. Galaxy-
            and group-scale halos are used in 2-point correlation function measurements;
            a selection effect based on the orientation of the lens galaxies used in these measurements
            could bias the average observed halo orientation, and thus the observed lensing signal.
        </p>

        <img
          src={triaxialityDelSig}
          alt="Delta Sigma measurements for round and elliptical lens galaxy samples"
          className="mt-6 h-auto w-120 mx-auto img-invert-on-dark"
        />

        <p className="mt-6 text-[14px] leading-[1.8] text-muted-foreground">
            I authored a paper showing that selecting round or elliptical 
            lens galaxies generates a large bias in the galaxy-galaxy 
            lensing signal. This bias propagates into a 2–3σ bias in cosmological 
            and HOD parameters. I received a DOE SCGSR fellowship to extend this work,
            attempting to reproduce and explore lens orientation bias in mock galaxy catalogs
            at Argonne National Laboratory.
        </p>

    </section>

    <div className="border-t border-border flex gap-5"></div>

    {/* HOD Modeling */}
    <section id="hod-modeling">
        <SectionLabel>HOD Modeling for LSST</SectionLabel>
        <p className="text-[14px] leading-[1.8] text-muted-foreground mt-1.5">
            Bla bla blabla
        </p>
    </section>

    <div className="border-t border-border flex gap-5"></div>

    {/* Cirrus */}
    <section id="cirrus">
        <SectionLabel>Galactic Cirrus</SectionLabel>
        <p className="text-[14px] leading-[1.8] text-muted-foreground mt-1.5">
            Filaments of dust in the Milky Way can be a significant source of contamination
            in extragalactic surveys. These filaments, known as "Galactic Cirrus," are visible
            in optical and infrared images and can lead to a number of systematic effects. 
            Cirrus unevenly brightens the image, which can lead to poor background subtraction
            and biased photometry. Particularly bright regions of cirrus can also lead to spurious
            source detections and bias shape measurements of galaxies. 
        </p>
        <p className="mt-6 text-[14px] leading-[1.8] text-muted-foreground">
            Regions with heavy cirrus are often masked out either by hand or by using all-sky
            infrared dust maps. However, hand-masking is time consuming and the existing dust maps
            are not of comparable resolution to Stage-IV surveys. Fast, optical detection
            of cirrus would allow for more accurate and targeted masking in LSST and other modern surveys.
        </p>
        <img
          src={cirrusDetection}
          alt="Cirrus map in the LSST DP2 data"
          className="mt-6 h-auto w-120 mx-auto img-invert-on-dark"
        />
        <p className="mt-6 text-[14px] leading-[1.8] text-muted-foreground">
            I led the masking efforts for an LSST commissioning project involving shear measurement
            around the galaxy cluster Abell 360. Now, I am developing a novel technique to detect cirrus
            automatically in the LSST DP2 data, and plan to apply it to the LSST DESC DP2 Clusters key project.
        </p>
    </section>

    </div>
  );
}
