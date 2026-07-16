import { certifications } from "@/data/certifications";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { BadgeCheck, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="border-b border-gv-bg2">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24">
        <Reveal>
          <SectionLabel path="/certifications" title="Certifications" />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="rounded-md border border-gv-bg2 bg-gv-bg1 p-5 flex gap-3 h-full">
                <BadgeCheck className="text-gv-aqua shrink-0 mt-0.5" size={20} />
                <div className="min-w-0 flex-1">
                  <h3 className="font-mono text-sm sm:text-base text-gv-fg1 font-semibold">
                    {c.title}
                  </h3>
                  <p className="text-gv-fg4 text-xs sm:text-sm mb-1.5">
                    {c.issuer}
                  </p>
                  <p className="text-gv-fg3 text-sm">{c.detail}</p>

                  {c.links.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                      {c.links.map((l) => (
                        
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-sm text-gv-fg3 hover:text-gv-blue transition-colors"
                        >
                          <ExternalLink size={14} /> {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
