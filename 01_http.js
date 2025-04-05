//import http module
const http = require("http");

//create server
const server = http.createServer((req, res) => {
  const route = req.url;
  switch (route) {
    case "/":
      const dateAndTime = new Date();
      const date = dateAndTime.toLocaleDateString();
      const time = dateAndTime.toLocaleTimeString();

      //   console.log(`Current date and time: ${date}`);
      //   console.log("Current date: " + date);
      //   console.log("Current time: " + time);

      const data = {
        "date-accessed": date,
        "time-accessed": time,
      };

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;
    case "/hello":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello, World!");
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Route not available!");
  }
});

//run server
const port = 3000;
server.listen(port, "localhost", () => {
  console.log(`Server running at $http://localhost:${port}`);
});
