import msns from "./mensajes.js";

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @param {String} operador 
 */
const calculadora = (num1, num2, operador)=>{
    
    try {

        if(typeof num1 != 'number' || typeof num2 != 'number'){
            throw new Error(msns.msnSoloNumeros)
        }
        
        if(operador=='/' && num2==0){
            throw new Error(msns.msnErrorZero)
        }

        return operador=='+'?num1+num2
        :operador=='-'?num1-num2
        :operador=='*'?num1*num2
        :operador=='/'?num1/num2
        : new Error(msns.msnOperadorIncorrecto)


    } catch (error) {
        console.log(error);
    }
}

console.log(calculadora(1,"hh","0"))


// class Persona{
//     constructor(name, edad){
//         this.name = name;
//         this.edad = edad;
//     }



// }




// try {
//     throw new Error("pipipipi")
// } catch (error) {
//     console.error(error)
// }finally{
//     console.log('finally')
// }




let arreglo = [1,1,2,2,3,4,5,5]

let nuevoArreglo = new Set(arreglo)

let otroArreglo = [...nuevoArreglo]
let otroArreglo2 = Array.from(nuevoArreglo)

console.log(otroArreglo[1])
console.log(otroArreglo2[1])

console.log(JSON.stringify({name:'diego'}))

let nuevoArregloArrayFrom = Array.from({length:10}).map((_, i)=>(i+1)*2)
console.log('nuevoArregloArrayFrom', nuevoArregloArrayFrom)
console.log(Array.from(arreglo, n=>n*2))


// spred - rest
// magic string - template string




// const calcularPrecio = (texto)=>{
//     let vocales = ["a","e","i","o","u"];
//     let validador = false;
//     validador = vocales.some(v=>
//         (texto.toLowerCase().startsWith(v))
//     )
//     return validador? texto.toUpperCase(): texto.split('').reverse().join("")
    
// }
// let arreglo = [1,[2,3,[4]]]

// console.log(arreglo[1][2])

// console.log(calcularPrecio("alessio"))

// "".toUpperCase


// const calcularPrecio = (precio, arreglo)=>{
    
//     let descuento = precio>100 || arreglo.length>3
//     ? 0.2
//     :0;
    
//     return precio*descuento;
// }


// console.log(calcularPrecio(120, ["zapatos", "camisa", "gorro", "pantalón"]))


// const comparador = (arreglo)=>{
//     let pares = arreglo.filter(n=>n%2==0)
//     let impares = arreglo.filter(n=>n%2!=0)
//     return pares.length>impares.length?pares: arreglo
// }

// // [].filter(n=>n%2==0)

// console.log(comparador([1,2,3,4,5,6,8,5,7]))


// let animales = ["gato", "conejo", "loro"]

// const arregloEdit = (texto, position)=>{
//     return animales.splice(position,0,texto);
// }

// // [""].splice



// arregloEdit("holaa",0)
// console.log(animales)
// "sss".replaceAll("a", "@")


// console.log("ssssddfff".split('').reverse().join(""))

// const validar=(a,b)=>{
//     return typeof a == 'number' && typeof b == 'number ? true : false;'
// }


// const calculadora = {
//     sumar : (a,b)=>{return validar(a,b)? a+b:'error!'},
//     restar : (a,b)=>{return validar(a,b)? a+b:'error!'},
//     multiplicar : (a,b)=>{return validar(a,b)? a+b:'error!'},
//     dividir : (a,b)=>{return validar(a,b)? a+b:'error!'},
// }





// let mensaje = "estamos programando en javascript";

// let nuevo = mensaje.split('').filter(n=>n!=' ')

// console.log(nuevo)

// nuevo.pop()


// let nuevo = ['holi', 'amigo', 'chau']

// console.log(nuevo)

// // nuevo.shift()
// // nuevo.splice(0,0, 'lhkhkhk')
// let nuevo2 = nuevo.slice(1,2) /// posicion, hasta el punto pero no lo toma


// console.log(nuevo2)


// let textito = "hola a todos"

// console.log(textito.includes('a'))


// nuevo.map(letra=>{

// })

// console.log(nuevo)


// let frutas = ["manzana", "pera", "mandarina"]

// let saludos = ["hola", "holi"]

// let final = frutas.concat(saludos)

// console.log(final)


// let letras = 0;

// "alessio".forEach(element => {
//     if(element=="s"){
//         letras ++;
//     }
// });

// console.log(letras)



// const notitas = [
//     {
//         "nombre": "pepe",
//         "notas": [13, 19, 15]
//     },
//     {
//         "nombre": "alumno2",
//         "notas": [10, 20, 13]
//     },
//     {
//         "nombre": "alumno3",
//         "notas": [18, 5, 20]
//     }
// ]

// const obtenerPromedio = (arreglo) => {
//     let objetito = []
//     arreglo.forEach(element => {
//         console.log(element.nombre)
//         let promedio = 0;
//         element.notas.forEach(nota=>{
//             promedio = promedio + nota
//         })
//         console.log(promedio/arreglo.length)

//     });
// }

// obtenerPromedio(notitas)



// const numeroPrimo = (num)=>{
//     if (typeof num != "number" || (n <= 1)) return
//     for(let i=2; i<num;i++){
//         if(num % i == 0){
//             return "NO PRIMO";
//         }
//     }

//     return "PRIMO";
// }

// console.log(numeroPrimo("ss"))

// const duplica = (arreglo)=>{
//     let promedio =  arreglo.forEach(num=>{
//         return promedio + typeof num == "number"? num: 0;
//     })

//     return promedio/arreglo.length
// }


// console.log(duplica([1,4,6,"holi"]))

// const numeros = (num1, num2)=>{
//     return typeof num1 == "number" && typeof num2 == "number"
//         ? Math.pow(num1, num2)
//         : "Solo se permite numeros"
// }

// console.log(numeros(2,3))

// const par = (numero)=>{
//     return typeof numero == "number"
//     ? numero % 2 == 0 ? "es par" : "es impar"
//     : "no es un numero"
// }

// console.log(par(10))

// let edades = [1990, 2001, 1995, 2002]
// const saberEdades = (arreglo)=>{
//     return arreglo.map(anio=>{
//         return 2025-anio;
//     })
// }

// console.log(saberEdades(edades))


// let personitas = [
//     {nombre:"diego", edad:10},
//     {nombre:"alessio", edad:5},
//     {nombre:"omar", edad:16},
//     {nombre:"fernando", edad:78},
//     {nombre:"camila", edad:46},
//     {nombre:"luis", edad:20},
// ]

// const menorPersona = (personas)=>{
//     let menorEdad = 1000;
//     let menorPersona = '';

//     personas.forEach(persona=>{
//         if(persona.edad<menorEdad){
//             menorEdad = persona.edad;
//             menorPersona = persona.nombre;
//         }
//     })

//     return {nombre:menorPersona, edad:menorEdad}
// }

// console.log(menorPersona(personitas))









// let focos = ["verde", "blanco", "blanco", "rojo"]

// const aprob =(focos)=>{
//     let foquitos = {
//         verde:0,
//         blanco:0,
//         rojo:0,
//     }

//     focos.forEach((foco) => {
//         foquitos[foco] += 1
//     });

//     return foquitos
// }


// console.log(aprob(focos))