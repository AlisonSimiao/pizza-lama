import { Badge, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Image, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { useRef} from 'react';
import Card_Drawer from './Card_Drawer';

export default function Cart( {info} ) {
    const {carrinho, setCarrinho} = info;
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    
    return (
        <>
            <Box>
                <Button
                    position="relative"
                    onClick={onOpen}
                    colorScheme="blackAlpha"
                    w={70}
                    h={50}
                    p={1}
                    
                >
                    <Image src='./IMG/cart.png'
                        alt="cart"
                        h="100%"
                        filter="blur(.7px) contrast(0%)"
                        transition=".5s"
                        _hover={{
                            filter: "blur(0) contrast(100%)"
                        }}
                    />
                    <Box
                        position="absolute"
                        right={0}
                        top="50%"
                    >
                        <Badge
                            colorScheme="teal"
                        >
                            {carrinho.length}
                        </Badge>
                    </Box>
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader
                            textTransform='uppercase'
                            shadow="base"
                        >
                            Carrinho de compras
                        </DrawerHeader>

                        <DrawerBody>
                            <VStack
                                gap={3}
                            >
                                {
                                    carrinho.map((produto,index) =>{
                                        return <Card_Drawer key={ produto.id } produto={produto} carrinho={carrinho} index={index} setCarrinho={setCarrinho}/>
                                    })
                                }
                            </VStack>
                        </DrawerBody>

                        <DrawerFooter
                             shadow={"inner"}
                        >
                            <HStack
                                justify="space-between"
                                w="100%"
                            >
                                <Box
                                    fontWeight={"bold"}
                                >
                                    <Text>
                                        Total: 
                                    </Text>
                                    <Text
                                        color='green.600'
                                    >
                                        R$ 
                                        {carrinho.reduce((total,elem)=>{
                                            return total+(elem.preco/100*elem.qtd);
                                        }, 0).toFixed(2)} 
                                    </Text>
                                </Box>
                                <Button colorScheme='green'>
                                    Comprar
                                </Button>
                            </HStack>

                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </Box>
        </>
    )
}
