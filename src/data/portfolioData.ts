import {
  Project,
  Experience,
  SkillCategory,
  Certification,
  Education,
  StatMetric,
  ContactDetails,
} from '@/types/portfolio';

export const contactDetails: ContactDetails = {
  fullName: 'M. Arham',
  roleTitle: 'Expert Flutter Developer & Software Engineer',
  email: 'arhamse2002@gmail.com',
  phone: '+92 302 3344759',
  location: 'Habib Colony, Cheema Town, Bahawalpur, Pakistan',
  githubUrl: 'https://github.com/ArhamSE2002',
  linkedinUrl: 'https://www.linkedin.com/in/arham-se-2002/',
  whatsappUrl: 'https://wa.me/923023344759',
  availableForHire: true,
};

export const bioSummary = {
  tagline: 'Architecting high-performance cross-platform mobile apps with Flutter & scalable full-stack web solutions.',
  fullBio: `I am an expert Flutter Developer and Software Engineering graduate (CGPA 3.58) with hands-on production experience building cross-platform applications across fintech, marketplaces, health tracking, and lifestyle platforms. I specialize in clean architecture, reactive state management (GetX, BLoC), and seamless cloud integrations (Supabase, Firebase, REST APIs). In addition to mobile mastery, I build modern web applications using Next.js/TypeScript and leverage Python for data analysis and intelligent features.`,
  experienceYears: '3+',
  targetRoles: 'Senior Flutter Developer, Mobile Application Architect, Full-Stack Software Engineer',
};

export const statsMetrics: StatMetric[] = [
  {
    id: 'exp',
    value: '3+',
    label: 'Years Experience',
    sublabel: 'Mobile & Software Dev',
    iconName: 'Code2',
  },
  {
    id: 'projects',
    value: '6+',
    label: 'Major Applications',
    sublabel: 'Shipped & Architectural',
    iconName: 'Smartphone',
  },
  {
    id: 'cgpa',
    value: '3.58',
    label: 'Academic CGPA',
    sublabel: 'BS Software Engineering',
    iconName: 'GraduationCap',
  },
  {
    id: 'satisfaction',
    value: '100%',
    label: 'Cross-Platform',
    sublabel: 'iOS, Android & Web',
    iconName: 'Layers',
  },
];

export const projectsList: Project[] = [
  {
    id: 'ai-expense-tracker',
    title: 'AI Expense Tracker',
    subtitle: 'Smart Financial Management & Predictive Analytics App',
    category: 'flutter',
    featured: true,
    badge: 'AI Powered',
    iconName: 'Wallet',
    description:
      'A smart, production-grade financial application designed to revolutionize personal budgeting through automated camera receipt scanning, conversational AI, and predictive spending analytics.',
    bulletPoints: [
      'Intelligent OCR receipt scanner that extracts merchant, date, and amounts with instant autofill.',
      'Conversational AI financial assistant providing on-demand budget queries and spending advice.',
      'Real-time spending velocity tracker paired with an automated money leaks detection algorithm.',
      'Subscription renewal forecast alerting users of upcoming renewals for proactive budget rollover.',
      'Multi-currency conversions, visual savings milestones, and flexible CSV/PDF data exports.',
    ],
    techStack: ['Flutter', 'Dart', 'GetX', 'OCR Vision', 'REST APIs', 'FL Chart'],
    metrics: { label: 'Automated Logging', value: 'Instant OCR' },
    githubUrl: 'https://github.com/ArhamSE2002',
  },
  {
    id: 'worksphere',
    title: 'WorkSphere',
    subtitle: 'Full-Stack Freelancing & Service Marketplace',
    category: 'fullstack',
    featured: true,
    badge: 'Full-Stack Mobile',
    iconName: 'Briefcase',
    description:
      'An end-to-end freelancing ecosystem built with Flutter and Supabase providing dedicated dashboards for freelancers and recruiters, order workflows, and real-time alerts.',
    bulletPoints: [
      'Engineered full-stack freelancing platform with separate secure portals for talents and clients.',
      'Implemented Supabase real-time database for instant notifications, chat, and order matching.',
      'Built granular role-based authentication and token-secured session management.',
      'Engineered responsive layouts handling proposal submissions, milestone tracking, and invoicing.',
    ],
    techStack: ['Flutter', 'Supabase', 'PostgreSQL', 'Real-time DB', 'GetX'],
    metrics: { label: 'Realtime Sync', value: '<50ms' },
    githubUrl: 'https://github.com/ArhamSE2002',
  },
  {
    id: 'islam-master',
    title: 'Islam Master',
    subtitle: 'Quran & Daily Spiritual Companion Mobile App',
    category: 'flutter',
    featured: true,
    badge: 'Production App',
    iconName: 'Compass',
    description:
      'A comprehensive, elegantly designed Islamic lifestyle mobile application with multi-lingual Quran translations, compass-based Qibla direction, interactive Tasbeeh, and a companion CMS.',
    bulletPoints: [
      'Full Quran text with verse-by-verse English and Urdu translations and audio recitations.',
      'Integrated sensor-based Qibla compass using device magnetometer and location coordinates.',
      'Interactive digital Tasbeeh counter with persistent offline count storage.',
      'Daily curated Hadees and Islamic quotes powered by a custom companion admin application.',
    ],
    techStack: ['Flutter', 'Dart', 'Sensors API', 'Location Services', 'Admin CMS'],
    metrics: { label: 'Translations', value: 'English & Urdu' },
    githubUrl: 'https://github.com/ArhamSE2002',
  },
  {
    id: 'fittrack-pro',
    title: 'FitTrack Pro',
    subtitle: 'Fitness & Real-Time Activity Tracking Application',
    category: 'flutter',
    featured: false,
    badge: 'Sensor Integration',
    iconName: 'Activity',
    description:
      'A complete activity and fitness monitoring app featuring live pedometer step counting, Google Maps GPS run tracking, offline data persistence, and health trend analytics.',
    bulletPoints: [
      'Real-time pedometer sensor integration for accurate daily step and calorie expenditure calculation.',
      'Live GPS running and walking route mapping utilizing Google Maps API with polyline tracking.',
      'Offline-first architecture leveraging SQFlite for zero-latency local metrics persistence.',
      'Dynamic weekly and monthly fitness progress charts comparing workout consistency.',
    ],
    techStack: ['Flutter', 'Google Maps API', 'SQFlite', 'Pedometer Sensor', 'FL Chart'],
    metrics: { label: 'Architecture', value: 'Offline-First' },
    githubUrl: 'https://github.com/ArhamSE2002',
  },
  {
    id: 'alljobsgh',
    title: 'ALLJOBSGH',
    subtitle: 'High-Performance Job Marketplace & Candidate Portal',
    category: 'flutter',
    featured: false,
    badge: 'REST API Frontend',
    iconName: 'Search',
    description:
      'A fast, responsive cross-platform mobile frontend for job discovery, keyword filtering, resume submission, and status updates across real-time listings.',
    bulletPoints: [
      'Engineered fluid Flutter frontend interfacing with dynamic backend REST APIs.',
      'Advanced multi-parameter job search and filtering by category, salary, experience, and location.',
      'Interactive application tracker giving job seekers live status updates on submitted resumes.',
    ],
    techStack: ['Flutter', 'Dart', 'REST APIs', 'State Management', 'Responsive UI'],
    metrics: { label: 'UI Frame Rate', value: '60 FPS' },
    githubUrl: 'https://github.com/ArhamSE2002',
  },
  {
    id: 'eda-data-analysis',
    title: 'Exploratory Data Analysis (EDA)',
    subtitle: 'Multi-Feature Statistical Analysis & Visual Modeling',
    category: 'data',
    featured: true,
    badge: 'Python & Data',
    iconName: 'BarChart2',
    description:
      'Applied comprehensive exploratory data analysis on a multi-feature dataset using Python, uncovering actionable patterns, statistical correlations, and trends through Matplotlib visual charts.',
    bulletPoints: [
      'Handled data cleaning, missing value imputations, and datatype conversions via Pandas and NumPy.',
      'Computed descriptive statistics and identified distributions, outliers, and inter-feature correlations.',
      'Rendered clear visual representations (histograms, scatter plots, trend lines) with Matplotlib.',
    ],
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA'],
    metrics: { label: 'Statistical Insight', value: 'High Accuracy' },
    githubUrl: 'https://github.com/ArhamSE2002',
  },
];

export const experienceList: Experience[] = [
  {
    id: 'abinos',
    role: 'Flutter Developer – Apprenticeship',
    company: 'Abinos',
    period: 'Apr 2026 – Present',
    location: 'Remote / Hybrid',
    type: 'Full-time / Apprenticeship',
    current: true,
    summary:
      'Leading end-to-end mobile development across architectural setup, clean UI implementation, and API integrations in a fast-paced environment.',
    responsibilities: [
      'Architect and maintain production Flutter apps with high ownership from technical design to deployment.',
      'Implement clean architecture and reactive state management patterns for predictable codebases.',
      'Collaborate directly with cross-functional teams to translate business features into resilient mobile modules.',
      'Perform code reviews, optimize rendering pipeline, and ensure rigorous test coverage.',
    ],
    technologies: ['Flutter', 'Dart', 'Clean Architecture', 'REST APIs', 'Git', 'CI/CD'],
  },
  {
    id: 'apna-khaiyal',
    role: 'Junior Flutter Developer',
    company: 'Apna Khaiyal',
    period: 'Apr 2024 – Present',
    location: 'Bahawalpur / Hybrid',
    type: 'Part-time',
    current: true,
    summary:
      'Developed cross-platform mobile applications using Flutter and Dart, integrating backend cloud services and fine-tuning UX performance.',
    responsibilities: [
      'Built cross-platform iOS and Android apps integrating REST APIs and backend cloud services.',
      'Collaborated directly with clients to translate business requirements into responsive UI components.',
      'Profiled and optimized widget rebuilds to achieve consistent 60 FPS frame rates.',
      'Implemented secure local caching and state synchronization for offline capabilities.',
    ],
    technologies: ['Flutter', 'Dart', 'GetX', 'REST APIs', 'Firebase', 'SQFlite'],
  },
  {
    id: 'corvit-navttc',
    role: 'Teaching Assistant – Python & AI Fundamentals',
    company: 'Corvit Systems (NAVTTC-affiliated)',
    period: 'Sep 2025 – Apr 2026',
    location: 'Bahawalpur, Pakistan',
    type: 'Academic / Mentorship',
    current: false,
    summary:
      'Instructed two consecutive student cohorts in Python programming, algorithmic thinking, and foundational artificial intelligence concepts.',
    responsibilities: [
      'Taught core Python syntax, OOP concepts, and data structures to diverse student batches.',
      'Designed instructional coding labs, debugging challenges, and exploratory data handling tasks.',
      'Mentored students one-on-one through algorithmic problem-solving and software development best practices.',
    ],
    technologies: ['Python', 'Data Structures', 'NumPy', 'Pandas', 'AI Foundations'],
  },
];

export const skillsCategories: SkillCategory[] = [
  {
    id: 'flutter-expert',
    title: 'Mobile Architecture',
    subtitle: 'Primary Domain of Expertise',
    highlight: 'Expert',
    skills: [
      {
        name: 'Flutter Framework',
        level: 95,
        tier: 'Expert',
        description: 'Multi-platform mobile app development for iOS & Android with pixel-perfect fidelity.',
        iconName: 'Smartphone',
      },
      {
        name: 'Dart Language',
        level: 92,
        tier: 'Expert',
        description: 'Object-oriented programming, asynchronous streams, null safety, and clean abstractions.',
        iconName: 'Code',
      },
      {
        name: 'State Management (GetX & BLoC)',
        level: 90,
        tier: 'Expert',
        description: 'Reactive state handling, dependency injection, and decoupled route management.',
        iconName: 'Cpu',
      },
      {
        name: 'Clean Architecture & MVC',
        level: 88,
        tier: 'Expert',
        description: 'Separation of concerns, repository pattern, domain modeling, and testability.',
        iconName: 'Layers',
      },
      {
        name: 'Custom Animations & Gestures',
        level: 88,
        tier: 'Expert',
        description: 'Explicit/implicit animations, Hero transitions, custom painters, and interactive micro-interactions.',
        iconName: 'Sparkles',
      },
      {
        name: 'Offline-First & SQFlite',
        level: 86,
        tier: 'Proficient',
        description: 'Local caching, persistent relational storage, and background data synchronization.',
        iconName: 'Database',
      },
    ],
  },
  {
    id: 'web-frontend',
    title: 'Web & Frontend Development',
    subtitle: 'Cross-Disciplinary Proficiency',
    highlight: 'Proficient',
    skills: [
      {
        name: 'React & Next.js',
        level: 82,
        tier: 'Proficient',
        description: 'Modern server/client components, SEO optimization, and modular component architectures.',
        iconName: 'Globe',
      },
      {
        name: 'TypeScript & JavaScript (ES6+)',
        level: 84,
        tier: 'Proficient',
        description: 'Type-safe frontend codebases, clean interfaces, and modern asynchronous paradigms.',
        iconName: 'FileCode',
      },
      {
        name: 'Responsive CSS & Theming',
        level: 88,
        tier: 'Proficient',
        description: 'CSS variables, glassmorphism, responsive grid/flexbox, and dark mode systems.',
        iconName: 'Palette',
      },
    ],
  },
  {
    id: 'backend-cloud',
    title: 'Backend, APIs & Cloud',
    subtitle: 'Infrastructure & Integration',
    highlight: 'Proficient',
    skills: [
      {
        name: 'Supabase & PostgreSQL',
        level: 85,
        tier: 'Proficient',
        description: 'Row-level security, real-time subscriptions, relational schema design, and cloud storage.',
        iconName: 'Server',
      },
      {
        name: 'Firebase Suite',
        level: 86,
        tier: 'Proficient',
        description: 'Authentication, Cloud Firestore, Cloud Messaging (FCM), Crashlytics, and Analytics.',
        iconName: 'Flame',
      },
      {
        name: 'RESTful API Integration',
        level: 90,
        tier: 'Expert',
        description: 'Network interceptors, token refresh mechanisms, pagination, and error handling.',
        iconName: 'Network',
      },
    ],
  },
  {
    id: 'data-tools',
    title: 'Data Analysis & Dev Tools',
    subtitle: 'Analytics & Engineering Workflow',
    highlight: 'Solid',
    skills: [
      {
        name: 'Python & Data Analysis (EDA)',
        level: 82,
        tier: 'Proficient',
        description: 'Data inspection, Pandas, NumPy, and statistical plotting with Matplotlib.',
        iconName: 'Terminal',
      },
      {
        name: 'Git & Version Control',
        level: 88,
        tier: 'Proficient',
        description: 'Branching strategies, pull request workflows, CI/CD pipelines, and GitHub management.',
        iconName: 'GitBranch',
      },
      {
        name: 'DevTools & Profilers',
        level: 85,
        tier: 'Proficient',
        description: 'Flutter DevTools, memory leak detection, Postman API testing, and performance profiling.',
        iconName: 'Tool',
      },
    ],
  },
];

export const certificationsList: Certification[] = [
  {
    id: 'navttc-python',
    title: 'Data Analysis with Python',
    issuer: 'NAVTTC (National Vocational & Technical Training Commission)',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA'],
    verified: true,
  },
  {
    id: 'huawei-hccda',
    title: 'HCCDA – AI Certification',
    issuer: 'Huawei Certified',
    credentialId: 'Hwendcaida871226',
    skills: ['AI Foundations', 'Machine Learning', 'Computer Vision Basics'],
    verified: true,
  },
];

export const educationInfo: Education = {
  degree: 'Bachelor of Science in Software Engineering (BS SE)',
  institution: 'The Islamia University of Bahawalpur',
  period: 'Sep 2021 – Sep 2025',
  cgpa: '3.58',
  gradeMax: '4.00',
  details:
    'Focused on Software Architecture, Mobile Application Development, Data Structures & Algorithms, Object-Oriented Software Engineering, and Database Systems.',
};
