const http = require('http')
const url = require('url')
const adder = require('./add')
const times = require('./times')
const fibonacci = require('./fibonacci')
var server = http.createServer(function (request, response) {
  const parsedUrl = url.parse(request.url, true)
  switch (parsedUrl.pathname) {
    case '/suma':
      adder.add(parsedUrl.query, response)
      break;

    case '/times':
      times.times(parsedUrl.query, response)
      break;

    case '/fibonacci':
      fibonacci.fibonacci(parsedUrl.query, response)
      break;

    default:
      response.end(JSON.stringify({ message: "Invalid endpoint. Try again."}));
      break;
  }
})

var port = 8080;
server.listen(port, () => { console.log("Server listening in port " + String(port)) })
