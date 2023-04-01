// you can import API like default file API
// require always return something, so you need to store it somewhere
const fs = require("fs");

/*
------------------------------------
FEATURE 1 : ignore browser API
------------------------------------
*/

//cannot run web API
// alert(userName);
const userName = "Fumina";
console.log(userName);

/*
------------------------------------
FEATURE 2 : standard API 
------------------------------------
*/

// fileAPI has methods
// arg 1: relative path (where you wanna run this method)
// arg 2: data
// arg 3: callback (which will excute after finish this runnning)
fs.writeFile("user-data.txt", "Name: " + userName, (err) => {
  err ? console.log(err) : console.log("WROTE FILE");
});
