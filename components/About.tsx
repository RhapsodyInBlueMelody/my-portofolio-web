import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const config: [string, string][] = [
  ["name", "Syeddinul Faiz Caniggia"],
  ["program", "Teknik Informatika (Computer Science)"],
  ["university", "Universitas Pelita Bangsa"],
  ["semester", "7"],
  ["gpa", "3.48"],
  ["expected_graduation", "2027"],
];

export default function About() {
  return (
    <section id="about" className="border-b border-gv-bg2">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24">
        <Reveal>
          <SectionLabel path="/about.conf" title="About" />
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-5">
          <Reveal className="sm:col-span-2" delay={0.05}>
            <div className="rounded-md border border-gv-bg2 bg-gv-bg1 font-mono text-sm overflow-hidden">
              <div className="px-4 py-2 border-b border-gv-bg2 text-gv-fg4 text-xs">
                about.conf
              </div>
              <dl className="p-4 space-y-2">
                {config.map(([key, value]) => (
                  <div key={key} className="flex gap-2">
                    <dt className="text-gv-aqua">{key}</dt>
                    <dd className="text-gv-fg2">= &quot;{value}&quot;</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal className="sm:col-span-3" delay={0.1}>
            <div className="space-y-4 text-gv-fg2 leading-relaxed">
              <p>
                I&apos;m more comfortable one layer down — closer to the
                shell, the kernel, the protocol — than in front of people.
                Most of what I&apos;ve built reflects that: a full-stack POS
                system, an embedded gas-detection pipeline I soldered by
                hand, and a 3D web project built from scratch to actually
                understand how it works rather than just ship it.
              </p>
              <p>
                Linux has been my daily driver since high school, Neovim is
                where I actually write code, and I&apos;d rather debug
                something myself than hand it off — including to AI, which I
                use mainly as a teaching and debugging partner, not a
                replacement for understanding.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
