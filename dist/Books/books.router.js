"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksRouter = void 0;
const hono_1 = require("hono");
const books_controller_1 = require("./books.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
//creating hono instance
exports.booksRouter = new hono_1.Hono();
//get states
exports.booksRouter.get("/books", books_controller_1.listBooks);
//get a single Driver    
exports.booksRouter.get("/books/:id", books_controller_1.getSingleBook);
//create State
exports.booksRouter.post("/books", (0, zod_validator_1.zValidator)('json', validators_1.booksSchema, (results, c) => {
    if (!results.success) {
        return c.json(results.error, 400);
    }
}), books_controller_1.createBook);
//update Driver
exports.booksRouter.put("/books/:id", books_controller_1.updateBook);
// delete Driver
exports.booksRouter.delete("/books/:id", books_controller_1.deleteBook);
