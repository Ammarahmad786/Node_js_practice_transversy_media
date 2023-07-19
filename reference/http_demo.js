const http = require("http");
// todo: Create server object
http
  .createServer((req, res) => {
    // todo: Write response
    res.write("Hello World");
    res.end();
  })
  .listen(3000, () => console.log("Server running"));
