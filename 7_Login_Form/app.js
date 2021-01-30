const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    // root , get
    if (request.url === "/" && request.method === "GET") {
        
        fs.readFile('./public/index.html', 'utf8', (err, page) => {
            if (err) {
                response.write(err);
                response.end();
            }
            response.write(page);
            response.end();
        })


    } else if (request.url === "/photo.jpg" && request.method === "GET") {
        console.log(1234);
        fs.readFile('photo.jpg', (err, img) => {
            if (err) {
                response.write(err);
                response.end();
            }
            console.log(45678);
        response.write(img);
        response.end();
        })
    }else if (request.url === "/loginForm.css" && request.method === "GET") {
        
        fs.readFile('./public/loginForm.css', 'utf8', (err, page) => {
            if (err) {
                response.write(err);
                response.end();
            }
            response.write(page);
            response.end();
        })
    } else if (request.url === "/style.css" && request.method === "GET") {
        
        fs.readFile('./public/style.css', 'utf8', (err, page) => {
            if (err) {
                response.write(err);
                response.end();
            }
            response.write(page);
            response.end();
        })
    } else if (request.url === "/fontiran.css" && request.method === "GET") {
        
        fs.readFile('./public/fontiran.css', 'utf8', (err, page) => {
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