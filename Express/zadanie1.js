import express from "express";
import con from "./connection.js"

const app = express();
const port = 8080;

app.get("/", async (req, res) => {
  const result = await con.execute("SELECT marka FROM samochod");
  let html = "<ol>"
  result[0].forEach(element => {
    html+= `<li>${element.marka}</li>`
  });
  html+="</ol>"
  res.send(html);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});