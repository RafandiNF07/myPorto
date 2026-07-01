export interface Certification {
  name: string;
  issuer: string;
  date: string;
  recordId: string;
  link: string;
  status: "verified" | "lost" | "in-progress";
}

export const certifications: readonly Certification[] = [
  {
    name: "Junior Web Developer",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    date: "Archived",
    recordId: "BNSP-JWD",
    link: "#",
    status: "lost",
  }
] as const;
