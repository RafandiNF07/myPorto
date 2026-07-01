export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
  jobTitle: string;
  knowsAbout: string[];
  email: string;
  socials: {
    github: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Rafandi Nova Fitra",
  title: "Rafandi Nova Fitra | Backend Engineer",
  description: "Backend Developer specializing in modern web architecture, resilient systems, and robust infrastructure.",
  url: "https://rafandi.me",
  author: "Rafandi Nova Fitra",
  jobTitle: "Backend Engineer",
  knowsAbout: ["Backend Development", "System Architecture", "API Design", "Database Management", "Cloud Infrastructure"],
  email: "rafandinf07@gmail.com",
  socials: {
    github: "https://github.com/rafandinf07",
    linkedin: "https://linkedin.com/in/rafandinf"
  }
} as const;
