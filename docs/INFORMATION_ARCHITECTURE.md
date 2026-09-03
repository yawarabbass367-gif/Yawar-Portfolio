# Information Architecture

Canonical structure for the Personal Portfolio Website. Aligns with [PRD.md](./PRD.md) and [CONTENT_STRATEGY.md](./CONTENT_STRATEGY.md).

## Core site map

```
/
├── /about
├── /case-studies
│   └── /case-studies/[slug]
└── /projects
    └── /projects/[slug]
```

| Route | Purpose |
| --- | --- |
| `/` | Introduce designer; build credibility; funnel to case studies and contact |
| `/about` | Story, philosophy, approach, experience, skills, tools, industries |
| `/case-studies` | Index of deep product-thinking work |
| `/case-studies/[slug]` | Full case study narrative |
| `/projects` | Broader selected work without full case-study depth |
| `/projects/[slug]` | Optional project detail |

Future routes (e.g. `/writing`, `/speaking`) may be added later without changing these four core areas.

---

## Global chrome

### Primary navigation

- Home
- About
- Case Studies
- Projects
- Contact (CTA — links to contact action: mailto / calendar / contact section)

### Persistent contact pattern

- Always-available Contact CTA in nav (and/or sticky header action)
- End-of-page CTA block on every primary page
- Footer with `{{EMAIL}}`, `{{CALENDAR_URL}}`, `{{LINKEDIN_URL}}`

### Footer

- Nav mirrors (Home, About, Case Studies, Projects)
- Contact links
- Optional: location / availability line (placeholder until provided)

---

## Home (`/`) — section order

Sections must appear in this order unless the PRD is explicitly updated:

1. **Hero** — who / what / why (three questions)
2. **Selected Companies / Industries** — credibility strip
3. **Featured Case Studies** — 2–3 deep highlights
4. **Design Philosophy** — short positioning of how you think
5. **Process Overview** — structured design process signal
6. **Featured Projects** — breadth teaser
7. **Call to Action** — contact / schedule / hire

---

## About (`/about`) — content inventory

- Professional Introduction
- Design Philosophy
- Product Design Approach
- Experience Timeline
- Skills
- Tools
- Industries Worked In
- End CTA

---

## Case Studies

### Index (`/case-studies`)

Each card:

- Title
- Industry / domain
- Short outcome or problem hook
- Thumbnail / key visual
- Link to `/case-studies/[slug]`

### Detail (`/case-studies/[slug]`)

Follow [templates/CASE_STUDY_TEMPLATE.md](./templates/CASE_STUDY_TEMPLATE.md):

Overview → Problem → Business Goals → Users → Research → Challenges → Process → User Flows → Wireframes → Design System → Final UI → Results → Lessons Learned

Optional: prev/next case study navigation.

---

## Projects

### Index (`/projects`)

Each card:

- Thumbnail
- Project Name
- Industry
- Platform
- Role
- Brief Description
- Technologies (if applicable)

### Detail (`/projects/[slug]`)

- Expanded description
- Role and contributions
- Visuals / mockups
- Link to related case study when one exists
- End CTA

---

## User journey mapping

| Stage | Primary surface |
| --- | --- |
| Landing | `/` Hero |
| Understand who I am | `/` Hero + About teaser / `/about` |
| See expertise | Companies/Industries, Philosophy, Process |
| Featured case studies | `/` Featured + `/case-studies` |
| Explore projects | `/` Featured Projects + `/projects` |
| Build confidence | Case study depth + About |
| Contact | Persistent CTA + page-end CTA |

---

## Extension guidelines

- Do not displace Home / About / Case Studies / Projects from primary nav.
- New sections belong after the core four or as secondary footer links until they earn nav space.
- Prefer linking new content from Home sections over inventing parallel top-level destinations early.
