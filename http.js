const http = require("http")
// console.log(http)
const server = http.createServer((req, res) => {
    // console.log(res)
    // console.log(req.url)
    //    res.end("<h1 style='color:red'>hello world</h1>")

    switch (req.url) {
        case "/":
            res.end("<h1 style='color:red'>Welcome to home page</h1>")
            break;

            case "/profile":
                res.end("<h1 style='color:red'>Welcome to profile page</h1>")
                break;

                case "/products":
                    res.end("<h1 style='color:red'>Welcome to products page</h1>")
                    break;
    
        default:
            res.end("<h1>Page not found</h1>")
            break;
    }
   
    });

server.listen(5000,err => {
    err ? console.error(err) : console.log("server is running on port ",5000)
})