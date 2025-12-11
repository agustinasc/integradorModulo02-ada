//Importamos el modulo 'PublicherModel'
const PublisherModel = require('../models/publisherModel')
//Imporamos el modulo View
const PublisherView = require('../views/publisherView')

//Creamos un objeto llamado 'PublisherController' que manejara las solicitudes relacionadas con los autores
const PublisherController = {
    getPublishers(){
        const data = PublisherModel.getPublishers()
        return PublisherView.listPublisherView(data)
    },
    addPublisher(publisher){
        const data = PublisherModel.addPublisher(publisher)
        return PublisherView.publisherAddedView(data)
    }
}
//Exportamos el objeto 'PublisherController' para que pueda ser utilizado en otros archivos
module.exports = PublisherController