//Importamos el modulo que nos permite crear clientes TCP
const net = require('net')
const readline = require('readline')

//UUID para generar IDs únicos
const { v4: uuid } = require("uuid")

//Interfaz para leer lo que se escribe en consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let client

// Funcion para agregar libro pedimos los datos por consola del servidor

const agregarLibro = () => {
    rl.question("Ingrese titulo del libro ", (title) => {
        rl.question("Ingrese Autor del libro: ", (author) => {
            rl.question("Ingrese Editorial: ", (publisher) =>{
                rl.question("Ingrese año del libro: ", (year) =>{

                    const newBook = { id: uuid(), title, author, publisher, year}
                    
                    client.write("ADD BOOK " + JSON.stringify(newBook))
                })
            })
        })
    })
}

// Funcion para agregar autor pedimos los datos por consola del servidor
const agregarAutor = () => {
    rl.question("Nombre del autor: ", (name) =>{
        rl.question("Nacionalidad: ", (nationality) =>{
            const newAuthor = {
                id: uuid(), 
                name,
                nationality
            }
            client.write("ADD AUTHOR " + JSON.stringify(newAuthor))
        })
    })
}

// Funcion para agregar editorial pedimos los datos por consola del servidor
const agregarEditorial = () =>{
    rl.question("Nombre de la editorial: ", (name) =>{
        rl.question("Pais: ", (country) => {
            const newPublisher = {
                id: uuid(),
                name,
                country
            }
            client.write("ADD PUBLISHER " + JSON.stringify(newPublisher))
        })
    })
}


 //Funcion para pedir al usuario que escriba un mensaje para enviar
    const pedirEntrada = () =>{

        console.log("--- MENÚ ---")
        console.log("1) GET BOOKS")
        console.log("2) ADD BOOK")
        console.log("3) GET AUTHORS")
        console.log("4) ADD AUTHOR")
        console.log("5) GET PUBLISHERS")
        console.log("6) ADD PUBLISHER")
        console.log("7) EXIT (Salir)")

        rl.question("Ingrese un numero del 1-7 para seleccionar una opcion: ", (command) => {
            
            const clearCommand = command.trim().toUpperCase()

             // Ignorar entradas vacías
            if (clearCommand === "") {
                pedirEntrada()
                return
    }
            
            switch (clearCommand) {
                case "1":
                    client.write("GET BOOKS")
                    break

                case "2":
                    agregarLibro()
                    break

                case "3":
                    client.write("GET AUTHORS")
                    break

                case "4":
                    agregarAutor()
                    break

                case "5":
                    client.write("GET PUBLISHERS")
                    break

                case "6":
                    agregarEditorial()
                    break

                case"7" :
                console.log("Cerrando cliente...");
                client.end()
                rl.close()
                return
            
                default:
                    console.log("Comando no reconocido");                   
                    break;
            }
            
            // Para enviar la entrada al servidor
            //client.write(command)
        })
        
    }

//Creamos una conexion TCP al servidor que esta escuchando el puerto 8080
client = net.createConnection({ port: 8080}, () =>{
    console.log("Conectado al servidor") //Se ejecuta cuando la conexion al servidor es exitosa
    pedirEntrada() 
})

//Se escucha el evento 'data' que se dispara cuando el cliente recibe datos del servidor
client.on('data', (data) =>{
    //Se convierten los datos recibidos a una cadena de texto
    console.log("Respuesta del servidor: ", data.toString());

    //Para pedir proxima entrada sin cerrar conexion 
    pedirEntrada()
    // Cerramos la interfaz de readline después de recibir la respuesta.
    //rl.close()

})
//Escuchamos el evento 'end' que se dispara la conexion cuando la conexion en el servidor se cierra
client.on('end', () =>{
    console.log("Conexion cerrada")
})

//Manejo de errores
client.on('error', (err) =>{
    console.log("Error en el cliente", err.message);  
})