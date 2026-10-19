# DESIGN — Olesya personal nutritionist site

Status: **Maven selected as design reference; adaptation plan, not final approved design**.

## Figma source
- File: https://www.figma.com/design/xitjj4sdx29fCFFv8NEkDr/Maven--Copy-?node-id=0-1
- Desktop frame: `1:2`, 1440 × 7550 px.
- Important: use Maven for layout patterns and visual direction, not its branding, claims, text, customer images or healthcare-company content. Verify rights before reusing any downloaded assets.
- The source contains a desktop composition only in the inspected frame. Mobile design is **not yet verified** and must be designed, not guessed to be identical.

## Layout inventory / mapping
| Maven node | Original (observed) | Olesya adaptation | MVP decision |
|---|---|---|---|
| `1:3` | 1440-wide navigation with enterprise menus | Compact site header: name/wordmark, section links as needed, contact CTA | Simplify |
| `1:34` | Hero, mint background, 58px heading, image on right; elaborate lead-gen input CTA | Hero with Olesya portrait, short positioning, simple contact link/button | Keep composition, remove lead-gen UI |
| `1:57` | Statement with three benefit columns | About / 3 principles of approach, only with confirmed copy | Adapt |
| `1:121` | 4-slide medical stories | Optional testimonials if genuine consented examples exist; otherwise omit | Not MVP |
| `1:175` | ROI and healthcare metrics | Do not claim numbers; replace with qualifications/credentials (if verified) or omit | Replace |
| `1:203` | Four care offerings | Services / consultation process using verified offerings, likely simple responsive cards | Adapt |
| `1:244` | B2B audiences, testimonials and partner CTA | Not relevant to personal brand | Omit |
| `1:339` | 'Featured in' logos | Use only actual, authorized credentials or press mentions; not assumed | Omit |
| `1:382` | Foundation, awards, form, multi-column corporate footer | Concise contact CTA and personal footer; no backend form | Simplify |

## Proposed MVP page hierarchy
1. `SiteHeader` — compact anchor navigation, no corporate menu.
2. `Hero` — Olesya's own approved portrait, heading, short description, a single contact CTA.
3. `About` — first-person introduction and professional philosophy, reviewed by Olesya.
4. `Approach` — up to three validated principles (optional, avoid duplicated marketing statements).
5. `Services` — what a consultation actually includes, if confirmed.
6. `Qualifications` — education and certificates only after factual confirmation.
7. `Contacts` — explicit outbound links (MAX / Telegram etc., only after confirmation).
8. `SiteFooter` — name, navigation as needed, copyright and required legal/privacy links as applicable.

Sections can be combined or omitted to keep the site concise. Avoid padding the page to Maven's 7550px height.

## Verified visual cues from inspected Figma Hero (`1:34`)
- Source reference width: 1440px; hero section: 721px tall.
- Hero background: `#F1F7F6`.
- Primary green: `#00856F` (heading and CTA).
- Dark text: `#263633`; muted text: `#64726F`.
- Original headline: Roboto regular, 58px, line height 67px (DESKTOP REFERENCE ONLY).
- Hero image sits on right; original reference image is NOT an authorized portrait of Olesya.
- Original 770×80 lead capture panel is NOT part of adaptation.
- Original CTA green, white text, modest radius (~4px).
- Header and other sections require further inspection before treating these as sitewide design tokens.

### Working design tokens (derived from inspected hero only)
```scss
:root {
  --color-hero: #f1f7f6;
  --color-accent: #00856f;
  --color-text: #263633;
  --color-muted: #64726f;
  --color-surface: #ffffff;
  --color-border: #dee3e3;
  --content-max: 1180px; // corresponds to visible inner content widths in Maven
}
```
Do not blindly set `--color-background` or assume all sections are mint. Further tokens require review of corresponding Figma frames. Maintain contrast and reasonable text sizes.

## Responsive interpretation
- Mobile-first; functional from 320px, tablet and desktop.
- On narrow screens Hero becomes vertically stacked; portrait and CTA stay visible without horizontal overflow.
- Use CSS Grid/Flexbox and container widths, not Figma-generated absolute pixel positions.
- Do not force the original giant desktop headings into mobile sizes.
- No React, Vue, Tailwind, carousels or hydrated islands without explicit user approval.

## Content integrity / legal
- This is **Olesya's personal nutritionist site**, NOT an official Siberian Wellness website and not a supplement storefront.
- Olesya's exact name, training, certificates, services, consultation conditions and links must be explicitly confirmed.
- Avoid invented testimonials, outcomes, medical claims, partnerships, numbers, awards and credentials.
- Claims should stay within the actual specialist's competence; no disease treatment promises.
- Don't publish personal contact information or client stories until approved.

## Accessibility, SEO and performance
- Semantic headings/landmarks, visible focus, descriptive alt text, keyboard access.
- Responsive images with dimensions; optimize portrait files locally; no remote expiring Figma URLs.
- Support reduced motion, no autoplay or decorative JS.
- Prepare real title/description/canonical/OG data and structured data from approved facts only.
- Verify Lighthouse rather than promising scores.

## Awaiting approval / inputs
- Olesya's main portrait and usage approval.
- Exact name and approved hero tagline.
- Services/process/qualification proof.
- Contact destination(s).
- Confirm whether testimonials exist and are consented (default: do not show).
- Which of proposed blocks Olesya wants visible.
- Responsive mockup approval.
