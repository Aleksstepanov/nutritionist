export interface TextLink {
  label: string;
  href: string;
}

interface SectionIntro {
  eyebrow: string;
  heading: string;
  description: string;
}

interface ContentCard {
  title: string;
  description: string;
}

export interface SiteData {
  logo: { src: string; alt: string; width: number; height: number };
  navigationLabel: string;
  menu: { openLabel: string; closeLabel: string };
  skipLabel: string;
  navigation: TextLink[];
  headerCta: TextLink;
  seo: { title: string; description: string; locale: string };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    caption: string;
    visualLabel: string;
    visualNote: string;
  };
  approach: SectionIntro & { items: (ContentCard & { number: string })[] };
  services: SectionIntro & {
    ctaLabel: string;
    items: (ContentCard & { number: string; details: string[]; tone: string })[];
  };
  qualifications: SectionIntro & { items: ContentCard[] };
  contacts: SectionIntro & {
    availability: string;
    channels: (TextLink & { description: string })[];
    cta: TextLink;
  };
  footer: {
    tagline: string;
    copyright: string;
    disclaimer: string;
    backToTop: string;
    navigationLabel: string;
  };
}

export const sectionIds = ['hero-heading', 'about', 'approach', 'services', 'qualifications', 'contacts'];

export function validateSiteData(data: SiteData): SiteData {
  if (data.logo.src.trim() && (!data.logo.alt.trim()
    || !Number.isInteger(data.logo.width) || data.logo.width <= 0
    || !Number.isInteger(data.logo.height) || data.logo.height <= 0)) {
    throw new Error('Site: logo requires alt text and positive integer dimensions.');
  }
  const links = [...data.navigation, data.headerCta, data.contacts.cta, ...data.contacts.channels];
  for (const link of links) {
    if (!link.label.trim()) throw new Error('Site: link labels must not be empty.');
    const href = link.href.trim();
    if (!href) {
      if (!data.contacts.channels.some((channel) => channel === link)) throw new Error('Site: navigation and CTA URLs are required.');
      continue;
    }
    if (href.startsWith('#')) {
      if (!sectionIds.includes(href.slice(1))) throw new Error(`Site: unknown section ${href}.`);
    } else {
      const url = new URL(href);
      if (!['https:', 'http:', 'mailto:', 'tel:'].includes(url.protocol)) {
        throw new Error('Site: unsupported contact URL protocol.');
      }
    }
  }
  if (!data.seo.title.trim() || !data.seo.description.trim()) {
    throw new Error('Site: title and description are required.');
  }
  for (const section of [data.approach, data.services, data.qualifications]) {
    if (!section.heading.trim() || !section.items.length) throw new Error('Site: section is incomplete.');
    for (const item of section.items) {
      if (!item.title.trim() || !item.description.trim()) throw new Error('Site: card is incomplete.');
    }
  }
  return data;
}
