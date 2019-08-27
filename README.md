# SuperChachi Proyecto de Neoland

Documentación inicial del proyecto de NeoLand, es decir un pequeño prototipo funcional de como deberia de estar hecho, esquemas, modelo de datos, requisitos... etc.

## Menu
---

- [Croquis](#awesome-croquis)
- [Cosas Utiles](#cosas-utiles)
- [CSS](#css)
- [Angular](#angular)
    - [Rutas](#las-rutas-del-bacalao)
    - [Modelos](#modelos)
    - [Servicios](#servicios)
- [ExpressJS](#expressjs)
    - [Instalacion](#instalacion)
    - [Rutas](#rutas)

## Awesome Croquis

---

![alt text](https://raw.githubusercontent.com/antonrodin/utiles-proyecto/master/images/croquis.jpg)


## Cosas utiles
---

* /presentacion-tania.pdf Presentación en el que se basaria el proyecto.

* Pinterestt: https://www.pinterest.es/tfsantome/teatro/

* /objetos Objetos o modelo de datos que posiblemente vayamos a utilizar. Como esta todo inventado en este mundo, esta basado en esto:  https://schema.org/Event, https://schema.org/TheaterEvent (Abajo hay JSON) y en como Google sugiere que se haga: https://developers.google.com/search/docs/data-types/event

## CSS
---

Organización de código CSS. ¿Porque? Porque CSS es un lenguaje muy sucio y se va de las putas manos cuando el proyecto crece. Por ello es importante tomar decisiones iniciales como la metodologia y algún patrón. 

En este caso propongo usar el **7-1 de SASS** en formato reducido y la metodologia moderna **BEM**. La estructura de carpetas de un 7-1 es esta: https://gist.github.com/rveitch/84cea9650092119527bc

Uno de los ejemplos de BEM lo hemos tenido en el componente **.hero**

```html
<div class="hero">
    <div class="hero__centrar">
        <h1 class="hero__title">OFF Madrid</h1>
    </div>
</div>
```

```css
.hero {
    width: 100%;
    height: 95vh;
}

.hero__centrar {
    position: absolute;
    ...
}

.hero__title {

}
```

Aquí hay un video explicativo de BEM en Español:

[![](http://img.youtube.com/vi/wDUwGo98JTA/0.jpg)](http://www.youtube.com/watch?v=wDUwGo98JTA "BEM CSS")

## Angular
---

### Las Rutas del Bacalao

Esto son las rutas posibles a desarrollar. ¡Ojo! Va a habe un follón, es decir cambios de última hora.

```javascript
[
  /* Las rutas facilicillas a maquetar (Inicio), 1ª semana */
  /**********************************************/
  { path: '/', component: MainComponent },
  { path: '/main', component: MainComponent },
  { path: '/about', component: AboutComponent },
  { path: '/teatros', component: TeatrosComponent },

  /* Las rutas complicaillas 2ª y 3ª semana */
  /**********************************************/

  // Formulario de Login
  { path: '/user/login', component: LoginComponent },

  // Formulario de Registro
  { path: '/user/register', component: RegisterComponent },
  
  // Panel de control de usuario o el perfil, donde tiene los botones de
  // añadir, borrar eventos o teatros
  { path: '/user/:id', component: ProfileComponent },
  
  // Formularios de crear y actualizar el recinto
  { path: '/location/create', component: LocationCreateComponent },
  { path: '/location/update', component: LocationUpdateComponent },

    // Formularios de crear y actualizar el evento o la obra
  { path: '/event/create', component: EventCreateComponent },
  { path: '/event/update', component: EventUpdateComponent },

]
```

Temas de organización de rutas y componentes. Como va a haber un porron de componentes, los organizamos por carpetillas:

```bash

# Template
/template/HeaderComponent
/template/HeroComponent
/template/FooterComponent

# Paginas estaticas o casi
/pages/MainComponent
/pages/AboutComponent
/pages/TheatreComponent

# Relativo al registro y login de usuarios
/user/LoginComponent
/user/RegisterComponent
/user/ProfileComponent

# Relativo a Locations (Teatros, Salas...)
/location/LocationCreateComponent
/location/LocationUpdateComponent

# Relativo a Eventos
/event/EventCreateComponent
/event/EventUpdateComponent

```

### Modelos

En principio tenemos tres modelos: User, Event & Location por consiguiente hay que **crear tres archivos a mano** (no hay comando para ello): User.ts, Event.ts y Location.ts:

```bash
# Se crean manualmente dentro del directorio model o models
# Consultar otros proyectos que hemos hecho en clase
model/User.ts
model/Event.ts
model/Location.ts
```

### Servicios

Para "operar" con cada modelo, en principio tendremos tres servicios que se encarguen de ello.
Los organizaremos dentro del directorio services:

```bash
# Para crear los servicios
ng generate serice service/User
ng generate serice service/Event
ng generate serice service/Location

# Nos creara estos tres servicios
service/User.service.ts
service/Event.service.ts
service/Location.service.ts
```

## ExpressJS
---

ExpressJS es un framework que funciona en el entorno de NodeJS y que será nuestro encargado de interactuar con la base de datos MySQL y servir datos para nuestra aplicación cliente hecha en Angular. Es decir desde AngularJS haremos peticiones a **http://projecto/usuarios** y nos devolverá un JSON con una colección de usuarios.

### Instalacion

Instalación basica y una aplicación basica de express funcional

```bash
# Crear carpeta app
mkdir app
cd app

# Inicializar el proyecto con datos por defecto
# Se creara un archivo package.json
npm init -y

# Instalar express
npm install express

# Crear nuestra aplicación, el archivo index.js
touch index.js
```

Contenido basico/inicial de __index.js__

```javascript
const express = require('express');
const app = express();

// Settings
// En este caso especificamos el puerto donde vamos a servir nuestra app
// Es decir será http://localhost:3000
const port = process.env.PORT || 3000;

// Middleware
// Estos dos en concreto se necesitarian para poder recibir parametros
// Dentro de nuestras rutas
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
// Dos rutas una que devuele Hello World y otra que devuelve una lista de pacientes
app.get('/', (req, res) => res.send('hello world'));
app.get('/pacientes', (req, res) => res.json([
	{ nombre: "Anton", diagnostico: "Gripe" },
	{ nombre: "David", diagnostico: "Resfriado" }
])); 

// Start Server
// Aquí inicializamos la aplicacion en si, se le pasas un callback que basicamente
// Saca por pantalla donde esta funcionando.
app.listen(port, () => console.log(`Example app on http://localhost:${port}`))
```

### Rutas

Las rutas del proyecto que habria que incorporar. Basicamente es crear un CRUD (Create, Read, Update & Delete) de **usuario**, **locations** y **events**.

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