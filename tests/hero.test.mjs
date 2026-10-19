import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { validateHeroData } from '../src/data/hero.ts';

const draft = JSON.parse(readFileSync(new URL('../src/data/hero.json', import.meta.url), 'utf8'));

test('draft allows empty contact and portrait', () => {
  const empty = { ...draft, cta: { ...draft.cta, href: '' } };
  assert.equal(validateHeroData(empty).cta.href, '');
});

test('required text and draft label cannot be blank', () => {
  for (const field of ['name', 'heading', 'description', 'draftLabel']) {
    assert.throws(() => validateHeroData({ ...draft, [field]: '  ' }), /must not be empty/);
  }
});

test('contact requires a real absolute URL and a label', () => {
  for (const href of ['#', '/contact', 'javascript:alert(1)']) {
    assert.throws(() => validateHeroData({ ...draft, cta: { label: 'Contact', href } }));
  }
  for (const href of ['#services', 'https://example.com/contact', 'mailto:test@example.com', 'tel:+123456789']) {
    assert.doesNotThrow(() => validateHeroData({ ...draft, cta: { label: 'Contact', href } }));
  }
  assert.throws(() => validateHeroData({
    ...draft, cta: { label: '', href: 'https://example.com' },
  }), /cta.label/);
});

test('portrait requires alt text when a source is provided', () => {
  assert.throws(() => validateHeroData({
    ...draft, portrait: { ...draft.portrait, src: '/portrait.jpg', alt: '' },
  }), /portrait.alt/);
});

test('portrait dimensions must reserve a valid aspect ratio', () => {
  for (const width of [0, -1, 1.5]) {
    assert.throws(() => validateHeroData({
      ...draft, portrait: { ...draft.portrait, width },
    }), /positive integers/);
  }
});
