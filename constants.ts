import { Project, Skill, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Coffee Shop Website',
    description: 'A fully responsive, modern web platform designed for a premium coffee experience. Built with clean code and a focus on intuitive user navigation.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    link: 'https://global-coffee-house-2-w5g9.vercel.app'
  },
  {
    id: '2',
    title: 'Cars Showcase',
    description: 'An elegant automotive exhibition platform showcasing premium vehicles with high-fidelity imagery and fluid responsive layouts.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    tags: ['UI/UX', 'JavaScript', 'Deployment'],
    link: 'https://cars-qto3.vercel.app/'
  },
  {
    id: '3',
    title: 'Bella Vista Dubai',
    description: 'A luxury digital presence for an authentic Italian restaurant, featuring elegant typography and immersive imagery tailored for the fine dining sector.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
    tags: ['Luxury Design', 'Frontend', 'Deployment'],
    link: 'https://bella-vista-dubai-authentic-italian-coral.vercel.app/'
  }
];

export const SKILLS: Skill[] = [
  { name: 'HTML5', level: 98, category: 'Frontend' },
  { name: 'CSS3 / Modern Layouts', level: 96, category: 'Frontend' },
  { name: 'JavaScript (ES6+)', level: 94, category: 'Frontend' },
  { name: 'Responsive Web Design', level: 98, category: 'Frontend' },
  { name: 'Website Deployment', level: 90, category: 'Tools' },
  { name: 'UI and UX Basics', level: 85, category: 'Frontend' },
  { name: 'Interactive Elements', level: 92, category: 'Frontend' },
  { name: 'Clean & Efficient Coding', level: 95, category: 'Soft Skills' },
];
