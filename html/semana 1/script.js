let btnAlert = document.getElementById('alerta');
btnAlert.addEventListener('click',()=>{
    alert('Bienvenido a la Cyber Zone')
})

const mensajito = ()=>{
    alert('Bienvenido a la Cyber Zone 2')
    
}

let selectDulces = document.getElementById('dulce');
let selectMsg = document.getElementById('seleccion');


selectDulces.addEventListener('change', ()=>{

    let temp = (typeof selectMsg.textContent !== "undefined" && selectMsg.textContent.trim()!== "")
            ?selectMsg.textContent :'';
            
    selectMsg.textContent = ((temp!=='')?temp + ', ':'') + selectDulces.value;
})