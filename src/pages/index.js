import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../componentes/Header";
import Main from "../componentes/Main";

export default function MyApp({ Component, pageProps }) {
    const [carrinho, setCarrinho] = useState([])

    return (
        <Box w="100vw" h="100vh"  
        bgImg={"./IMG/bg.png"} 
        bgSize={"cover"}
        >
            <Header info={ {carrinho, setCarrinho} }/>
            <Main   info={ {carrinho, setCarrinho} }/>
        </Box>
    )
  }