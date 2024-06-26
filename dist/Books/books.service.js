"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooksService = exports.updateBooksService = exports.createBooksService = exports.getBooksService = exports.booksService = void 0;
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../drizzle/schema");
const booksService = async () => {
    return await db_1.default.query.booksTable.findMany();
};
exports.booksService = booksService;
const getBooksService = async (id) => {
    return await db_1.default.query.booksTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.booksTable.id, id)
    });
};
exports.getBooksService = getBooksService;
const createBooksService = async (book) => {
    await db_1.default.insert(schema_1.booksTable).values(book);
    return book;
};
exports.createBooksService = createBooksService;
const updateBooksService = async (id, book) => {
    await db_1.default.update(schema_1.booksTable).set(book).where((0, drizzle_orm_1.eq)(schema_1.booksTable.id, id));
    return "Book updated successfully";
};
exports.updateBooksService = updateBooksService;
const deleteBooksService = async (id) => {
    await db_1.default.delete(schema_1.booksTable).where((0, drizzle_orm_1.eq)(schema_1.booksTable.id, id));
    return "Book deleted successfully";
};
exports.deleteBooksService = deleteBooksService;
