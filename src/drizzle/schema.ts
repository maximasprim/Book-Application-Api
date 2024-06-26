

import { pgTable, serial, varchar,timestamp } from "drizzle-orm/pg-core"
import { primaryKey } from "drizzle-orm/mysql-core";




export const booksTable=pgTable("books",{
    id: serial("id").primaryKey(),
    title: varchar("title", {length: 255}),
    author: varchar("Author",{length: 20}),
    year: timestamp("published_at").defaultNow()
})

export type TIBooks = typeof booksTable.$inferInsert
export type TSBooks = typeof booksTable.$inferSelect