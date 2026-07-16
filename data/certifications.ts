export interface Certification {
    title: string;
    issuer: string;
    detail: string;
    links: { label: string; href: string }[];
}

export const certifications: Certification[] = [
    {
        title: "Networking Basics",
        issuer: "Cisco Networking Academy",
        detail: "Foundational networking concepts and practices.",
        links: [
            { label: "LinkedIn Post", href: "https://lnkd.in/p/gWXfRhT6" },
        ],

    },
    {
        title: "Google Cloud Skills Boost — Arcade",
        issuer: "Google Cloud",
        detail: "Badges earned across IAM, Compute Engine (VM), and Pub/Sub labs.",
        links: [
            { label: "Credly", href: "https://www.credly.com/badges/1b5e203c-865e-481c-bfec-94be05f22548/public_url" },
        ],

    },
    {
        title: "Foundational C# with Microsoft",
        issuer: "freeCodeCamp (Microsoft curriculum)",
        detail: "Foundational C# Programming Language",
        links: [
            { label: "Certificate", href: "https://freecodecamp.org/certification/faizcan/foundational-c-sharp-with-microsoft" },
        ],

    },

];
