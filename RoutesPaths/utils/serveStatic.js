import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'

export async function serveStatic(res, baseDir) {
    const publicDir = path.join(baseDir, 'public')
    const filePath = path.join(publicDir, 'index.html')

    try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, 'text/html', content)

    } catch (err) {
        console.log(err)
    }

}
