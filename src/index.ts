import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config";
import { HTTPException } from 'hono/http-exception';
import { type Context } from "hono";
import { booksRouter } from "./Books/books.router";
import { cors } from 'hono/cors';
// import { json } from 'hono/json';


const app = new Hono()
//enable cors
app.use(cors());
app.use('*', cors());

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})

app.route("/",booksRouter)  //users