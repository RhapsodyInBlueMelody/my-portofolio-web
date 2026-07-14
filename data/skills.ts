export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "C", "SQL", "Python"],
  },
  {
    label: "Frameworks & Tools",
    items: ["React Native", "Bun", "ElysiaJS", "Prisma", "PostgreSQL", "Docker", "Git", "Three.js"],
  },
  {
    label: "Systems & Embedded",
    items: ["Linux (daily driver)", "Neovim", "Basic Networking", "ESP8266", "MQTT"],
  },
];
