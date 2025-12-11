//Importar el modulo 'net' para crear el servidor TCP
const net = require('net')
//readline-sync para pedir datos por consola del servidor
const readline = require("readline-sync")

//Se importan los controladores para manejar la logica de las solicitudes relacionadas con los libros, autores y editoriales
const BookController = require('./controllers/bookController')
const AuthorController = require('./controllers/authorController')
const PublisherController = require('./controllers/publisherController')

//Función para validar JSON 
const isJSON = (str) => {
    try { JSON.parse(str) 
        return true;
    } catch (e) {
        return false;
    }
}

//Creamos el servidor usando el metodo 'createServer', que escucha las conexciones de los clientes y maneja las solicitudes
const server = net.createServer((socket) =>{
    
    console.log("Cliente conectado"); //Avisa cuando se conecta un cliente
    
    //Escuchamos el evento 'data' que se dispara cuando el servidor recibe datos de los clientes
    socket.on('data', (data) =>{
        const command = data.toString().trim() //Convierte los datos recibidos a una cadena de texto y se eliminan espacios en blanco
        console.log(`Mensaje recibido: ${command}`);

        /* --- BOOKS --- */
        if(command === "GET BOOKS"){
            socket.write(BookController.getBooks())
            return

        } 
        if (command.startsWith("ADD BOOK")){

            console.log("Iniciando creación de un nuevo libro");
            const jsonPart = command.replace("ADD BOOK", "").trim()

            if(!isJSON(jsonPart)){
                socket.write("ERROR: JSON invalido")
                return
            }
            const newBook = JSON.parse(jsonPart)
            const response = BookController.addBook(newBook)
            socket.write(response + "\n")
            console.log("Nuevo libro creado");
            return
        }

       /* AUTHORS */
       if(command === "GET AUTHORS"){
            socket.write(AuthorController.getAuthors())
            return
        } 
        
        if (command.startsWith("ADD AUTHOR")){

            console.log("Iniciando creación de un nuevo autor");
            const jsonPart = command.replace("ADD AUTHOR", "").trim()

            if(!isJSON(jsonPart)){
                socket.write("ERROR: JSON invalido")
                return
            }
            const newAuthor = JSON.parse(jsonPart)
            const response = AuthorController.addAuthor(newAuthor)
            socket.write(response + "\n")
            console.log("Nuevo autor creado");
            return
        }

        /* PUBLISHER */
        if(command === "GET PUBLISHERS"){
            socket.write(PublisherController.getPublishers())
            return
        } 
        if (command.startsWith("ADD PUBLISHER")){

            console.log("Iniciando creación de una nueva editorial");
            const jsonPart = command.replace("ADD PUBLISHER", "").trim()

            if(!isJSON(jsonPart)){
                socket.write("ERROR: JSON invalido")
                return
            }
            const newPublisher = JSON.parse(jsonPart)
            const response = PublisherController.addPublisher(newPublisher)
            socket.write(response + "\n")
            console.log("Nueva editorial creada");
            return
        }
        socket.write("Comando desconocido")
    })
    //Escuchamos el evento 'end' que se dispara cuando el cliente se desconecta
    socket.on('end', () =>{
        console.log("Cliente desconectado");
        
    })
    //Escuchamos el evento 'error' que se dispara cuando se detecta un error
    socket.on('error', (err) =>{
        console.log("Error en un cliente", err.message);
    })

}) 
//Hacemos que el servidor escuche el puerto 4000
server.listen(8080, () =>{
    console.log("Servidor TCP escuchando en el puerto 8080...");
    
})


