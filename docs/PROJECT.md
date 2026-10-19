# PROJECT — Olesya's personal nutrition consultant website

## Purpose
Create a fast, elegant and credible personal website for Olesya as a nutrition consultant. The site explains who she is, what she does, how she approaches her work and how to contact her.

**Core positioning:** Olesya's own professional identity. The site is not dedicated to Siberian Wellness and must not be styled as a supplement shop or recruiting funnel.

## Audience and intended action
Visitors who are interested in nutrition guidance and want to understand whether Olesya is a suitable professional. Main action: contact her through an approved communication channel (to be decided).

## MVP scope
A static, mobile-first landing page with sections:
1. Hero — name, verified professional title, portrait, short positioning and contact CTA.
2. About — personal introduction and working principles.
3. Areas of support — only services Olesya confirms she offers.
4. Process — how an inquiry or consultation works, if confirmed.
5. Education and qualifications — only documented and approved details.
6. Contacts — approved public communication links and optional legal information.

Section order, visibility and wording are provisional until approved by the site owner. Hide incomplete sections rather than publishing invented content.

## Out of scope for MVP
- Online store, product catalog, payments, accounts, admin panel.
- Blog, booking engine, CRM, user data storage, backend API, database.
- Live Strapi instance or reliance on a CMS at runtime.
- Analytics, tracking pixels, chat widgets and embedded third-party forms unless explicitly approved.
- Claims of medical treatment, promised health outcomes or fictitious testimonials.

## Technology decisions
| Area | Decision |
| --- | --- |
| Framework | Astro |
| Rendering | Static Site Generation (SSG) |
| Language | TypeScript (strict) |
| Styling | SCSS, project tokens and semantic CSS |
| Content | Version-controlled local JSON, imported at build time |
| Images | Optimized local assets, responsive where useful |
| Hosting | GitHub Pages |
| Deployment | GitHub Actions on approved branch |
| CMS | None initially; possible local Strapi later |

Do not implement speculative CMS adapters or generic content services until a second source of content is actually required.

## Suggested organization (not mandatory until scaffolded)
```text
src/
  assets/
  components/
  data/
    site.json
    services.json
    seo.json
  layouts/
  pages/
    index.astro
  styles/
    global.scss
public/
docs/
AGENTS.md
```

## Data and future CMS
Data is edited in JSON and committed to Git. Astro reads it at build time. A possible **future** local Strapi workflow is: edit locally → export validated JSON + assets into repo → review diff → commit/push → GitHub Actions builds → static site publishes. Never require a live CMS or its database for rendering production pages.

## Deployment notes
GitHub Pages is the initial host, but the repository name, URL and custom domain are undecided. Configure Astro `site` and, when publishing under `username.github.io/repository/`, the `base` setting using actual repository details. A custom domain may change this configuration. Never invent a domain in metadata.

## SEO and privacy
- Unique, accurate title and description; canonical, Open Graph and social sharing image when ready.
- Sitemap and robots.txt configured for the actual production URL.
- Structured data only for verified identity/business information, without invented credentials or addresses.
- Semantic headings, accessible navigation and fast rendering.
- No cookies, tracking, embedded third-party requests or collection of personal data without assessing privacy/legal needs.
- If publishing in a specific jurisdiction, verify applicable disclosure and personal-data requirements before release.

## Success criteria
Readable and credible on mobile; clear CTA; no fake content; excellent Core Web Vitals target and good accessibility; static build deploys reproducibly; editing basic content requires no code component changes.

## Open decisions
- Olesya's preferred public full name and formal qualification title.
- Which services and consultation formats are offered, and whether prices should be visible.
- Approved professional biography, training and certifications.
- Portraits and rights to use photos.
- Public contact channels and exact links.
- Visual preferences, project/repository name, domain, and jurisdiction-specific disclosures.
