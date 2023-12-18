const http = require('http');
const fs = require('fs');


// Creating a server using row node 
const server = http.createServer();

server.on('request', (req, res) => {
    // console.log(req.url, req.method)
    if (req.url === '/read-file' && req.method === 'GET');
    const readAbleStream = fs.createReadStream(process.cwd() + '/texts/read.txt')
    readAbleStream.on('data', (buffer) => {
        res.statusCode = 200;
        res.write(buffer)
    })
    readAbleStream.on('end', () => {
        res.statusCode = 200;
        res.end("Hello Rakib hosen End response data");
    })
})

server.listen(8000, () => {
    console.log(`Server is listening on port 8000`)

})