const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("to our home page ");
  } else if (req.url === "/about") {
    res.end("here is our short history");
  } else {
    res.end(`<h1>Opps!</h1>
  <p>you fucked up son !</p>
  <a href='/'>back home </a>
  <a href='/about'>go to about </a>
  `);
  }
});
server.listen(5000);
s;
