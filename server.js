import http from 'node:http';

const PORT = 8000;
const server = http.createServer((req, res) =>{
    res.write("Here is your information")
    res.wri
    res.end("Waramutse Rwanda", "utf8", () => console.log("Response provided"));
});

server.listen(PORT, () => console.log("Server is running on: " + PORT));