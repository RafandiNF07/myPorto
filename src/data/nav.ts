export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/#blog" },
] as const;

export const footerLinks: NavLink[] = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/#blog" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
] as const;
