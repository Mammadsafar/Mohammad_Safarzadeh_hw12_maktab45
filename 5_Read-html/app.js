const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    // root , get
    if (request.url === "/" && request.method === "GET") {
        response.setHeader('content-Type', 'text/html')
        fs.readFile('./index.html', 'utf8', (err, page) => {
            if(err){
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