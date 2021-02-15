require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const ClientError = require('./client-error');
const db = require('./db');

const app = express();

app.use(staticMiddleware);

app.get('/api/users', (req, res, next) => {
  const sql = `
    select "userId",
           "accountName",
           "password",
           "profilePicUrl"
    from "users"
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
})

app.get('/api/posts', (req, res, next) => {
  const sql = `
    select "p"."postId",
           "p"."userId",
           "p"."description",
           "p"."imageUrl",
           "u"."accountName" as "poster",
           "u"."profilePicUrl"
    from "posts" as "p"
    join "users" as "u" using ("userId")
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

// app.post('', (req, res, next) => {

// });

// app.put('', (req, res, next) => {

// });
// app.delete('', (req, res, next) => {

// });

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
