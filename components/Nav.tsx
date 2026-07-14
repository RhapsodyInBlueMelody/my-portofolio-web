"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#certifications", label: "certs" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gv-bg2 bg-gv-bg0/90 backdrop-blur">
      <nav className="mx-auto max-w-5xl px-5 sm:px-8 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm text-gv-yellow font-medium"
        >
          faiz@portfolio<span className="text-gv-fg4">:~$</span>
        </a>

        <ul className="hidden sm:flex items-center gap-6 font-mono text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-gv-fg3 hover:text-gv-yellow transition-colors"
              >
                ./{l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="sm:hidden text-gv-fg2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="sm:hidden flex flex-col gap-1 px-5 pb-4 font-mono text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-gv-fg3 hover:text-gv-yellow"
              >
                ./{l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
