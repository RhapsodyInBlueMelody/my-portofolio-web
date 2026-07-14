export type ProjectStatus = "live" | "demoed" | "prototype";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  statusLabel: string;
  stack: string[];
  problem: string;
  approach: string;
  result: string;
  links: { label: string; href: string }[];
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "pos-system",
    title: "Point of Sale System",
    tagline: "Full-stack mobile POS for a real employee cooperative",
    status: "prototype",
    statusLabel: "PROTOTYPE — NOT YET DEPLOYED",
    stack: [
      "React Native",
      "TypeScript",
      "Bun",
      "ElysiaJS",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "JWT / RBAC",
    ],
    problem:
      "KOSAI TB 1, an employee cooperative serving Suzuki staff in Tambun, Bekasi, ran all sales transactions through a manual cashbook — no structured record of transactions, no reliable stock tracking, and no visibility into what was actually selling.",
    approach:
      "Built a mobile Android POS app end to end: React Native/Expo frontend, ElysiaJS backend on the Bun runtime, PostgreSQL via Prisma ORM. Modeled the system with UML (use case, ERD, activity, sequence diagrams) before implementation. Authentication uses JWT with bcrypt password hashing, and access is split by role — Admin vs. Cashier — through role-based access control.",
    result:
      "Working system covering product/category/supplier management, transaction processing across Cash, QRIS, and bank transfer, transaction history with receipt printing, and sales analytics (revenue, 7-day trend, top-selling products, per-supplier consignment reporting). Two features — cashier account management and a digital-goods (PPOB) module — remain incomplete due to a backend connectivity issue and a third-party provider limitation, respectively. The system has not yet been deployed to KOSAI TB 1's live environment; it exists as a complete, tested prototype documented in an accompanying Kerja Praktek (KP) report.",
    links: [
      { label: "GitHub", href: "https://github.com/RhapsodyInBlueMelody/KKP-POS-PROJECT" },
    ],
  },
  {
    slug: "iot-gas-detector",
    title: "IoT Gas Leak Detector",
    tagline: "MQ-2 gas sensing with a tiered alert pipeline, built and soldered under exam pressure",
    status: "demoed",
    statusLabel: "DEMOED IN CLASS",
    stack: [
      "ESP8266 (NodeMCU)",
      "MQ-2 Gas Sensor",
      "MQTT (Mosquitto)",
      "Node-RED",
      "Telegram Bot API",
      "Relay + Buzzer + LED",
    ],
    problem:
      "A university exam project requiring a working IoT system, built and demoed under real time pressure — including soldering the sensor board by hand for the first time.",
    approach:
      "An ESP8266 (NodeMCU) reads gas concentration from an MQ-2 sensor and publishes readings over MQTT to a Mosquitto broker. Node-RED handles the dashboard and alert logic, escalating through a three-tier LED/buzzer warning system as gas levels rise, while a relay can trigger a mitigation actuator (e.g. an exhaust fan). A Telegram bot pushes real-time notifications so the alert isn't dependent on someone watching a dashboard.",
    result:
      "Successfully soldered, assembled, and demoed live in front of the class as an exam requirement — first hands-on soldering experience, working end-to-end pipeline from sensor to Telegram alert.",
    links: [],
    image: "/images/gas-detector-hardware.png",
  },
  {
    slug: "cli-file-organizer",
    title: "CLI File Organizer",
    tagline: "A C utility that keeps a cluttered Downloads folder sane",
    status: "live",
    statusLabel: "LIVE ON GITHUB",
    stack: ["C"],
    problem:
      "A personal Downloads folder that gets cluttered fast, and a strong disinclination to organize it by hand.",
    approach:
      "A command-line tool written in C: run it with a source and destination path (`./organizer <source> <destination>`) and it moves files into folders based on file extension. Dynamic extension detection, skips folder creation if a target already exists, and reports system-level errors per file without halting the whole run.",
    result:
      "V2.0 adds source/destination arguments (organize any folder, not just one hardcoded path), system-level error messages instead of generic failures, folder-creation confirmation, and an end-of-run summary of files moved vs. failed.",
    links: [
      { label: "GitHub", href: "https://github.com/RhapsodyInBlueMelody/C-File-Organizer" },
    ],
  },
  {
    slug: "c4n",
    title: "C4N — Observatory Drone",
    tagline: "An original character, modeled in Blender, brought to life on the web with Three.js",
    status: "live",
    statusLabel: "LIVE",
    stack: ["Three.js", "Blender", "JavaScript"],
    problem:
      "Wanted to learn Three.js and 3D-on-the-web from scratch, with a real, personally meaningful subject rather than a tutorial scene.",
    approach:
      "Designed and modeled C4N — a TV-headed observatory drone — in Blender, then integrated the model into a from-scratch Three.js scene: animated boot sequence, live-updating system stats (optical array, thruster output, power core), and a sci-fi HUD interface built entirely for the browser.",
    result:
      "A fully working, deployed 3D site with a working animation/state system and an interactive LiDAR-stream sub-page — built without a game engine, just Three.js and hand-authored animation logic.",
    links: [{ label: "Live site", href: "https://faiz-c4n.vercel.app/" }],
  },
];
