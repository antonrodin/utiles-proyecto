// Un array de aforos
const aforos = ["N/D", "0-50", "50-100", "100-150", "150-200", "+200"];

// Un array de tipos de recinto
const tipo = ["teatro", "sala", "centro-cultural", "asociacion", "cafeteria", "otros"]; 

// Un array de expresiones artisticas
const expresion = ["teatro", "microteatro", "concierto", "circo", "danza", "monologo"];

// Usuario
let user = {

    // Automaticos / Control
    id: 1,

    // Obligatorios
    nombre: "Tania",
    email: "tania@ejemplo.com",
    contraseña: "1234",

    // Opcionales
    avatar: "https//wwww.offmadrid.com/images/avatar.png"

};

// Lugar o Recinto
let lugar = {
    
    // Automaticos / control
    id: 1,
    userId: 1,

    // Campos obligatorios
    tipo: "Teatro",
    nombre: "Teatro Apolo",
    ciudad: "Madrid", // Se puede dejar por defecto
    cp: "28030",
    direccion: "Calle Alcala 20",
    latitud: 43.123123,
    longitud: -5.089,

    // Forma mas correcta, pero se complica más la cosa
    // No merece la pena
    // direccion: {
    //     provincia: "Madrid",
    //     ciudad: "Madrid",
    //     cp: "28030",
    //     direccion: "Calle Alcala 20",
    //     latitud: 43.123123,
    //     longitud: -5.089
    // }

    // Campos recomendados
    descripcion: "Lorem impsum...",
    aforo: "50-100",
    foto: "https://www.escenaoff.es/imagenes/apolo.jpg",
    email: "teatro@apolo.es",
    telefono: "91 +34 123 124",

    // Otros posibles campos
    url: "https://www.teatroapolo.com",
    facebook: "https://www.facebook.com/teatroapolo"

}

// Evento
let evento = {

    // Automaticos / Control
    id: 1,
    lugarId: 2,
    userId: 1,

    // Campos obligatorios
    // Formato fechas ISO 8601
    // https://en.wikipedia.org/wiki/ISO_8601
    nombre: "Actuación de yo que se",
    expresion: "danza",
    fechaInicio: "2019-03-21T21:00",

    // Otra posible forma
    // Complica muchisimo todo... pero seria lo más correcto
    // No recomendable para dos semanas
    // funciones: [
    //     { fechaInicio: "2019-03-21T21:00", fechaFin: "2019-03-21T23:00" },
    //     { fechaInicio: "2019-03-22T21:00", fechaFin: "2019-03-22T23:00" },
    //     { fechaInicio: "2019-03-23T21:00", fechaFin: "2019-03-23T23:00" },
    //     { fechaInicio: "2019-03-24T21:00", fechaFin: "2019-03-24T23:00" },
    //     { fechaInicio: "2019-03-25T21:00", fechaFin: "2019-03-25T23:00" },
    // ],

    // Parametros opcionales
    fechaFin: "2019-03-21T23:00",
    cartel: "https://www.escenaoff.es/imagenes/cartel.jpg",
    precio: "Desde 10 €",
    descripcion: "Lorem impsum....",

    // Parametros posibles
    fechaPuertas: "2019-03-21T20:00",
    artista: "Yo que se",
    entradas: "https://www.atrapalo.com/teatros/actuacion-de-yo-que-se",
    duracion: "2 horas",
    gratis: true

}