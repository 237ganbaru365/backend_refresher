# Node.js

## What is Node.js

- Javascript のホスト or ランタイム環境
- ブラウザ外で JavaScript を使えるようにするためのもの
- 新規で API を作ることができるが、DOM API など一部の API は使えない

## Basic usage

- `node FILE_NAME`
- `require('MODULES_NAME')`

---

# Express.js

## What is Express.js?

- Node.js のフレームワーク
  - フレームワークとは基本の機能は継承しながらその効果を最大限活かせるツール
  - web アプリケーション及びサーバーを簡単に build できる
  - middleware-focused approach

## Basic usage

- `npm init`
- `npm install express --save`
- `npm install nodemon --save-dev`: (watch all files in project dir without re-running)

- `nodemon FILE_NAME`
  - `"start": "nodemon app.js"` : you can change scripts to avoid type cmd all the time
- `npm install body-parser --save` : gives us value in form input \*\* Do we really need body-parser?
