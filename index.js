// const Person = require("./person.js");

// const person1 = new Person("Ammar", 30);
// person1.greeting();
const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }
  //   if (req.url === "/about") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "about.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }
  //   if (req.url === "/api/users") {
  //     const users = [
  //       { name: "Bob", age: 1 },
  //       { name: "Bad", age: 2 },
  //     ];
  //     res.writeHead(200, { "Content-Type": "/application/json" });
  //     res.end(JSON.stringify(users));
  //   }
  // todo: Build file path
  let filepath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  //   console.log(filepath);
  //   res.end();
  let extname = path.extname(filepath);
  //   todo: Initial content type
  let contentType = "text/html";
  //todo: check ext and set content Type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }
  //   todo: Read file
  fs.readFile(filepath, (err, content) => {
    if (err) {
      // * ENOENT mean that page doesnot found
      if (err.code == "ENOENT") {
        // todo: Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf8");
          }
        );
      } else {
        // todo: For Some Other errors
        res.writeHead(500);
        res.end(`Server Error ${err.code}`);
      }
    } else {
      // todo: For Successful response
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});
const POST = process.env.PORT || 3000;
server.listen(POST, () => console.log(`Server running on Port ${POST}`));
