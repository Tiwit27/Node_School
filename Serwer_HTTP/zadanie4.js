const http = require("http");
const url = require("url");

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "application/json"}); 
    const date = new Date();
    const currentDate = {
        dzien: 22,
        miesiac: 8,
        rok: 2007
    }
    res.write(JSON.stringify(currentDate));
    res.end();
})

server.listen(PORT, () => {
    console.log(`Serwer webowy pracuje, nasłuchuje i oczekuje żądania na porcie ${PORT}`)
})
