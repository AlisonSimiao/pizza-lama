import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Produto({pd, carrinho, setCarrinho}) {
   const info = pd;
   
   function adicionar(){
        const aux = carrinho;

        const produto = aux.find( (comprados)=>{
            return comprados.id == info.id;
        } )

        if( produto ){
            produto.qtd++ ;
        }
        else{
            aux.push({...info, qtd: 1});
        }
        
        setCarrinho([...aux]);
   }
    return (
    <Flex 
               
        justify="space-around"
        align={"center"}
        direction="column"
        shadow="2xl"
        px={50}
        bgImage="https://i.pinimg.com/564x/4d/b7/ec/4db7ecf38ef6908f3382e560722c0f17.jpg"
        backgroundSize={"cover"}
        p="10"
    >
        <Box>
            <Image src={info.img}  w="100px"/>
        </Box>
        <Box>
            <Text>{info.nome}</Text>
        </Box>
        
        <VStack fontSize={30}>
            
                <Box>
                    <Text >{ (info.preco/100).toFixed(2)}</Text>
                </Box>           
            <Button colorScheme={"blue"}
                onClick={async (e)=>{
                    adicionar();
                }}
            >Comprar</Button>
        </VStack>
    </Flex>
  )
}
