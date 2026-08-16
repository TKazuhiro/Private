import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** 公開対象の記事（本番では draft を除外、開発中は表示） */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const fmt = (d: Date) => d.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' });
