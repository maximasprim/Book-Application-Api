import { Hono } from "hono";
import { createBook, getSingleBook, listBooks, updateBook, deleteBook } from "./books.controller";
import {zValidator} from "@hono/zod-validator"
import { type Context } from "hono";
import {booksSchema } from "../validators";



//creating hono instance

export const booksRouter = new Hono();

//get states
booksRouter.get("/books", listBooks)

//get a single Driver    

booksRouter.get("/books/:id", getSingleBook)



//create State

booksRouter.post("/books", zValidator('json', booksSchema, (results, c) => {
  if (!results.success){
      return c.json(results.error, 400)
  }
}) ,createBook)

//update Driver

booksRouter.put("/books/:id", updateBook)

// delete Driver
booksRouter.delete("/books/:id", deleteBook)