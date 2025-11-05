const express = require('express');
const mysql = require('mysql2');
const app = express();

const port = 5000;

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'mydb'
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() AS time', (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(`Hello from Backend! DB time: ${result[0].time}`);
  });
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
