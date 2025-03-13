const titulo = document.getElementById('titulo')
titulo.innerText = 'hola' // se puede acceder ya que es un solo elemento
// console.log(titulo.innerText)

const tarjeta = document.getElementsByClassName('tarjeta')
console.log(tarjeta)
console.log(tarjeta[0])
// tarjeta.innerText // no se puede acceder porque son varios elementos

const parrafos = document.querySelectorAll('p')
console.log(parrafos[parrafos.length-1])

const primerParrafo = document.querySelector('p')
console.log(primerParrafo.innerText)


const btn = document.getElementById('btn')

let opcion = true
let contador = 0
btn.addEventListener('click',()=>{

    if(opcion){
        titulo.innerText = 'xhu xhu no le des clic al btn'
        titulo.style.color = 'blue'
        opcion=false
    }else{
        titulo.innerText = 'rrrrrrr ya no mas'
        titulo.style.color = 'red'
        opcion=true
    }

    
    const div = document.createElement('div') // crea un elemento
    titulo.appendChild(div) // agrega al final 
    titulo.insertBefore(div, titulo.firstChild) // agrega al inicio
    contador++
    div.innerText = contador
    tarjeta[0].children[0].appendChild(div)
    // console.log(tarjeta[0].children[0].appendChild(div))

    
})

const actionFunction = ()=>{
    alert('Es una funcion')
}