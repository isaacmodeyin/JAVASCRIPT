const http = require("http")

http.createServer((request, response) =>{
    console.log(request)
    response.write("Hello how are you doinng ISAAC keep up with the good work and make your self and family proud of you!")
    response.end()
}).listen(8000, (err) => {
    console.log("started")
})

// const http = require("http")

// const app =http.createServer((req,res)=>{
//     if(req.url)
// })