/*
------------------------------------------
USECASE 1 : communicate with web server
------------------------------------------
*/

// http module (which is default) allow us to create a server
const http = require("http");

// createServer method;
// --1: has one arg is trigger function holds 2 args which are request and response
// --2: return server object
// --3: whenever you add changed, you have to re-run node

const server = http.createServer((req, res) => {
  console.log("INCOMING REQUEST");
  console.log(req.method, req.url);

  if (req.method === "POST") {
    let body = "";
    req.on("end", () => {
      console.log(body);
      const userName = body.split("=")[1];
      res.end("<h1>" + userName + "</h1>");
    });

    req.on("data", (chunk) => {
      body += chunk;
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.end(
      "<form method='POST'><input type='text' name='username' /><button type='submit'>Create user</button></form>"
    );
  }
});

// listen method holds PORT number
server.listen(5000);
