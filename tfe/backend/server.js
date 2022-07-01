const { Client } = require('pg')
const express = require("express");
const app = express()
const port = 3001;
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'TFE',
  password: 'p',
  port: 5432,
})
client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})


app.get('/api/profilClient/:idClient', (req, response) => {
  const idClient = req.params.idClient;
  const query = `select * from "Client" where "Id_client" = ($1)`
  client.query(query,[idClient], (err, results) => {
    if (err) {
      response.status(400)
      response.send({ 'message': 'An error occurred.' })
    }
    else {
      response.status(200)
      response.send(results.rows)
      
    }

  });
})

// app.get('/', (req, res) => {
//   res.status(200).json({ "ok": "ok" });
// })
