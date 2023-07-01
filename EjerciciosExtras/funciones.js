function resta(num1, num2){
    return num1 - num2;
}

function multiplicacion(num1, num2, num3){
    return num1 * num2 * num3; 
}

function areaRectangulo(base, altura){
    return base * altura;
}

function conversionGrados(gradosF){
    return (gradosF - 32) * (5/9);
}

function promedio3(x, y, z){
    let prom = (x + y + z) / 3;
    return prom;
}

let pepe = [1, 2, 4, 8, 3];

function promedio(array){
    let cantElementos = array.length;
    let suma = 0;
    for(i = 0; i = cantElementos; i++){
        suma += array[i];
    }
    return suma / cantElementos;
}



console.log(promedio(pepe));



