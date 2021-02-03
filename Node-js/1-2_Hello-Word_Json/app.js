const http = require('http');

let user = [
    {
        "id": 2,
        "name": "fuchsia rose",
        "year": 2001,
        "color": "#C74375",
        "pantone_value": "17-2031"
    },
    {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
]


http.createServer(function (request, response) {
    // root , get
    if (request.url === "/" && request.method === "GET") {

        response.write("<h1>'Hello World'</h1>");
        response.end();


    }else if(request.url === "/user" && request.method === "GET"){
        let temp = JSON.stringify(user)
        response.write(temp);
        response.end();

    }else {
        response.write("Bad Request");
        response.end();
    }

}).listen(5005);

console.log("server started on port 5005 !!");