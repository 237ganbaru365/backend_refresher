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

# PostgreSQL

1. make server

- `npm i express pg cors`

  - pg :
  - cors : [resorce](https://qiita.com/att55/items/2154a8aad8bf1409db2b)

  ```
  What is cors??
   - Cross-Origin Resource Sharing
      - origin = protocol + domain + port number
      - あるオリジンで動いている Web アプリケーションに対して、別のオリジンのサーバーへのアクセスをオリジン間 HTTP リクエストによって許可できる仕組み

  - Same-Origin Policy
    - XSS (Cross Site Scripting)
    - CSRF (Cross-Site Request Forgeries)

  ```

  2. create database

  - `CREATE DATABASE DATABASE_NAME;` --!! semi coron is required
  - `CREATE TABLE TABLE_NAME (VALUES);`
  - schema
  - `\l` : list all database in posgresql
  - `\c` : move inside a database
  - `\dt` : show table in database
  - `SERIAL PRIMARY KEY`

    - SERIAL : a function to increment PRIMARY KEY ensure the uniquness
    - PRIMARY KEY : indicate the colomun make unique

  - `psql -U postgres` : start as admin to access entire postgress data (need to type password too)

  ```
   option + ¥ : mac command for back slash
  ```

  - `SELECT * FROM todo;`

  3. connect db and cofigure database with pg

  - `const Pool = require('pg').Pool`
    and
  - `const pool = new Pool({ CONFIGURATION })`

  4. build routes with postgreSQL queries

  - `pool.query("INSERT INTO todo (description) VALUES($1)",[description])`
    - pool can allow us to use PostgreSQL Query
    - Query has 2 args, 1st is SQL command, and second is array which holds dynamic value coming from client
    - `RETURNING *` : return data
  - `UPDATE todo SET description = $1 where todo_id = $2`
  - `DELETE FROM todo WHERE todo_id = $1`
    - `$NUMBER` can be any number
