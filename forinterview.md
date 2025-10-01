# Blurt Interview Prep

## Project Summary
Blurt is an AI-driven storytelling platform that transforms news headlines into WhatsApp-style group chats. Characters with rich backstories debate weekly news, making news consumption interactive and addictive. Built end-to-end with Google sign-in, animated onboarding, real-time chat UI, and AI-generated conversations.

## Tech Stack
- React, Vite, Framer Motion, GSAP
- Node.js, Express, MongoDB, Mongoose
- Passport.js, JWT, Google OAuth
- Vercel (CI/CD)

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
