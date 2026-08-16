import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // 一覧・meta description 用の要約（80〜120字）
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(['jitsuroku', 'kangaekata', 'urakata', 'dougu']),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(), // /images/posts/xxx.png（アイキャッチ）
    draft: z.boolean().default(false), // true の間は本番に出ない
  }),
});

export const collections = { posts };
