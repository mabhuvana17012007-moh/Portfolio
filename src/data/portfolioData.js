// ─────────────────────────────────────────────────────────
// Centralized content. Edit this file to update the entire
// site's text, links, and data without touching components.
// ─────────────────────────────────────────────────────────

export const personalInfo = {
  name: 'Bhuvaneswari M',
  roles: ['Software Developer', 'Java Developer', 'Web Developer'],
  intro:
    'Passionate Computer Science student with a strong interest in Java, Web Development, and Artificial Intelligence. I enjoy building practical applications and continuously improving my technical skills.',
  about:
    'I am a Computer Science Engineering student passionate about creating software solutions that solve real-world problems. I enjoy learning new technologies, developing web applications, and exploring Artificial Intelligence. I continuously improve my programming skills through projects and coding challenges.',
  email: 'mabhuvana17012006@gmail.com',
  location: 'Tamil Nadu, India',
  education: 'B.E. Computer Science Engineering',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
    
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'Python', 'C', 'JavaScript'],
  },
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    skills: ['Firebase', 'MySQL'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Vite'],
  },
  {
    category: 'Soft Skills',
    skills: ['Problem Solving', 'Teamwork', 'Communication', 'Time Management'],
  },
]

export const projects = [
  {
    id: 'smart-waste',
    name: 'Smart Waste Management System',
    description:
      'Developed an IoT-enabled smart waste monitoring system using NodeMCU, ultrasonic sensors, GPS, Firebase, React, and Machine Learning to monitor dustbin levels and optimize waste collection routes.',
    tech: ['React', 'Firebase', 'Machine Learning', 'NodeMCU', 'IoT'],
    image:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    github: 'https://github.com/mabhuvana17012007-moh/smart_waste_management_system.git',
    demo: 'https://example.com/',
    category: 'IoT',
  },
  {
    id: 'weather-app',
    name: 'Weather Monitoring System',
    description:
      'Developed a responsive weather application using HTML, CSS, JavaScript, and Weather API to display real-time weather information.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    github: 'https://github.com/',
    demo: 'https://example.com/',
    category: 'Web',
  },
  {
    id: 'amazon-tracker',
    name: 'Amazon Price Tracker',
    description:
      'Developed a Python automation application that tracks Amazon product prices and sends email alerts whenever the product price drops below the desired value.',
    tech: ['BeautifulSoup', 'Python', 'Requests', 'SMTP'],
    image:
      'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80',
    github: 'https://github.com/mabhuvana17012007-moh/price_tracking.git',
    demo: 'https://example.com/',
    category: 'Automation',
  },
]

export const certifications = [
  {
    title: 'Basics Java Programming',
    organization: 'Skillrack',
    duration: '2025',
    image: '/certificates/skilrack.jpg',
    certificateUrl: '/certificates/skilrack.jpg',
  },
  {
    title: 'Java Programming',
    organization: 'NPTEL',
    duration: '2025',
    image: '/certificates/nptel.png',
    certificateUrl: '/certificates/nptel.png',
  },

  {
    title: 'Web Development Course',
    organization: 'Pursuit Future Technology',
    duration: '2025',
    image: '/certificates/pursuitcertificate.png',
    certificateUrl: '/certificates/pursuitcertificate.png',
  },
  {
    title: 'Python Developer Internship',
    organization: 'EKHAI Business Solution',
    duration: 'Nov 2025 – Dec 2025',
    image: '/certificates/elhai.jpg',
    certificateUrl: '/certificates/elhai.jpg',
  },
]

export const educationTimeline = [
  {
    title: 'B.E. Computer Science Engineering',
    place: 'IFET College of Engineering Affiliated to Anna University',
    duration: '2023 – 2027',
    detail: 'Currently pursuing Computer Science Engineering with a focus on software development and AI.',
  },
  {
    title: 'Higher Secondary Education',
    place: 'State Board',
    duration: '2022 – 2024',
   
  },
  {
    title: 'SSLC',
    place: 'State Board',
    duration: '2020 – 2021',
    
  },
]

export const experience = [
  {
    role:'Wep Developer Intern',
    company:'Pursuit Future Technology',
    duration:'January 2026 - April 2026',
    description:'Worked on Web Development,Learn How API works,Realtime Monitoring',
  },
  {
    role: 'Python Developer Intern',
    company: 'EKHAI Business Solution',
    duration: 'November 2025 – December 2025',
    description:
      'Worked on Python development, automation, debugging, and software development projects.',
  },
  
]

export const achievements = [
  { label: 'Projects Completed', value: 3 },
  { label: 'Programming Languages', value: 4 },
  { label: 'Certificates Earned', value: 3 },
  { label: 'Internships Completed', value: 2 },
]
