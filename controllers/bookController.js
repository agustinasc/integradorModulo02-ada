//Importamos el modulo 'BookModel'
const BookModel = require('../models/bookModel')
//Importamos el modulo 'BookView'
const BookView = require('../views/bookView')

//Creamos un objeto llamado 'BookController' que manejara las solicitudes relacionadas con los libros
const BookController = {
    
    getBooks() {
        const data = BookModel.getAllBooks()
        return BookView.listBookView(data)
    },
    addBook(book){
        const data = BookModel.addBook(book)
        return BookView.bookAddedView(data)
    }
}

//Exportamos el objeto 'BookController' para que pueda ser utilizado en otros archivos
module.exports = BookController