import { UNSPLASH_ACCESS_KEY, UNSPLASH_API } from "../api/unsplash.js"

const params = new URLSearchParams(window.location.search) // solita link de la pagina

const id = params.get('id')


const llenarDiv = async()=>{

    if(!id){
        window.location.href = "./login.html"
    }

    const response = await fetch(`${UNSPLASH_API.PHOTOS}/${id}`,{
        headers:{
            'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
    })
    const data = await response.json()

    console.log(data)

    if(data.errors){
        window.location.href = "./login.html"
    }

    const photoDiv = document.getElementById("photoDiv")

    const img = document.createElement("img")
    img.src = data.urls.small
    img.alt = data.alt_description

    const description = document.createElement("p")
    description.textContent = data.alt_description


    photoDiv.appendChild(img)
    photoDiv.appendChild(description)
}

llenarDiv()