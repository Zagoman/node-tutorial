const http = require('http')

const server = http.createServer((req, res)=>{
    // console.log(req.url)
    if (req.url === '/') {
        // res.write("You are in the home page")
        res.end("You are in the home page")
    }
    if(req.url === '/lucas') {
        res.end("Welcome Lucas")
    }
    res.write(`<h1> Oops </h1> <p>We can't seem to find your page</p><a href='/'>Home</a>`)
    res.end()


})

server.listen(5000)