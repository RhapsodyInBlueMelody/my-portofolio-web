export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Development Assistant",
    org: "Faculty Project (Part-Time)",
    period: "May 2026",
    points: [
      "Assisted in developing a Point of Sale system for a real cooperative client.",
      "Worked across backend and mobile application development with React Native, Prisma, and PostgreSQL.",
    ],
  },
  {
    role: "Store Vendor",
    org: "D'Kriuk Fried Chicken, Permata Cikarang Timur Residence",
    period: "Dec 2025 – Apr 2026",
    points: [
      "Handled customer transactions and daily cash processing in a fast-paced retail environment.",
      "Managed inventory and stock tracking.",
    ],
  },
];
