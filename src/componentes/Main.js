import { Box, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import Produto from './Produto'

export default function Main({info}) {
  const {carrinho, setCarrinho} = info;
  const [produtos, setProdutos] = useState([]);
 
  useEffect(async ()=>{
      const response = await fetch("api/produtos");
      const data = await response.json();
      setProdutos(data)
  },[])

  return (
    <HStack
      justify={"center"}
      mt="5"
    >
        <Flex
          wrap="wrap"
          justify="space-between"
          align="flex-start"
          bg="#9932cc2E"
          width="70%"
          h="80vh"
          gap={10}
          p="5"
          shadow="inner"
          overflowY="scroll"
          sx={{
            '&::-webkit-scrollbar': {
              width: '10px',
              borderRadius: '8px',
              backgroundColor: `rgba(0, 50, 50, 0.25)`,
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '8px',
              backgroundColor: `rgba(100, 120, 150, 0.25)`,
            },
          }}
        >
          {produtos.map((pizza)=>{
              return <Produto key={pizza.id} pd={pizza} carrinho={carrinho} setCarrinho={setCarrinho}/>
          })}
        </Flex>
    </HStack>
  )
}
