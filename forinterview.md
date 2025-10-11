# Blurt Interview Prep

## Project Summary
Blurt is an AI-driven storytelling platform that transforms news headlines into WhatsApp-style group chats. Characters with rich backstories debate weekly news, making news consumption interactive and addictive. Built end-to-end with Google sign-in, animated onboarding, real-time chat UI, and AI-generated conversations.

## Tech Stack
- React, Vite, Framer Motion, GSAP
- Node.js, Express, MongoDB, Mongoose
- Passport.js, JWT, Google OAuth
- Vercel (CI/CD)

### Tech: React (Frontend)
- Where & why: Used for building the interactive WhatsApp-style chat UI and onboarding screens. React's component model maps directly to chat components and character views.
- Detailed explanation: On my resume this line means I implemented a modern component-driven frontend using hooks, local state and context. I used React to break the UI into reusable pieces (Chat bubble, MessageList, Settings), enabling rapid iteration and maintainability. React's virtual DOM optimizes frequent UI updates during animated message playback.

### Tech: Vite (Build Tool)
- Where & why: Used for fast local dev server, lightning-fast HMR and optimized production builds for the frontend.
- Detailed explanation: This resume line communicates I prioritized developer experience and build performance. Vite replaced slower bundlers; during development HMR reduces reload friction and in production Vite outputs optimized bundles that shrink load times for initial page load.

### Tech: Framer Motion & GSAP (Animations)
- Where & why: Driving onboarding animations, typing effects and message entry/exit transitions for immersive narrative feel.
- Detailed explanation: This line means I implemented polished motion design to increase engagement. I used Framer Motion for React-friendly layout transitions and GSAP for timeline-heavy sequences. Animations are GPU-accelerated and synchronized with message timing logic for perceived responsiveness.

### Tech: Node.js & Express (Backend)
- Where & why: Provides REST endpoints, OAuth callback routes, and serves server-side API logic for user preferences and blurt interactions.
- Detailed explanation: On a resume this indicates I built the backend server handling auth, persistence, and business rules. Express routes implement concise handlers and middleware (CORS, body parsing, session handling). Node.js enables sharing JS models/validation logic across stack.

### Tech: MongoDB & Mongoose (Data Layer)
- Where & why: Persistent storage for blurts, users, interactions and preferences; Mongoose for schemas and queries.
- Detailed explanation: This means I designed document schemas for conversational content (arrays of message objects), user profiles, and interaction tallies. I used Mongoose for schema validation, indexes for read-heavy queries, and plan to use Atlas for managed scaling.

### Tech: Passport.js & JWT (Auth)
- Where & why: Passport Google OAuth for sign-in, JWT for stateless client-auth and API protection.
- Detailed explanation: This resume line means I integrated OAuth flows end-to-end: Passport handles the Google handshake and user creation, then I generate a JWT for the SPA. JWTs simplify API auth in serverless deployments while Passport ensures secure identity verification.

### Tech: Vercel (CI/CD & Hosting)
- Where & why: Host front-end static site and serverless functions; automatic deploys from GitHub for CI/CD.
- Detailed explanation: This means I set up automated deployments so pushes to `main` produce staged or production builds. Vercel's serverless functions host auth endpoints, making infrastructure maintenance minimal and enabling global edge distribution for frontend assets.

---

## Resume-line breakdown (what each bullet means)
- "AI-driven storytelling platform": I implemented content pipelines, data models and UI that convert headlines into chat narratives. This required designing message schema, content authoring, and an export pipeline.
- "Integrated Google OAuth authentication": I built the OAuth flow using Passport.js, stored user metadata in MongoDB, and returned JWTs for client sessions.
- "Animated onboarding, real-time chat UI": Implemented message playback engine, animation timelines, and local state syncing for auto-play and manual taps.
- "Increased adoption from 35 to 75+ users": Metrics-driven change — replaced email distribution with an interactive web experience and instrumented basic tracking to validate uplift.

---

## Detailed Q&A

### Q: How will you make this project scalable? (HLD + LLD)

High-Level Design (HLD)
- Client: React SPA served from CDN/edge (Vercel). Stateless client communicates with API endpoints.
- API layer: Short, focused REST endpoints (or HTTP RPC) hosted as serverless functions or containers behind an API gateway.
- Data layer: Managed MongoDB (Atlas) with read replicas and sharding as demand grows. Use secondary Redis cache for hot reads and session storage.
- Ingress & Delivery: CDN for static assets, rate-limiting and WAF at the edge; observability via Sentry/Prometheus + tracing.

Low-Level Design (LLD)
- API partitioning: Separate endpoints for (1) auth, (2) blurts content, (3) interactions (likes/seen), (4) user prefs. Each endpoint has its own caching strategy.
- Data model tuning: Blurt documents store message arrays (immutable). For analytics and high-write counts, move interaction tallies to a separate collection or time-series store; maintain per-blurt counters with atomic increments.
- Caching & sessions: Use Redis for ephemeral session store and to cache computed message renderings or frequently-read blurts. Leverage TTLs for stale content.
- Concurrency & rate control: Limit per-IP and per-user rate on AI-generation endpoints, queue heavy jobs (content generation) via a job queue (Bull/Redis) with workers.
- Background processing: Use workers to generate or refresh AI blurts asynchronously; store results in DB and notify clients via WebSocket or push.
- Observability: Instrument request traces, DB slow queries, and worker metrics. Set alerts on latency, error rates and queue length.

### Q: How will you implement this using microservices?

Service decomposition
- Auth service: Handles Google OAuth, user creation, JWT issuance. Exposes /auth/* endpoints. Owns user profile collection.
- Content service: Responsible for blurt generation, storage and retrieval. Owns blurt collection and generation job queue.
- Interaction service: Tracks likes, dislikes, seen flags, and analytics. Owns interaction collection and maintains counters.
- Notification service: WebSocket/Push gateway that delivers real-time updates.
- Gateway/API aggregator: Edge API that routes and aggregates responses for the SPA.

Communication & data
- Use lightweight synchronous HTTP for simple queries and gRPC for high-throughput internal calls between services.
- Use an event bus (Kafka or Redis Streams) to broadcast events (blurt_created, blurt_updated, user_updated). Services subscribe and react asynchronously.
- Each service owns its schema; cross-service queries use denormalized copies or materialized views updated by event consumers.

Deployment & operations
- Containerize services and orchestrate on Kubernetes or serverless containers (e.g., AWS Fargate). Use autoscaling rules per service (CPU, queue length).
- CI/CD: Per-service pipelines with unit/integration tests and canary deployments.
- Observability: Centralized logging, per-service traces and dashboards; SLOs and alerts.

---

*Review these notes before interviews; they map resume bullets to concrete technical choices and provide deeper architecture answers.*

## Key Features
- AI-generated chat debates on news
- Character-driven narratives
- Google OAuth authentication
- Animated onboarding and chat UI
- Responsive, mobile-friendly design
- PDF export of chats

## Current Status
- MVP live at [nahneedpfft.com](https://www.nahneedpfft.com)
- Core features implemented
- User authentication and onboarding working
- Weekly content updates
- Deployed on Vercel (serverless)

## Scaling Strategy
- Move to managed MongoDB (Atlas) for auto-scaling
- Use Redis for session/cache if user base grows
- Implement horizontal scaling with Vercel/other cloud functions
- Optimize DB queries and add indexing
- Use CDN for static assets
- Add monitoring (Sentry, Google Analytics)

## Probable Interview Questions & Answers

### Q: What problem does Blurt solve?
A: Makes news consumption engaging by blending narrative design and chat UI, encouraging discussion and retention.

### Q: How is AI used in Blurt?
A: AI generates chat conversations and character debates based on real news headlines, simulating group chat dynamics.

### Q: How would you scale Blurt for 100k+ users?
A: Use managed DBs, caching, CDN, serverless scaling, and optimize backend logic. Monitor performance and errors.

### Q: What was the hardest technical challenge?
A: Integrating real-time chat UI with AI-generated content and ensuring smooth onboarding/user experience.

### Q: How is authentication handled?
A: Google OAuth via Passport.js, JWT for sessions, MongoDB for user data.

### Q: What would you improve next?
A: Add analytics, error monitoring, more character diversity, and real-time notifications.

### Q: What is the deployment setup?
A: Vercel for CI/CD, serverless backend, static frontend, MongoDB Atlas for data.

### Q: How do you keep users engaged?
A: Weekly content updates, animated onboarding, interactive chat UI, and character-driven storytelling.

---

*Review this file before interviews for concise project talking points and answers.*


