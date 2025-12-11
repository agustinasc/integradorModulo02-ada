const chalk = require('chalk')
//Creamos un objeto llamado "bookView" que contiene metodos para formatear respuestas relacionadas con los libros
const BookView = {
   
    listBookView(books){
        
        console.log(chalk.blue.bold("\n=== LISTA DE LIBROS ===\n"))

        books.forEach((b, i) => {
            console.log(
                chalk.green(`${i + 1}) ${b.title}`),
                chalk.white(`- Autor:`), chalk.yellow(b.author),
                chalk.white(`- Editorial:`), chalk.cyan(b.publisher),
                chalk.white(`- Año:`), chalk.magenta(b.year),
                chalk.gray(`(ID: ${b.id})\n`)
            )
        })
        
        return JSON.stringify(books, null, 2)
    },

    bookAddedView(book){
    console.log(chalk.green.bold("\nLibro agregado correctamente:\n"))

    console.log(
            chalk.green(`Título:`), chalk.white(book.title),
            "\n",
            chalk.green(`Autor:`), chalk.white(book.author),
            "\n",
            chalk.green(`Editorial:`), chalk.white(book.publisher),
            "\n",
            chalk.green(`Año:`), chalk.white(book.year),
            "\n"
        )
    
        return JSON.stringify({message: "Libro agregado", book: book}, null, 2)
    }
}
// Para exportar el objeto y pueda ser utilizado en otros archivos
module.exports = BookView