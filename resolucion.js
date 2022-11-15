// // ## Operaciones básicas, Tipos de datos, Prompt y Alert

// // 1) Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.

// const number1 = parseInt(prompt("Ingresar un numero"));
// const number2 = parseInt(prompt("Ingresar otro numero"));

// const plus = (num1,num2) => {
//     let result = num1 + num2;
//     alert(`el resultado de la suma es ${result}`);
// }
// plus(number1,number2);


// // 2) Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.

// let celcius = prompt("Ingresar la temperatura en Celcius");
// const fahrenheit = (temperture) =>{
//   return  (temperture*9/5) + 32; 
// }

// let answer = fahrenheit(celcius);
// alert(`La temperatura ${celcius} grados en celcius, en farenheit es ${answer}`);

// // 3) Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10  igual 0.5;

// const randomNumber = prompt("Ingresar un numero");

// const divided = (number) => number/10;
// result = divided(randomNumber);
// document.write(`El numero indicado divido 10 es ${result}` + "<br>")


// // 4) Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a.

// const a = [1,2,3];

// const dataType = (data) => typeof(data);

// document.write(`El tipo de data ingresado es de ${dataType(a)}`);

// // ## If and else

// // 5) Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.

// let promptNumber =  parseInt(prompt("Ingresar un numero"));
//     if(promptNumber % 2 == 0){
//         alert("El numero es par")
//     } else {
//         alert("El numero es inpar")
//     }

// // 6) Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log;
// const anotherNumber = parseInt(prompt("Ingresar un numero para saber si es divisible por 5 o no"));
// if(anotherNumber % 5 == 0 ){
//     console.log(`Efectivamente ${anotherNumber} es divisible por 5`);
// } else {
//     console.log(`${anotherNumber} no es divisible por 5`)
// }

// // 6) Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log
//  const askingForNumber = parseInt(prompt("Ingresar un numero random para saber si es divisible por 11 o 5"));
//  if (askingForNumber % 11 == 0 || askingForNumber % 5 ==0){
//     console.log("Es divisible por 11 o 5")
//  } else {
//     console.log("No es divisible por ninguno de los dos")
//  }

// // 7) Crear un programa  que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.
// const justANumber1 = parseInt(prompt("Escribir un numero (ejerc. 7)"));
// const justANumber2 = parseInt(prompt("Escribir otro numero (ejerc. 7)"));

// if( justANumber1 < justANumber2){
//     alert(`${justANumber2} es mayor que ${justANumber1}`)
// } else {
//     alert(`${justANumber1} es mayor que ${justANumber2}`)
// }

// // 8) Crear un programa que le pida al usuario primero un  números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.
// const justANumber3 = parseInt(prompt("Escribir un numero (ejerc. 8)"));
// const justANumber4 = parseInt(prompt("Escribir otro numero (ejerc. 8)"));

// // condición ? expr1 : expr2
// (justANumber3 < justANumber4) ? alert(`${justANumber4} es mayor que ${justANumber3}`) : alert(`${justANumber3} es mayor que ${justANumber4}`)


// // 9) Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.
// const anything = (prompt("Ingresar frase alphanumerica"));
// const index0 = anything[0];
// console.log(index0)
// console.log(isNaN(index0));

// if (isNaN(index0)){
//     console.log(`${anything} empieza con un letra`);
// } else {
//     console.log(`${anything} empieza con un numero`)
// }
// 10) Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.
// let ladoA = parseInt(prompt("Ingrese el primer angulo de un triangulo"));
// let ladoB = parseInt(prompt("Ingrese el segundo angulo de un triangulo"));
// let ladoC = parseInt(prompt("Ingrese el tercder angulo de un triangulo"));
// let sumaLados = ladoA + ladoB + ladoC;
// if (sumaLados == 180 ){
//     console.log("el triangulo es valido");
// }else {
//     console.log("el triangulo no es valido")
// }

// 11) Determinar si una palabra empieza con mayúscula o no.
// const randomWord = "holis"
// if(randomWord[0] == randomWord[0].toUpperCase()){
//     console.log(`${randomWord} empieza con mayuscula`)
// } else{
//     console.log(`${randomWord} no empieza con mayusucula`)
// }

// 12) Determinar si un año dado es bisiesto.
// const randomYear = 2024;
// ((randomYear % 4 === 0 && randomYear % 100 > 0) || randomYear %400 == 0) ? console.log(`El ${randomYear} tiene 366 dias, es bisiesto`) : console.log(`El  ${randomYear} tiene 365 dias, no es bisiesto`);

// 13) Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No corresponde"

// let randomCalculatedNumber = Math.round(Math.random()*10);
// const selectedRandomNumber = parseInt(prompt("Adivinar un numero entre el 1 y 10"));
// if (randomCalculatedNumber === selectedRandomNumber){
//     alert(`Felicitaciones! Adivinaste, el ${randomCalculatedNumber}`);
// }else {
//     alert(`No corresponde, el numero era ${randomCalculatedNumber}`)
// }


// 14) El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo:

// 	~~~javascript
// 	// Obtener edad

	// if(edad < 13) {
	// 	console.log("Es niño");
	// }if(edad < 18 && edad >= 13 ){
	//  	console.log("Es adolecente");
	// } else{
	//  	console.log("Es adolecente");
	// }


// // 15) Negar las siguientes expresión de forma de mantener la tabla de verdad, crear el programa que muestre el valor de la expresión a medida que se cambia los valores de a y b.

// // 	- !a && !b	
// // 	- !a || !b	

const a = 2;
const b = 3;

if( (!a && !b) || (!a || !b));


// ## Loops

// ### While

// 16) Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.

// let n = parseInt(prompt("Ingrese un numero (ejercicio 16)"));
// let i = 1
// while (i <= n ){
//     console.log(i)
//     i ++
// }

// 17) Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.
// let n1 = parseInt(prompt("Ingrese un numero (ejercicio 17)"));
// let i1 = 1
// while (i1 <= n1 ){
//     console.log(i1)
//     i1 += 2;
// }

// -18) Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.
// let n2 = parseInt(prompt("Ingrese un numero (ejercicio 18)"));
// let i2 = 1
// while (i2 <= n2 ){
//     console.log(n2-i2)
//     i2++;
// }

// 19) Escribir utilizando console.log la tabla del 9 hasta 9x10.
// let tabla = 9;
// let contador = 1;
// while (contador <= 10){
//     let tabla9 = tabla * contador;
//     console.log(tabla9);
//     contador ++;
// }

// 20) Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.

// let numeroPrompt =prompt("Ingrese un numero, para sumar todos los digitos");
// let suma = 0;
//     while(!isNaN(numeroPrompt)){
//         let j = 0;
//         while(j < numeroPrompt.length){
//             suma += parseInt(numeroPrompt[j]) ;
//             j++
//         }
//         break;
//     }   
//     console.log(`La suma total de todos los digitos es ${suma}`)


// 21) Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

// let pedirN = parseInt(prompt("Ingresar un numero"))
// let pedirM = parseInt(prompt("Ingresar otro numero"))
//  while(pedirN <= pedirM){
//     if(pedirN % 2 == 0){
//         console.log(pedirN)
//         pedirN = pedirN + 2;
//     } else {
//         pedirN += 1;
//     }
//  }

// 22) Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.
// let algunNumero = parseInt(prompt("Ingresar un numero, para sumar todos los numeros hasta el numero elegido."))
// let k = 0; /* este va a llegar hasta algunNumero */
// let sumatoria = 0; /*este va a sumar, el contador mas 1 */
// while(k <= algunNumero){
//     sumatoria = sumatoria + k;
//     k ++;
// }

// console.log(`La sumatoria total es de ${sumatoria}`)


// 23) Realizar el factorial de los primeros N números.

// let otroNumero = parseInt(prompt("Ingresar un numero, para realizar el factorial."))
// let l = 1; 
// let factorial = 1; 
// while(l <= otroNumero){
//     factorial = factorial * l;
//     l ++;
// }
// console.log(`El factorial total es de ${factorial}`)

// ### Ejercicios de divisores con while (o for)
// 24) Encontrar todos los divisores de un número.
// let randomNumber1 = 18;
// const arrayDeDivisores = [];
// for (let i3 = 0 ; i3 < randomNumber1 ; i3++){
//     if(randomNumber1 % i3 == 0){
//         arrayDeDivisores.push(i3)
//     }
// }
// console.log(arrayDeDivisores)

// 25) Determinar si un número ingresado por el usuario en un loop es primo o no, validar que el número ingresado sea mayor o igual a dos.
// const anotherRandomNumber = 7;
// const arrayDePrimos = [];
// while(anotherRandomNumber >= 2){
//     for (let i4 = 2 ; i4 < anotherRandomNumber ; i4 ++){
//         if(anotherRandomNumber % i4 == 0){
//             arrayDePrimos.push(i4)
//         } 
//     } 
//     break;
// }
// if(arrayDePrimos.length == 0){
//     console.log("El numero es primo")
// } else {
//     console.log(`El numero no es primo, es divisible por ${arrayDePrimos}`)
// }

// 26) Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)

// ### Doble loop

// 27) Generar los primeros N números primos, donde n es ingresado por el usuario.

// const isPrime = (number) => {
//     for (i = 2; i < number; i++) {
//         if (number % i === 0) return false
//     }

//     return true
// }

// let numeroPrimo = prompt("ingresar un numero, para devolver esa cantidad de numeros primos");
// const arrayDeNumPrimos = [];
// let contadorNumeros = 3;
// while (arrayDeNumPrimos.length < numeroPrimo) {
//     if(isPrime(contadorNumeros)) {
//         arrayDeNumPrimos.push(contadorNumeros)
//     }

//     contadorNumeros = contadorNumeros + 1
// }
// console.log(arrayDeNumPrimos)

// 28) Generar los primeros N números perfectos.

// ## Patrones con Loop anidados 

// Dibujar los siguientes patrones ocupando `document.write`, para rellenar los espacios vacíos se debe imprimir un espacio vacío.


// Cuadrado lleno:

// <pre><center>*****
// *****
// *****
// *****
// *****</center></pre>

// Cuadrado hueco:

// <pre><center>*****
// *   *
// *   *
// *   *
// *****</center></pre>

// Tablero de Ajedrez:

// <pre><center>* * * * * * * *
//  * * * * * * * 
// * * * * * * * *
//  * * * * * * * 
// * * * * * * * *
//  * * * * * * * 
// * * * * * * * *
//  * * * * * * * 

// </center></pre>
// Cuadrado hueco:

// <pre><center>*****
// *   *
// *   *
// *   *
// *****</center></pre>

// Piramide Izquierda:

// <pre><center>*     
// **    
// ***   
// ****  
// ***** </center></pre>

// Pirámide centrada

// <pre><center>*
// ***
// *****
// *******
// *********</center></pre>

// Pirámide invertida

// <pre><center>*********
// *******
// *****
// ***
// *
// </center></pre>


// Diamante:

// <pre><center>*
// ***
// *****
// *******
// *********
// *******
// *****
// ***
// *
// </center></pre>


// ## Funciones

// - Crear una función que reciba un valor cualquiera y lo muestre ocupando console.log(), llamar a la función pasando el valor 5
// const mostrarNumero = (num) =>{
//     console.log(num)
// }
// mostrarNumero(5);
// - La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla
  
//   ~~~js
// 	function multiply(a, b){
// 	  a * b
// 	}
//    ~~~

// 	function multiply(a, b){
// 	 return a * b
// 	}

// console.log(multiply(2,3))


// - Crear una función que reciba dos valores y devuelva la suma de ellos.
// const sumaDeDos = (num1, num2) =>{
//     return num1 + num2
// }


// - Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.

// const numEntero = (num) =>{
//    if (isNaN(parseInt(num))){
//    console.log("es valor ingresado no es un numero")
//    }
// }

// numEntero("g");



// - Crear una función autoejecutable que muestre "muuu" en pantalla

// const muu = () =>{
//     document.write("Muu")
// }

// muu()

// ## Array

// - Dado el array = [1,2,3,4,5,6]

const arrayNum = [1,2,3,4,5,6];
// 	- Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.

// contador = 0;
// while(contador < arrayNum.length){
//     console.log(arrayNum[contador]);
//     contador ++
// }

	
// 	- Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.

//  for ( let i6 = 0 ; i6 < arrayNum.length; i6++){
//     console.log(arrayNum[i6])
//  }
	
// 	- Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
arrayNum.forEach(function mostrar(num){
    console.log(num)
})
	
// 	- Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
arrayNum.forEach(function sumaUno (num){
 console.log(num +  1)
})
	
// 	- Generar una copia de un array pero con todos los elementos incrementado en 1.
const newArray = [];
arrayNum.map(function sumaUno (num){
 newArray.push(num+1)
    } )

    console.log(newArray)

// 	- Calcular el promedio
let totalArray = 0;
const promArray = (randomArray) =>{
    for(let i7 = 0 ; i7 < randomArray.length ; i7++){
        totalArray = totalArray + randomArray[i7];
    }
    return totalArray / randomArray.length
}

promArray(arrayNum)

// - Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

// - Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.

// - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.