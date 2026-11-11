// Single source of truth for all site content. Edit here, not in components.

export const profile = {
  name: "Dhaval Gondaliya",
  shortName: "Dhaval",
  role: "Full Stack Developer",
  focus: "Backend-heavy",
  location: "Ahmedabad, India",
  email: "dhavalgondaliya2727@gmail.com",
  phone: "+91 9586482626",
  linkedin: "https://www.linkedin.com/in/dhaval-gondaliya-91bab7229/",
  github: "https://github.com/dhavalgondaliya27",
  resume: "/Dhaval_Gondaliya_Resume.pdf",
  siteUrl: "https://dhavalgondaliya.dev",
  status: "Backend Developer @ Equitysoft Technologies",
  portrait: "/dhaval-portrait.jpg",
  tagline: "Engineer. Architect. Builder.",
  heroLine:
    "I architect backend systems, ship full stack products, and keep them fast, secure and observable in production.",
  availability:
    "Full stack and backend roles, SaaS and API builds, cloud and integration work. If it has to hold up in production, I'd like to hear about it.",
};

// Hero side column.
export const heroFocus = ["Backend systems", "Cloud infrastructure", "Product engineering"];

// Stats strip under the hero.
export const stats = [
  { value: "2+", label: "years shipping production backends" },
  { value: "18", label: "client API codebases built & maintained" },
  { value: "8+", label: "third-party platforms integrated" },
];

// About: the three-tab visual on the left.
export const disciplines = [
  {
    id: "build",
    label: "Build",
    visual: "wave",
    caption: "Structure",
    title: "Give an idea a schema.",
    body: "Domain models, API contracts and services that turn product requirements into software that ships.",
    link: { href: "#work", text: "Explore the systems" },
  },
  {
    id: "scale",
    label: "Scale",
    visual: "ripple",
    caption: "Throughput",
    title: "Make it hold under load.",
    body: "Queues, caching, indexing and horizontal scaling, so traffic grows without latency growing with it.",
    link: { href: "#expertise", text: "See how I work" },
  },
  {
    id: "secure",
    label: "Secure",
    visual: "cells",
    caption: "Isolation",
    title: "Make it safe to trust.",
    body: "Auth, RBAC, tenant isolation and idempotent payments, so data and money land exactly where they should.",
    link: { href: "#playbook", text: "Read the playbook" },
  },
] as const;

export type CaseStudy = {
  id: string;
  name: string;
  category: string;
  domain: string;
  summary: string;
  flow: string[];
  highlights: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "sorto",
    name: "Sorto: AI Wardrobe Intelligence",
    category: "AI platform engineering",
    domain: "AI · RAG · Retail",
    summary:
      "A RAG pipeline that turns a photo or a shop link into a fully classified wardrobe item, then recommends what matches using vector similarity search.",
    flow: ["Photo / URL", "Scraper + S3", "BullMQ worker", "Embeddings + GPT", "pgvector", "Recommendations"],
    highlights: [
      "Built a retrieval-augmented classification pipeline on HuggingFace embeddings and GPT, with engineered prompts that extract brand, category and attributes.",
      "Vector similarity search on pgvector and Pinecone powers wardrobe and catalog recommendations.",
      "Puppeteer and Cheerio scrapers enrich items with catalog metadata used as retrieval context.",
      "Moved heavy inference to BullMQ workers on Redis, so the API answers in milliseconds and jobs retry with exponential backoff.",
      "PostgreSQL triggers and stored procedures automate wardrobe processing behind an \"aura score\" engagement layer.",
    ],
    stack: ["Node.js", "PostgreSQL", "pgvector", "Pinecone", "OpenAI", "HuggingFace", "BullMQ", "Redis", "AWS S3"],
  },
  {
    id: "playerscout",
    name: "PlayerScout",
    category: "Multi-tenant SaaS architecture",
    domain: "SaaS · Sports",
    summary:
      "A multi-tenant SaaS for football clubs with database-per-tenant isolation, dynamic RBAC and automated AWS provisioning.",
    flow: ["Club request", "Tenant resolver", "Dynamic RBAC", "Club database", "Master registry"],
    highlights: [
      "Architected database-per-tenant isolation, provisioning a dedicated database for every onboarded club.",
      "Database-driven RBAC lets each club define its own roles and permissions with zero deployments.",
      "A master registry gives super-admins cross-tenant visibility and control.",
      "Automated RDS, EC2 and S3 provisioning through the AWS SDK, with real-time updates over Socket.io.",
    ],
    stack: ["NestJS", "PostgreSQL", "AWS RDS", "AWS SDK", "Socket.io", "ExcelJS"],
  },
  {
    id: "stayfit",
    name: "StayFit",
    category: "Real-time & transactional systems",
    domain: "Gamification · Real-time",
    summary:
      "Fantasy-style fitness contests with live leaderboards and a transactional prize engine that pays every winner exactly once.",
    flow: ["Activity sync", "Scoring job", "Redis sorted set", "WebSocket push", "Prize ledger"],
    highlights: [
      "Public and private contests with automatic step and distance scoring from activity data.",
      "Real-time leaderboards on Redis sorted sets, pushed to clients over WebSockets.",
      "The contest lifecycle (open, score, settle) runs on scheduled jobs with no manual steps.",
      "Prize distribution runs inside database transactions with idempotent writes, so retries can never double-pay.",
    ],
    stack: ["Node.js", "NestJS", "PostgreSQL", "Redis", "WebSockets", "Cron"],
  },
  {
    id: "spacerenta",
    name: "SpaceRenta",
    category: "Marketplace · Payments",
    domain: "Marketplace · Payments",
    summary:
      "Airbnb-style rental marketplace: instant-book flows, Paystack charges, refunds and scheduled host payouts that reconcile to the last unit.",
    flow: ["Search", "Instant-book", "Paystack charge", "Notify", "Scheduled payout"],
    highlights: [],
    stack: ["NestJS", "PostgreSQL", "Redis", "Paystack", "AWS"],
  },
  {
    id: "eterna",
    name: "Eterna Dashboard",
    category: "Analytics · Commission engine",
    domain: "Fintech-style analytics",
    summary:
      "Streaming CSV ingestion of millions of records, hierarchical parent → child → grandchild commission logic, and KPI reporting on MongoDB aggregation pipelines.",
    flow: ["CSV upload", "Stream + batch", "MongoDB", "Aggregation", "KPI report"],
    highlights: [],
    stack: ["NestJS", "MongoDB", "Streams", "Aggregation pipelines"],
  },
];

// Featured as large cards; the rest of caseStudies become rows below.
export const featuredIds = ["sorto", "playerscout", "stayfit"];

// More client builds — stacks taken from the repos themselves.
export const moreWork = [
  { name: "Meastoria", kind: "Commerce & credits platform", badge: "Next.js", detail: "Credit ledger, Stripe payments, analytics APIs, multilingual invoices and PDF generation, with a Next.js web app and React admin.", tags: ["Stripe", "Socket.io", "PDF", "i18n"] },
  { name: "Patient Wellness", kind: "Healthcare screening", badge: "React", detail: "Vision-screening platform with generated PDF reports, Excel exports and push notifications; Next.js app and React admin.", tags: ["Puppeteer", "Firebase", "Excel"] },
  { name: "TipRadar", kind: "Sports data & predictions", detail: "Ingests live sports feeds (SportMonks, basketball APIs) on scheduled workflows, cached in Redis and served in multiple languages.", tags: ["Redis", "Cron", "Sports APIs", "i18n"] },
  { name: "Quick Auth", kind: "Authentication service", detail: "JWT sessions, TOTP two-factor auth with QR enrolment, SMS OTP over Twilio and Stripe-backed plans.", tags: ["JWT", "TOTP 2FA", "Twilio", "Stripe"] },
  { name: "Powerhouse", kind: "Operations & communications", detail: "RingCentral telephony, real-time socket workflows and generated PDF/Excel documents, documented in Swagger.", tags: ["RingCentral", "Socket.io", "Puppeteer"] },
  { name: "Xcelable", kind: "Events & conferences", detail: "QR-based check-in, Twilio messaging, presigned S3 uploads and server-rendered PDF badges.", tags: ["QR", "AWS S3", "Twilio"] },
  { name: "DanceSpot", kind: "Community & bookings", detail: "Stripe payments, Twilio messaging, real-time chat over Socket.io and scheduled jobs.", tags: ["Stripe", "Socket.io", "Cron"] },
  { name: "FitNext", kind: "AI fitness coaching", detail: "OpenAI-assisted coaching features over a unified statistics API for workouts and progress.", tags: ["OpenAI", "Analytics"] },
  { name: "TasteWise", kind: "Food discovery", detail: "Gamified badge progression, advanced sourcing filters and Swagger-documented APIs.", tags: ["Gamification", "Swagger"] },
  { name: "NewMe", kind: "Nutrition tracking", detail: "USDA FoodData ingestion normalised into a searchable food database.", tags: ["USDA API", "MySQL"] },
  { name: "CircleUp", kind: "Social circles", detail: "Real-time chat, deep links into the Flutter app and scheduled engagement jobs.", tags: ["Socket.io", "Deep links"] },
  { name: "The Lakewood Luach", kind: "Community calendar", detail: "Excel-driven data imports verified with Jest and property-based tests (fast-check).", tags: ["Jest", "fast-check"] },
];

// Shown as rows (with a badge); the rest sit inside the "more builds" accordion.
export const highlightedMore = ["Meastoria", "Patient Wellness"];

// "How I think & work": accordion on the right, steps on the left follow the open row.
export const expertise = [
  {
    id: "backend",
    area: "Backend & API engineering",
    title: "Design for failure first.",
    body: "Production APIs, payment rails, real-time features and background processing, owned from the schema to the dashboards that prove they're healthy.",
    tools: "Node.js · NestJS · Express · TypeScript · REST · WebSockets · BullMQ · Swagger / OpenAPI · Jest",
    steps: ["Model the domain", "Design the contract", "Ship it observable"],
  },
  {
    id: "data",
    area: "Data & performance",
    title: "Read the query plan first.",
    body: "Schemas, indexes, aggregation pipelines and caching designed as part of the feature, not a follow-up ticket. Vector search when the product needs it.",
    tools: "PostgreSQL · MongoDB · MySQL · Redis · pgvector · Pinecone · Prisma · TypeORM · Mongoose",
    steps: ["Measure before tuning", "Index the access path", "Cache what's hot"],
  },
  {
    id: "cloud",
    area: "Cloud & DevOps",
    title: "Automate the boring parts.",
    body: "Deployments, scaling and server operations on AWS, with CI/CD and structured logging that catch regressions before users report them.",
    tools: "AWS EC2 · S3 · RDS · Lambda · SQS · CloudWatch · Route53 · VPC · Nginx · PM2 · GitHub Actions · Linux",
    steps: ["Codify the infrastructure", "Pipeline every release", "Alert before users notice"],
  },
  {
    id: "frontend",
    area: "Frontend & product",
    title: "Close the loop to the screen.",
    body: "React and Next.js apps and admin panels in TypeScript, built on top of APIs I understand from the inside.",
    tools: "React · Next.js · TypeScript · JavaScript · HTML5 · CSS3",
    steps: ["Type the API contract", "Build the interface", "Stream real-time state"],
  },
];

// Impact section.
export const impact = {
  lead: { value: "18", title: ["Client API codebases.", "Every one in production."], body: "Commerce, healthcare, sports, events and social products, each with its own integrations, background jobs and infrastructure." },
  pair: [
    { value: "8+", title: "Third-party platforms integrated", body: "Stripe, Razorpay, Paystack, Twilio, RingCentral, Firebase, OpenAI and more, wired into live revenue paths." },
    { value: "3", title: "Payment gateways taken to production", body: "Charges, refunds and scheduled payouts that reconcile, with idempotent writes so a retry never pays twice." },
  ],
  thread: ["Model it right.", "Make it observable.", "Let it scale."],
};

export const experience = [
  {
    company: "Equitysoft Technologies",
    role: "Backend Developer",
    period: "Apr 2025 — Present",
    when: "Apr 2025",
    lead: "Owning the backend.",
    summary: "End-to-end backend ownership for client products: APIs, background jobs, integrations, deployments and AWS scaling.",
    points: [
      "Own end-to-end backend delivery on Node.js, MongoDB and SQL: API design, background jobs, integrations and error handling for live workloads.",
      "Restructured queries and indexes across live APIs to cut response times and improve reliability.",
      "Run deployments, server maintenance and AWS scaling for production uptime under real traffic.",
      "Introduced monitoring and structured logging to surface production issues before users report them.",
      "Plan, estimate and ship features with frontend, QA and product teams in Agile sprints.",
    ],
  },
  {
    company: "Thinknovus Technologies",
    role: "Node.js Developer",
    period: "Dec 2023 — Apr 2025",
    when: "Dec 2023",
    lead: "First production backends.",
    summary: "REST APIs, auth, WebSockets, payments, caching and CI/CD on AWS.",
    points: [
      "Built and maintained REST APIs on Node.js and MongoDB with authentication, WebSocket features, payments and caching.",
      "Designed cron-based background jobs for scheduled notifications and data syncs.",
      "Improved performance through query tuning, Redis caching and better schema design.",
      "Managed CI/CD pipelines, deployments and infrastructure monitoring on AWS.",
    ],
  },
];

// The bordered "How the work travels" panel.
export const travels = [
  { id: "design", label: "Design", visual: "cells", caption: "Boundaries", title: "Systems with clear boundaries.", body: "Bounded services, typed contracts and data models that the next engineer can read, extend and trust.", link: { href: "#expertise", text: "How I design" } },
  { id: "deliver", label: "Deliver", visual: "ripple", caption: "Ripples", title: "18 codebases. One standard.", body: "Code review, tests where they pay off, documented APIs and releases that go out through a pipeline, not a laptop.", link: { href: "#work", text: "See the delivery" } },
  { id: "operate", label: "Operate", visual: "wave", caption: "Signal", title: "Shipped, then watched.", body: "Structured logs, metrics and alerts on AWS, so the first person to notice a problem is me, not the customer.", link: { href: "#playbook", text: "Read the playbook" } },
] as const;

export const integrations = [
  "Stripe", "Razorpay", "Paystack", "Twilio", "RingCentral", "Firebase FCM",
  "OpenAI", "HuggingFace", "Pinecone", "Google APIs", "AWS S3", "AWS RDS",
  "AWS SQS", "SportMonks", "USDA FoodData", "Nodemailer",
];

// Engineering playbook: filterable code cards.
export const playbookFilters = ["All rules", "Reliability", "Data", "Platform"];

export const playbook = [
  {
    title: "Money moves exactly once.",
    sub: "Idempotent payouts and refunds inside transactions.",
    meta: "Reliability / Payments",
    group: "Reliability",
    proof: "StayFit prize engine · SpaceRenta payouts",
    file: "payout.service.ts",
    code: `await db.$transaction(async (tx) => {
  const prior = await tx.payout.find(key);
  if (prior) return prior;      // retry-safe
  await tx.wallet.debit(contestId, amount);
  return tx.payout.create({ key, userId, amount });
});`,
  },
  {
    title: "Tenants never meet.",
    sub: "A database per tenant, resolved per request.",
    meta: "Platform / Multi-tenancy",
    group: "Platform",
    proof: "PlayerScout multi-tenant SaaS",
    file: "tenant.connection.ts",
    code: `@Injectable({ scope: Scope.REQUEST })
export class TenantConnection {
  constructor(@Inject(REQUEST) private req: Request,
              private registry: TenantRegistry) {}
  get db() {
    return this.registry.for(this.req.tenantId);
  }
}`,
  },
  {
    title: "Slow work belongs in a queue.",
    sub: "Answer in milliseconds, process in the background.",
    meta: "Reliability / Async processing",
    group: "Reliability",
    proof: "BullMQ + Redis in Sorto",
    file: "items.controller.ts",
    code: `await classify.add('item:classify', { itemId }, {
  attempts: 5,
  backoff: { type: 'exponential', delay: 2_000 },
  removeOnComplete: true,
});
res.status(202).json({ itemId, status: 'queued' });`,
  },
  {
    title: "A slow query is a bug.",
    sub: "Read the plan, then index the access path.",
    meta: "Data / Performance",
    group: "Data",
    proof: "Query + index work across live APIs",
    file: "migrations/0042_bookings.sql",
    code: `EXPLAIN ANALYZE
SELECT * FROM bookings
 WHERE host_id = $1 AND status = 'confirmed'
 ORDER BY check_in DESC LIMIT 20;
CREATE INDEX CONCURRENTLY idx_bookings_host
  ON bookings (host_id, status, check_in DESC);`,
  },
  {
    title: "Configuration over deployment.",
    sub: "Roles and rules live in the database.",
    meta: "Platform / Access control",
    group: "Platform",
    proof: "Dynamic, database-driven RBAC",
    file: "rbac.guard.ts",
    code: `const allowed = await rbac.can({
  tenantId, role: user.role,
  resource: 'scouting-report',
  action: 'export',
});           // no release needed to change this
if (!allowed) throw new ForbiddenException();`,
  },
  {
    title: "If it isn't logged, it didn't happen.",
    sub: "Structured events, metrics and alarms.",
    meta: "Data / Observability",
    group: "Data",
    proof: "PM2 + CloudWatch on AWS",
    file: "payout.events.ts",
    code: `logger.info({
  event: 'payout.settled',
  requestId, tenantId, amount,
  latencyMs: Date.now() - startedAt,
});
// → CloudWatch metric filter → alarm → on-call`,
  },
];

// Services banner (for clients).
export const services = [
  { tag: "Backend / APIs", name: "Backend & API development", note: "REST and real-time APIs in Node.js and NestJS, documented and tested." },
  { tag: "Architecture / SaaS", name: "SaaS & multi-tenant architecture", note: "Tenant isolation, RBAC, billing and admin tooling." },
  { tag: "Integrations / Payments", name: "Payments & third-party integrations", note: "Stripe, Razorpay, Paystack, Twilio, Firebase and more." },
  { tag: "AI / LLM", name: "AI features in production", note: "RAG pipelines, embeddings, vector search and LLM APIs." },
  { tag: "Cloud / DevOps", name: "AWS, CI/CD & monitoring", note: "Deployments, scaling and observability you can sleep through." },
];

export const skillsShort = ["Node.js & NestJS", "PostgreSQL & MongoDB", "AWS", "System design"];

export const journey = [
  { when: "2021", title: "Learning by building.", body: "Started B.E. Computer Engineering at LJIET, Ahmedabad, and began building backends on the side." },
  { when: "Dec 2023", title: "First production backend.", body: "Joined Thinknovus Technologies as a Node.js developer: REST APIs, auth, payments, WebSockets and CI/CD on AWS, while still in college." },
  { when: "Apr 2025", title: "Owning the stack.", body: "Moved to Equitysoft Technologies to own backend delivery end to end: architecture, deployments and AWS scaling." },
  { when: "2025", title: "A degree, and a head start.", body: "Graduated with a CGPA of 8.6 / 10, with over a year of production engineering already behind me." },
  { when: "Next", title: "Bigger systems. Harder problems.", body: "Looking for teams building products that have to hold up at scale, where backend depth matters.", next: true },
];

export const education = [
  { title: "B.E. Computer Engineering", place: "LJIET, Ahmedabad", period: "2021 — 2025", note: "CGPA 8.6 / 10" },
];
