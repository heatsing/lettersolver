export const LENGTH_SLUGS = {
  2: 'two-letter-words',
  3: 'three-letter-words',
  4: 'four-letter-words',
  5: 'five-letter-words',
  6: 'six-letter-words',
  7: 'seven-letter-words',
  8: 'eight-letter-words',
  9: 'nine-letter-words',
  10: 'ten-letter-words',
} as const;

export type WordLength = keyof typeof LENGTH_SLUGS;

export function getLengthPath(length: number): string {
  return `/${LENGTH_SLUGS[length as WordLength]}`;
}
