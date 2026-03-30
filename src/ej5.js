let miUrl    = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
let miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(miUrl){
    const url = new URL(miUrl);
    
    const resultado = {
        host: url.host,
        pathname: url.pathname,
        searchParams: Object.fromEntries(url.searchParams.entries())
    }

    return console.log(`Host: ${resultado.host} \nPathname: ${resultado.pathname} \nSearchParams: ${JSON.stringify(resultado.searchParams)}`);
}