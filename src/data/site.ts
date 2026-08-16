export const site = {
  name: 'かずっちゃ',
  /** ブログ名（2026-08-16 確定。以前は 'kazutcha.com'） */
  title: '「後回し」を、やめた。',
  /** 副題（2026-08-16 確定） */
  tagline: '個人事務所を、AIといっしょに育てていく行政書士の実録',
  description:
    '岐阜県で開発許可などの許認可を扱う行政書士・かずっちゃが、AIを組み込んだ個人事務所を実際に育てながら、うまくいったことも失敗も記録するブログ。事務に追われてやりたいことが後回しになっている士業・小さな事業者に向けた実践記。',
  url: 'https://kazutcha.com',
  author: 'かずっちゃ（髙橋 一浩）',
  officeName: 'Life行政書士事務所',
  officeUrl: 'https://office-lifechange.com',
  x: '', // 【要確認】Xのプロフィールurl（例: https://x.com/xxxx）
  note: '', // 【要確認】noteのurl
  avatar: '/images/avatar-512.png', // 水彩アイコン（本人写真をもとに生成・2026-08-17）
  /** サイドのプロフィールカード用の短い自己紹介（3行） */
  bio: '岐阜県で土地の許認可を扱う行政書士。地方公務員を41歳で辞めて独立。事務に追われる個人事務所を、AIといっしょに育てている途中です。',
};

/** サイドの固定導線「AI事務所のはじめ方 5ステップ」
 *  実際に踏んだ順（2026-07〜08の記録）。記事ができたら href を記事に差し替える */
export const steps = [
  { n: 1, title: '第2の脳を作る', desc: 'Obsidianに知識・案件・日誌を集める', href: '/category/dougu/' },
  { n: 2, title: 'AIをつなぐ', desc: 'Claude Codeを脳の上で動かす', href: '/category/dougu/' },
  { n: 3, title: '業務を棚卸しする', desc: '30業務を並べて役割ごとに社員を立てる', href: '/category/kangaekata/' },
  { n: 4, title: '実案件で使って直す', desc: '構築の翌日から本番。詰まったら直す', href: '/category/jitsuroku/' },
  { n: 5, title: '外出先から動かす', desc: 'Discordで指示→自宅PCが無人で処理', href: '/category/dougu/' },
];

/** 4カテゴリ（構成会議 2026-08-16 承認） */
export const categories = {
  jitsuroku: { name: 'AI事務所の実録', desc: '構築・運用・失敗と修正。日々の実務でAIをどう使い、どこで直したか', order: 1 },
  kangaekata: { name: '士業とAIの考え方', desc: '何をAIに任せ、何を人が握るか。分業の判断と、その理由', order: 2 },
  urakata: { name: '実務の裏側', desc: '役所調査・見積の型・自治体で運用が違う話。案件は特定しない', order: 3 },
  dougu: { name: '道具と手順', desc: 'Obsidian・Claude Code・スクリプトなど、真似できる粒度の具体', order: 4 },
} as const;

export type CategoryKey = keyof typeof categories;

export const nav = [
  { href: '/posts/', label: '記事一覧' },
  { href: '/about/', label: 'このブログについて' },
  { href: site.officeUrl, label: '事務所サイト', external: true },
];
