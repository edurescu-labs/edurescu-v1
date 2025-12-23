# EduRescue – Project Home

Welcome to the **EduRescue** project.

EduRescue is a **Bangladesh-first, 24/7 Academic Emergency Platform** where:
- Students get **instant AI answers** to academic questions.
- When it really matters, they can escalate to **human experts** for verified answers.
- Everything (problem → AI answer → expert verification → saved notes) happens in one focused interface.

---

## Quick Overview

- **App name:** EduRescue  
- **Core:** AI Assistant (default after login) + Emergency Help (human escalation)  
- **Support pages:** Dashboard, Resources, Notes  
- **Primary users:** SSC / HSC / University students in Bangladesh  
- **Secondary users:** Subject experts, light Admin/Ops  

---

## Start Here

If you’re a **new developer or AI assistant**, read these pages in order:

1. **[01 – Project Summary](01-Project-Summary)**  
   - Vision, target users, problem statement, one-line pitch.

2. **[02 – Features and Flows](02-Features-and-Flows)**  
   - MVP vs V2 vs Future features, page list, user flows, pain points.

3. **[03 – Architecture and API](03-Architecture-and-API)**  
   - Route structure, Prisma schema, API list, state logic.

4. **[05 – Master Prompts](05-Master-Prompts)**  
   - ChatGPT role prompts for Founder HQ, Architect, Frontend, Backend.

---

## UI / Figma (Placeholder)

> TODO: Replace with actual Figma and asset links.

- Figma Site / Prototype: `https://edurescue.figma.site/`
- Suggested frames:
  - Student – AI Assistant (Home)
  - Student – Emergency Tickets
  - Student – Notes
  - Student – Resources
  - Expert – Inbox
  - Expert – Conversation & Verify

You can also maintain screenshots under `/docs/ui/` in the repo for quick reference.

---

## Portable Project Memory

The **full project brain** (summary, features, architecture, prompts) also lives in:

- Repo file: `docs/PROJECT_WIKI.md`  
- Use that as the canonical copy for AI tools and offline context.

If you’re an AI assistant:
- Read `docs/PROJECT_WIKI.md` first.
- Treat it as the single source of truth for EduRescue.
# Section 01 – Project Summary

## 1.1 App Name

**EduRescue** – Bangladesh-এর ২৪/৭ Academic Emergency Platform

---

## 1.2 Goal

EduRescue-এর লক্ষ্য:

- Bangladesh-এর SSC / HSC / University / job-exam students যেন  
  - ২৪/৭ সময়ে **academic emergency** অবস্থায়  
  - দ্রুত **AI first answer** এবং প্রয়োজনে **human expert verified answer** পায়  
  - এক জায়গাতেই problem → solution → saved notes → revision করতে পারে  

---

## 1.3 Target Users

**Primary:**

- SSC students (Bangladesh)
- HSC students
- University students

**Secondary:**

- Job exam aspirants (BCS, bank, etc.)
- Subject experts / teachers (as “Experts”)
- Light Admin / Ops user (monitor tickets, manage experts/resources)

---

## 1.4 Problem Statement

Students today:

- Panic হয়ে যায় রাতের বেলা বা exam-এর আগে।
- Private tutor / coaching সবসময় reachable না।
- Facebook group / YouTube search করতে করতে সময় নষ্ট হয়।
- Clear, exam-focused explanation + human verification একসাথে পায় না।
- APPS খুঁজতে গিয়ে context হারিয়ে ফেলে (same question বারবার explain করতে হয়)।

EduRescue solves:

- **Panic → AI answer → emergency escalation → verified answer** in one flow.
- History + notes + curated resources সব এক প্ল্যাটফর্মে নিয়ে আসে।
- Students-কে “single tab” solution দেয় exam stress-এর সময়।

---

## 1.5 One-line Pitch

> **EduRescue** is a 24/7 academic emergency platform for Bangladeshi students where AI answers first and human experts verify when it really matters.

---

## 1.6 Value Proposition (short)

- **For students:** Immediate clarity and confidence, even রাতে ২ টায়।  
- **For parents:** Trust that child is getting vetted support, not random internet answers।  
- **For experts:** Structured ticket queue instead of messy DMs।  
- **For institutions (future):** Aggregated insights on what students struggle with most।
# Section 03 – Architecture and API

## 3.1 Route Structure (Next.js 14 – App Router)

```txt
app/
  (auth)/
    login/page.tsx                 -> /login
    register/page.tsx              -> /register

  (student)/
    student/
      layout.tsx                   -> shared layout for all /student routes
      assistant/page.tsx           -> /student/assistant
      emergency/page.tsx           -> /student/emergency
      notes/page.tsx               -> /student/notes
      resources/page.tsx           -> /student/resources
      dashboard/page.tsx           -> /student/dashboard
      conversations/[id]/page.tsx  -> /student/conversations/:id

  (expert)/
    expert/
      layout.tsx                   -> shared layout for all /expert routes
      inbox/page.tsx               -> /expert/inbox
      conversations/[id]/page.tsx  -> /expert/conversations/:id

  api/
    auth/...
    conversations/...
    tickets/...
    notes/...
    resources/...
    assistant/...
