# URL Parameter Bookmarklet

特定のウェブサイトで自動的にURLパラメーターを追加するブックマークレットです。

## 機能

このブックマークレットは、以下のサイトでURLパラメーターを自動的に追加します:

- **Google** (`google.com`): 英語版の検索結果を表示
  - `hl=en` (インターフェース言語を英語に)
  - `gl=us` (地域を米国に)

- **Amazon.co.jp** (`www.amazon.co.jp/s`): Amazon.co.jpの検索結果をグローバル配送対応商品に絞り込み
  - `emi=AN1VRQENFRJN5` (グローバル配送対応商品)

## 使い方

1. ブックマークレットのビルド:
   ```bash
   node build.js
   ```

2. 生成された `bookmarklet.txt` の内容をコピー

3. ブラウザで新しいブックマークを作成し、URLフィールドにコピーした内容を貼り付け

4. 対応サイトでブックマークをクリックすると、パラメーターが追加されたURLにリダイレクトされます

## 開発

### ファイル構成

- `main.js`: ブックマークレットのソースコード
- `build.js`: ミニファイするビルドスクリプト
- `bookmarklet.txt`: 生成されたブックマークレット (ビルド後)

### カスタマイズ

`main.js` を編集して新しいサイトや異なるパラメーターを追加できます。

例:
```javascript
if (window.location.hostname === 'example.com') {
  url.searchParams.set('param', 'value');
  window.location.href = url.toString();
}
```

編集後、`node build.js` を実行してブックマークレットを再生成してください。
