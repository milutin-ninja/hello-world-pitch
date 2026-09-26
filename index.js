const http = require("http");

const PORT = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World from Railway!");
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
