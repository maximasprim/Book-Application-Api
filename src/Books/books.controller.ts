import { Context } from "hono";
import { booksService, getBooksService, createBooksService, updateBooksService, deleteBooksService } from "./books.service";




export const listBooks = async (c: Context) =>{
  const data = await booksService();
  if ( data == null){
    return c.text("Book not Found", 404)
  }
    return c.json(data, 200);
}

export const getSingleBook = async (c: Context) => {
  const id = parseInt(c.req.param("id"));
  if (isNaN(id)) 
      return c.text("invalid ID!", 400);

  const book = await getBooksService(id);
  if (book == undefined){
      return c.text(" not found!", 404);
  }
  return c.json(book, 200);
} 

export const createBook = async (c: Context) => {
  try{
    const book = await c.req.json();
    const createdBook = await createBooksService(book);
   if (!createdBook){
    return c.text("Book not created!", 404)
   }
    return c.json({msg: createdBook}, 201);
} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

export const updateBook = async (c: Context) => {
  const id = parseInt(c.req.param("id"));
  if (isNaN(id)) 
      return c.text("invalid ID!", 400);

  const book = await c.req.json();
  try{
  //search for user
  const foundBook = await getBooksService(id);
  if (foundBook == undefined) 
      return c.text("Book not found!", 404);
  //get the data and update
  const res = await updateBooksService(id, book);
  //return the updated user
  if (!res )
    return c.text("book not updated!", 404); 
    return c.json({msg: res}, 201);

} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//delete city
export const deleteBook =  async (c: Context) => {
  const id = Number(c.req.param("id"));
  if (isNaN(id)) 
      return c.text("invalid ID!", 400);

  try{

 //search for the user
 const book = await getBooksService(id);
 if (book == undefined) 
     return c.text("Book not found!👽", 404);
  //delete the user
  const res = await deleteBooksService(id);
  if (!res) return c.text("Book not deleted!👽", 404);

  return c.json({msg: res}, 201);

  }catch(error: any){
      return c.json({error: error?.message}, 400)
  }
}