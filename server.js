const express = require('express')
const libraryRoutes = require('./src/book/routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/library', libraryRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});