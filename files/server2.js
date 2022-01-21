const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
   if (req.url === '/get' && req.method === 'GET') {
       res.writeHead(200);
       res.end('success');
   } else {
     res.writeHead(404);
     res.end('we don\'t know');
   }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
