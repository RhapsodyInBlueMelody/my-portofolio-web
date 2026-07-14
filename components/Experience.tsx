import { experience } from "@/data/experience";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-gv-bg2">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24">
        <Reveal>
          <SectionLabel path="/experience.log" title="Experience" />
        </Reveal>

        <div className="relative pl-6 sm:pl-8">
          <div className="absolute left-[5px] sm:left-[7px] top-1 bottom-1 w-px bg-gv-bg3" />
          <div className="space-y-10">
            {experience.map((item, i) => (
              <Reveal key={item.role + item.period} delay={i * 0.08}>
                <div className="relative">
                  <span className="absolute -left-6 sm:-left-8 top-1.5 w-[11px] h-[11px] rounded-full bg-gv-yellow status-dot" />
                  <p className="font-mono text-xs text-gv-fg4 mb-1">
                    {item.period}
                  </p>
                  <h3 className="font-mono text-base sm:text-lg text-gv-fg1 font-semibold">
                    {item.role}
                  </h3>
                  <p className="text-gv-aqua text-sm mb-2">{item.org}</p>
                  <ul className="space-y-1">
                    {item.points.map((pt) => (
                      <li
                        key={pt}
                        className="text-gv-fg3 text-sm sm:text-[15px] flex gap-2"
                      >
                        <span className="text-gv-fg4">–</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
