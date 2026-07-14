"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, FileDown, Mail } from "lucide-react";

const FULL_TEXT = "Syeddinul Faiz Caniggia";

export default function Hero() {
    const [typed, setTyped] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        const reduce =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduce) {
            setTyped(FULL_TEXT);
            setDone(true);
            return;
        }

        let i = 0;
        const interval = setInterval(() => {
            i += 1;
            setTyped(FULL_TEXT.slice(0, i));
            if (i >= FULL_TEXT.length) {
                clearInterval(interval);
                setDone(true);
            }
        }, 45);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="top"
            className="relative min-h-[92vh] flex items-center border-b border-gv-bg2 bg-grid-fade bg-grid"
        >
            <div className="mx-auto max-w-5xl px-5 sm:px-8 py-24 w-full">
                <div className="flex flex-col-reverse lg:flex-row lg:items-end gap-12 lg:gap-14">
                    <div className="flex-1 min-w-0">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="rounded-md border border-gv-bg2 bg-gv-bg1/70 shadow-2xl shadow-black/30 overflow-hidden max-w-2xl"
                        >
                            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-gv-bg2 bg-gv-bg0h">
                                <span className="w-2.5 h-2.5 rounded-full bg-gv-red/70" />
                                <span className="w-2.5 h-2.5 rounded-full bg-gv-yellow/70" />
                                <span className="w-2.5 h-2.5 rounded-full bg-gv-green/70" />
                                <span className="ml-3 font-terminal text-xs text-gv-fg4">
                                    faiz@portfolio: ~
                                </span>
                            </div>

                            <div className="p-5 sm:p-6 font-terminal text-sm sm:text-base leading-relaxed">
                                <p className="text-gv-fg4">
                                    <span className="text-gv-aqua">~</span> $ whoami
                                </p>
                                <p className="mt-1 text-gv-yellow text-xl sm:text-2xl font-semibold">
                                    {typed}
                                    {!done && <span className="animate-blink">▊</span>}
                                </p>

                                {done && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <p className="mt-4 text-gv-fg2">
                                            Computer Science student — Universitas Pelita Bangsa
                                        </p>
                                        <p className="text-gv-fg4">
                                            Semester 7 · IPK 3.48 · Expected graduation 2027
                                        </p>
                                        <p className="mt-3 text-gv-fg3">
                                            Full-stack, IoT, and systems-leaning developer. Linux
                                            daily driver, Neovim user, comfortable from embedded C
                                            up to mobile apps.
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: done ? 1 : 0, y: done ? 0 : 12 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="mt-8 flex flex-wrap gap-3 font-mono text-sm"
                        >
                            <a
                                href="https://github.com/RhapsodyInBlueMelody"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded border border-gv-bg2 bg-gv-bg1 px-4 py-2 text-gv-fg2 hover:border-gv-yellow hover:text-gv-yellow transition-colors"
                            >
                                <Github size={16} /> open github
                            </a>
                            <a
                                href="https://www.linkedin.com/in/syeddinul-faiz-c4n"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded border border-gv-bg2 bg-gv-bg1 px-4 py-2 text-gv-fg2 hover:border-gv-blue hover:text-gv-blue transition-colors"
                            >
                                <Linkedin size={16} /> connect
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded border border-gv-bg2 bg-gv-bg1 px-4 py-2 text-gv-fg2 hover:border-gv-aqua hover:text-gv-aqua transition-colors"
                            >
                                <FileDown size={16} /> cat resume.pdf
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded border border-gv-bg2 bg-gv-bg1 px-4 py-2 text-gv-fg2 hover:border-gv-orange hover:text-gv-orange transition-colors"
                            >
                                <Mail size={16} /> get in touch
                            </a>
                        </motion.div>
                    </div>

                    {/* Portrait — sits beside the terminal, framed like a HUD target-lock rather than a plain headshot */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="relative w-48 sm:w-60 lg:w-64 shrink-0 mx-auto lg:mx-0"
                    >
                        {/* ambient glow behind the cutout */}
                        <div className="absolute inset-0 -z-10 rounded-full bg-gv-yellow/10 blur-3xl" />

                        <div className="relative aspect-[4/5]">
                            <Image
                                src="/images/faiz-portrait.png"
                                alt="Portrait of Syeddinul Faiz Caniggia"
                                fill
                                priority
                                className="object-contain object-bottom drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                            />

                            {/* corner brackets, HUD-style framing */}
                            <span className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-gv-yellow/70 rounded-tl-sm" />
                            <span className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-gv-yellow/70 rounded-tr-sm" />
                            <span className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-gv-yellow/70 rounded-bl-sm" />
                            <span className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-gv-yellow/70 rounded-br-sm" />
                        </div>

                        <p className="mt-3 text-center lg:text-left font-mono text-[11px] text-gv-fg4 tracking-wide">
                            STATUS: <span className="text-gv-green">ONLINE</span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
