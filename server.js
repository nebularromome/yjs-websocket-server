const { setupWSConnection } = require('@y/websocket-server')
const http = require('http')
const WebSocket = require('ws')

const port = process.env.PORT || 1234
const host = '0.0.0.0'

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('okay')
})

const wss = new WebSocket.Server({ server })

wss.on('connection', setupWSConnection)

server.listen(port, host, () => {
  console.log(`y-websocket server running at '${host}' on port ${port}`)
})
