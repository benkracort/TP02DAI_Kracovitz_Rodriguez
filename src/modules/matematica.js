const pi = 3.14;

function resolvente(num1, num2, num3) 
{
    if (num1 != 0 ) {
        const a = num1;
        const b = num2;
        const c = num3;
        const d = b * b - 4 * a * c;
        const denom = 2 * a;

        if (d > 0) {
            const sqrtD = Math.sqrt(d);
            const x1 = (-b + sqrtD) / denom;
            const x2 = (-b - sqrtD) / denom;
            console.log('Raíces reales distintas:', x1, x2);
            return [x1, x2];
        } else if (d === 0) {
            const x = -b / denom;
            console.log('Raíz doble:', x);
            return [x];
        } else {
            const sqrtD = Math.sqrt(Math.abs(d));
            const real = -b / denom;
            const imag = sqrtD / denom;
            console.log('Raíces complejas:', `${real} + ${imag}i`, `${real} - ${imag}i`);
            return [`${real} + ${imag}i`, `${real} - ${imag}i`];
        }
    } else {
        console.log('ERROR! "A" debe de ser distinto de 0')
    }
}

function areaCirculo(radio) {
    if (radio > 0) {
        const area = pi * radio * radio;
        console.log(`El área del círculo con radio ${radio} es: ${area}`);
        return area;
    } else {
        console.log('ERROR! El radio debe ser un número positivo');
    }
}

const sumar = (num1, num2) => num1 + num2;

const restar = (num1, num2) => num1 - num2;