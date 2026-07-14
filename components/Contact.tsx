import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const contacts = [
  {
    command: "mail --to faiz",
    label: "syeddinulfaiz14@gmail.com",
    href: "mailto:syeddinulfaiz14@gmail.com",
    icon: Mail,
    hover: "hover:text-gv-yellow hover:border-gv-yellow",
  },
  {
    command: "open linkedin",
    label: "linkedin.com/in/syeddinul-faiz-c4n",
    href: "https://www.linkedin.com/in/syeddinul-faiz-c4n",
    icon: Linkedin,
    hover: "hover:text-gv-blue hover:border-gv-blue",
  },
  {
    command: "open github",
    label: "github.com/RhapsodyInBlueMelody",
    href: "https://github.com/RhapsodyInBlueMelody",
    icon: Github,
    hover: "hover:text-gv-fg1 hover:border-gv-fg3",
  },
  {
    command: "cat resume.pdf",
    label: "Download resume",
    href: "/resume.pdf",
    icon: FileDown,
    hover: "hover:text-gv-aqua hover:border-gv-aqua",
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <SectionLabel path="/contact" title="Get in touch" />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="text-gv-fg3 max-w-xl mb-8">
            Open to internship and junior developer roles. The fastest way to
            reach me is email or LinkedIn.
          </p>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 max-w-2xl">
          {contacts.map((c, i) => (
            <Reveal key={c.command} delay={0.08 + i * 0.05}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className={`group flex items-center gap-3 rounded-md border border-gv-bg2 bg-gv-bg1 px-4 py-3 transition-colors ${c.hover}`}
              >
                <c.icon size={18} className="text-gv-fg4 group-hover:text-inherit shrink-0" />
                <div className="min-w-0">
                  <p className="font-mono text-xs text-gv-fg4">{c.command}</p>
                  <p className="font-mono text-sm text-gv-fg2 truncate">
                    {c.label}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <footer className="border-t border-gv-bg2">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-gv-fg4">
          <p>© {new Date().getFullYear()} Syeddinul Faiz Caniggia</p>
          <p>built with Next.js · deployed on Vercel</p>
        </div>
      </footer>
    </section>
  );
}
