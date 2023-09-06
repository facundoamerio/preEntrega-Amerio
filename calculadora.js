function sumar(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function restar (valor1, valor2) {
    const resultado = valor1 - valor2;
    return resultado;
}

function multiplicar (valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
}

function dividir (valor1, valor2) {
    const resultado = valor1 / valor2;
    return resultado;
}

function calculadora(){
    const valor1 = parseInt(prompt("ingrese el primer valor: "))
    const valor2 = parseInt(prompt("ingrese valor 2: "))
    const operacion = prompt("que operacion quuieres realizar? (+ - * /)")
    
    let resultado;

    switch(operacion) {
        case "+":
            alert("el resultado de la operacion es " + sumar(valor1, valor2));
            break;

            case "-":
            alert("el resultado de la resta es " + restar(valor1, valor2));
            break;

            case "*":

            alert("el resultado de la multiplicacion es " + multiplicar(valor1, valor2));
            break;

            case "/":

            alert("el resultado de la division es " + dividir(valor1, valor2));
             break;

             default: 
             alert("estas poniendo cualquier cosa pibe ");

    }

}
