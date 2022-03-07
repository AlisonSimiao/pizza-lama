import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'

export default function Card_Drawer({produto, setCarrinho, carrinho}) {
  

  return(
    <HStack
      shadow="base"
      justify={"space-around"}
      py="2"
    >
      <Box
        
        boxSize='30%'
      >
        <Image 
          
          src={produto.img}
        />
      </Box>
      <VStack>
      <HStack
        
        fontWeight="black"
      >
        <Text>Valor:</Text>
        <Text
      color={"green.400"}
        >R$ { (produto.qtd*produto.preco/100).toFixed(2)} </Text>
        
      </HStack>
      <HStack
        gap={1}
        fontWeight="black"
      >
        <Button
          onClick={ (e)=>{
            const aux = carrinho; 
            produto.qtd++;
            setCarrinho([...aux]);
            
          }}
        >+</Button>
        <Text> {produto.qtd} </Text>
        <Button
          onClick={ (e)=>{
            const aux = carrinho; 
            produto.qtd = (produto.qtd >0? produto.qtd-1: 0);
            setCarrinho([...aux]);
          }}
        >-</Button>
      </HStack>
      </VStack>
      
    </HStack>
  )
}
