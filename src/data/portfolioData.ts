import {
  Project,
  Experience,
  SkillCategory,
  Certification,
  Education,
  StatMetric,
  ContactDetails,
  ServiceItem,
  ProcessStep,
  Testimonial,
  PricingPlan,
  InsightArticle,
  FAQItem,
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

export const techBrandsMarquee = [
  { name: 'Flutter', tag: 'Framework' },
  { name: 'Dart', tag: 'Language' },
  { name: 'Supabase', tag: 'Backend' },
  { name: 'Firebase', tag: 'Cloud' },
  { name: 'Next.js 16', tag: 'Web' },
  { name: 'TypeScript', tag: 'Language' },
  { name: 'GetX & BLoC', tag: 'State' },
  { name: 'PostgreSQL', tag: 'Database' },
  { name: 'Python (EDA)', tag: 'Data' },
  { name: 'SQFlite', tag: 'Offline DB' },
  { name: 'REST APIs', tag: 'Networking' },
  { name: 'Clean Architecture', tag: 'Pattern' },
];

export const projectsList: Project[] = [
  {
    id: 'ai-expense-tracker',
    title: 'Monefii (AI Expense Tracker)',
    subtitle: 'Smart Financial Management & Predictive Analytics App',
    category: 'flutter',
    featured: true,
    badge: 'AI Powered',
    tag: 'MONEFII /Fintech AI',
    iconName: 'Wallet',
    coverImage: '/project_images/monefii (ai expense tracker) images/Feature Graphic.png',
    galleryImages: [
      '/project_images/monefii (ai expense tracker) images/Feature Graphic.png',
      '/project_images/monefii (ai expense tracker) images/Frame 176.png',
      '/project_images/monefii (ai expense tracker) images/Frame 177.png',
      '/project_images/monefii (ai expense tracker) images/Frame 178.png',
      '/project_images/monefii (ai expense tracker) images/Frame 179.png',
      '/project_images/monefii (ai expense tracker) images/Frame 180.png',
    ],
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
    id: 'islam-master',
    title: 'Islam Master',
    subtitle: 'Quran & Daily Spiritual Companion Mobile App',
    category: 'flutter',
    featured: true,
    badge: 'Production App',
    tag: 'ISLAM MASTER /Spiritual & Daily',
    iconName: 'Compass',
    coverImage: '/project_images/Islam_Master/Feature Graphic.png',
    galleryImages: [
      '/project_images/Islam_Master/Feature Graphic.png',
      '/project_images/Islam_Master/dark.png',
      '/project_images/Islam_Master/dark-1.png',
      '/project_images/Islam_Master/dark-2.png',
      '/project_images/Islam_Master/dark-3.png',
      '/project_images/Islam_Master/dark-4.png',
    ],
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
    id: 'worksphere',
    title: 'WorkSphere',
    subtitle: 'Full-Stack Freelancing & Service Marketplace',
    category: 'fullstack',
    featured: true,
    badge: 'Full-Stack Mobile',
    tag: 'WORKSPHERE /Marketplace',
    iconName: 'Briefcase',
    coverImage: '/project_images/worksphere project images/feature graphic.jpg',
    galleryImages: [
      '/project_images/worksphere project images/feature graphic.jpg',
      '/project_images/worksphere project images/Gemini_Generated_Image_yypiv8yypiv8yypi.jpg',
      '/project_images/worksphere project images/Gemini_Generated_Image_fbhdzgfbhdzgfbhd.jpg',
      '/project_images/worksphere project images/Gemini_Generated_Image_lnpdy7lnpdy7lnpd.jpg',
    ],
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
    id: 'fittrack-pro',
    title: 'FitTrack Pro',
    subtitle: 'Fitness & Real-Time Activity Tracking Application',
    category: 'flutter',
    featured: true,
    badge: 'Sensor Integration',
    tag: 'FITTRACK PRO /Fitness & Health',
    iconName: 'Activity',
    coverImage: '/project_images/fittrack pro/Feature Graphic.png',
    galleryImages: [
      '/project_images/fittrack pro/Feature Graphic.png',
      '/project_images/fittrack pro/Frame 9.png',
      '/project_images/fittrack pro/Frame 10.png',
      '/project_images/fittrack pro/Frame 11.png',
      '/project_images/fittrack pro/Frame 12.png',
      '/project_images/fittrack pro/Frame 13.png',
      '/project_images/fittrack pro/Frame 15.png',
    ],
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
    tag: 'ALLJOBSGH /Job Portal',
    iconName: 'Search',
    coverImage: '/project_images/worksphere project images/Gemini_Generated_Image_lnpdy7lnpdy7lnpd.jpg',
    galleryImages: [
      '/project_images/worksphere project images/Gemini_Generated_Image_lnpdy7lnpdy7lnpd.jpg',
    ],
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
    tag: 'EDA /Data Science',
    iconName: 'BarChart2',
    coverImage: '/project_images/monefii (ai expense tracker) images/Frame 178.png',
    galleryImages: [
      '/project_images/monefii (ai expense tracker) images/Frame 178.png',
    ],
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

export const servicesCatalog: ServiceItem[] = [
  {
    id: 'flutter-development',
    number: '001',
    title: 'FLUTTER APP DEVELOPMENT',
    headline: 'CRAFTING INTUITIVE DIGITAL EXPERIENCES THAT CONNECT USERS WITH PRODUCTS EFFORTLESSLY.',
    description:
      'Engineering high-performance, pixel-perfect iOS & Android mobile applications using Flutter and Dart with 60 FPS fluid micro-interactions and clean architecture.',
    tags: ['User Experience Research', 'Clean Architecture', 'Rapid Prototype Testing', 'Fluid 60 FPS Animations', 'Smart Interaction Design'],
    previewImages: [
      '/project_images/monefii (ai expense tracker) images/Feature Graphic.png',
      '/project_images/monefii (ai expense tracker) images/Frame 176.png',
    ],
  },
  {
    id: 'app-architecture',
    number: '002',
    title: 'MOBILE ARCHITECTURE & STATE',
    headline: 'DESIGNING RESILIENT APP FOUNDATIONS BUILT FOR TOUCH, SPEED, AND EVERYDAY USE.',
    description:
      'Architecting decoupled, highly scalable mobile backbones utilizing GetX and BLoC patterns, repository structures, dependency injection, and offline SQLite caching.',
    tags: ['Decoupled State Management', 'Clean BLoC & GetX', 'Offline-First SQFlite', 'Gesture-Based Interactions', 'Fluid Responsive Layout'],
    previewImages: [
      '/project_images/fittrack pro/Feature Graphic.png',
      '/project_images/fittrack pro/Frame 10.png',
    ],
  },
  {
    id: 'cloud-backend',
    number: '003',
    title: 'FULL-STACK CLOUD & REALTIME',
    headline: 'SHAPING DIGITAL PRODUCTS FROM CONCEPT TO LAUNCH WITH STRATEGY AND PRECISION.',
    description:
      'Integrating robust cloud infrastructure including Supabase realtime databases, Firebase authentication & messaging, REST APIs, and PostgreSQL.',
    tags: ['Supabase Realtime Sync', 'PostgreSQL Schema Design', 'Firebase Auth & Cloud Messaging', 'Secure JWT Interceptors', 'Role-Based Portals'],
    previewImages: [
      '/project_images/worksphere project images/feature graphic.jpg',
      '/project_images/worksphere project images/Gemini_Generated_Image_yypiv8yypiv8yypi.jpg',
    ],
  },
  {
    id: 'ai-ocr-integration',
    number: '004',
    title: 'AI & SMART OCR INTEGRATION',
    headline: 'EMPOWERING MOBILE APPS WITH COMPUTER VISION AND PREDICTIVE INTELLIGENCE.',
    description:
      'Deploying on-device OCR for instant document and receipt digitization, conversational AI assistants, and automated data extraction.',
    tags: ['OCR Camera Scanning', 'On-Device Parsing', 'Conversational AI Assist', 'Predictive Spend Analytics', 'Automated Categorization'],
    previewImages: [
      '/project_images/Islam_Master/dark.png',
      '/project_images/Islam_Master/dark-1.png',
    ],
  },
  {
    id: 'web-cross-platform',
    number: '005',
    title: 'MODERN WEB & ADMIN PORTALS',
    headline: 'CREATING VISUALLY COMPELLING WEBSITES & ADMIN PANELS THAT DRIVE REAL RESULTS.',
    description:
      'Developing responsive modern web applications, companion CMS portals, and landing experiences with Next.js, React, and TypeScript.',
    tags: ['Editorial Layout Design', 'Fully Responsive Design', 'Strong Visual Hierarchy', 'Performance-Driven Design', 'High-Converting Portals'],
    previewImages: [
      '/project_images/worksphere project images/Gemini_Generated_Image_fbhdzgfbhdzgfbhd.jpg',
      '/project_images/monefii (ai expense tracker) images/Frame 177.png',
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'ARCHITECTURE & SPECIFICATION',
    description: 'Understanding requirements, mapping system state, selecting optimal design patterns, and laying down predictable code foundations.',
    details: ['Requirements Deconstruction', 'Data Flow & Domain Modeling', 'State Architecture Selection'],
  },
  {
    step: '02',
    title: 'HIGH-FIDELITY PROTOTYPING',
    description: 'Transforming wireframes into responsive, pixel-perfect Flutter UI widgets with fluid 60 FPS transitions and tactile haptics.',
    details: ['Widget Tree Modularization', 'Custom Animations & Gestures', 'Dark / Light Adaptive Themes'],
  },
  {
    step: '03',
    title: 'CLOUD & OFFLINE INTEGRATION',
    description: 'Hooking up Supabase, Firebase, and REST API services with local SQLite caching for rock-solid offline-first resilience.',
    details: ['REST Interceptors & JWT Handling', 'Realtime Subscriptions', 'Offline Persistence Pipeline'],
  },
  {
    step: '04',
    title: 'PROFILING & PRODUCTION RELEASE',
    description: 'Refining and benchmarking performance with Flutter DevTools, memory leak audits, and CI/CD multi-store deployment.',
    details: ['Widget Rebuild Minimization', 'Rigorous Edge Case Testing', 'App Store & Play Store Packaging'],
  },
];

export const testimonialsList: Testimonial[] = [
  {
    id: 'test-1',
    name: 'John Doe',
    role: 'Marketing & Product Director',
    company: 'Fintech Ventures',
    rating: 5,
    content: 'Arham engineered a clean and intuitive Flutter architecture that perfectly matched our brand identity. The attention to detail, 60 FPS smoothness, and speed of delivery made the entire project effortless.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
  },
  {
    id: 'test-2',
    name: 'Sophia Taylor',
    role: 'Product Lead & Founder',
    company: 'WorkSphere Ecosystem',
    rating: 5,
    content: 'Working with Arham was an amazing experience. He transformed our complex multi-role marketplace concept into a polished and functional mobile product with real-time Supabase integration.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80',
  },
  {
    id: 'test-3',
    name: 'Daniel Smith',
    role: 'Engineering Lead',
    company: 'HealthTech Labs',
    rating: 5,
    content: 'Arham delivered an outstanding cross-platform architecture that perfectly matched our vision. His proactive communication and deep understanding of Flutter sensors and SQFlite saved us weeks.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
  },
  {
    id: 'test-4',
    name: 'Olivia Harris',
    role: 'Operations Manager',
    company: 'Creative Web Studio',
    rating: 5,
    content: 'Excellent communication, fast delivery, and outstanding attention to detail. Highly recommended for any Flutter or full-stack software development project!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'plan-starter',
    title: 'MVP MOBILE APP PACKAGE',
    type: 'project',
    price: '$650',
    duration: '/Project',
    description: 'Ideal for early-stage startups and founders who need a polished MVP ready for user testing and initial release.',
    deliveryTime: '2-3 Weeks',
    revisions: 'Up to 3 Cycles',
    format: 'Flutter (iOS & Android)',
    features: [
      'Complete iOS & Android Mobile Application',
      'Clean Modular UI with 60 FPS Animations',
      'Firebase / Supabase Auth & Cloud Database',
      'REST API Integration & JSON Deserialization',
      'Offline-First Local Storage (SQFlite)',
      '1 Month Dedicated Post-Launch Support',
    ],
    guarantee: 'We are committed to delivering high-quality engineering work that exceeds expectations.',
    badge: 'STARTER PACKAGE',
  },
  {
    id: 'plan-pro',
    title: 'FULL ARCHITECTURE & SCALE',
    type: 'project',
    price: '$1,400',
    duration: '/Project',
    description: 'Comprehensive solution for production-scale platforms requiring clean architecture, AI integration, and store deployment.',
    deliveryTime: '3-4 Weeks',
    revisions: 'Unlimited during sprint',
    format: 'Full-Stack Mobile + Web',
    features: [
      'Enterprise Clean BLoC / GetX Architecture',
      'AI & OCR Integration (Receipts / Doc Vision)',
      'Real-time Supabase Database with <50ms Sync',
      'Advanced Custom Animations & Interactive Haptics',
      'Play Store & App Store Deployment Readiness',
      '3 Months Extended Support & Code Walkthrough',
    ],
    guarantee: 'Full production guarantee with automated CI/CD pipeline and architectural documentation.',
    badge: 'COMPLETE PACKAGE',
  },
  {
    id: 'plan-monthly-part',
    title: 'DEDICATED SPRINT RETAINER',
    type: 'monthly',
    price: '$1,200',
    duration: '/Month',
    description: 'Dedicated part-time engineering power integrated directly into your existing team and sprints.',
    deliveryTime: 'Continuous Sprints',
    revisions: 'Ongoing Agile',
    format: 'Full Repository Access',
    features: [
      '20+ Hours per Week of Dedicated Engineering',
      'Direct Slack / Discord / WhatsApp Communication',
      'Feature Development, Refactoring & Bug Fixes',
      'DevTools Profiling & Widget Rebuild Minimization',
      'Daily Standup & Bi-Weekly Architecture Reviews',
    ],
    guarantee: 'Cancel or pause anytime. Predictable sprint velocity with transparent commits.',
    badge: 'MONTHLY SPRINT',
  },
  {
    id: 'plan-monthly-full',
    title: 'FULL-TIME EMBEDDED ENGINEER',
    type: 'monthly',
    price: '$2,400',
    duration: '/Month',
    description: 'Full-time senior mobile & full-stack software engineer fully dedicated to your product roadmap.',
    deliveryTime: 'Full-Time Dedicated',
    revisions: 'Unlimited Agile',
    format: 'Core Team Integration',
    features: [
      '40 Hours per Week Full-Time Commitment',
      'End-to-End Ownership from Design to Store Launch',
      'Cross-Platform Mobile + Next.js Web Companion',
      'Architecture Governance & Code Review Leadership',
      'Priority 24/7 Incident Escalation & Maintenance',
    ],
    guarantee: 'Senior ownership, clean Git commit workflows, and complete architectural documentation.',
    badge: 'FULL-TIME RETAINER',
  },
];

export const insightArticles: InsightArticle[] = [
  {
    id: 'art-1',
    title: 'The 60 FPS Secret: Optimizing Flutter Widget Rebuilds in Production',
    category: 'Mobile Architecture',
    date: 'Jun 13, 2026',
    readTime: '6 min read',
    image: '/project_images/monefii (ai expense tracker) images/Feature Graphic.png',
    author: 'M. Arham',
    excerpt: 'Deep dive into why unnecessary setState and reactive bindings cause jank, and how to utilize selector patterns and const constructors for silky 60 FPS.',
  },
  {
    id: 'art-2',
    title: 'Real-Time Sync with Supabase & Flutter: Under 50ms Latency',
    category: 'Full-Stack',
    date: 'May 28, 2026',
    readTime: '8 min read',
    image: '/project_images/worksphere project images/feature graphic.jpg',
    author: 'M. Arham',
    excerpt: 'Architecting bi-directional live sockets and row-level security for marketplace chats and instant order status updates.',
  },
  {
    id: 'art-3',
    title: 'Building an On-Device AI Receipt Scanner with OCR Vision',
    category: 'AI & Vision',
    date: 'May 10, 2026',
    readTime: '5 min read',
    image: '/project_images/monefii (ai expense tracker) images/Frame 176.png',
    author: 'M. Arham',
    excerpt: 'How we extracted merchant dates and numerical amounts with instant auto-fill in Monefii using smart edge image processing.',
  },
  {
    id: 'art-4',
    title: 'Sensor-Driven Mobile Navigation: Magnetometers & Qibla Math',
    category: 'Engineering',
    date: 'Apr 22, 2026',
    readTime: '7 min read',
    image: '/project_images/Islam_Master/dark.png',
    author: 'M. Arham',
    excerpt: 'Calculating Great Circle bearing from GPS latitude/longitude and damping compass azimuth sensor noise for steady real-time needle guidance.',
  },
];

export const faqList: FAQItem[] = [
  {
    question: '1. WHAT SERVICES DO YOU OFFER?',
    answer:
      'I specialize in cross-platform mobile development (iOS & Android) with Flutter, clean mobile architecture, full-stack integrations with Supabase & Firebase, on-device AI/OCR, and responsive web portals with Next.js & TypeScript.',
  },
  {
    question: '2. WHAT IS YOUR TYPICAL ENGINEERING PROCESS FROM START TO FINISH?',
    answer:
      'Every project begins with in-depth requirement analysis and technical architecture design. From there, we move into modular UI prototyping, reactive state wiring, cloud & offline API integration, and finally rigorous profiling and store deployment.',
  },
  {
    question: '3. WILL I BE INVOLVED IN THE DEVELOPMENT PROCESS ALONG THE WAY?',
    answer:
      'Yes, absolutely! I believe in transparent agile collaboration. You will have continuous visibility through test builds (APK / TestFlight), regular sprint updates, and direct communication channels (WhatsApp, Slack, or GitHub).',
  },
  {
    question: '4. WHAT DELIVERABLES WILL I RECEIVE WHEN THE PROJECT IS COMPLETE?',
    answer:
      'You receive full intellectual property ownership, complete source code on GitHub with clean documentation, compiled production binaries (APK, AAB, IPA), database schemas, and post-launch maintenance.',
  },
  {
    question: '5. DO YOU OFFER REVISIONS AND POST-LAUNCH SUPPORT?',
    answer:
      'Yes! Every project includes dedicated revision cycles and a 1 to 3 month post-launch support window to ensure everything runs smoothly and reliably in production.',
  },
  {
    question: '6. CAN YOU WORK WITH AN EXISTING CODEBASE OR TEAM?',
    answer:
      'Yes! I regularly collaborate with existing engineering teams to refactor legacy code, upgrade Flutter versions, optimize widget rebuilds, or implement complex new features.',
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
    year: '2024',
    badge: 'National Certification',
  },
  {
    id: 'huawei-hccda',
    title: 'HCCDA – AI Certification',
    issuer: 'Huawei Certified',
    credentialId: 'Hwendcaida871226',
    skills: ['AI Foundations', 'Machine Learning', 'Computer Vision Basics'],
    verified: true,
    year: '2024',
    badge: 'Global Tech Honor',
  },
  {
    id: 'degree-bsse',
    title: 'BS in Software Engineering (CGPA 3.58)',
    issuer: 'The Islamia University of Bahawalpur',
    skills: ['Software Architecture', 'Data Structures', 'Algorithms', 'Mobile Engineering'],
    verified: true,
    year: '2021-2025',
    badge: 'Academic Distinction',
  },
  {
    id: 'abinos-appr',
    title: 'Senior Mobile Engineering Apprentice',
    issuer: 'Abinos Studio',
    skills: ['Flutter 3.x', 'BLoC Pattern', 'Clean Architecture', 'CI/CD'],
    verified: true,
    year: '2024-Present',
    badge: 'Production Excellence',
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
