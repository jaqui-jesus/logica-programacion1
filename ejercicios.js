/*Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
*/



//* Solicitar números al usuario
let num1 = parseFloat(prompt("Ingresa un número:"));
let num2 = parseFloat(prompt("Ingresa un segundo número:"));
let num3 = parseFloat(prompt("Ingresa un tercer número:"));

//*Verifica si los números son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los tres números que ingresaste son iguales", num1, num2, num3); //*Imprime un mensaje en consola si los numeros son iguales
} else {
    let numeros = [num1, num2, num3]; //*Almacena los numeros dentro de un array
    numeros.sort((a, b) => a - b); //*Ordena los numeros de mayor a menor

    let menor = numeros[0];
    let medio = numeros[1];
    let mayor = numeros[2];
    
    //*Imprime en consola los números de mayor a menor
    console.log("Número mayor:", mayor);
    console.log("Número del centro:", medio);
    console.log("Número menor:", menor);
    
    //* Imprime los números a la inversa
    console.log("Ordenados de menor a mayor:", numeros);
    console.log("Ordenados de mayor a menor:", numeros.slice().reverse());
}