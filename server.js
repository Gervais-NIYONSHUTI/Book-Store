import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJsonResponse } from './utils/request.js';

const PORT = 8000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB();
    if (req.url === '/api' && req.method === 'GET') {
        sendJsonResponse(res, 200, destinations)
    } else if((req.url).startsWith('/api/continent/') && req.method === "GET"){
        const continent = req.url.split('/').pop().toLowerCase();
        const filteredData = destinations.filter(destination => destination.continent.toLowerCase() === continent)
        sendJsonResponse(res, 200, filteredData)
    } else {
        sendJsonResponse(res, 404, { error: "not found", message: "The requested route does not exist" })
    }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
