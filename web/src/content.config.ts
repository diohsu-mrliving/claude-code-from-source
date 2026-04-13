import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const chapters = defineCollection({
  loader: glob({ pattern: 'ch*.md', base: '../book' }),
});

const chaptersZh = defineCollection({
  loader: glob({ pattern: 'ch*.md', base: '../book-zh' }),
});

export const collections = { chapters, chaptersZh };
