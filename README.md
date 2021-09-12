## Setup

```
npm install -g firebase-tools
yarn
```

## Stack

- next.js
- SWR
- Chakra UI
- MicroCMS

## フォルダ構成

```
.
├── .github/workflows
├── api
├── components
│   └── common
│   └── pages
│       └── screen name
│           ├── index.tsx
│           └── [component名].tsx
├── pages
├── styles
├── public
├── theme
├── types
└── utils
```

### .github/workflows

- github Actions の設定ファイル
- 自動テスト、自動デプロイをここで設定
- 基本的に触らない

### api

- Aspida で自動生成されるので基本的に触らない
- API リクエストする際のメソッドが格納されている

### pages

- ルーティング&Container Component
  - ui/(screen name)/index.tsx を import して export default する
  - state 管理、API 呼び出しを行う。

### component

- Presentational Component
- dom 要素を描く。
- 共通部品は common フォルダ、ページ固有の部品は pages 配下にページ名フォルダを作成する

### theme

- chakra UI のテーマ設定
- 共通のカラーコードとか、テキストフォントとかはここで設定して、各コンポーネントで使う

### types

- Aspida の型をここで規定
  - リクエスト形式
  - レスポンス形式

### public

- MicroCMS から取得する以外の画像ファイルとかはここに格納

### styles

- Next.js で使用するグローバル css
- 基本的に触らない

## コード規約

### 共通

export default はなるべくやめる（補完がきかなくなるため）

### components

- コンポーネントはあくまで部品
  - 部品の外側にマージンを設定しないでね
  - マージン設定したい場合は上層で Box や Flex 要素で囲ってやる
