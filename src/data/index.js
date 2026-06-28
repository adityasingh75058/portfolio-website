export const NAV_ITEMS = [
  'Home',
  'About',
  'Experience',
  'Projects',
  'Tech Stack',
  'Certificates',
  'Contact',
];

export const HERO_ROLES = [
  'Java Backend Developer',
  'Software Engineer',
  'Spring Boot Developer',
  'Full-Stack Developer',
];

export const TECH_BADGES_HERO = [
  { label: 'Spring Boot', style: { top: '4%', left: '50%', transform: 'translateX(-50%)' } },
  { label: 'Docker',      style: { top: '22%', left: '88%' } },
  { label: 'Java',        style: { top: '50%', left: '95%', transform: 'translateY(-50%)' } },
  { label: 'React',       style: { top: '78%', left: '85%' } },
  { label: 'REST APIs',   style: { bottom: '2%', left: '50%', transform: 'translateX(-50%)' } },
  { label: 'MySQL',       style: { top: '50%', left: '2%', transform: 'translateY(-50%)' } },
];

export const STATS = [
  { n: '3', suffix: '+', label: 'Projects Shipped' },
  { n: '2', suffix: '',  label: 'Internships' },
  { n: '5', suffix: '',  label: 'Certifications' },
  { n: '100', suffix: '%', label: 'Dedication' },
];

export const EXPERIENCE = [
  {
    role: 'Java Full Stack Intern',
    company: 'Talent Next — Wipro Affiliated Program',
    date: 'Jul 2025 – Oct 2025',
    points: [
      'Developed scalable backend modules using Java, JDBC, and SQL for enterprise-grade, database-driven applications.',
      'Applied multithreading and the Collections Framework to optimize concurrency, reducing bottlenecks under high load.',
      'Designed and tested RESTful APIs that improved system modularity across frontend and backend layers.',
      'Implemented JUnit test suites, reducing defect rates in delivered features.',
    ],
    stack: ['Java', 'JDBC', 'Spring Boot', 'MySQL', 'JUnit', 'REST APIs', 'Git'],
  },
  {
    role: 'Website Design & Development Intern',
    company: 'iStudio Technologies',
    date: 'Jun 2025 – Dec 2025',
    points: [
      'Designed and delivered responsive, cross-device web pages for real-world client projects.',
      'Built pixel-perfect UI layouts with modern CSS and JavaScript, consistently meeting deadlines.',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
  },
];

export const PROJECTS = [
  {
    tag: '// 01 — featured',
    name: 'Book Management REST API',
    desc: 'Production-ready CRUD API with a strict Controller–Service–Repository architecture, containerized end-to-end with Docker Compose for consistent deployment.',
    stack: ['Java', 'Spring Boot', 'JPA', 'Hibernate', 'MySQL', 'Docker'],
    github: 'https://github.com/adityasingh75058/Book-Management-API',
    demo: null,
  },
  {
    tag: '// 02',
    name: 'AI Movie Insight Builder',
    desc: 'Full-stack app that pulls live movie data via the OMDb API and classifies audience sentiment into Positive / Mixed / Negative verdicts, served through Next.js API routes.',
    stack: ['Next.js', 'React', 'Node.js', 'OMDb API', 'Vercel'],
    github: 'https://github.com/adityasingh75058/ai-movie-insight-builder',
    demo: 'https://ai-movie-insight-builder-three.vercel.app',
  },
  {
    tag: '// 03',
    name: 'Stock Market Prediction System',
    desc: 'Supervised regression model on historical market data with feature engineering and k-fold cross-validation, packaged as a reproducible Jupyter notebook.',
    stack: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/adityasingh75058/Python_stockmarket-project',
    demo: null,
  },
];

export const TECH_STACK = [
  { icon: '🗄️', title: 'Backend',          items: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'JDBC', 'REST APIs'] },
  { icon: '🖥️', title: 'Frontend',         items: ['React.js', 'Next.js', 'Node.js', 'HTML5', 'CSS3'] },
  { icon: '💾', title: 'Databases',        items: ['MySQL', 'SQL Server'] },
  { icon: '📦', title: 'DevOps',           items: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'Postman'] },
  { icon: '🤖', title: 'Machine Learning', items: ['Python', 'Scikit-learn', 'NumPy', 'Matplotlib', 'Jupyter'] },
  { icon: '🧠', title: 'Core CS',          items: ['OOP', 'Data Structures', 'Algorithms', 'Multithreading', 'JUnit'] },
];

export const CERTIFICATES = [
  { name: 'Full Stack Java Development',   issuer: 'Wipro — Talent Next, 2025',    icon: '☕' },
  { name: 'CCNA: Introduction to Networks',issuer: 'Cisco, 2025',                  icon: '🌐' },
  { name: 'AI: Concepts & Techniques',     issuer: 'NPTEL, 2024',                  icon: '🤖' },
  { name: 'Full Stack Web Design & Dev',   issuer: 'iStudio Technologies, 2025',   icon: '🎨' },
  { name: 'Database Management',           issuer: 'SimpliLearn, 2024',            icon: '💾' },
];

export const LEARNING = [
  'Spring Security',
  'Advanced Spring Boot',
  'System Design',
  'Docker & Kubernetes',
];

export const CONTACT_INFO = {
  phone:    '+91-7505841957',
  email:    'adityasingh75058@gmail.com',
  linkedin: 'https://linkedin.com/in/contact-aditya-singh75',
  github:   'https://github.com/adityasingh75058',
};
