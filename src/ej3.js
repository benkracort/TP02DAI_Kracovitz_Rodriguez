import Alumno from './models/alumno.js'

const usuario = new Alumno("nicofrenkel" , 49261981)
console.log(`Nombre: ${usuario.username} \nDNI: ${usuario.dni}`)