import { skills } from "@/data/skills";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-gv-bg2">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24">
        <Reveal>
          <SectionLabel path="/skills" title="Skills" />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="rounded-md border border-gv-bg2 bg-gv-bg1 p-5 h-full">
                <p className="font-mono text-xs text-gv-fg4 mb-3 tracking-wide">
                  {group.label.toUpperCase()}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2 py-1 rounded bg-gv-bg0h border border-gv-bg2 text-gv-fg2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
