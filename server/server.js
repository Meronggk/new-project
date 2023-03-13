// // server.js

// const express = require('express');
// const { Pool } = require('pg');

// const app = express();

// const pool = new Pool({
//   user: 'your_username',
//   host: 'your_host',
//   database: 'your_database',
//   password: 'your_password',
//   port: 5432,
// });

// app.get('/api/data', (req, res) => {
//   pool.query('SELECT * FROM your_table', (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json(result.rows);
//     }
//   });
// });

// app.listen(5000, () => {
//   console.log('Server started on port 5000');
// });
