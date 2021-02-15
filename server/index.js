require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const ClientError = require('./client-error');
const db = require('./db');

const app = express();

app.use(staticMiddleware);

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

app.get('/api/user/:userId', (req, res, next) => {
  const userId = parseInt(req.params.userId, 10);
  if (!userId) {
    throw new ClientError(400, 'userId must be a positive integer');
  }
  const sql = `
    select "postId",
           "userId",
           "description",
           "imageUrl",
           "u"."accountName" as "poster",
           "u"."profilePicUrl"
    from "posts"
    join "users" as "u" using ("userId")
    where "userId" = $1
  `;
  const params = [userId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find user with userId ${userId}`);
      }
      res.json(result.rows);
    })
    .catch(err => next(err));
});
// app.post('/api/uploads', (req, res, next) => {

// });

// app.put('/api/posts/:postId', (req, res, next) => {
  // const postId = parseInt(req.params.postId, 10);
  // if (!postId) {
  //   throw new ClientError(400, 'userId must be a positive integer');
  // }
// });

// app.delete('/api/posts/:postId', (req, res, next) => {
  // const postId = parseInt(req.params.postId, 10);
  // if (!postId) {
  //   throw new ClientError(400, 'userId must be a positive integer');
  // }
// });

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
