import express from "express";
import con from "./connection.js"

const app = express();
const port = 8080;

app.use(express.static('assets'));

app.get("/", async (req, res) => {
  const result = await con.execute("SELECT * FROM samochod");
  let html = '<link rel="stylesheet" href="/style2.css">';
  html += "<table>";
  html += "<tr><th colspan='3'>Samochody</th></tr>";
  html+= `<th">
      <td>Marka</td>
      <td>Model</td>
      <td>Numer rejestracyjny</td>
    </th>`
  result[0].forEach((element, index) => {
    const elIndex = index % 2
    html+= `<tr class="tr-${elIndex}">
      <td>${element.marka}</td>
      <td>${element.model}</td>
      <td>${element.numer_rejestracyjny}</td>
    </tr>`
  });
  html+="</table>"
  res.send(html);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});