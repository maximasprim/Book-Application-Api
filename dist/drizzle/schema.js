"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.booksTable = (0, pg_core_1.pgTable)("books", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    title: (0, pg_core_1.varchar)("title", { length: 255 }),
    author: (0, pg_core_1.varchar)("Author", { length: 20 }),
    year: (0, pg_core_1.timestamp)("published_at").defaultNow()
});
