import http from 'node:http'

const PORT = 8000
const server = http.createServer((req, res) =>{
    const urlObject = new URL(req.url, 'http://' + req.headers.host)
    const params = Object.fromEntries(urlObject.searchParams)
    res.end(JSON.stringify(params))
})
server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))