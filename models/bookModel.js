//Importamso el modulo 'fs' que nos permite trabajar con el sistema de archivos
const fs = require("fs")

//Importamos el modulo 'path' que nos ayuda a manejar y transformar rutas de archivos
const path = require("path")

const { v4: uuid } = require("uuid")

//Definimos la ruta del archivo 'books.json' que esta en el mismo directorio que este script
const dataPath = path.join(__dirname, '../data/books.json')

const BookModel = {
   
    getAllBooks() {
        return JSON.parse(fs.readFileSync(dataPath, "utf8"))
    },
    addBook(newBook) {
        const books = this.getAllBooks()
        const book = { id: uuid(), ...newBook}
        books.push(book)

        fs.writeFileSync(dataPath, JSON.stringify(books, null, 2), "utf8")
        
        return book
    }
}

//Para exportar el objeto 'BooksModel' y que se pueda usar en otros archivos
module.exports = BookModel