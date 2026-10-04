export const profile = {
  name: 'Giuseppe Sabetta',
  role: 'Software Engineer · Architect',
  roleTagline: 'Requirements Engineer · Creative Mind with sustainable Ideas',
  github: 'gssab3',
  avatar: 'https://github.com/gssab3.png',
  githubUrl: 'https://github.com/gssab3',
  photo: '/photos/profile.jpeg',
  photo2: '/photos/profile_interest.jpg',
  tagline:
    'What you don\'t see manages what you can see.',
};

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/cv', label: 'CV' },
  { to: '/projects', label: 'Projects' },
  { to: '/publications', label: 'Publications & Talks' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact Me' },
];

export const highlights = [
  {
    label: 'Idea',
    title: 'From Creative Ideas to something you can rely on',
    body: 'Experiences, Design, Heuristic to your desired software.',
  },
  {
    label: 'Requirements',
    title: 'Defining what your clients want and what your system does',
    body: 'Requirements Engineering and Documentation. Boring things for Entertaining things.',
  },
  {
    label: 'Security',
    title: 'Can\'t build something you wouldn\'t feel safe to use',
    body: 'Security Engineering, DevSecOps, Guidelines, Ethical Penetration Testing. Always aware of what\'s inside the box.',
  },
];

export const nicheProjects = [
    {
        label: 'Publication',
        title: 'SQA4AI Conference',
        body: 'Regarding the enhancement of the security view of a unique problem of Software Engineering: understanding the security solutions domain based only on problem domain.'
    },
    {
        label: 'Sustainability',
        title: 'Productivity Application',
        body: 'Actually developing a platform to manage economic, health and time aspects of people, improving their mindset, productivity and mindfulness.'
    },
    {
        label: 'Experiment',
        title: 'Psychology in Role-Play Games',
        body: 'A WIP Project that shows how a team-based role-play game can improve teamwork and community stability.'
    }
]

export const experience = [
  {
    role: 'Software Engineer',
    org: 'Kebula',
    orgDetail: 'Kebula',
    period: 'December 2025 — Present',
    logo: './logos/kebula.jpg', // e.g. '/logos/company1.png' or an external URL
    tech: ['Python', 'FastAPI', 'JavaScript', 'React', 'TypeScript'],
    desc: 'Thanks to my technical versatility, I have held various roles, ranging from api development to the engineering of a sustainable agent-based graphical interface.',
    points: [
      'Excellent and Joyful collaboration with the team.',
      'Versatility and fast maintenance processes (corrective, adaptive, ...).',
      'Excellent use of Design Pattern, Data Structures and preventive generalization of created solutions.',
    ],
  },
  {
    role: 'Internship',
    org: 'Kebula',
    orgDetail: 'Placeholder Company',
    period: 'November 2025 — December 2025',
    logo: './logos/kebula.jpg',
    tech: ['Python', 'FastAPI', 'PostgreSQL'],
    desc: 'Extremely Intrigued by my first Job Experience at Kebula, learning how corporations manage and ship perfectly structured code along all the DevOps processes.',
    points: [
      'Built different projects exploiting Design Patterns, Guidelines and Documentation',
      'Understood the Containerization, Shipping and Review Processes for real-world problems'
    ],
  }
];

export const education = [
  {
    degree: 'Master\'s Degree in Computer Science — Software Engineering and IT Management Curricula',
    org: 'University of Salerno',
    period: '2025 — Present',
    logo: './logos/uni_salerno.jpg',
    tech: ['DevOps', 'DevSecOps', 'ML', 'Sustainable Software Engineering', 'Software Metrics and Analytics', 'Project Management', 'F/NF Testing', 'Containerization', 'Penetration Testing', 'Ethical Hacking', 'OSINT', 'Secure Requirements Engineering'],
    detail: ''
  },
  {
    degree: 'Bachelor\'s Degree in Computer Science',
    org: 'University of Salerno',
    period: '2022 — 2025',
    grade: '110/110 with Honors',
    logo: './logos/uni_salerno.jpg',
    tech: ['Algorithms', 'Data Structures', 'Databases', 'Software Engineering', 'ML', 'AI', 'Web Design and Development', 'Teamwork', 'Requirements Engineering'],
    detail: 'During my bachelor’s degree program, I gained experience in teamwork and in managing projects and/or parts of them, such as the backend, design, application, and operational aspects. It was toward the end of this program that I found the answers I needed regarding my choice of master’s degree program, recognizing my inclination toward software management and how a well-designed structure can be better than AI Slop.'
  },
  {
    degree: 'High School Diploma — Technical',
    org: 'I.I.S Galilei — Di Palo',
    period: '2016 — 2022',
    grade: '100/100 with Honors',
    logo: './logos/galilei.jpg',
    tech: ['Mathematics', 'Java', 'UML', 'HTML', 'Javascript', 'Logic', 'Foreign Languages', 'Critical Thinking'],
    detail: 'Before I started as a Developer and Software Engineer, my passion was (and still is) Mathematics and Logic thanks to my Professors: I still see lots of relations between any kind of data and love to study their statistics. My professors recognized my aptitude for learning, and as I grew older, I developed grit, determination, and a passion for computer science.',
  },
];

export const certifications = [
  {
    name: 'Pre Security Certificate',
    issuer: 'TryHackMe',
    credentialId: 'THM-ZRHKEJMVAG',
    issued: 'July 2026',
    expires: 'July 2029',
    logo: '/photos/thm.png',
    desc: 'First introductive course of TryHackMe regarding basics on Blue Team, Red Team, networking and web security. Despite my actual capabilities and skills in Secure Software Engineering, thanks to my education path and the versatility of my curricula, I\'ve chosen to support TryHackMe and let it guide me through their education paths.',
    tech: ['Linux', 'SQL', 'JavaScript', 'Python', 'Hardware', 'Architectures', 'Windows', 'Networks', 'Web Security'],
  },
  {
    name: 'Graph Data Modeling Fundamentals',
    issuer: 'Neo4J',
    credentialId: 'fabbcac2-4c2e-44c1-b030-a0501ee97c5a',
    issued: 'March 2026',
    logo: '/photos/neo4j.png',
    desc: 'Introductive and Hands-on course of Neo4J for modeling and architecture analysis, testing and validation of Neo4J databases',
    tech: ['Graph Modeling', 'UML', 'Neo4J', 'Software Testing', 'Profiling', 'Data Engineering', 'Software Engineering', 'Cypher'],
  },

  {
    name: 'Cypher Fundamentals',
    issuer: 'Neo4J',
    credentialId: '46e247cd-61fb-4e3f-9941-ca6ab0c954f9',
    logo: '/photos/neo4j.png',
    desc: 'Introductive course of Cypher Query Language for Data Querying in Graphs (Neo4J)',
    tech: ['Cypher', 'Neo4J', 'Data Engineering'],
    issued: 'March 2026'
  }
];

export const projects = [
  {
    title: 'UniClass',
    repo: 'gssab3/UniClass-ISTA',
    desc: 'It started as a toy project for an exam and became one of my best experiments for SE, SRE, UAT and Maintenance Processes',
    tech: 'Java Enterprise · Javascript · NodeJS · PostgreSQL · SonarQube',
    tags: ['Web', 'SRE', 'SE', 'UAT', 'F/NF Testing', 'Security Analysis', 'CI/CD', 'DevSecOps', 'DevOps'],
    stars: 12,
    pinned: true,
  },
  {
    title: 'AIMm',
    repo: 'gssab3/AIMm',
    desc: 'Artificial Intelligence for (Shooter) Matchmaking is a toy project for understanding how to solve a game problem, balancement of different teams that play against. (Actually the projects reveals it would give a better experience to players)',
    tech: 'Python · Jupyter Notebook',
    tags: ['AI', 'ML', 'CRISP-DM', 'Gaming', 'Statistics'],
    stars: 8,
    pinned: true,
  },
  {
    title: 'RetroCrates',
    repo: 'gssab3/RetroCrates',
    desc: 'RetroCrates is an E-Commerce for social and economic sustainability. It\'s used to sell collectibles and retro games in a world where you can\'t really know if you own something or not if it\'s digital',
    tech: 'Java · MySQL ·Javascript',
    tags: ['Gaming', 'Web'],
    stars: 5,
    pinned: true,
  },
];

export const projectTags = ['All',...new Set(projects.flatMap(p => p.tags))];

export const publications = [
  {
    title: 'Enhancing Security Requirements Coverage via RAG and Automated Feedback Loops',
    authors: 'Giuseppe Sabetta, Alfonso Cannavale, Andrea De Lucia, Fabio Palomba',
    venue: 'SANER 2026 Workshops - 17 Mar 2026',
    link: 'https://ieeexplore.ieee.org/document/11500248',
    doi: 'https://doi.org/10.1109/SANER-C67878.2026.00045',
  },
];

export const talks = [
  {
    title: 'Neo4J: Definition, Modeling and Profiling',
    speakers: 'Alessia Ascolese, Gennaro Sepe, Giuseppe Sabetta',
    event: 'Neo4J Seminar Talk',
    date: '2026',
    link: '/talks/Neo4j-talk.pdf',
  },
];

export const aboutInterests = [
    'Roleplay Games',
    'Videogames',
    'Sport, Football and Running',
    'Horror and Thriller',
    'Latin American Dance',
    'Coffee',
    'Stand up Comedy',
    'Travel',
    'Jazz'
];

export const heroStats = [
    { value: `${new Date().getUTCFullYear() - 2016}`, label: 'Years in the field' },
    { value: `${projects.length + publications.length}`, label: 'Projects Developed' },
    { value: `${publications.length + talks.length}`, label: 'Papers & talks' },
];

export const contact = [
  { label: 'Email', value: 'giuseppesabetta@proton.me', href: 'mailto:giuseppesabetta@proton.me' },
  { label: 'GitHub', value: 'github.com/gssab3', href: 'https://github.com/gssab3' },
  { label: 'LinkedIn', value: 'linkedin.com/in/giuseppesabetta', href: 'https://linkedin.com/in/giuseppesabetta' },
  { label: 'Location', value: 'Salerno, Italy · CET (UTC+1)' },
];
