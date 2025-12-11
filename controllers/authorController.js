//Importamos el modulo 'AuthorModel'
const AuthorModel = require('../models/authorModel')
//Importamos el modulo 'AuthorView'
const AuthorView = require('../views/authorView')


//Creamos un objeto llamado 'AuthorController' que manejara las solicitudes relacionadas con los autores
const AuthorController = {
    
    getAuthors() {
        const data = AuthorModel.getAllAuthors()
        return AuthorView.listAuthorView(data)
    },
    addAuthor(author){
        const data = AuthorModel.addAuthor(author)
        return AuthorView.authorAddedViewAddedView(data)
    },
    getByName(name){
        JSON.stringify(AuthorModel.getByName(name))
    }
}

//Exportamos el objeto 'AuthorController' para que pueda ser utilizado en otros archivos
module.exports = AuthorController