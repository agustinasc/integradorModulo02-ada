//Importamso el modulo 'fs' que nos permite trabajar con el sistema de archivos
const fs = require("fs")

//Importamos el modulo 'path' que nos ayuda a manejar y transformar rutas de archivos
const path = require("path")

const { v4: uuid } = require("uuid")

//Definimos la ruta del archivo 'json' que esta en el mismo directorio que este script
const dataPath = path.join(__dirname, '../data/publishers.json')

const PublisherModel = {

    getPublishers(){
        return JSON.parse(fs.readFileSync(dataPath, "utf8"))
    },
    addPublisher: (newPublisher) =>{
        const publishers = PublisherModel.getPublishers()
        const publisher = {  id: uuid(), ...newPublisher}
        publishers.push(publisher)

        fs.writeFileSync(dataPath, JSON.stringify(publishers, null, 2), "utf8")

        return publisher
    }
}
//Para exportar el objeto 'PublisherModel' y que se pueda usar en otros archivos
module.exports = PublisherModel