//import url module
const url = require("url");

const unparsedUrl =
  "https://www.example.com:8080/products?category=electronics&sort=price";

  const parsedUrl = url.parse(unparsedUrl, true);
// console.log(parsedUrl);
// console.log(typeof parsedUrl.query)

const stringifiedQuery = JSON.stringify(parsedUrl.query);
// console.log(typeof stringifiedQuery)

console.log(`
    Protocol: ${parsedUrl.protocol}
    Hostname: ${parsedUrl.hostname}
    Port: ${parsedUrl.port}
    Pathname: ${parsedUrl.pathname}
    Query Parameters (as ${typeof stringifiedQuery}): ${stringifiedQuery}
    
    `);
