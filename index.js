const express = require('express');
const Datastore = require('nedb');

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server at ' + port);
});
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}))

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
  response.json({test: 123});
});

app.post('/api', (request, response) => {
  console.log('Recebi um pedido!!');
  const data1 = request.body;
  const timestamp = Date.now();
  data1.status = 'server: success!';
  data1.timestamp = timestamp;
  database.insert(data1);
  console.log(data1);
  response.json(data1);
})
