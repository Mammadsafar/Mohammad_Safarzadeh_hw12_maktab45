const http = require('http');

http.createServer(function (request, response) {
    // root , get

    if (request.url === "/" && request.method === "GET") {

        console.log(request.url);
        response.write("<h1>'Hello Web Application'</h1>");
        response.end();

    } else if (request.url === "/about" && request.method === "GET") {

        console.log(request.url);
        response.write("<h1>'About'</h1>");
        response.end();

    } else if (request.url === "/home" && request.method === "GET") {

        console.log(request.url);
        response.write("<h1>'Home'</h1>");
        response.end();

    } else if (request.url === "/page" && request.method === "GET") {

        console.log(request.url);
        response.write("<h1>'Page'</h1>");
        response.end();

    } else if (request.url === "/user" && request.method === "GET") {

        console.log(request.url);
        response.write("<h1>'User'</h1>");
        response.end();

    } else if (request.url === "/pass" && request.method === "GET") {

        console.log(request.url);
        response.write("<h1>'Password List'</h1>");
        response.end();

    } else if (request.url === "/link" && request.method === "GET") {

        console.log(request.url);
        response.write("<h1>'Link'</h1>");
        response.end();

    } else {
        response.write("<h1>'Not Found ==> HAS BAD REQUEST !! CHECK URL !! '</h1>");
        response.end();
    }


}).listen(3000);

console.log("server started on port 3000 !!");