/* ================================================================
   ACENEXT Solutions — Website Constants
   Complete data layer for the entire application
   ================================================================ */

import type {
  SiteConfig,
  NavigationItem,
  Service,
  Industry,
  ProcessStep,
  PricingTier,
  CaseStudy,
  TechStackItem,
  Testimonial,
  FAQItem,
  BlogPost,
  Stat,
} from "@/types";

/* ================================================================
   Site Configuration
   ================================================================ */

export const SITE_CONFIG: SiteConfig = {
  name: "ACENEXT Solutions",
  legalName: "ACENEXT Solutions",
  tagline: "Engineering Operational Excellence",
  description:
    "Architecting bespoke digital platforms, enterprise workflows, and robust data infrastructure for organizations demanding precision and scale.",
  url: "https://acenext.com",
  email: "acenext@gmail.com",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  address: {
    street: "HSR Layout, Sector 4",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560102",
    country: "India",
    full: "HSR Layout, Sector 4, Bengaluru, Karnataka 560102, India",
  },
  socialLinks: {
    linkedin: "https://linkedin.com/company/acenext",
    twitter: "https://twitter.com/acenext",
    github: "https://github.com/acenext",
    instagram: "https://instagram.com/acenext",
    youtube: "https://youtube.com/@acenext",
  },
  foundedYear: 2024,
  locale: "en-IN",
  currency: "INR",
  founders: [
    { name: "Mohammed Akdas Ansari", role: "Co-Founder & Chief Technology Officer" },
    { name: "Mohammed Adil Shaikh", role: "Co-Founder & Chief Operating Officer" }
  ],
};

/* ================================================================
   Navigation
   ================================================================ */

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
    description: "Our story, mission, and the team behind ACENEXT Solutions",
  },
  {
    label: "Services",
    path: "/services",
    description: "End-to-end consulting and technology solutions",
    children: [
      {
        label: "Intelligent Automation & AI",
        path: "/services/intelligent-automation-ai",
        description:
          "AI-powered workflows, chatbots, document processing, and predictive analytics",
        icon: "brain",
      },
      {
        label: "Process Architecture & Workflow Optimization",
        path: "/services/process-architecture",
        description:
          "Business process re-engineering, workflow mapping, and operational streamlining",
        icon: "workflow",
      },
      {
        label: "Data Infrastructure & Business Intelligence",
        path: "/services/data-infrastructure",
        description:
          "Data pipelines, warehousing, dashboards, and actionable analytics",
        icon: "database",
      },
      {
        label: "Custom Software Development",
        path: "/services/custom-software",
        description:
          "Bespoke web applications, APIs, integrations, and enterprise platforms",
        icon: "code",
      },
    ],
  },
  {
    label: "Industries",
    path: "/industries",
    description: "Solutions tailored to your industry's unique challenges",
  },
  {
    label: "Process",
    path: "/process",
    description: "Our proven 8-step engagement methodology",
  },
  {
    label: "Case Studies",
    path: "/case-studies",
    description: "Real results from real client engagements",
  },
  {
    label: "Pricing",
    path: "/pricing",
    description: "Transparent engagement tiers for every business stage",
  },
  {
    label: "Tech Stack",
    path: "/tech-stack",
    description: "The technologies powering our solutions",
  },
  {
    label: "Blog",
    path: "/blog",
    description: "Insights on automation, AI, and digital transformation",
  },
  {
    label: "Testimonials",
    path: "/testimonials",
    description: "What our clients say about working with us",
  },
  {
    label: "FAQ",
    path: "/faq",
    description: "Answers to frequently asked questions",
  },
  {
    label: "Careers",
    path: "/careers",
    description: "Join our team of consultants and engineers",
  },
  {
    label: "Contact",
    path: "/contact",
    description: "Start a conversation about your next project",
  },
  {
    label: "Privacy Policy",
    path: "/privacy",
  },
  {
    label: "Terms of Service",
    path: "/terms",
  },
];

/** Top-level navigation items for the header */
export const HEADER_NAV_ITEMS = NAVIGATION_ITEMS.filter((item) =>
  [
    "/",
    "/about",
    "/services",
    "/industries",
    "/case-studies",
    "/pricing",
    "/blog",
    "/contact",
  ].includes(item.path)
);

/** Footer navigation groups */
export const FOOTER_NAV = {
  company: NAVIGATION_ITEMS.filter((item) =>
    ["/about", "/careers", "/contact"].includes(item.path)
  ),
  services: NAVIGATION_ITEMS.find((item) => item.path === "/services")
    ?.children ?? [],
  resources: NAVIGATION_ITEMS.filter((item) =>
    ["/blog", "/case-studies", "/faq", "/tech-stack"].includes(item.path)
  ),
  legal: NAVIGATION_ITEMS.filter((item) =>
    ["/privacy", "/terms"].includes(item.path)
  ),
};

/* ================================================================
   Services
   ================================================================ */

export const SERVICES: Service[] = [
  {
    id: "intelligent-automation-ai",
    title: "Intelligent Automation & AI Solutions",
    shortTitle: "Automation & AI",
    description:
      "Transform manual, repetitive operations into intelligent, self-optimizing workflows with custom AI and automation systems built for your business logic.",
    longDescription:
      "We design and deploy end-to-end automation architectures that combine robotic process automation, machine learning models, and large language model integrations to eliminate operational bottlenecks. From intelligent document processing that extracts and routes data from invoices, contracts, and forms, to conversational AI assistants that handle customer inquiries around the clock — every solution is purpose-built around your existing systems and team capabilities. Our automation strategies deliver measurable ROI within the first quarter while establishing a foundation for continuous optimization.",
    icon: "brain",
    features: [
      "Custom AI chatbots and virtual assistants",
      "Intelligent document processing and OCR",
      "Predictive analytics and forecasting models",
      "Workflow automation with n8n and Zapier",
      "LLM integration and prompt engineering",
      "Anomaly detection and alerting systems",
      "Email and communication automation",
      "AI-powered data extraction pipelines",
    ],
    technologies: ["OpenAI", "LangChain", "Python", "n8n", "Zapier", "FastAPI"],
    slug: "intelligent-automation-ai",
    color: "green",
  },
  {
    id: "process-architecture",
    title: "Process Architecture & Workflow Optimization",
    shortTitle: "Process Architecture",
    description:
      "Redesign fragmented operations into streamlined, documented workflows that scale with your growth and reduce operational overhead by up to 60%.",
    longDescription:
      "Most organizations operate with processes that evolved organically — creating inefficiencies, knowledge silos, and dependency risks. We conduct thorough operational audits, map every workflow from trigger to completion, identify redundancies and handoff failures, then architect optimized process frameworks. Using industry-standard notation (BPMN 2.0) and modern orchestration tools, we deliver documented, version-controlled process libraries that your team can maintain and evolve. The result is a leaner operation where every team member understands their role, every handoff is tracked, and every bottleneck has been systematically eliminated.",
    icon: "workflow",
    features: [
      "Business process mapping and documentation",
      "Operational efficiency audits",
      "BPMN 2.0 workflow design",
      "Standard operating procedure development",
      "Change management consulting",
      "Cross-departmental process integration",
      "Compliance workflow design",
      "Process performance metrics and KPI frameworks",
    ],
    technologies: ["Notion", "Miro", "Lucidchart", "n8n", "Zapier", "Airtable"],
    slug: "process-architecture",
    color: "navy",
  },
  {
    id: "data-infrastructure",
    title: "Data Infrastructure & Business Intelligence",
    shortTitle: "Data & Analytics",
    description:
      "Build a robust data foundation that turns scattered information into real-time, actionable intelligence — powering confident decisions at every level of your organization.",
    longDescription:
      "Data only creates value when it flows reliably from source to insight. We design complete data architectures — from ingestion pipelines that collect data across your CRM, ERP, marketing platforms, and operational systems, through transformation layers that clean, validate, and model your data, to presentation layers that surface insights through interactive dashboards and automated reports. Whether you need a centralized data warehouse, real-time analytics on customer behavior, or executive dashboards that update every morning before your leadership meeting — we build data systems that become the backbone of your strategic decision-making.",
    icon: "database",
    features: [
      "Data pipeline design and ETL/ELT automation",
      "Data warehouse and lakehouse architecture",
      "Interactive dashboard development",
      "Real-time analytics and monitoring",
      "Custom reporting and alert systems",
      "Data quality and governance frameworks",
      "Cross-platform data integration",
      "Predictive business intelligence models",
    ],
    technologies: [
      "PostgreSQL",
      "Python",
      "Power BI",
      "Tableau",
      "AWS",
      "dbt",
    ],
    slug: "data-infrastructure",
    color: "bronze",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    description:
      "Purpose-built web applications, APIs, and enterprise platforms engineered with modern architectures for performance, security, and long-term maintainability.",
    longDescription:
      "Off-the-shelf software forces your business into someone else's workflow. We build custom platforms that map precisely to your operations — whether that means a client portal that automates your service delivery, an internal operations dashboard that replaces six spreadsheets and three email threads, or a customer-facing application that differentiates your brand in the market. Every project follows enterprise engineering practices: typed languages, comprehensive testing, CI/CD pipelines, infrastructure-as-code, and thorough documentation. The result is software that your team can confidently maintain, extend, and scale as your business grows.",
    icon: "code",
    features: [
      "Full-stack web application development",
      "RESTful and GraphQL API design",
      "Enterprise portal and dashboard development",
      "Third-party integration and middleware",
      "Cloud architecture and deployment",
      "Performance optimization and scaling",
      "Security audits and hardening",
      "Technical documentation and training",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Azure",
    ],
    slug: "custom-software",
    color: "charcoal",
  },
];

/* ================================================================
   Industries
   ================================================================ */

export const INDUSTRIES: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    description:
      "HIPAA-aware solutions for patient data management, appointment automation, clinical workflows, and compliance reporting.",
    challenges: [
      "Complex patient data management across systems",
      "Manual appointment scheduling and follow-ups",
      "Regulatory compliance and audit readiness",
      "Fragmented communication between departments",
    ],
    solutions: [
      "Integrated patient data platforms with role-based access",
      "Automated appointment booking and reminder systems",
      "Compliance dashboards with real-time audit trails",
      "Cross-departmental workflow orchestration",
    ],
    icon: "heart-pulse",
    slug: "healthcare",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description:
      "CRM automation, lead nurturing pipelines, property management systems, and market analytics for developers and brokerages.",
    challenges: [
      "Lead leakage across sales channels",
      "Manual property listing and inventory management",
      "Disconnected broker and customer communication",
      "Lack of real-time market and portfolio analytics",
    ],
    solutions: [
      "Automated lead capture and multi-channel nurturing",
      "Centralized property management with status tracking",
      "Integrated communication platforms for brokers and clients",
      "Market trend dashboards with predictive insights",
    ],
    icon: "building",
    slug: "real-estate",
  },
  {
    id: "finance",
    name: "Finance & Banking",
    description:
      "Regulatory reporting automation, risk analytics, customer onboarding workflows, and fraud detection systems.",
    challenges: [
      "Regulatory reporting burden and compliance risk",
      "Manual KYC and customer onboarding processes",
      "Delayed risk assessment and portfolio analysis",
      "Fraud detection gaps in transaction monitoring",
    ],
    solutions: [
      "Automated regulatory report generation and filing",
      "Digital KYC workflows with document verification",
      "Real-time risk dashboards and portfolio analytics",
      "AI-driven fraud detection and alert systems",
    ],
    icon: "landmark",
    slug: "finance",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description:
      "Production tracking, supply chain optimization, quality control automation, and predictive maintenance solutions.",
    challenges: [
      "Production scheduling inefficiencies and downtime",
      "Supply chain visibility across multiple vendors",
      "Manual quality inspection and defect tracking",
      "Reactive maintenance leading to costly breakdowns",
    ],
    solutions: [
      "Automated production scheduling and tracking dashboards",
      "End-to-end supply chain visibility platforms",
      "Digital quality control with automated defect logging",
      "Predictive maintenance models reducing unplanned downtime",
    ],
    icon: "factory",
    slug: "manufacturing",
  },
  {
    id: "education",
    name: "Education",
    description:
      "Learning management systems, enrollment automation, performance analytics, and administrative workflow optimization.",
    challenges: [
      "Manual enrollment and admissions processing",
      "Limited visibility into student performance trends",
      "Administrative overhead from paper-based processes",
      "Fragmented communication with students and parents",
    ],
    solutions: [
      "Automated enrollment pipelines with digital document handling",
      "Student performance dashboards with early warning indicators",
      "Digitized administrative workflows reducing processing time",
      "Integrated communication platforms for all stakeholders",
    ],
    icon: "graduation-cap",
    slug: "education",
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    description:
      "Inventory management, customer analytics, order processing automation, and omnichannel experience optimization.",
    challenges: [
      "Inventory mismatches between online and physical channels",
      "Manual order processing and fulfillment workflows",
      "Limited customer behavior insights and personalization",
      "Disconnected marketing and sales data",
    ],
    solutions: [
      "Unified inventory management across all channels",
      "Automated order processing and fulfillment pipelines",
      "Customer analytics dashboards with segmentation insights",
      "Integrated marketing attribution and sales tracking",
    ],
    icon: "shopping-bag",
    slug: "retail",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    description:
      "Route optimization, shipment tracking, warehouse management automation, and logistics analytics platforms.",
    challenges: [
      "Inefficient route planning increasing fuel and time costs",
      "Limited real-time visibility into shipment status",
      "Manual warehouse operations and inventory counting",
      "Disconnected data across carriers and warehouses",
    ],
    solutions: [
      "AI-powered route optimization reducing transit times",
      "Real-time shipment tracking dashboards for all stakeholders",
      "Automated warehouse management and inventory systems",
      "Unified logistics data platform across all partners",
    ],
    icon: "truck",
    slug: "logistics",
  },
  {
    id: "law-firms",
    name: "Law Firms",
    description:
      "Case management systems, document automation, billing workflow optimization, and client communication platforms.",
    challenges: [
      "Time-intensive document drafting and review cycles",
      "Manual case tracking across multiple matters",
      "Complex billing and time recording processes",
      "Client communication delays and status visibility",
    ],
    solutions: [
      "AI-assisted document drafting and review automation",
      "Centralized case management with milestone tracking",
      "Automated time tracking and billing report generation",
      "Client portals with real-time case status visibility",
    ],
    icon: "scale",
    slug: "law-firms",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    description:
      "Project management automation, resource allocation, client reporting, and operational efficiency consulting.",
    challenges: [
      "Resource allocation gaps across concurrent projects",
      "Manual client reporting and status update processes",
      "Knowledge silos between project teams",
      "Inconsistent project delivery methodologies",
    ],
    solutions: [
      "Automated resource scheduling and capacity planning",
      "Dynamic client reporting dashboards with automated updates",
      "Centralized knowledge base and collaboration platform",
      "Standardized project delivery frameworks with templates",
    ],
    icon: "briefcase",
    slug: "professional-services",
  },
];

/* ================================================================
   Process Steps
   ================================================================ */

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Assessment",
    description:
      "We begin with a comprehensive audit of your current operations, technology landscape, and business objectives. Through stakeholder interviews, workflow observation, and data analysis, we identify the highest-impact opportunities for improvement.",
    deliverables: [
      "Current-state process maps",
      "Technology audit report",
      "Stakeholder interview summaries",
      "Opportunity assessment matrix",
    ],
    duration: "1–2 weeks",
    icon: "search",
  },
  {
    step: 2,
    title: "Strategic Planning",
    description:
      "Based on discovery findings, we develop a prioritized roadmap that aligns technology investments with your business goals. Each initiative is scoped with clear success metrics, resource requirements, and timeline estimates.",
    deliverables: [
      "Strategic roadmap document",
      "Initiative priority matrix",
      "ROI projections per initiative",
      "Risk assessment and mitigation plan",
    ],
    duration: "1–2 weeks",
    icon: "map",
  },
  {
    step: 3,
    title: "Architecture & Design",
    description:
      "Our engineers design the technical architecture, data models, and user experience for each solution. Designs are validated with your team through interactive prototypes and technical review sessions before any code is written.",
    deliverables: [
      "Technical architecture documents",
      "Data model and schema designs",
      "UI/UX wireframes and prototypes",
      "Integration specification sheets",
    ],
    duration: "2–3 weeks",
    icon: "drafting-compass",
  },
  {
    step: 4,
    title: "Development & Integration",
    description:
      "We build solutions using agile sprints with biweekly demos. Each sprint delivers working, tested functionality that integrates with your existing systems. Your team has full visibility into progress through shared project boards.",
    deliverables: [
      "Working software increments",
      "Sprint demo recordings",
      "Integration test results",
      "Updated project board and burndown",
    ],
    duration: "4–12 weeks",
    icon: "code",
  },
  {
    step: 5,
    title: "Testing & Quality Assurance",
    description:
      "Every solution undergoes rigorous testing — including unit tests, integration tests, performance benchmarks, security audits, and user acceptance testing with your team. We do not ship until quality standards are met.",
    deliverables: [
      "Test coverage reports",
      "Performance benchmark results",
      "Security audit findings and remediations",
      "UAT sign-off documentation",
    ],
    duration: "1–2 weeks",
    icon: "shield-check",
  },
  {
    step: 6,
    title: "Deployment & Migration",
    description:
      "We handle production deployment with zero-downtime strategies, data migration with integrity validation, and rollback plans for every change. Your operations continue uninterrupted throughout the transition.",
    deliverables: [
      "Deployment runbook",
      "Data migration validation report",
      "Rollback and recovery procedures",
      "Production environment documentation",
    ],
    duration: "1 week",
    icon: "rocket",
  },
  {
    step: 7,
    title: "Training & Adoption",
    description:
      "Technology only delivers value when people use it effectively. We provide hands-on training sessions, video walkthroughs, and comprehensive documentation tailored to each user role — ensuring confident adoption from day one.",
    deliverables: [
      "Role-based training sessions",
      "Video tutorial library",
      "User documentation and quick-start guides",
      "Admin and maintenance playbooks",
    ],
    duration: "1–2 weeks",
    icon: "users",
  },
  {
    step: 8,
    title: "Continuous Support & Optimization",
    description:
      "Post-launch, we monitor performance, gather user feedback, and continuously optimize. Monthly health checks and quarterly strategy reviews ensure your solutions evolve alongside your business needs.",
    deliverables: [
      "Monthly performance reports",
      "System health monitoring dashboards",
      "Quarterly optimization recommendations",
      "Priority support and incident response",
    ],
    duration: "Ongoing",
    icon: "refresh-cw",
  },
];

/* ================================================================
   Pricing
   ================================================================ */

export const PRICING: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    priceRange: "₹15,000 – ₹50,000/mo",
    description:
      "Ideal for startups and small businesses beginning their automation journey with targeted, high-impact solutions.",
    features: [
      "Up to 2 automation workflows",
      "Basic process documentation",
      "Single dashboard or report",
      "Email and chat support",
      "Monthly progress reports",
      "Standard response time (24 hours)",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "growth",
    name: "Growth",
    priceRange: "₹50,000 – ₹1,50,000/mo",
    description:
      "For growing companies ready to systematize operations and build a strong data-driven decision-making foundation.",
    features: [
      "Up to 5 automation workflows",
      "Complete process architecture",
      "Up to 3 dashboards or integrations",
      "AI chatbot or document processing",
      "Bi-weekly strategy calls",
      "Priority support (8-hour response)",
      "Quarterly optimization reviews",
    ],
    cta: "Scale Your Operations",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "professional",
    name: "Professional",
    priceRange: "₹1,50,000 – ₹5,00,000/mo",
    description:
      "Comprehensive consulting and development for mid-market companies executing multi-system digital transformation.",
    features: [
      "Unlimited automation workflows",
      "Full data infrastructure build-out",
      "Custom web application development",
      "Advanced AI and ML model deployment",
      "Dedicated project manager",
      "Weekly strategy and progress calls",
      "Priority support (4-hour response)",
      "Change management consulting",
    ],
    cta: "Transform Your Business",
    highlighted: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceRange: "Custom",
    description:
      "Tailored engagements for large organizations with complex, multi-department transformation requirements and compliance needs.",
    features: [
      "Everything in Professional, plus:",
      "Multi-department process re-engineering",
      "Enterprise-grade security and compliance",
      "On-premise or hybrid deployment options",
      "Dedicated engineering team",
      "24/7 support with SLA guarantees",
      "Executive-level quarterly reviews",
      "Custom training and certification programs",
    ],
    cta: "Contact Us",
    highlighted: false,
    badge: "White Glove",
  },
];

/* ================================================================
   Case Studies
   ================================================================ */

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-healthcare-workflow",
    title: "Automating Patient Intake for a Multi-Specialty Clinic Chain",
    client: "VitalCare Medical Group",
    industry: "Healthcare",
    challenge:
      "VitalCare operated 12 clinics with completely manual patient registration, insurance verification, and appointment scheduling. Front-desk staff spent 70% of their time on data entry, leading to 45-minute average wait times and frequent data errors that cascaded into billing disputes.",
    solution:
      "We deployed a digital patient intake system with OCR-powered insurance card scanning, automated eligibility verification through payer APIs, and an intelligent appointment scheduling engine that optimized provider calendars based on visit type, duration, and patient preferences. A unified patient dashboard gave front-desk staff a single view of each patient's journey.",
    results: [
      {
        metric: "Wait Time Reduction",
        value: "68%",
        description:
          "Average patient wait time dropped from 45 minutes to 14 minutes",
      },
      {
        metric: "Data Entry Errors",
        value: "91%↓",
        description:
          "Billing-related data errors reduced from 23% to 2% of records",
      },
      {
        metric: "Staff Productivity",
        value: "3.2×",
        description:
          "Front-desk staff handled 3.2x more patient check-ins per hour",
      },
    ],
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "n8n"],
    testimonial:
      "The intake system transformed our clinics. What used to require three staff members now runs with one, and our patients actually compliment the check-in experience.",
    testimonialAuthor: "Dr. Meera Krishnan",
    testimonialRole: "Chief Operating Officer, VitalCare Medical Group",
    duration: "14 weeks",
    slug: "healthcare-patient-intake-automation",
    featured: true,
  },
  {
    id: "cs-real-estate-crm",
    title: "Building an Intelligent Lead Management Platform for a Developer",
    client: "Horizon Properties",
    industry: "Real Estate",
    challenge:
      "Horizon Properties launched 4–6 residential projects annually, generating thousands of leads from property portals, social media ads, and walk-ins. Leads were tracked in spreadsheets shared across 28 sales agents, resulting in 35% lead leakage and zero visibility into sales funnel performance.",
    solution:
      "We built a custom lead management platform that automatically captured leads from all channels, assigned them to agents based on project, location, and availability, and triggered personalized nurturing sequences. A real-time sales dashboard gave leadership instant visibility into pipeline health, agent performance, and conversion bottlenecks.",
    results: [
      {
        metric: "Lead Conversion Rate",
        value: "2.4×",
        description:
          "Site visit conversion improved from 8% to 19% through automated follow-ups",
      },
      {
        metric: "Lead Response Time",
        value: "94%↓",
        description:
          "Average first response dropped from 6 hours to 22 minutes",
      },
      {
        metric: "Revenue Impact",
        value: "₹4.2Cr",
        description:
          "Additional annual revenue attributed to recovered and nurtured leads",
      },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "n8n", "AWS"],
    testimonial:
      "We went from guessing which projects were selling to knowing exactly where every lead stands. The platform paid for itself in the first month.",
    testimonialAuthor: "Rajesh Malhotra",
    testimonialRole: "Director of Sales, Horizon Properties",
    duration: "10 weeks",
    slug: "real-estate-lead-management-platform",
    featured: true,
  },
  {
    id: "cs-finance-reporting",
    title: "Automated Regulatory Reporting for a Regional NBFC",
    client: "PrimeFinance Capital",
    industry: "Finance",
    challenge:
      "PrimeFinance submitted 14 different regulatory reports monthly to RBI and SEBI. Each report required data from 5 different systems, manual reconciliation in Excel, and multi-level approval chains. The compliance team of 6 spent 60% of their time on report preparation, with occasional filing delays risking penalties.",
    solution:
      "We built an automated reporting pipeline that extracted data from their core banking system, loan management platform, and accounting software, transformed it into report-ready formats, applied validation rules matching regulatory specifications, and generated reports with one-click approval workflows. An audit trail captured every data transformation for compliance documentation.",
    results: [
      {
        metric: "Report Preparation Time",
        value: "85%↓",
        description:
          "Monthly report cycle reduced from 12 days to under 2 days",
      },
      {
        metric: "Filing Accuracy",
        value: "100%",
        description:
          "Zero regulatory filing errors in 18 months since deployment",
      },
      {
        metric: "Compliance Team Capacity",
        value: "60%",
        description:
          "Freed compliance team capacity reallocated to risk analysis and advisory",
      },
    ],
    technologies: ["Python", "PostgreSQL", "Power BI", "Docker", "AWS"],
    testimonial:
      "Regulatory reporting used to be our biggest anxiety every month. Now it runs like clockwork, and our team focuses on actual risk management instead of data wrangling.",
    testimonialAuthor: "Sunita Agarwal",
    testimonialRole: "Head of Compliance, PrimeFinance Capital",
    duration: "12 weeks",
    slug: "finance-regulatory-reporting-automation",
    featured: true,
  },
  {
    id: "cs-manufacturing-qa",
    title: "Digital Quality Control System for an Auto Parts Manufacturer",
    client: "Apex Components Ltd.",
    industry: "Manufacturing",
    challenge:
      "Apex Components produced precision auto parts for tier-1 OEMs, requiring 100% inspection across 12 quality parameters. Manual inspection with paper checklists resulted in 4% defect escape rate, delayed rejection reports, and difficulty tracing quality issues back to specific production batches or machine settings.",
    solution:
      "We implemented a digital quality control system where inspectors used tablets to record measurements against specification tolerances, with automatic pass/fail determination. The system tracked defects by machine, operator, shift, and material batch, enabling root cause analysis. A real-time quality dashboard alerted supervisors the moment defect rates exceeded thresholds.",
    results: [
      {
        metric: "Defect Escape Rate",
        value: "0.3%",
        description:
          "Defect escape rate reduced from 4% to 0.3%, exceeding OEM requirements",
      },
      {
        metric: "Inspection Speed",
        value: "40%↑",
        description:
          "Digital checklists with auto-calculation reduced inspection time per batch",
      },
      {
        metric: "Customer Rejections",
        value: "92%↓",
        description:
          "OEM customer rejections dropped from 12/month to 1/month average",
      },
    ],
    technologies: ["React", "FastAPI", "PostgreSQL", "Docker", "Tableau"],
    testimonial:
      "The quality system didn't just reduce defects — it gave us the data to prevent them. We can now trace any issue to its exact cause within minutes.",
    testimonialAuthor: "Vikram Sharma",
    testimonialRole: "VP Operations, Apex Components Ltd.",
    duration: "16 weeks",
    slug: "manufacturing-digital-quality-control",
    featured: false,
  },
  {
    id: "cs-education-enrollment",
    title: "Streamlining Admissions for a University with 15,000 Applications",
    client: "Meridian University",
    industry: "Education",
    challenge:
      "Meridian University processed 15,000 undergraduate applications annually through a paper-heavy workflow involving 6 departments. Application review took 4–6 weeks, status inquiries overwhelmed the admissions office, and offer letters required manual generation and physical signatures from three authorities.",
    solution:
      "We built a digital admissions platform with online application submission, automated document verification, AI-assisted eligibility screening that pre-scored applications against program criteria, and a workflow engine that routed applications through departmental reviews with tracked SLAs. Students received real-time status updates through a self-service portal, and offer letters were generated and digitally signed automatically upon approval.",
    results: [
      {
        metric: "Processing Time",
        value: "73%↓",
        description:
          "Application-to-decision cycle reduced from 32 days to 9 days",
      },
      {
        metric: "Status Inquiries",
        value: "88%↓",
        description:
          "Student calls to admissions office dropped by 88% with self-service portal",
      },
      {
        metric: "Enrollment Yield",
        value: "18%↑",
        description:
          "Faster decisions and better communication improved enrollment yield",
      },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "n8n", "AWS"],
    testimonial:
      "We used to dread admission season. Now it's our most efficient operation. Students get decisions in days, not weeks, and our staff isn't buried in paperwork.",
    testimonialAuthor: "Prof. Anand Kulkarni",
    testimonialRole: "Registrar, Meridian University",
    duration: "18 weeks",
    slug: "education-admissions-platform",
    featured: false,
  },
  {
    id: "cs-logistics-tracking",
    title: "Real-Time Fleet Tracking and Route Optimization for a 3PL Provider",
    client: "SwiftMove Logistics",
    industry: "Logistics",
    challenge:
      "SwiftMove operated a fleet of 200+ vehicles across 8 states, with dispatchers manually assigning routes using local knowledge and phone calls. There was no real-time visibility into vehicle locations, delivery ETAs were unreliable, fuel costs were climbing, and customer satisfaction scores had dropped to 3.2/5.",
    solution:
      "We integrated GPS tracking across the entire fleet into a centralized command dashboard, built an AI-powered route optimization engine that considered traffic patterns, delivery windows, vehicle capacity, and driver hours, and deployed a customer-facing tracking portal with live ETAs. Automated alerts notified dispatchers of delays, route deviations, and maintenance schedules.",
    results: [
      {
        metric: "Fuel Costs",
        value: "23%↓",
        description:
          "Optimized routing and reduced idle time lowered monthly fuel spend",
      },
      {
        metric: "On-Time Delivery",
        value: "94%",
        description:
          "On-time delivery rate improved from 71% to 94% within 3 months",
      },
      {
        metric: "Customer Satisfaction",
        value: "4.6/5",
        description:
          "Customer satisfaction score improved from 3.2 to 4.6 with live tracking",
      },
    ],
    technologies: ["Python", "React", "PostgreSQL", "AWS", "Docker"],
    testimonial:
      "The route optimization alone saved us more than the entire project cost. Add the customer tracking portal, and our service quality is now a competitive advantage.",
    testimonialAuthor: "Deepak Nair",
    testimonialRole: "CEO, SwiftMove Logistics",
    duration: "20 weeks",
    slug: "logistics-fleet-tracking-optimization",
    featured: true,
  },
];

/* ================================================================
   Tech Stack
   ================================================================ */

export const TECH_STACK: TechStackItem[] = [
  {
    name: "Python",
    category: "language",
    description:
      "Our primary backend language for automation scripts, data pipelines, ML models, and API development.",
  },
  {
    name: "TypeScript",
    category: "language",
    description:
      "Type-safe JavaScript for all frontend and full-stack applications, ensuring code reliability at scale.",
  },
  {
    name: "FastAPI",
    category: "framework",
    description:
      "High-performance Python API framework with automatic documentation and async support for backend services.",
  },
  {
    name: "React",
    category: "framework",
    description:
      "Component-based UI library for building interactive, responsive user interfaces and dashboards.",
  },
  {
    name: "Next.js",
    category: "framework",
    description:
      "Full-stack React framework with SSR, SSG, and API routes for production-grade web applications.",
  },
  {
    name: "PostgreSQL",
    category: "database",
    description:
      "Enterprise-grade relational database for transactional data, analytics workloads, and complex queries.",
  },
  {
    name: "Docker",
    category: "devops",
    description:
      "Container platform ensuring consistent environments from development through production deployment.",
  },
  {
    name: "AWS",
    category: "cloud",
    description:
      "Primary cloud platform for hosting, storage, serverless functions, and managed database services.",
  },
  {
    name: "Azure",
    category: "cloud",
    description:
      "Microsoft cloud platform for enterprise integrations, Active Directory, and Power Platform connectivity.",
  },
  {
    name: "Power BI",
    category: "analytics",
    description:
      "Microsoft's business intelligence platform for interactive dashboards and enterprise reporting.",
  },
  {
    name: "Tableau",
    category: "analytics",
    description:
      "Advanced data visualization platform for complex analytical dashboards and data storytelling.",
  },
  {
    name: "OpenAI",
    category: "ai",
    description:
      "GPT and embedding models for intelligent chatbots, content generation, and natural language processing.",
  },
  {
    name: "LangChain",
    category: "ai",
    description:
      "Framework for building LLM-powered applications with retrieval-augmented generation and agent architectures.",
  },
  {
    name: "n8n",
    category: "automation",
    description:
      "Open-source workflow automation platform for building complex, multi-step business process automations.",
  },
  {
    name: "Zapier",
    category: "automation",
    description:
      "No-code automation platform connecting 5,000+ apps for rapid integration and workflow deployment.",
  },
];

/* ================================================================
   Testimonials
   ================================================================ */

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Priya Venkatesh",
    role: "Chief Technology Officer",
    company: "NovaBridge Financial",
    content:
      "ACENEXT didn't just automate our processes — they fundamentally rethought how our operations should work. Their team spent more time understanding our business than most vendors spend writing proposals. The data infrastructure they built became the foundation for every strategic decision we've made since.",
    rating: 5,
    industry: "Finance",
  },
  {
    id: "t-2",
    name: "Arjun Mehta",
    role: "Managing Director",
    company: "Greenfield Developments",
    content:
      "We engaged ACENEXT to fix our lead management problem and ended up transforming our entire sales operation. Their CRM platform tracks every interaction, automates follow-ups we used to forget, and gives me a real-time view of our sales pipeline that I review every morning before my first coffee.",
    rating: 5,
    industry: "Real Estate",
  },
  {
    id: "t-3",
    name: "Dr. Kavitha Subramaniam",
    role: "Director of Operations",
    company: "Wellness First Hospitals",
    content:
      "The patient intake system ACENEXT built reduced our registration time from 20 minutes to under 5. But what impressed us most was how they handled the complexity of insurance verification across different payers — something our previous vendor said was impossible.",
    rating: 5,
    industry: "Healthcare",
  },
  {
    id: "t-4",
    name: "Rohan Kapoor",
    role: "VP of Engineering",
    company: "LogiCore Supply Chain",
    content:
      "We needed a partner who could speak both business strategy and technical architecture fluently. ACENEXT delivered on both. Their route optimization algorithm saved us 18% on fuel in the first quarter, and their dashboard gives our dispatchers superpowers. The ROI was undeniable.",
    rating: 5,
    industry: "Logistics",
  },
  {
    id: "t-5",
    name: "Shalini Reddy",
    role: "Head of Digital Transformation",
    company: "Pinnacle Manufacturing",
    content:
      "What sets ACENEXT apart is their obsession with outcomes, not outputs. They didn't measure success by lines of code — they measured it by defect reduction, throughput improvement, and the hours we gave back to our production team. Every deliverable had a measurable business impact.",
    rating: 5,
    industry: "Manufacturing",
  },
  {
    id: "t-6",
    name: "Aditya Sharma",
    role: "Founder & CEO",
    company: "LegalEdge Associates",
    content:
      "As a law firm, we were skeptical about automation — our work demands precision and nuance. ACENEXT understood that. Their document automation system handles the repetitive drafting while our lawyers focus on strategy and client relationships. Billing accuracy improved overnight.",
    rating: 5,
    industry: "Legal",
  },
];

/* ================================================================
   FAQ Items
   ================================================================ */

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of businesses does ACENEXT work with?",
    answer:
      "We work with businesses across healthcare, real estate, finance, manufacturing, education, retail, logistics, law firms, and professional services. Our clients range from funded startups with 10 employees to established enterprises with 5,000+ staff. The common thread is a commitment to operational excellence and a willingness to invest in systems that scale.",
    category: "general",
  },
  {
    id: "faq-2",
    question: "How long does a typical engagement take from start to finish?",
    answer:
      "Most engagements span 8–20 weeks depending on scope. A focused automation project (e.g., chatbot or workflow automation) typically takes 6–10 weeks. A full data infrastructure build-out or custom platform development ranges from 12–20 weeks. We provide detailed timelines during the Strategic Planning phase, and every project follows an agile methodology with biweekly deliverables so you see progress from week one.",
    category: "process",
  },
  {
    id: "faq-3",
    question:
      "Do we need to replace our existing systems, or can you integrate with what we have?",
    answer:
      "Integration is our default approach. We strongly prefer building on your existing technology investments rather than ripping and replacing. Whether you use Salesforce, Tally, SAP, Google Workspace, or custom legacy systems, we design solutions that connect to your current stack through APIs, webhooks, and custom middleware. Replacement is only recommended when existing systems are a genuine constraint to growth.",
    category: "technical",
  },
  {
    id: "faq-4",
    question: "What is your pricing model?",
    answer:
      "We offer four engagement tiers: Starter (₹15,000–50,000/mo), Growth (₹50,000–1,50,000/mo), Professional (₹1,50,000–5,00,000/mo), and Enterprise (custom pricing). Each tier includes a defined scope of services, support levels, and deliverables. We also offer project-based pricing for defined-scope engagements. Every engagement begins with a free discovery call to understand your needs before recommending a tier.",
    category: "pricing",
  },
  {
    id: "faq-5",
    question: "How do you measure and report on project progress?",
    answer:
      "Every project uses a shared project board (Notion or Linear) where you can see every task, its status, and who's responsible. You receive biweekly demo sessions where we walk through completed work, gather feedback, and plan the next sprint. Monthly progress reports include metrics against the success criteria defined during strategic planning. There are no black boxes — you have complete visibility throughout.",
    category: "process",
  },
  {
    id: "faq-6",
    question: "What happens after the project is delivered?",
    answer:
      "Every engagement includes a structured handoff with comprehensive documentation, training sessions for your team, and a 30-day post-launch support period. For ongoing optimization, our Continuous Support tier provides monthly health checks, priority bug fixes, performance monitoring, and quarterly strategy reviews to ensure your systems continue delivering value as your business evolves.",
    category: "support",
  },
  {
    id: "faq-7",
    question: "Can you work with our internal development team?",
    answer:
      "Absolutely. We frequently collaborate with in-house engineering teams, functioning as a specialized augmentation partner rather than a replacement. We can lead architecture and design while your team handles implementation, co-develop alongside your engineers with shared code repositories, or provide consulting and code reviews to elevate your team's capabilities. Knowledge transfer is always a core part of our engagement.",
    category: "services",
  },
  {
    id: "faq-8",
    question: "How do you handle data security and confidentiality?",
    answer:
      "Data security is non-negotiable in every engagement. We sign comprehensive NDAs before any discovery work begins. All data in transit and at rest is encrypted. We follow the principle of least privilege for system access, conduct regular security audits, and comply with industry-relevant regulations including HIPAA awareness for healthcare clients and data localization requirements. Our infrastructure defaults to SOC 2-aligned practices.",
    category: "technical",
  },
  {
    id: "faq-9",
    question: "Do you build mobile applications?",
    answer:
      "Our primary focus is web applications, APIs, and backend systems. For mobile needs, we build responsive progressive web applications (PWAs) that provide native-like experiences on mobile devices without the overhead of separate iOS and Android codebases. For projects that specifically require native mobile apps, we partner with vetted mobile development firms and manage the engagement end-to-end.",
    category: "services",
  },
  {
    id: "faq-10",
    question: "What if we're not sure which service we need?",
    answer:
      "That's exactly what our free Discovery Call is designed for. In a 45-minute conversation, we'll understand your current challenges, business goals, and technology landscape, then recommend the most impactful starting point. There's no obligation — many of our best client relationships started with an exploratory conversation where we helped clarify the problem before proposing any solution.",
    category: "general",
  },
  {
    id: "faq-11",
    question: "Can you help with AI strategy without building anything yet?",
    answer:
      "Yes. Our Discovery & Assessment offering is specifically designed for organizations that want expert guidance before committing to implementation. We'll audit your operations, identify where AI and automation would deliver the highest ROI, assess your data readiness, and deliver a prioritized roadmap that you can execute with us, your internal team, or another partner. Strategy consulting is a standalone service.",
    category: "services",
  },
  {
    id: "faq-12",
    question: "What technologies and frameworks do you use?",
    answer:
      "Our core stack includes Python and FastAPI for backend services, React and Next.js with TypeScript for frontend applications, PostgreSQL for databases, Docker for containerization, and AWS/Azure for cloud infrastructure. For AI, we work with OpenAI APIs and LangChain. For automation, we use n8n and Zapier. For analytics, Power BI and Tableau. We choose technologies based on your specific requirements, team expertise, and long-term maintainability — never based on trends.",
    category: "technical",
  },
];

/* ================================================================
   Blog Posts
   ================================================================ */

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title:
      "Why 70% of Automation Projects Fail — And How to Be in the Other 30%",
    excerpt:
      "Most automation initiatives fail not because of technology limitations, but because of inadequate process analysis, unclear success metrics, and poor change management. Here's the framework we use to ensure every automation project delivers measurable results.",
    author: {
      name: "ACENEXT Team",
      role: "Consulting & Strategy",
    },
    publishedAt: "2026-06-15",
    readTime: "8 min read",
    category: "automation",
    tags: [
      "automation",
      "strategy",
      "change management",
      "ROI",
      "best practices",
    ],
    slug: "why-automation-projects-fail",
    featured: true,
  },
  {
    id: "blog-2",
    title:
      "Building a Data Culture: From Scattered Spreadsheets to Strategic Intelligence",
    excerpt:
      "The gap between data-informed and data-driven organizations isn't technology — it's culture. Learn how mid-market companies can systematically build data literacy, establish governance frameworks, and create self-service analytics that scale across departments.",
    author: {
      name: "ACENEXT Team",
      role: "Data & Analytics",
    },
    publishedAt: "2026-05-28",
    readTime: "10 min read",
    category: "strategy",
    tags: [
      "data culture",
      "business intelligence",
      "analytics",
      "data governance",
      "leadership",
    ],
    slug: "building-data-culture-strategic-intelligence",
    featured: true,
  },
  {
    id: "blog-3",
    title:
      "The Practical Guide to AI Chatbots for Indian Businesses in 2026",
    excerpt:
      "AI chatbots have evolved beyond novelty into genuine business tools — but only when implemented correctly. This guide covers use case selection, conversation design, LLM model selection, integration architecture, and measuring ROI for chatbot deployments in the Indian market.",
    author: {
      name: "ACENEXT Team",
      role: "AI & Engineering",
    },
    publishedAt: "2026-05-10",
    readTime: "12 min read",
    category: "ai",
    tags: [
      "AI chatbots",
      "LLM",
      "customer service",
      "OpenAI",
      "implementation guide",
    ],
    slug: "practical-guide-ai-chatbots-indian-businesses",
    featured: false,
  },
  {
    id: "blog-4",
    title:
      "Process Mapping 101: How to Document Your Operations Before Automating",
    excerpt:
      "Automating a broken process just produces broken results faster. Before investing in automation tools, you need a clear, honest map of how your business actually operates — not how you think it operates. Here's our step-by-step process mapping methodology.",
    author: {
      name: "ACENEXT Team",
      role: "Process Architecture",
    },
    publishedAt: "2026-04-22",
    readTime: "7 min read",
    category: "strategy",
    tags: [
      "process mapping",
      "workflow optimization",
      "BPMN",
      "operational efficiency",
      "documentation",
    ],
    slug: "process-mapping-before-automating",
    featured: false,
  },
  {
    id: "blog-5",
    title:
      "Choosing Between Custom Software and Off-the-Shelf: A Decision Framework",
    excerpt:
      "The build-vs-buy decision is one of the most consequential technology choices a growing business makes. This framework helps you evaluate total cost of ownership, competitive differentiation, maintenance burden, and long-term flexibility to make the right call.",
    author: {
      name: "ACENEXT Team",
      role: "Engineering & Strategy",
    },
    publishedAt: "2026-04-05",
    readTime: "9 min read",
    category: "engineering",
    tags: [
      "custom software",
      "build vs buy",
      "technology strategy",
      "TCO analysis",
      "enterprise software",
    ],
    slug: "custom-software-vs-off-the-shelf-framework",
    featured: false,
  },
  {
    id: "blog-6",
    title:
      "Real ROI Numbers: What Our Clients Actually Saved with Workflow Automation",
    excerpt:
      "We asked six of our clients to share the real, audited numbers from their automation projects — not projections, not estimates, but actual measured results. The findings reveal consistent patterns in where automation delivers the fastest and largest returns.",
    author: {
      name: "ACENEXT Team",
      role: "Consulting & Analytics",
    },
    publishedAt: "2026-03-18",
    readTime: "11 min read",
    category: "case-study",
    tags: [
      "ROI",
      "automation results",
      "case studies",
      "cost savings",
      "efficiency metrics",
    ],
    slug: "real-roi-workflow-automation-results",
    featured: true,
  },
];

/* ================================================================
   Stats
   ================================================================ */

export const STATS: Stat[] = [
  {
    label: "Projects Delivered",
    value: "150",
    suffix: "+",
    description:
      "Successful automation, analytics, and software projects across industries",
  },
  {
    label: "Industries Served",
    value: "9",
    suffix: "+",
    description:
      "From healthcare to logistics, deep domain expertise across verticals",
  },
  {
    label: "Client Retention",
    value: "95",
    suffix: "%",
    description:
      "Of our clients continue with ongoing engagements after their first project",
  },
  {
    label: "System Uptime",
    value: "99.9",
    suffix: "%",
    description:
      "Guaranteed reliability for all production systems we build and manage",
  },
];
