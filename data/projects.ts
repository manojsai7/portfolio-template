export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
    external?: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with payment integration, inventory management, and admin dashboard.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    links: {
      demo: 'https://demo.example.com',
      github: 'https://github.com/yourusername/project',
    },
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team features, and analytics.',
    image: '/images/projects/taskapp.jpg',
    tags: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
    links: {
      demo: 'https://taskapp.example.com',
      github: 'https://github.com/yourusername/taskapp',
    },
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with forecasts, maps, and location-based alerts.',
    image: '/images/projects/weather.jpg',
    tags: ['Vue.js', 'Weather API', 'Chart.js', 'CSS'],
    links: {
      demo: 'https://weather.example.com',
    },
  },
  {
    id: '4',
    title: 'Blog Platform',
    description: 'Modern blogging platform with markdown support, SEO optimization, and analytics.',
    image: '/images/projects/blog.jpg',
    tags: ['Next.js', 'MDX', 'Vercel', 'CMS'],
    links: {
      demo: 'https://blog.example.com',
      github: 'https://github.com/yourusername/blog',
    },
  },
];
