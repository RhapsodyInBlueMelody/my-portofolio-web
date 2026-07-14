import { projects } from "@/data/projects";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-gv-bg2">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24">
        <Reveal>
          <SectionLabel path="/projects" title="Projects" />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
