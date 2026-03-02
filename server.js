import http from 'node:http';

const PORT = 8000;
const server = http.createServer((req, res) =>{
    if(req.url === "/api" && req.method === "GET") res.end("Waramutse Rwanda");
    res.end("Kabaye")
});

server.listen(PORT, () => console.log("Server is running on: " + PORT));