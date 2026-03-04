const http = require("http");

const PORT = 8000;

http.createServer((req, res) => {
    res.writeHead(200, "Sukces operacji", {"content-type": "text/html"});
    res.write(
        `<html lang="pl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>Opel</h1>
                <h2>Astra</h2>
                <h2>2017</h2>
                <h2>18 000 zł</h2>
                <h2>Data pierwszej rejestracji: 24.05.2017</h2>
                <h2>SWD12345</h2>
            </body>
        </html>`
    )
    res.end("Nagłówek i sama odpowiedz zostały w całości przesłane do klienta...");

}).listen(PORT);

console.log(`Serwer webowy pracuje, nasłuchuje i oczekuje żądania na porcie ${PORT}`)
