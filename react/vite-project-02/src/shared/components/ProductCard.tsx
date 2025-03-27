import { Heading, Image, Link, Text, VStack } from "@chakra-ui/react"
import { DummyProduct } from "../../declarations/DummyJson"
import { Link as LinkRact } from "react-router-dom"

const ProductCard = ({ product }: {
    product: DummyProduct
}) => {
    return (
        <VStack key={product.id}>
            <Image src={product.thumbnail} loading="lazy" />
            <Heading fontSize="2xl">
                <Link to={`/products/${product.id}`} as={LinkRact}>{product.title}</Link>
            </Heading>
            <Text>{product.description}</Text>
        </VStack>
    )
}

export default ProductCard