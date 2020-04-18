import Koa from 'koa';
import cors from "@koa/cors";

import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';

import schema from './graphql/schema';
import { initDB } from './database';

require('dotenv').config();

initDB();

const app = new Koa();
const port = 3003;

// Enable cors with default options
app.use(cors());

// app.use(async (ctx: Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext>) => {
//   ctx.body = 'Hello World';
// });

app.listen(port);

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})));

app.on('error', err => {
  console.error('server error', err)
});

console.log(`Server is ready on ${port}... 🚀`);
