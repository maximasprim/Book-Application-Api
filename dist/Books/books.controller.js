"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getSingleBook = exports.listBooks = void 0;
const books_service_1 = require("./books.service");
const listBooks = async (c) => {
    const data = await (0, books_service_1.booksService)();
    if (data == null) {
        return c.text("Book not Found", 404);
    }
    return c.json(data, 200);
};
exports.listBooks = listBooks;
const getSingleBook = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const book = await (0, books_service_1.getBooksService)(id);
    if (book == undefined) {
        return c.text(" not found!", 404);
    }
    return c.json(book, 200);
};
exports.getSingleBook = getSingleBook;
const createBook = async (c) => {
    try {
        const book = await c.req.json();
        const createdBook = await (0, books_service_1.createBooksService)(book);
        if (!createdBook) {
            return c.text("Book not created!", 404);
        }
        return c.json({ msg: createdBook }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createBook = createBook;
const updateBook = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const book = await c.req.json();
    try {
        //search for user
        const foundBook = await (0, books_service_1.getBooksService)(id);
        if (foundBook == undefined)
            return c.text("Book not found!", 404);
        //get the data and update
        const res = await (0, books_service_1.updateBooksService)(id, book);
        //return the updated user
        if (!res)
            return c.text("book not updated!", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateBook = updateBook;
//delete city
const deleteBook = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    try {
        //search for the user
        const book = await (0, books_service_1.getBooksService)(id);
        if (book == undefined)
            return c.text("Book not found!👽", 404);
        //delete the user
        const res = await (0, books_service_1.deleteBooksService)(id);
        if (!res)
            return c.text("Book not deleted!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteBook = deleteBook;
