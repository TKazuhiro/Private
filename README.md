# kazutcha.com — かずっちゃの実録ブログ

Astro（静的サイト）＋ Cloudflare Pages。旧NFTブログ（WordPress）を捨てて、2026-08 に「AIと一緒に事務所を回す行政書士の実録」として作り直した版。
経緯・決定事項は Vault の `01_プロジェクト/AI関係/HP移行プロジェクト/プロジェクトメモ.md`。

## 構成

```
src/
  data/site.ts             サイト名・タグライン・4カテゴリ・ナビ（X/noteのURLはここに入れる）
  content/posts/*.md       記事（正本）。frontmatter: title / description / date / category / tags / cover / draft
  content.config.ts        記事スキーマ
  layouts/Base.astro       共通レイアウト（OG・RSS link・ナビ・フッター）
  components/PostCard.astro 記事カード
  lib/posts.ts             記事取得（本番は draft:true を除外、dev では表示）
  pages/                   トップ／記事一覧／記事／カテゴリ／このブログについて／プライバシー／rss.xml
  styles/global.css        デザイントークン
public/images/posts/       アイキャッチ画像（cover で参照）
```

## 記事の書き方（運用）

1. 下書きは Vault（`04_アウトプット/` など）で書く。原稿の魂は本人、AIは変換・検品
2. 承認された原稿を `src/content/posts/YYYY-MM-slug.md` に置く（`draft: true` のままなら本番に出ない）
3. `preview` ブランチに push → Cloudflare のプレビューURLで確認 → `main` へマージで公開
4. 公開時に `draft: false` にする

frontmatter の例:

```yaml
---
title: 記事タイトル
description: 80〜120字の要約（一覧とmeta descriptionに使う）
date: 2026-08-20
category: jitsuroku   # jitsuroku / kangaekata / urakata / dougu
tags: [Claude Code, Obsidian]
cover: /images/posts/2026-08-xxx.png   # 任意
draft: true
---
```

## ローカルで見る

```bash
npm install
npm run dev     # http://localhost:4321（下書きも表示）
npm run build   # dist/（下書きは除外）
```

## Cloudflare Pages の設定（初回のみ・本人）

- Workers & Pages → Create → Pages → Connect to Git → GitHub `TKazuhiro/Private`
- Framework preset: **Astro** ／ Build command: `npm run build` ／ Build output: `dist` ／ Production branch: `main`
- Custom domains: `kazutcha.com`, `www.kazutcha.com`

## 旧サイトからの切替時にやること

- [ ] `src/data/site.ts` の X・note のURLを埋める
- [ ] OG既定画像 `public/images/og-default.png`（1200×630）を用意する（banner-maker か Nano Banana Pro）
- [ ] 旧WordPressの記事URLは全削除方針。トップへの301（`public/_redirects` に `/* / 301` は乱暴なので、主要な旧URLだけ拾う）
- [ ] Custom domain を有効化 → 数週間後に Xserver の WordPress を整理
