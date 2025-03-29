import { Box, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react"
import { DummyProduct } from "../../declarations/DummyJson"
import { Link as LinkRact } from "react-router-dom"
import { useState } from "react"
import PuffLoader from "react-spinners/PuffLoader";

const ProductCard = ({ product }: {
    product: DummyProduct
}) => {

    const [loaded, setLoaded] = useState(false)

    return (
        <VStack key={product.id} w="200px" border="2px" borderRadius="10px" margin="10px" padding="10px">
            <Box h="200px">
                {
                    !loaded &&
                    <HStack justifyContent="center" alignItems="center" w="200px" h="200px">
                        <PuffLoader />
                    </HStack>
                }
                <Image src={product.thumbnail} loading="lazy" w="200px" onLoad={() => setLoaded(true)} />
            </Box>
            <Heading fontSize="2xl">
                <Link to={`/products/${product.id}`} as={LinkRact}>{product.title}</Link>
            </Heading>
            <Text>{product.description}</Text>
        </VStack>
    )
}

export default ProductCard