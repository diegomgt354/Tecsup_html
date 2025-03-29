import { DummyProductsByCategories } from "../../declarations/DummyJson"

const API_URL = 'https://dummyjson.com'

const useDummyJson = {

    login: async (username:string, password:string)=>{
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: username,
              password: password,
            })
          })

        const data = await response.json()
        return data
    },

    getProductos:async()=>{
        const response = await fetch(`${API_URL}/products`)
        const data = await response.json()
        const products = await data.products
        return products
    },
    getSingleProducto:async(id:number)=>{
      const response = await fetch(`${API_URL}/products/${id}`)
      const data = await response.json()
      return data
    },
    getCategorias:async()=>{
      const response = await fetch(`${API_URL}/products/categories`)
      const data = await response.json()
      return data
    },
    getProductsByCategorias:async(category:string)=>{
      const response = await fetch(`${API_URL}/products/category/${category}`)
      const data = await response.json()
      return data 
    },
}

export default useDummyJson