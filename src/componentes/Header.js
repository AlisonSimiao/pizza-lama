import { Box, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import Cart from './Card_Cart'

export default function Header({info}) {
    const {carrinho, setCarrinho} = info;
    
    return (
        <Box
            mb="5"
            bg="#9932cc2E"
            px={10}
            py={3}
            boxSizing="border-box"
            w="70%"
            m="auto"
        >
        <HStack
            justify="space-between"
            align={"center"}
           
        >
            <Box>
                <Image src='./IMG/logo.png'
                    alt="logo"
                    width={150}
                    h={50}
                    filter="invert(1)"
                    _hover={{
                        filter: "invert(0)"
                    }}
                />
            </Box>
            <Box>
                <Cart info={ {carrinho, setCarrinho} }/>
            </Box>
        </HStack>
        </Box>
    )
}
