import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { validateSiteData } from '../src/data/site.ts';

const content = JSON.parse(readFileSync(new URL('../src/data/site.json', import.meta.url), 'utf8'));

test('demo content allows unpublished contact channels', () => {
  assert.doesNotThrow(() => validateSiteData(structuredClone(content)));
});

test('navigation cannot point to missing sections or empty URLs', () => {
  for (const href of ['#missing', '']) {
    const data = structuredClone(content);
    data.navigation[0].href = href;
    assert.throws(() => validateSiteData(data));
  }
});

test('contact links reject unsafe protocols', () => {
  const data = structuredClone(content);
  data.contacts.channels[0].href = 'javascript:alert(1)';
  assert.throws(() => validateSiteData(data), /protocol/);
});

test('SEO and section content are required', () => {
  const data = structuredClone(content);
  data.seo.description = ' ';
  assert.throws(() => validateSiteData(data), /description/);
  const empty = structuredClone(content);
  empty.services.items = [];
  assert.throws(() => validateSiteData(empty), /incomplete/);
});
