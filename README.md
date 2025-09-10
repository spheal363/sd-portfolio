# 技術スタック
- フレームワーク: Next.js 15.2.2
- 言語: TypeScript 5.x
- UIライブラリ: React 19.0.0
- スタイリング: Tailwind CSS 3.4.17
- アニメーション: Framer Motion 12.5.0
- アイコン: Lucide React, React Icons

# 必要な環境要件
## Node.js
- 推奨バージョン: Node.js 18.x以上
- 現在の環境: Node.js v18.20.6
- 理由: Next.js 15.xはNode.js 18.17以上を要求

## パッケージマネージャー
- npm: 10.8.2
- 代替: yarn, pnpm, bunも使用可能

# 📌 レイアウト編集メモ

## 変更したい部分と編集するファイル

| 変更したい部分                     | 編集するファイル             |
|--------------------------------|--------------------------|
| **背景色や全体のレイアウト**       | `app/layout.tsx`        |
| **ヘッダー（ナビゲーションバー）**   | `components/Navbar.tsx` |
| **フッターのデザイン**             | `app/layout.tsx`        |
| **ホームページのコンテンツ**       | `app/page.tsx`         |
| **ブログページのレイアウト**       | `app/blog/page.tsx`     |
| **お問い合わせページのデザイン**   | `app/contact/page.tsx`  |

## ✏️ 編集方法

### **1️⃣ 全体のレイアウトを変更**
- `app/layout.tsx` で `body` の `className` を変更
- 背景色、フォント、最大幅などを調整

### **2️⃣ ナビゲーションバーを変更**
- `components/Navbar.tsx` で `Link` を追加・削除
- メニュー項目の順番を変更可能

### **3️⃣ ホームページのコンテンツを変更**
- `app/page.tsx` の `section` 内を編集
- 制作物・言語レベル・イベント参加歴の順番を変更可能

### **4️⃣ フッターを変更**
- `app/layout.tsx` の `<footer>` を編集
- コピーライトやデザインの変更可能

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
