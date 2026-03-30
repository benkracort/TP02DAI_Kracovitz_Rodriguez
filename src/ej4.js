import fs from 'fs'

fs.writeFileSync('entrada.txt', 'A')
fs.writeFileSync('salida.txt', 'B')

function sobreescribir() {
    const archivo1 = fs.readFileSync('entrada.txt', 'utf-8')
    const archivo2 = fs.readFileSync('salida.txt', 'utf-8')

    fs.copyFileSync(archivo1, archivo2)
}