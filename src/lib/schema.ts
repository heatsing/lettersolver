import { ASSET_PATHS } from './assets-version';

const BASE = 'https://lettersolver.net';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE}/#organization`,
    name: 'Letter Solver',
    url: BASE,
    logo: `${BASE}${ASSET_PATHS.ogImage}`,
    description: 'Free letter solver, word unscrambler & anagram solver for Wordle, Scrabble, Words with Friends.',
    sameAs: [],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Letter Solver',
    url: BASE,
    description: 'Free letter solver, word unscrambler & anagram solver for Wordle, Scrabble, Words with Friends.',
    inLanguage: 'en-US',
    publisher: { '@id': `${BASE}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/unscramble?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Letter Solver',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Any',
    url: `${BASE}/unscramble`,
    description: 'Free word unscrambler: enter letters and find all valid words.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
}

export function getFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}

export function getHowToSchema(steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Use the Word Unscrambler',
    description: 'Step-by-step guide to unscrambling letters and finding words',
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
