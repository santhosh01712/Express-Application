const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`
        <h1 style={color:blue;}>Home Page </h1>
        <p>Description about the home page </p>
        `);
    res.end();
  } else if (req.url === "/about") {
    res.write(`
        <h1 style={color:green;}>About Us</h1>
        <p>Learn more about us here </p>
        `);
    res.end();
  } else {
    res.write(`
           <h1 style={color:red;}>Nothing to find here</h1>
        <p>We don't serve this page</p>
        <a href="/"> back home</a> 
        `);
    res.end();
  }
});

server.listen(3000);
