import { useLocation, useParams } from "react-router-dom"
import useDummyJson from "../shared/hooks/useDummyJson"
import { useEffect, useState } from "react"
import { DummyProduct } from "../declarations/DummyJson"
import { QRCodeSVG } from 'qrcode.react'
import { Box } from "@chakra-ui/react"

const SingleProduct = () => {

    const location = useLocation()

    const { id } = useParams()

    const [product, setproduct] = useState<DummyProduct>()

    const getSingleProducto = useDummyJson.getSingleProducto

    const getProduct = async () => {
        const data = await getSingleProducto(Number(id))
        setproduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div key={product?.id}>
            <img src={product?.thumbnail} alt={product?.description} />
            <h3>{product?.title}</h3>
            <Box position={"absolute"} right={"0"} bottom={"0"} m="20px" bgColor="beige"
                p="20px" borderRadius="10px" boxShadow="0 30px 80px -10px gray">
                <QRCodeSVG value={`http://localhost:5173${location.pathname}`} bgColor="beige" />
            </Box>
        </div>
    )
}

export default SingleProduct