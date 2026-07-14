export interface Certification {
  title: string;
  issuer: string;
  detail: string;
}

export const certifications: Certification[] = [
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    detail: "Foundational networking concepts and practices.",
  },
  {
    title: "Google Cloud Skills Boost — Arcade",
    issuer: "Google Cloud",
    detail: "Badges earned across IAM, Compute Engine (VM), and Pub/Sub labs.",
  },
];
