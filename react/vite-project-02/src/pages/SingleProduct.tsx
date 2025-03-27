import { useParams } from "react-router-dom"
import useDummyJson from "../shared/hooks/useDummyJson"
import { useEffect, useState } from "react"
import { DummyProduct } from "../declarations/DummyJson"

const SingleProduct = () => {

    const { id } = useParams()

    const [product, setproduct] = useState<DummyProduct>()

    const getSingleProducto = useDummyJson.getSingleProducto

    const getProduct = async () => {
        const data = await getSingleProducto(Number(id))
        console.log(data)
        setproduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div>
            <img src={product?.thumbnail} alt={product?.description} />
            <h3>{product?.title}</h3>
        </div>
    )
}

export default SingleProduct