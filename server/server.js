require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const db = require('./db');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

// get all gifts
app.get('/api/v1/gifts', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM gifts');
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        gifts: results.rows,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
});

// get a gift
app.get('/api/v1/gifts/:id', (req, res) => {
  console.log('get request');

  console.log(req.params);
  res.status(200).json({
    status: 'success',
    data: {
      gift: 'raptors ticket',
    },
  });
});

// create a gift
app.post('/api/v1/gifts', (req, res) => {
  console.log('post request');

  console.log(req);
  res.status(201).json({
    status: 'success',
    data: {
      gift: 'essential oil',
    },
  });
});

// update gift
app.put('/api/v1/gifts/:id', (req, res) => {
  console.log('put request');
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      gift: 'essential oil',
    },
  });
});

// delete gift
app.delete('/api/v1/gifts/:id', (req, res) => {
  res.status(204).json({
    status: 'success',
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}...`);
});
