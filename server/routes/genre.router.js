const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = 'SELECT * from genres';
  pool
    .query(queryText)
    .then((results) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error in GET for genres');
      res.sendStatus(500);
    });
});

module.exports = router;
