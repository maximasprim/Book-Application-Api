import db from "../drizzle/db";
import { eq } from "drizzle-orm";
import { TIBooks,TSBooks,booksTable } from "../drizzle/schema";



export const booksService = async ():Promise<TSBooks[] | null> =>{
    return await db.query.booksTable.findMany();

}

export const getBooksService = async (id: number): Promise<TSBooks | undefined> => {
    return await db.query.booksTable.findFirst({
        where: eq(booksTable.id, id)
    })
}

export const createBooksService = async (book: TIBooks): Promise<TIBooks> => {
    await db.insert(booksTable).values(book)
    return book;
}

export const updateBooksService = async (id: number, book: TIBooks) => {
    await db.update(booksTable).set(book).where(eq(booksTable.id, id))
    return "Book updated successfully";
}

export const deleteBooksService = async (id: number) => {
    await db.delete(booksTable).where(eq(booksTable.id, id))
    return "Book deleted successfully";
}