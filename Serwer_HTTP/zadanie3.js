const http = require("http");
const url = require("url");

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"}); 
    const filenameTab = __filename.split("\\");
    res.write(filenameTab[filenameTab.length - 1] + " " + __dirname);
    res.end();
})

server.listen(PORT, () => {
    console.log(`Serwer webowy pracuje, nasłuchuje i oczekuje żądania na porcie ${PORT}`)
})
