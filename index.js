const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const news = require('./data/news.json');

app.use(cors())

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
//   );
//   next();
// });

app.get('/', (req, res) => {
  res.send(news)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})