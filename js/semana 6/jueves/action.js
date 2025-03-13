
//  const usuario = async()=>{
//     const response = await fetch('https://api.github.com/users/donatto22');
//     const data = await response.json();
    
//     const reposresponse = await fetch(data.repos_url);
//     const repos = await reposresponse.json();

//     const followersresponse = await fetch(data.followers_url);
//     const followers = await followersresponse.json();

//     const user = {
//         username: data.login,
//         name: data.name,
//         location: data.location,
//         repos: repos.map(s=>s.name),
//         followers: followers.map(s=>s.login),
//     }

//     console.log(user);
// }

// usuario()

////////////////////////////////////////////////////////

// (async()=>{
//     const response = await fetch('https://api.github.com/users/donatto22');
//     const data = await response.json();
    
//     const reposresponse = await fetch(data.repos_url);
//     const repos = await reposresponse.json();

//     const followersresponse = await fetch(data.followers_url);
//     const followers = await followersresponse.json();

//     const user = {
//         username: data.login,
//         name: data.name,
//         location: data.location,
//         repos: repos.map(s=>s.name),
//         followers: followers.map(s=>s.login),
//     }

//     console.log(user); 
// })()

//////////////////////////////////////////////////////////


const get = async (api)=>{
    const response = await fetch(api);
    return await response.json();
}

(async()=>{
    const data = await get('https://api.github.com/users/donatto22');
    const repos = await get(data.repos_url);
    const followers = await get(data.followers_url);
    console.log({
        username: data.login,
        name: data.name,
        location: data.location,
        repos: repos.map(s=>s.name),
        followers: followers.map(s=>s.login),
    });
})()



// # h1
// ## h2
// ### h3
// ```pega tu codigo ```
// ```js
// pega tu codigo 
// ```
////////////////////////////////
// fetch 
// localStorage => guarda la info en tu navegador 
// aun asi cierre el navegador

// sessionStorage => guarda la info en tu navegador
// pero si cierras la pagina se pierde la informacion

// fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
// .then(response=>response.json())
// .then(data=>{
//     data.results.forEach(pokemon => {
//         console.log(pokemon.name)
//     });
// })
// .catch(err=>console.log(err))
// .finally()

// const pokemones = async()=>{
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
//     const data = await response.json();
//     return data;
// }

// console.log(pokemones)

//////////////////////////////
// localStorage.setItem('name', 'diego')

// localStorage.getItem('name')

// localStorage.removeItem('name')

// localStorage.clear()
////////////////////////////////
// const persona = {
//     name : 'diego',
//     sexo : 'machote'
// }

// sessionStorage.setItem('usuario', JSON.stringify(persona))

// console.log(JSON.parse(sessionStorage.getItem('usuario')))

