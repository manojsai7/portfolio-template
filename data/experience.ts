export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Company Inc.',
    position: 'Senior Full Stack Developer',
    startDate: '2022-01',
    endDate: 'Present',
    description: 'Led development of key features for the main product, mentored junior developers, and improved application performance by 40%.',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
  },
  {
    id: '2',
    company: 'StartUp Co.',
    position: 'Full Stack Developer',
    startDate: '2020-06',
    endDate: '2021-12',
    description: 'Built and maintained multiple client projects, implemented CI/CD pipelines, and collaborated with design team.',
    skills: ['Vue.js', 'Python', 'Docker', 'PostgreSQL'],
  },
  {
    id: '3',
    company: 'Digital Agency',
    position: 'Frontend Developer',
    startDate: '2019-01',
    endDate: '2020-05',
    description: 'Developed responsive websites and web applications for various clients, ensuring cross-browser compatibility.',
    skills: ['JavaScript', 'HTML/CSS', 'WordPress', 'jQuery'],
  },
];
