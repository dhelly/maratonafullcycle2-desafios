const express = require('express')
const server = express()

server.get("/", function(request, response){
    return response.send("Maratona Full Cycle 2.0")
})

server.listen(3000,function(){
    console.log("Server is running")
})