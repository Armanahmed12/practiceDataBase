const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const news = require('./data/news.json');

app.use(cors())

app.get('/', (req, res) => {
  res.send(news)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})