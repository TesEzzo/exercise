import { createServer } from "node:http"

const server = createServer((_, res) => {
    console.log("request received");

    res.statusCode = 200
    
    res.setHeader("Content-Type", "text/html")
    
    res.end("<html><body><h1>This page was served with Node.js!</h1></body></html>")
})

server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
})