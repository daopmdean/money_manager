const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.json({ message: 'OK' });
})

app.listen(port, () => {
  console.log('Running on port ' + port);
});
