// Single source of truth for all site content. Edit here, not in components.

export const profile = {
  name: "Dhaval Gondaliya",
  shortName: "Dhaval",
  role: "Backend Developer",
  location: "Ahmedabad, India",
  email: "dhavalgondaliya2727@gmail.com",
  phone: "+91 9586482626",
  linkedin: "https://www.linkedin.com/in/dhaval-gondaliya-91bab7229/",
  github: "https://github.com/dhavalgondaliya27",
  resume: "/Dhaval_Gondaliya_Resume.pdf",
  siteUrl: "https://dhavalgondaliya.dev",
  status: "Backend Developer @ Equitysoft Technologies",
  headline: "I build the part of the product nobody sees — and everyone depends on.",
  intro:
    "Backend engineer shipping production APIs, payment flows, real-time systems and AI pipelines with Node.js, NestJS, PostgreSQL, MongoDB and AWS. I own features from schema design to the dashboards that tell us they're healthy.",
};

export const stats = [
  { value: "2+", label: "years shipping production backends" },
  { value: "18", label: "client API codebases worked across" },
  { value: "8+", label: "third-party platforms integrated" },
  { value: "3", label: "payment gateways taken to production" },
];

// Engineering principles — each tied to something actually built.
export const principles = [
  {
    title: "Money moves exactly once",
    body: "Payouts, refunds and prize distribution run inside transactions with idempotent writes, so a retry can never pay someone twice.",
    proof: "StayFit prize engine · SpaceRenta host payouts",
  },
  {
    title: "Tenants never meet",
    body: "When a client's data is the product, isolation beats cleverness — a database per tenant, with a registry that knows where everyone lives.",
    proof: "PlayerScout multi-tenant SaaS",
  },
  {
    title: "Slow work belongs in a queue",
    body: "Scraping, AI classification, PDF rendering and bulk imports go to background workers, so the API answers in milliseconds and jobs retry safely.",
    proof: "BullMQ + Redis in Sorto · streaming CSV imports in Eterna",
  },
  {
    title: "A slow query is a bug",
    body: "Indexes, aggregation pipelines and caching are part of the feature, not a follow-up ticket. I read query plans before I add servers.",
    proof: "Query + index restructuring across live Equitysoft APIs",
  },
  {
    title: "Configuration over deployment",
    body: "Roles, permissions and business rules live in the database so a client can change them on Tuesday without a release on Wednesday.",
    proof: "Dynamic, database-driven RBAC",
  },
  {
    title: "If it isn't logged, it didn't happen",
    body: "Structured logs, monitoring and alerts ship with the feature, so production issues are caught before users report them.",
    proof: "PM2 + CloudWatch monitoring on AWS",
  },
];

export type CaseStudy = {
  id: string;
  name: string;
  tagline: string;
  domain: string;
  problem: string;
  flow: string[]; // architecture path, rendered as a pipeline
  highlights: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "sorto",
    name: "Sorto",
    tagline: "AI-powered wardrobe & closet management",
    domain: "AI · RAG · Retail",
    problem:
      "Users add clothes from a photo or a shop link and expect the app to know the brand, category and attributes — and to suggest what matches.",
    flow: ["Photo / URL", "Scraper + S3", "BullMQ worker", "Embeddings + GPT", "pgvector / Pinecone", "Recommendations"],
    highlights: [
      "RAG pipeline that classifies items with HuggingFace embeddings and GPT, using engineered prompts to extract brand, category and attributes.",
      "Vector similarity search on pgvector and Pinecone to find similar wardrobe and catalog items for recommendations.",
      "Web-scraping pipeline (Puppeteer, Cheerio) enriches items with catalog metadata used as retrieval context.",
      "PostgreSQL triggers and stored procedures automate wardrobe processing; an “aura score” gamification layer drives engagement.",
    ],
    stack: ["Node.js", "PostgreSQL", "pgvector", "Pinecone", "HuggingFace", "OpenAI", "BullMQ", "Redis", "AWS S3", "Puppeteer"],
  },
  {
    id: "playerscout",
    name: "PlayerScout",
    tagline: "Multi-tenant SaaS for football club management",
    domain: "SaaS · Sports",
    problem:
      "Every football club needs its own staff, roles and scouting data — completely isolated from rival clubs on the same platform.",
    flow: ["Club request", "Tenant resolver", "Dynamic RBAC", "Club database", "Master registry"],
    highlights: [
      "Architected database-per-tenant isolation, provisioning a separate database for every onboarded club.",
      "Built database-driven RBAC so each club defines its own roles and permissions without a code deployment.",
      "Master registry database gives super-admins visibility and control across all clients.",
      "AWS SDK automation for RDS, EC2 and S3, plus Excel exports and real-time updates over Socket.io.",
    ],
    stack: ["NestJS", "PostgreSQL", "AWS RDS", "AWS SDK", "Socket.io", "ExcelJS"],
  },
  {
    id: "stayfit",
    name: "StayFit",
    tagline: "Dream11-style gamified fitness challenges",
    domain: "Gamification · Real-time",
    problem:
      "Thousands of users competing in step and distance contests need live rankings — and prize money that is paid correctly, exactly once.",
    flow: ["Activity sync", "Scoring job", "Redis sorted set", "WebSocket push", "Prize ledger"],
    highlights: [
      "Admins create public or private contests with automatic step and distance scoring from user activity data.",
      "Real-time leaderboards on Redis and WebSockets.",
      "Contest lifecycle (start, scoring, close-out) fully automated with scheduled cron jobs.",
      "Prize distribution runs inside transactions to prevent duplicate or incorrect payouts.",
    ],
    stack: ["Node.js", "NestJS", "PostgreSQL", "Redis", "WebSockets", "Cron"],
  },
  {
    id: "spacerenta",
    name: "SpaceRenta",
    tagline: "Airbnb-style property rental marketplace",
    domain: "Marketplace · Payments",
    problem:
      "Guests book and pay instantly; hosts get paid on schedule; refunds and referrals must reconcile to the last kobo.",
    flow: ["Search", "Booking / Instant-book", "Paystack charge", "Notification", "Scheduled payout"],
    highlights: [
      "Secure booking flows with instant-book logic and a referral system.",
      "End-to-end Paystack integration: transactions, refunds and scheduled host payouts.",
      "Real-time booking notifications over scalable REST APIs, deployed and run on AWS.",
    ],
    stack: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Paystack", "AWS"],
  },
  {
    id: "eterna",
    name: "Eterna Dashboard",
    tagline: "Analytics & hierarchical commission engine",
    domain: "Fintech-style analytics",
    problem:
      "Stakeholders needed KPI reports over millions of records and commissions that roll up through parent, child and grandchild accounts.",
    flow: ["CSV upload", "Stream + batch", "MongoDB", "Aggregation pipeline", "KPI + Excel report"],
    highlights: [
      "Bulk CSV import of millions of records using streaming and batched writes, with no performance degradation.",
      "Hierarchical (parent → child → grandchild) commission calculation logic.",
      "KPI reporting built on MongoDB aggregation pipelines, with automated Excel reports for stakeholders.",
    ],
    stack: ["NestJS", "MongoDB", "Aggregation Pipelines", "Streams", "Excel automation"],
  },
];

// Other production APIs from the Equitysoft org — stacks taken from the repos themselves.
export const moreWork = [
  {
    name: "Meastoria",
    kind: "Commerce & credits platform",
    detail: "Credit system, Stripe payments, analytics APIs, multilingual invoices and PDF generation, with a Next.js web app and React admin.",
    tags: ["Stripe", "Socket.io", "PDF", "i18n"],
  },
  {
    name: "TipRadar",
    kind: "Sports data & predictions",
    detail: "Ingests live sports feeds (SportMonks, basketball APIs) through scheduled workflows, cached in Redis and served in multiple languages.",
    tags: ["Redis", "Cron", "Sports APIs", "i18n"],
  },
  {
    name: "Quick Auth",
    kind: "Authentication service",
    detail: "JWT sessions, TOTP two-factor auth with QR enrolment, SMS OTP over Twilio and Stripe-backed plans.",
    tags: ["JWT", "TOTP 2FA", "Twilio", "Stripe"],
  },
  {
    name: "Powerhouse",
    kind: "Operations & communications",
    detail: "RingCentral telephony, real-time socket workflows, and generated PDF and Excel documents via Puppeteer and pdf-lib, with Swagger docs.",
    tags: ["RingCentral", "Socket.io", "Puppeteer", "Swagger"],
  },
  {
    name: "Xcelable",
    kind: "Events & conferences",
    detail: "QR-based conference check-in, Twilio messaging, presigned S3 uploads and server-rendered PDF badges, localised.",
    tags: ["QR", "AWS S3", "Twilio", "Puppeteer"],
  },
  {
    name: "Patient Wellness",
    kind: "Healthcare screening",
    detail: "Vision-screening platform with generated PDF reports, Excel exports and push notifications; Next.js app and React admin.",
    tags: ["Puppeteer", "Firebase", "Excel", "Health"],
  },
  {
    name: "DanceSpot",
    kind: "Community & bookings",
    detail: "Stripe payments, Twilio messaging, real-time chat over Socket.io and scheduled jobs.",
    tags: ["Stripe", "Twilio", "Socket.io", "Cron"],
  },
  {
    name: "FitNext",
    kind: "AI fitness coaching",
    detail: "OpenAI-assisted fitness features with a unified statistics API across workouts and progress.",
    tags: ["OpenAI", "Analytics", "Cron"],
  },
  {
    name: "TasteWise",
    kind: "Food discovery",
    detail: "Gamified badge progression, advanced sourcing filters and Swagger-documented APIs.",
    tags: ["Gamification", "Swagger", "Twilio"],
  },
  {
    name: "NewMe",
    kind: "Nutrition tracking",
    detail: "Nutrition data from the USDA FoodData API, normalised into a searchable food database.",
    tags: ["USDA API", "MySQL", "Cron"],
  },
  {
    name: "CircleUp",
    kind: "Social circles",
    detail: "Real-time chat, deep links into the Flutter app and scheduled engagement jobs.",
    tags: ["Socket.io", "Deep links", "Cron"],
  },
  {
    name: "The Lakewood Luach",
    kind: "Community calendar",
    detail: "Excel-driven data imports verified with Jest and property-based tests (fast-check).",
    tags: ["Jest", "fast-check", "ExcelJS"],
  },
];

export const integrations = [
  "Stripe", "Razorpay", "Paystack", "Twilio", "RingCentral", "Firebase FCM",
  "OpenAI", "HuggingFace", "Pinecone", "Google APIs", "AWS S3", "AWS RDS",
  "AWS SQS", "SportMonks", "USDA FoodData", "Nodemailer",
];

export const skills = [
  {
    group: "Core",
    items: ["Node.js", "NestJS", "Express.js", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "pgvector", "Pinecone", "Prisma", "TypeORM", "Mongoose"],
  },
  {
    group: "Architecture",
    items: ["REST API design", "Multi-tenancy", "RBAC", "WebSockets", "Queues (BullMQ)", "Cron jobs", "Caching", "RAG pipelines"],
  },
  {
    group: "Cloud & Ops",
    items: ["AWS EC2", "S3", "RDS", "Lambda", "SQS", "CloudWatch", "Route53", "Nginx", "PM2", "GitHub Actions", "Linux"],
  },
  {
    group: "Also comfortable with",
    items: ["React.js", "Next.js", "Django", "FastAPI", "Swagger / OpenAPI", "Postman", "Jest"],
  },
];

export const experience = [
  {
    company: "Equitysoft Technologies",
    role: "Backend Developer",
    period: "Apr 2025 — Present",
    points: [
      "Own end-to-end backend development for production systems on Node.js, MongoDB and SQL: APIs, background jobs, integrations and error handling for live workloads.",
      "Restructured database queries and indexes to cut API response times and improve reliability.",
      "Run deployments, server maintenance and AWS scaling for production uptime under real traffic.",
      "Set up monitoring and structured logging to catch production issues before users do.",
      "Plan, estimate and ship features with frontend, QA and product teams in Agile sprints.",
    ],
  },
  {
    company: "Thinknovus Technologies",
    role: "Node.js Developer",
    period: "Dec 2023 — Apr 2025",
    points: [
      "Built and maintained REST APIs on Node.js and MongoDB with authentication, WebSocket features, payments and caching.",
      "Designed cron-based background jobs for scheduled notifications and data syncs.",
      "Improved performance through query tuning, Redis caching and better schema design.",
      "Managed CI/CD pipelines, deployments and infrastructure monitoring on AWS.",
    ],
  },
];

export const education = [
  {
    title: "B.E. Computer Engineering",
    place: "LJIET, Ahmedabad",
    period: "2021 — 2025",
    note: "CGPA 8.6 / 10",
  },
  {
    title: "Higher Secondary (Science)",
    place: "GSEB, Ahmedabad",
    period: "2021",
    note: "86.66% · 87.83 percentile",
  },
];

// Requests animated in the hero trace panel.
export const traces = [
  { method: "POST", path: "/v1/bookings/instant", steps: ["gateway", "auth · jwt", "booking.service", "paystack.charge", "postgres.tx"], ms: 142 },
  { method: "GET", path: "/v1/contests/42/leaderboard", steps: ["gateway", "auth · jwt", "redis.zrevrange", "ws.broadcast"], ms: 9 },
  { method: "POST", path: "/v1/closet/items", steps: ["gateway", "s3.upload", "bullmq.enqueue", "embed + classify", "pgvector.search"], ms: 61 },
  { method: "GET", path: "/v1/clubs/fc-north/players", steps: ["gateway", "tenant.resolve", "rbac.check", "tenant_db.query"], ms: 23 },
];
