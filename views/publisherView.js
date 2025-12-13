const chalk = require('chalk')

//Creamos un objeto llamado "publisherView" que contiene metodos para formatear respuestas relacionadas con las editoriales
const PublisherView = {
     listPublisherView(publishers){
            
            console.log(chalk.blue.bold("=== LISTA DE EDITORIALES ==="))
    
            publishers.forEach((b, i) => {
                console.log(
                    chalk.green(`${i + 1}) ${b.name}`),
                    chalk.white(`- Autor:`), chalk.yellow(b.country),
                    chalk.gray(`(ID: ${b.id})\n`)
                )
            })
            
            return JSON.stringify(publishers, null, 2)
        },
    
       publisherAddedView(publisher){
        console.log(chalk.green.bold("\nEditorial agregada correctamente:\n"))
    
        console.log(
                chalk.green("Nombre:"), chalk.white(publisher.name),
                "\n",
                chalk.green("Pais:"), chalk.white(publisher.country),
                "\n",
            )
        
            return JSON.stringify({message: "Editorial agregado", publisher:publisher}, null, 2)
        }
}
// Para exportar el objeto y pueda ser utilizado en otros archivos
module.exports = PublisherView