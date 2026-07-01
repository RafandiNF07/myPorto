export interface SkillCategory {
  domain: string;
  skills: readonly string[];
}

export const capabilities: readonly SkillCategory[] = [
  {
    domain: "Backend & APIs",
    skills: ["Python", "FastAPI", "Node.js", "Express.js"]
  },
  {
    domain: "Database & Cache",
    skills: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    domain: "Infrastructure",
    skills: ["Linux", "Docker", "Supabase"]
  },
  {
    domain: "Frontend",
    skills: ["Astro", "Next.js", "SvelteKit"]
  }
] as const;

export const currentlyLearning: readonly string[] = [
  "Cybersecurity",
  "Linux Internals",
  "Web Penetration Testing",
] as const;
