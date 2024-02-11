const express = require('express');
var cors = require('cors')
const app = express()
const port = process.env.PORT || 4000;
const news = require('./data/news.json');

app.use(cors())

app.get('/', (req, res) => {
  res.send(news)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})