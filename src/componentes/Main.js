import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import Produto from './Produto'

export default function Main({info}) {
  const {carrinho, setCarrinho} = info;
  const [produtos, setProdutos] = useState([]);
 
  useEffect(async ()=>{
      const response = await fetch("http://localhost:3000/api/produtos");
      const data = await response.json();
      setProdutos(data)
  },[])

  return (
    <Box
      my="10"
      w="80vw"
      m="auto"
    >
        <Flex
          wrap="wrap"
          justify="space-around"
          width="80%"
          h="85vh"
          gap={5}
          shadow="2xl"
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
    </Box>
  )
}
