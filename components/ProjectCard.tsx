"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";

const statusColor: Record<Project["status"], string> = {
  live: "text-gv-green border-gv-green/40 bg-gv-green/10",
  demoed: "text-gv-orange border-gv-orange/40 bg-gv-orange/10",
  prototype: "text-gv-fg4 border-gv-bg3 bg-gv-bg2/60",
};

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-md border border-gv-bg2 bg-gv-bg1 overflow-hidden transition-colors hover:border-gv-bg3">
      {project.image && (
        <div className="relative w-full aspect-[16/10] border-b border-gv-bg2 bg-gv-bg0h">
          <Image
            src={project.image}
            alt={`${project.title} hardware photo`}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span
            className={`font-mono text-[11px] tracking-wide px-2 py-0.5 rounded border ${statusColor[project.status]}`}
          >
            {project.statusLabel}
          </span>
        </div>

        <h3 className="font-mono text-lg sm:text-xl text-gv-fg1 font-semibold">
          {project.title}
        </h3>
        <p className="mt-1.5 text-gv-fg3 text-sm sm:text-base">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-xs px-2 py-0.5 rounded bg-gv-bg0h text-gv-aqua border border-gv-bg2"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 font-mono text-sm text-gv-yellow hover:text-gv-fg1 transition-colors"
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
            {open ? "hide details" : "read case study"}
          </button>

          {project.links.map((l) => (
            <a
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
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-gv-bg2 bg-gv-bg0h"
          >
            <div className="p-5 sm:p-6 space-y-4 text-sm sm:text-[15px] leading-relaxed">
              <div>
                <p className="font-mono text-xs text-gv-orange mb-1">
                  PROBLEM
                </p>
                <p className="text-gv-fg2">{project.problem}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-gv-blue mb-1">
                  APPROACH
                </p>
                <p className="text-gv-fg2">{project.approach}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-gv-green mb-1">RESULT</p>
                <p className="text-gv-fg2">{project.result}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
