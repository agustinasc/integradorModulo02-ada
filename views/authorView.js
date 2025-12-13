const chalk = require('chalk')

//Creamos un objeto llamado "AuthorView" que contiene metodos para formatear respuestas relacionadas con los libros
const AuthorView = {
   
    listAuthorView(authors){
        
        console.log(chalk.blue.bold("=== LISTA DE AUTORES ==="))

        authors.forEach((b, i) => {
            console.log(
                chalk.green(`${i + 1}) ${b.name}`),
                chalk.white(`- Autor:`), chalk.yellow(b.nationality),
                chalk.gray(`(ID: ${b.id})\n`)
            )
        })
        
        return JSON.stringify(authors, null, 2)
    },

   authorAddedView(author){
    console.log(chalk.green.bold("\nAutor agregado correctamente:\n"))

    console.log(
            chalk.green("Autor:"), chalk.white(author.name),
            "\n",
            chalk.green("Nacionalidad:"), chalk.white(author.nationality),
            "\n",
        )
    
        return JSON.stringify({message: "Autor agregado", author: author}, null, 2)
    }
}
// Para exportar el objeto y pueda ser utilizado en otros archivos
module.exports = AuthorView