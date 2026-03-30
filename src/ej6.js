let miUrl = 'a';
let miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(miUrl) {
    try {
        const url = new URL(miUrl);
        const resultado = {
            host: url.host,
            pathname: url.pathname,
            searchParams: Object.fromEntries(url.searchParams.entries())
        }

        return console.log(`Host: ${resultado.host} \nPathname: ${resultado.pathname} \nSearchParams: ${JSON.stringify(resultado.searchParams)}`)
    } catch (e) {
        console.log('URL no válida')
        
        const resultado = {
            host: null,
            pathname: null,
            searchParams: null
        }

        return console.log(`Host: ${resultado.host} \nPathname: ${resultado.pathname} \nSearchParams: ${JSON.stringify(resultado.searchParams)}`)
    }
}