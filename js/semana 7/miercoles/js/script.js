import { UNSPLASH_ACCESS_KEY, UNSPLASH_API } from "../api/unsplash.js"

const validarLogin = ()=>{
    const usuario = localStorage.getItem("usuario")
    if(!usuario){
        window.location.href = "./pages/login.html"
    }
}

validarLogin()


const session = JSON.parse(localStorage.getItem("usuario"))
const divUsuarrio = document.getElementById("user")
const img = document.createElement("img")
img.src=session.image

const username = document.createElement("b")
username.textContent = `${session.firstName} ${session.lastName}`

divUsuarrio.appendChild(img)
divUsuarrio.appendChild(username)

const btnSalir = document.getElementById("btnSalir")
btnSalir.addEventListener("click",()=>{
    localStorage.clear("usuario")
    validarLogin()
})


// fotos
const fotos = document.getElementById("fotos")

const traerFotos = async()=>{
    const response = await fetch(`${UNSPLASH_API.PHOTOS}?per_page=100`,{
        headers:{
            'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
    })

    const data = await response.json()
    data.forEach(photo => {
        const link = document.createElement("a")
        link.href = `./pages/photo.html?id=${photo.id}`
        const img = document.createElement("img")
        img.src = photo.urls.small
        img.alt = img.alt_description

        link.appendChild(img)
        fotos.appendChild(link)
    });

}

traerFotos()