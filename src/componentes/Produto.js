import { Box, Button, Flex, HStack, Image, Skeleton, SkeletonCircle, SkeletonText, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Produto({ pd, carrinho, setCarrinho }) {
    const info = pd;
    const [carregado, setCarregado] = useState(false);
    function adicionar() {
        const aux = carrinho;

        const produto = aux.find((comprados) => {
            return comprados.id == info.id;
        })

        if (produto) {
            produto.qtd++;
        }
        else {
            aux.push({ ...info, qtd: 1 });
        }

        setCarrinho([...aux]);
    }
    return (

        <Flex
            justify="space-between"
            alignSelf={"flex-start"}
            align={"center"}
            direction="column"
            shadow="dark-lg"
            bgImage="https://i.pinimg.com/564x/4d/b7/ec/4db7ecf38ef6908f3382e560722c0f17.jpg"
            backgroundSize={"cover"}
            p="5"
            transition=".5s"
            filter="brightness(0.9)"
            _hover={{
                filter: "brightness(1.1)"
            }}
        >
            <SkeletonCircle
                w="100px"
                h="100px"
                isLoaded={carregado}
            >
                <Box
                >
                    <Image
                        src={info.img}
                        onLoad={() => { setCarregado(true) }}
                        w="100px"
                        h="100px"
                    />
                </Box>
            </SkeletonCircle>
            <SkeletonText isLoaded={carregado} h="100px">
                <Box>
                    <Skeleton isLoaded={carregado}>
                        <Text
                            textTransform={"uppercase"}
                            fontWeight="bold"
                        >{info.nome}</Text>
                    </Skeleton>
                </Box>

                <VStack fontSize={18}>

                    <HStack>
                        <Text>R$ </Text>
                        <Text
                            fontWeight="bold"
                            color={"green.500"}
                        >{(info.preco / 100).toFixed(2)}</Text>
                    </HStack>
                    <Button colorScheme={"blue"}
                        onClick={async (e) => {
                            adicionar();
                        }}
                    >Comprar</Button>

                </VStack>
            </SkeletonText>
        </Flex>

    )
}
