const URL = "https://dummyjson.com/auth"

const btningresar = document.getElementById('btningresar')

btningresar.addEventListener('click', async (e)=>{
    e.preventDefault() 
    const user = document.getElementById("user").value
    const password = document.getElementById("password").value

    try {
        const response = await fetch(`${URL}/login`,  {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: user,
              password: password,
            })
          })

        const data = await response.json()
        if(data.message) return

        localStorage.setItem("usuario", JSON.stringify(data))
        
        window.location.href = "../index.html"

    } catch (error) {
        console.error(error)
    }
})

const validarLogin = ()=>{
    const usuario = localStorage.getItem("usuario")
    if(usuario){
        window.location.href = "../index.html"
    }
}

validarLogin()
