require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./db');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
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
app.get('/api/v1/gifts/:id', async (req, res) => {
  const values = [req.params.id];
  try {
    const results = await db.query('SELECT * FROM gifts WHERE id = $1', values);
    res.status(200).json({
      status: 'success',
      data: {
        gift: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err.message);
  }
});

// create a gift
app.post('/api/v1/gifts', async (req, res) => {
  const values = [req.body.name, req.body.vendor, req.body.price_range];
  try {
    const results = await db.query(
      'INSERT INTO gifts (name, vendor, price_range) VALUES ($1, $2, $3) RETURNING *',
      values
    );
    res.status(201).json({
      status: 'success',
      data: {
        gift: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err.message);
  }
});

// update gift
app.put('/api/v1/gifts/:id', async (req, res) => {
  const values = [
    req.body.name,
    req.body.vendor,
    req.body.price_range,
    req.params.id,
  ];
  try {
    const results = await db.query(
      'UPDATE gifts SET name = $1, vendor = $2, price_range = $3 WHERE id = $4 RETURNING *',
      values
    );
    res.status(200).json({
      status: 'success',
      data: {
        gift: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err.message);
  }
});

// delete gift
app.delete('/api/v1/gifts/:id', async (req, res) => {
  const values = [req.params.id];
  try {
    const results = await db.query('DELETE FROM gifts WHERE id = $1', values);
    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}...`);
});
