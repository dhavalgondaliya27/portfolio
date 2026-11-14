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
  tagline: "Distributed systems. Built to scale.",
  heroLine:
    "Backend-focused engineer designing fault-tolerant, horizontally scalable systems: event-driven APIs, multi-tenant SaaS and AI pipelines that hold up in production.",
  availability:
    "Open to backend and full stack roles, SaaS platform builds and system design work.",
};

// Hero side columns.
export const heroFocus = ["Distributed systems", "Scalable API design", "Cloud architecture"];
export const skillsShort = ["Node.js · NestJS", "PostgreSQL · MongoDB", "Redis · BullMQ", "AWS"];

// Stats strip under the hero.
export const stats = [
  { value: "2+", label: "years engineering production backends" },
  { value: "18", label: "production API codebases owned end to end" },
  { value: "8+", label: "third-party platforms integrated into live revenue paths" },
];

// About: the three-tab visual on the left.
export const disciplines = [
  {
    id: "build",
    label: "Design",
    visual: "wave",
    caption: "Structure",
    title: "Contracts before code.",
    body: "Domain-driven models, typed API contracts and clear service boundaries.",
    link: { href: "#work", text: "See the systems" },
  },
  {
    id: "scale",
    label: "Scale",
    visual: "ripple",
    caption: "Throughput",
    title: "Throughput without latency.",
    body: "Async queues, caching layers, composite indexes and stateless horizontal scaling.",
    link: { href: "#architecture", text: "System design" },
  },
  {
    id: "secure",
    label: "Secure",
    visual: "cells",
    caption: "Isolation",
    title: "Isolation by default.",
    body: "Tenant isolation, dynamic RBAC and idempotent, transactional money movement.",
    link: { href: "#playbook", text: "Engineering playbook" },
  },
] as const;

// About: the point list on the right.
export const aboutPoints = [
  "End-to-end backend ownership: schema, API, queues, infrastructure and on-call.",
  "Distributed patterns in production: async workers, retries with backoff, idempotency.",
  "Multi-tenant SaaS with database-per-tenant isolation and runtime RBAC.",
  "RAG pipelines with embeddings and vector similarity search.",
  "React and Next.js frontends on top of APIs I design.",
];

export type CaseStudy = {
  id: string;
  name: string;
  category: string;
  domain: string;
  summary: string;
  flow: string[];
  highlights: string[];
  patterns: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "sorto",
    name: "Sorto: AI Wardrobe Intelligence",
    category: "AI platform · Event-driven pipeline",
    domain: "AI · RAG · Retail",
    summary: "Photo or shop link in, fully classified wardrobe item and recommendations out.",
    flow: ["Photo / URL", "Scraper + S3", "BullMQ worker", "Embeddings + GPT", "pgvector", "Recommendations"],
    highlights: [
      "RAG classification: HuggingFace embeddings + GPT extract brand, category and attributes.",
      "Vector similarity search on pgvector and Pinecone drives recommendations.",
      "Inference offloaded to BullMQ workers: API returns 202 in milliseconds, jobs retry with exponential backoff.",
      "Postgres triggers and stored procedures push processing logic close to the data.",
    ],
    patterns: ["RAG", "Async job queue", "Vector index", "Retry + backoff"],
    stack: ["Node.js", "PostgreSQL", "pgvector", "Pinecone", "OpenAI", "BullMQ", "Redis", "AWS S3"],
  },
  {
    id: "playerscout",
    name: "PlayerScout",
    category: "Multi-tenant SaaS architecture",
    domain: "SaaS · Sports",
    summary: "Multi-tenant SaaS for football clubs with hard data isolation and automated provisioning.",
    flow: ["Club request", "Tenant resolver", "Dynamic RBAC", "Club database", "Master registry"],
    highlights: [
      "Database-per-tenant isolation, resolved per request through a request-scoped connection.",
      "Database-driven RBAC: roles and permissions change at runtime, zero deployments.",
      "Control plane: master registry for cross-tenant governance.",
      "Infrastructure provisioned via the AWS SDK (RDS, EC2, S3).",
    ],
    patterns: ["Tenant isolation", "Control plane", "Dynamic RBAC", "IaC provisioning"],
    stack: ["NestJS", "PostgreSQL", "AWS RDS", "AWS SDK", "Socket.io"],
  },
  {
    id: "stayfit",
    name: "StayFit",
    category: "Real-time & transactional systems",
    domain: "Gamification · Real-time",
    summary: "Fitness contests with live leaderboards and a prize engine that pays exactly once.",
    flow: ["Activity sync", "Scoring job", "Redis sorted set", "WebSocket push", "Prize ledger"],
    highlights: [
      "O(log n) leaderboard ranking on Redis sorted sets, pushed over WebSockets.",
      "Contest lifecycle (open, score, settle) as a scheduled state machine.",
      "Payouts in ACID transactions with idempotency keys: retries can never double-pay.",
    ],
    patterns: ["Pub/sub push", "State machine", "Idempotency keys", "ACID"],
    stack: ["NestJS", "PostgreSQL", "Redis", "WebSockets", "Cron"],
  },
  {
    id: "spacerenta",
    name: "SpaceRenta",
    category: "Marketplace · Payments",
    domain: "Marketplace · Payments",
    summary: "Instant-book marketplace: charges, refunds and scheduled host payouts that reconcile.",
    flow: ["Search", "Instant-book", "Paystack charge", "Notify", "Scheduled payout"],
    highlights: [],
    patterns: [],
    stack: ["NestJS", "PostgreSQL", "Redis", "Paystack", "AWS"],
  },
  {
    id: "eterna",
    name: "Eterna Dashboard",
    category: "Data pipeline · Analytics",
    domain: "Fintech-style analytics",
    summary: "Streamed, batched ingestion of millions of rows; hierarchical commissions on aggregation pipelines.",
    flow: ["CSV upload", "Stream + batch", "MongoDB", "Aggregation", "KPI report"],
    highlights: [],
    patterns: [],
    stack: ["NestJS", "MongoDB", "Streams", "Aggregation pipelines"],
  },
];

// Featured as large cards; the rest of caseStudies become rows below.
export const featuredIds = ["sorto", "playerscout", "stayfit"];

// One extra row under the case studies.
export const extraRows = [
  { name: "Quick Auth", kind: "Authentication service", badge: "Security", detail: "JWT sessions, TOTP 2FA, SMS OTP and plan-gated access." },
];

// Architecture: accordion on the right, principles on the left follow the open row.
export const expertise = [
  {
    id: "distributed",
    area: "Distributed & async systems",
    title: "Decouple the hot path.",
    points: [
      "Event-driven workers on message queues (BullMQ, SQS)",
      "At-least-once delivery with idempotent consumers",
      "Exponential backoff and retry policies",
      "Real-time fan-out over WebSockets",
    ],
    tools: "Node.js · NestJS · BullMQ · Redis · AWS SQS · Socket.io",
    steps: ["Queue slow work", "Make consumers idempotent", "Retry with backoff"],
  },
  {
    id: "data",
    area: "Data architecture & performance",
    title: "Model for the access pattern.",
    points: [
      "Schema design across relational and document stores",
      "Composite indexes driven by query-plan analysis",
      "Read-through caching and hot-key strategies in Redis",
      "Streaming ingestion and aggregation pipelines",
      "Vector indexes for semantic search",
    ],
    tools: "PostgreSQL · MongoDB · MySQL · Redis · pgvector · Pinecone · Prisma · TypeORM",
    steps: ["Measure the query plan", "Index the access path", "Cache what's hot"],
  },
  {
    id: "consistency",
    area: "Consistency & reliability",
    title: "Correct first, then fast.",
    points: [
      "ACID transactions around every money movement",
      "Idempotency keys for exactly-once side effects",
      "Ledger-style reconciliation for payouts and refunds",
      "Graceful degradation when third-party APIs fail",
    ],
    tools: "PostgreSQL transactions · Stripe · Razorpay · Paystack",
    steps: ["Define invariants", "Wrap in a transaction", "Reconcile the ledger"],
  },
  {
    id: "tenancy",
    area: "Multi-tenancy & security",
    title: "Isolate by default.",
    points: [
      "Database-per-tenant isolation with request-scoped resolution",
      "Dynamic, database-driven RBAC",
      "JWT, TOTP 2FA and OTP authentication",
      "Presigned URLs and least-privilege access to storage",
    ],
    tools: "NestJS guards · JWT · TOTP · AWS IAM · S3",
    steps: ["Resolve the tenant", "Authorize the action", "Scope the data"],
  },
  {
    id: "cloud",
    area: "Cloud, scale & observability",
    title: "Scale out, observe everything.",
    points: [
      "Stateless services behind Nginx for horizontal scaling",
      "CI/CD pipelines for every release",
      "Structured logging, CloudWatch metrics and alarms",
      "VPC, RDS, EC2, S3 and Lambda on AWS",
    ],
    tools: "AWS · Nginx · PM2 · GitHub Actions · CloudWatch · Linux",
    steps: ["Keep services stateless", "Pipeline every release", "Alert before users notice"],
  },
];

export const experience = [
  {
    company: "Equitysoft Technologies",
    role: "Backend Developer",
    period: "Apr 2025 — Present",
    points: [
      "Own end-to-end backend architecture for multiple client products: APIs, async jobs, integrations.",
      "Re-engineered queries and indexes on live APIs to cut latency.",
      "Run AWS deployments and scaling for production uptime.",
      "Introduced structured logging and monitoring for early incident detection.",
    ],
  },
  {
    company: "Thinknovus Technologies",
    role: "Node.js Developer",
    period: "Dec 2023 — Apr 2025",
    points: [
      "Built REST and WebSocket APIs with auth, payments and Redis caching.",
      "Designed cron-driven background jobs for notifications and data sync.",
      "Managed CI/CD pipelines and infrastructure monitoring on AWS.",
    ],
  },
];

export const education = { title: "B.E. Computer Engineering", place: "LJIET, Ahmedabad", period: "2021 — 2025", note: "CGPA 8.6 / 10" };

export const integrations = [
  "Stripe", "Razorpay", "Paystack", "Twilio", "RingCentral", "Firebase FCM",
  "OpenAI", "HuggingFace", "Pinecone", "AWS S3", "AWS RDS", "AWS SQS",
];

// Engineering playbook: filterable code cards.
export const playbookFilters = ["All rules", "Reliability", "Data", "Platform"];

export const playbook = [
  {
    title: "Money moves exactly once.",
    sub: "Idempotent payouts inside ACID transactions.",
    meta: "Reliability / Payments",
    group: "Reliability",
    proof: "StayFit · SpaceRenta",
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
    sub: "Database-per-tenant, resolved per request.",
    meta: "Platform / Multi-tenancy",
    group: "Platform",
    proof: "PlayerScout",
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
    sub: "202 now, process asynchronously.",
    meta: "Reliability / Async processing",
    group: "Reliability",
    proof: "Sorto",
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
    sub: "Read the plan, index the access path.",
    meta: "Data / Performance",
    group: "Data",
    proof: "Live API tuning",
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
    sub: "Authorization rules live in data.",
    meta: "Platform / Access control",
    group: "Platform",
    proof: "Dynamic RBAC",
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
    sub: "Structured events → metrics → alarms.",
    meta: "Data / Observability",
    group: "Data",
    proof: "CloudWatch on AWS",
    file: "payout.events.ts",
    code: `logger.info({
  event: 'payout.settled',
  requestId, tenantId, amount,
  latencyMs: Date.now() - startedAt,
});
// → CloudWatch metric filter → alarm → on-call`,
  },
];

// Services (for clients).
export const services = [
  { tag: "Backend / APIs", name: "Scalable backend & API design", note: "REST, WebSocket and event-driven services in Node.js / NestJS." },
  { tag: "Architecture / SaaS", name: "Multi-tenant SaaS architecture", note: "Tenant isolation, RBAC, billing, control plane." },
  { tag: "Payments", name: "Payment systems & integrations", note: "Idempotent charges, refunds, payouts, reconciliation." },
  { tag: "AI / LLM", name: "Production AI pipelines", note: "RAG, embeddings, vector search, async inference." },
  { tag: "Cloud / DevOps", name: "AWS, CI/CD & observability", note: "Horizontal scaling, pipelines, metrics and alarms." },
];

export const serviceTags = ["System design", "Node.js & NestJS", "PostgreSQL & MongoDB", "AWS"];
