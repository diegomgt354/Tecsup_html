import React, { useEffect, useState } from "react"
import useDummyJson from "../shared/hooks/useDummyJson"
import { DummyCategories, DummyProduct, DummyProductsByCategories } from "../declarations/DummyJson"
import ProductCard from "../shared/components/ProductCard"
import { Flex, HStack, Select } from "@chakra-ui/react"
import PuffLoader from "react-spinners/PuffLoader"

const Products = () => {

    const [products, setProducts] = useState<Array<DummyProduct>>([])
    const [categorias, setCategorias] = useState<Array<DummyCategories>>([])
    const [productosbycategorias, setProductosByCategorias] = useState<Array<DummyProductsByCategories>>([])
    const getDummyProducts = useDummyJson.getProductos()
    const getDummyCategorias = useDummyJson.getCategorias()

    const [loading, setLoading] = useState<boolean>()

    const getProducts = async () => {
        const data = await getDummyProducts
        setProducts(data)
    }

    const getProductsCategorias = async () => {
        let data = await getDummyCategorias
        data = [{ name: "todos" }, ...data]
        setCategorias(data)
    }

    const getPByC = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLoading(true)
        const value = e.target.value
        if (value == "todos") {
            getProducts()
            setLoading(false)
            return
        }
        const getDummyProductsByCategorias = await useDummyJson.getProductsByCategorias(value)
        const data = await getDummyProductsByCategorias
        setProducts(data.products)
        setProductosByCategorias(data)
        console.log(data)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        getProducts()
        getProductsCategorias()
        setLoading(false)
    }, [])

    return (
        <>

            <Select onChange={getPByC}>
                {
                    categorias.map(categoria => (
                        <option value={categoria.name}>{categoria.name}</option>
                    ))
                }
            </Select>

            {
                loading ?
                    <HStack h="100vh" justifyContent="center">
                        <PuffLoader />
                    </HStack>
                    :
                    <Flex wrap={"wrap"} justifyContent="center">
                        {products.map(product => (
                            <ProductCard product={product} />
                        ))}
                    </Flex>
            }



        </>
    )
}

export default Products