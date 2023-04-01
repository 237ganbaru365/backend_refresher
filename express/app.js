const express = require("express");

const app = express();

/*
------------------------
FEATURES 1 : express don't need to call createServer
------------------------
*/

// midllware focused

// use method
// arg1: request
// arg2: response
// arg3: next function (not send response in this middleware, instead send req to next middleware) => 次のミドルウェアに受け渡したいところでnext関数を呼び出す

// app.use((req, res, next) => {
//   let body = "";

//   req.on("end", () => {
//     const userName = body.split("=")[1];

//     if (userName) {
//       req.body = { name: userName };
//     }
//     next();
//   });

//   req.on("data", (chunk) => {
//     body += chunk;
//   });
// });

// app.use((req, res, next) => {
//   if (req.body) {
//     return res.send(`<h1>Hello, ${req.body.name}</h1>`);
//   }
//   res.send(
//     '<form method="POST"><input type="text" name="username" /><button type="submit">CREATE USE</button></form>'
//   );
// });

/*
------------------------
FEATURES 2 : Other methods
------------------------
*/

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// get and post needs one more arg which is path where or when you wanna excute the code
app.post("/user", (req, res, next) => {
  res.send(`<h1>Hello, ${req.body.username}</h1>`);
});

app.get("/", (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username" /><button type="submit">CREATE USE</button></form>'
  );
});

app.listen(5000);
