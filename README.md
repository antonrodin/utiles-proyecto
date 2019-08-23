# SuperChachi Proyecto de Neoland

![alt text](https://raw.githubusercontent.com/antonrodin/utiles-proyecto/master/images/croquis.jpg)



# Cosas utiles para el proyecto de Neoland

* /presentacion-tania.pdf Presentación en el que se basaria el proyecto.

* Pinterestt: https://www.pinterest.es/tfsantome/teatro/

* /objetos Objetos o modelo de datos que posiblemente vayamos a utilizar. Como esta todo inventado en este mundo, esta basado en esto:  https://schema.org/Event, https://schema.org/TheaterEvent (Abajo hay JSON) y en como Google sugiere que se haga: https://developers.google.com/search/docs/data-types/event

## ExpressJS

### Rutas Express.JS

Las rutas del proyecto que habria que incorporar. Basicamente es crear un CRUD (Create, Read, Update & Delete) de **usuario**, **location** y **event**.

```javascript
[
    // Home, contacto, y otras rutas estaticas
    '/' => 'GET',
    '/contacto' => 'GET',
    '/contacto/send' => 'POST',
    '/aviso-legal' => 'GET',

    // Las rutas de los Locations o Teatros CRUD basico
    '/locations' => 'GET', // Devuelve un JSON con una lista de las salas
    '/locations/:id' => 'GET', // Dvuelve un JSON con un objeto Location, hay que pasar el ID
    '/locations/create' => 'POST', // Crea un Location en nuestra base de datos MySQL
    '/locations/update/:id' => 'UPDATE', // Actualiza nuestro teatro en la base de datos MySQL, hay que especificar ID del teatro.
    '/locations/delete/:id' => 'DELETE', // Elimina nuestro teatro de la base de datos Mylsq, hay que pasar el ID del teatro.

    // Las rutas de los Eventos, Obras... CRUD basico (Copy & Paste de Location)
    '/events' => 'GET', // Devuelve un JSON con una lista con todos eventos
    '/events/:id' => 'GET', // Devuelve un JSON con un objeto Evento concreto, hay que pasar el ID
    '/events/create' => 'POST', // Crea un Evento en nuestra base de datos MySQL
    '/events/update/:id' => 'UPDATE', // Actualiza nuestro evento en la base de datos MySQL, hay que especificar ID del evento.
    '/events/delete/:id' => 'DELETE', // Elimina nuestro evento de la base de datos MySQL, hay que pasar el ID del evento.

    // Se complica la cosa... login & las rutas de usuario
    '/users' => 'GET', // Devuelve la lista de usuarios
    '/users/:id' => 'GET', // Devuelve un JSON con el usuario, hay que pasr el parametro ID
    '/users/create' => 'POST', // Crea o Registra un usuario nuevo en MySQL
    '/users/update/:id' => 'UPDATE', // Actualiza el usuario con el id especificado en MySQL
    '/users/delete/:id' => 'DELETE', // Elimina el usuario con el id especificado en MySQL
    '/users/login' => 'POST', // Devuelve el token o en el caso contrario un error

]
```