const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    // root , get
    if (request.url === "/" && request.method === "GET") {
        response.setHeader('content-Type', 'text/html')
        fs.readFile('./public/index.html', 'utf8', (err, page) => {
            response.write(page);
            response.end();
        })


    } else if (request.url === "/test" && request.method === "GET") {
        response.write(request.url);
        response.end();
    } else if (request.url === "/css/style.css" && request.method === "GET") {
        response.setHeader('content-Type', 'text/html')
        fs.readFile('./public/css/style.css', 'utf8', (err, page) => {
            if (err) {
                response.write(err);
                response.end();
            }
            response.write(page);
            response.end();
        })
    } else if (request.url === "/js/main.js" && request.method === "GET") {
        response.setHeader('content-Type', 'text/html')
        fs.readFile('./public/js/main.js', 'utf8', (err, page) => {
            if (err) {
                response.write(err);
                response.end();
            }
            response.write(page);
            response.end();
        })
    } else if (request.url === "/js/result.js" && request.method === "GET") {
        response.setHeader('content-Type', 'text/html')
        fs.readFile('./public/js/result.js', 'utf8', (err, page) => {
            if (err) {
                response.write(err);
                response.end();
            }
            response.write(page);
            response.end();
        })
    } else {
        response.write("Bad Request");
        response.end();
    }





    // console.log(request);
}).listen(5005);

console.log("server started on port 5005 !!");