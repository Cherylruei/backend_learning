// include http module from Node.js
const http = require('http')
// define serve and related variables
const hostname = 'localhost'
const port = 3000
// handle request and response here
const serve = http.createServer((req, res) => {
  // Do something to handle request and response here
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(`This is my first server created in Node.js`)
})

// start and listen the server
serve.listen(port, hostname, () => {
  // 第三個參數直接傳入一個匿名函式
  console.log(`The server is running on http://${hostname}:${port}`)
})