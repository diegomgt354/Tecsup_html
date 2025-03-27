import { useEffect, useState } from "react"
import useDummyJson from "../shared/hooks/useDummyJson"
import { DummyProduct } from "../declarations/DummyJson"
import ProductCard from "../shared/components/ProductCard"

const Home = () => {

    const [products, setProducts] = useState<Array<DummyProduct>>([])
    const getDummyProducts = useDummyJson.getProductos()

    const getProducts = async () => {
        const data = await getDummyProducts
        setProducts(data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (

        products.map(product => (
            <ProductCard product={product} />
        ))

    )
}

export default Home