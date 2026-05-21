const BASE = 'https://lettersolver.net';

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterSite?: string;
  noTitleSuffix?: boolean;
}

export function getMeta(
  path: string,
  title: string,
  description: string,
  options?: {
    noindex?: boolean;
    ogType?: 'website' | 'article';
    ogImage?: string;
    twitterCard?: 'summary' | 'summary_large_image';
    twitterSite?: string;
    noTitleSuffix?: boolean;
  }
): PageMeta {
  const canonical = path.startsWith('http') ? path : `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
  return {
    title,
    description,
    canonical,
    noindex: options?.noindex,
    ogType: options?.ogType,
    ogImage: options?.ogImage,
    twitterCard: options?.twitterCard,
    twitterSite: options?.twitterSite,
    noTitleSuffix: options?.noTitleSuffix,
  };
}

export const DEFAULT_TITLE = 'Unscramble Letters for Wordle, Scrabble & More | Letter Solver';
export const DEFAULT_DESCRIPTION =
  'Unscramble jumbled letters into real words. Works for Wordle, Scrabble, Words with Friends, and crosswords. No sign-up. Free in your browser.';
