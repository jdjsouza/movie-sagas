const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`;

  // FIRST QUERY MAKES MOVIE
  pool
    .query(insertMovieQuery, [
      req.body.title,
      req.body.poster,
      req.body.description,
    ])
    .then((result) => {
      console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!

      const createdMovieId = result.rows[0].id;

      // Depending on how you make your junction table, this insert COULD change.
      const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movies_id", "genres_id")
      VALUES  ($1, $2);
      `;
      // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
      pool
        .query(insertMovieGenreQuery, [createdMovieId, req.body.genre])
        .then((result) => {
          //Now that both are done, send back success!
          res.sendStatus(201);
        })
        .catch((err) => {
          // catch for second query
          console.log(err);
          res.sendStatus(500);
        });
      // Catch for first query
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Add query to get all movies
router.get('/', (req, res) => {
  const queryText = 'SELECT id, title, poster, description FROM movies';
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error completing SELECT movie query', err);
      res.sendStatus(500);
    });
});

// Query to get details for specific movie
router.get('/details/:id', (req, res) => {
  const queryText = `SELECT "movies".id, "movies".title, "movies".poster, 
  "movies".description, array_agg(genres.name) as "genres" FROM "movies"
  LEFT JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id 
  LEFT JOIN "genres" ON "movies_genres".genre_id = "genres".id
  WHERE "movies".id = $1
  GROUP BY "movies".id;`;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((err) => {
      console.log('Error in get details in movie router', err);
      res.sendStatus(500);
    });
});

module.exports = router;
