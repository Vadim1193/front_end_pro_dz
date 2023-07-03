
console.log('Run my first server');

const products = require('./catalog');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Im ready!!");
})

app.get('/products', (req, res) => {
  res.json(products);
  console.log("Showing products");
})

app.listen(port, () => {
  console.log(`App listeninh on port ${port}`);
})