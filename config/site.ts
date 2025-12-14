export const siteConfig = {
  name: 'Your Name',
  title: 'Portfolio | Your Name',
  description: 'Professional portfolio showcasing my work, projects, and experience.',
  url: 'https://yourportfolio.com',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
  nav: [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ],
};

export type SiteConfig = typeof siteConfig;
