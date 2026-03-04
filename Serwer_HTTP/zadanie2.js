const http = require("http");

const PORT = 8000;

http.createServer((req, res) => {
    res.writeHead(200, "Sukces operacji", {"content-type": "text/html"});
    const temp =
        `<html lang="pl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <img width="200px" src="https://superauto.wpcdn.pl/articles/9c2df161e71ef87a0bd75041675a9147.jpg"/>
                <h1>Opel</h1>
                <h2>Astra</h2>
                <h2>2017</h2>
                <h2>18 000 zł</h2>
                <h2>Data pierwszej rejestracji: 24.05.2017</h2>
                <h2>SWD12345</h2>
            </body>
        </html>`;
    res.end(temp);

}).listen(PORT);

console.log(`Serwer webowy pracuje, nasłuchuje i oczekuje żądania na porcie ${PORT}`)
