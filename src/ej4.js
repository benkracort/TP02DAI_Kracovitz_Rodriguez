import fs from 'fs'

fs.writeFileSync('entrada.txt', 'A')
fs.writeFileSync('salida.txt', 'B')

function sobreescribir() {
    fs.copyFileSync('entrada.txt', 'salida.txt')
    console.log('Sobrescrito correctamente')
}

sobreescribir()