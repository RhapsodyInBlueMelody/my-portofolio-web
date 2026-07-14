import { certifications } from "@/data/certifications";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { BadgeCheck } from "lucide-react";

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
                <div>
                  <h3 className="font-mono text-sm sm:text-base text-gv-fg1 font-semibold">
                    {c.title}
                  </h3>
                  <p className="text-gv-fg4 text-xs sm:text-sm mb-1.5">
                    {c.issuer}
                  </p>
                  <p className="text-gv-fg3 text-sm">{c.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
