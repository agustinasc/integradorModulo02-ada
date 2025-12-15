# Book API (Servidor TCP en Node.js)

## Descripción General

Este proyecto implementa una API de gestión de biblioteca construida sobre un servidor TCP desarrollado con Node.js.
La aplicación sigue el patrón MVC e incluye una estructura modular que permite gestionar:

1) Libros

2) Autores

3) Editoriales

Los datos persisten en archivos JSON locales dentro de la carpeta book-api/.
El servidor procesa comandos enviados por un cliente TCP y responde con resultados formateados vía views.

## Objetivos
- Implementar un servidor TCP utilizando el módulo `net` de Node.js.
- Aplicar el patrón de arquitectura **MVC**.
- Gestionar datos persistentes mediante archivos JSON.
- Practicar modularización y organización de código en Node.js.

## Arquitectura del proyecto

```text
book-api/
│
├── controllers/         # Lógica de negocio
│   ├── bookController.js
│   ├── authorController.js
│   └── publisherController.js
│
├── models/              # Persistencia en archivos JSON
│   ├── bookModel.js
│   ├── authorModel.js
│   └── publisherModel.js
│
├── views/               # Formato de salida para el cliente
│   ├── bookView.js
│   ├── authorView.js
│   └── publisherView.js
│
├── data/                # Base de datos local
│   ├── books.json
│   ├── authors.json
│   └── publishers.json
│
├── client.js            # Cliente TCP
├── server.js            # Servidor TCP
└── package.json
```

## Flujo de funcionamiento

```text
Cliente TCP
   ↓
Servidor TCP (server.js)
   ↓
Controller correspondiente
   ↓
Model (lectura/escritura JSON)
   ↓
View (formato de respuesta)
   ↓
Cliente TCP
```

## Tecnologias Utilizadas

- Node.js
- Módulo net (servidor y cliente TCP)
- Módulo fs (lectura/escritura de JSON)
- uuid (generación de IDs)
- chalk para formatear vistas


## Persistencia de datos

Cada entidad se almacena en un archivo JSON independiente.
Los modelos utilizan operaciones sincronicas para simplificar la logica.

`fs.readFileSync`
`fs.writeFileSync`


## Instalación de dependencias y Ejecución 

1) Clonar el repositorio
```text
git clone https://github.com/agustinasc/integradorModulo02-ada.git
cd integradorModulo02-ada
```

2) Instalar dependencias
`npm install`

3) Iniciar el servidor
`node server.js`
El servidor quedará escuchando conexiones entrantes en el puerto configurado.

4) Iniciar el cliente
`node client.js`
Desde el cliente se envían comandos al servidor, que procesa las solicitudes y devuelve las respuestas correspondientes.


## Ejemplos de comandos TCP

A continuación se muestran ejemplos de comandos que el cliente TCP puede enviar al servidor y las respuestas esperadas.

1) Obtener todos los libros
Comando enviado:
`GET BOOKS`

Respuesta esperada:
```text
Listado de libros:
- [1] El Principito – Antoine de Saint-Exupéry
- [2] Cien años de soledad – Gabriel García Márquez
```

2) Agregar un autor
Comando enviado:

```text
ADD AUTHOR
nombre="Jorge Luis Borges"
nacionalidad=Argentina
```

Respuesta esperada:

```text
Autor agregado correctamente:
id: 9f8a2c3e
Nombre: Jorge Luis Borges
Nacionalidad: Argentina
```

## Autora

Desarrollado por AgustinaSC 