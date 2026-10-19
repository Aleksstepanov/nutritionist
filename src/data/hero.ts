export interface HeroData {
  isDraft: boolean;
  draftLabel: string;
  name: string;
  professionalTitle: string;
  specialization: string;
  heading: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  portrait: {
    src: string;
    alt: string;
    placeholderLabel: string;
    width: number;
    height: number;
    objectPosition: string;
  };
}

function requireText(value: string, field: string): void {
  if (!value.trim()) {
    throw new Error(`Hero: ${field} must not be empty.`);
  }
}

/** Check content requirements in addition to the JSON's compile-time shape. */
export function validateHeroData(data: HeroData): HeroData {
  requireText(data.name, 'name');
  requireText(data.heading, 'heading');
  requireText(data.description, 'description');

  if (data.isDraft) {
    requireText(data.draftLabel, 'draftLabel');
  }

  if (data.cta.href.trim()) {
    requireText(data.cta.label, 'cta.label');
    if (!/^#[a-z][a-z0-9-]*$/.test(data.cta.href)) {
      let contactUrl: URL;
      try {
        contactUrl = new URL(data.cta.href);
      } catch {
        throw new Error('Hero: cta.href must be an absolute contact URL or empty.');
      }
      if (!['https:', 'http:', 'mailto:', 'tel:'].includes(contactUrl.protocol)) {
        throw new Error('Hero: cta.href must use https, http, mailto or tel.');
      }
    }
  }

  if (data.portrait.src.trim()) {
    requireText(data.portrait.alt, 'portrait.alt');
  }

  for (const dimension of [data.portrait.width, data.portrait.height]) {
    if (!Number.isInteger(dimension) || dimension <= 0) {
      throw new Error('Hero: portrait dimensions must be positive integers.');
    }
  }
  requireText(data.portrait.objectPosition, 'portrait.objectPosition');

  return data;
}
