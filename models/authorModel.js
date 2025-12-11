//Importamso el modulo 'fs' que nos permite trabajar con el sistema de archivos
const fs = require("fs")

//Importamos el modulo 'path' que nos ayuda a manejar y transformar rutas de archivos
const path = require("path")

const { v4: uuid } = require("uuid")

//Definimos la ruta del archivo 'authors.json' que esta en el mismo directorio que este script
const dataPath = path.join(__dirname, '../data/authors.json')

const AuthorModel = {

    getAllAuthors() {
        return JSON.parse(fs.readFileSync(dataPath, "utf8"))
    },

     getByName: (name) =>
        authors.filter(a => a.name.toLowerCase().includes(name.toLowerCase())),

    addAuthor(newAuthor) {
        const authors = AuthorModel.getAllAuthors()
        const author = { id: uuid(), ...newAuthor}
        authors.push(author)

        fs.writeFileSync(dataPath, JSON.stringify(authors, null, 2), "utf8")
        
        return author
    }
}

//Para exportar el objeto 'AuthorModel' y que se pueda usar en otros archivos
module.exports = AuthorModel