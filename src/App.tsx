import React from 'react'
import HomePage from './HomePage';
import { Box, useColorMode } from '@chakra-ui/react';
import bgLight from './images/bgLight.webp'
import bgDark from './images/bgDark.webp'
import cavernBGLight from './images/cavernLight.webp'
import cavernBGDark from './images/cavern.webp'
import NavBar from './components/NavBar';

const App = () => {
    const { colorMode } = useColorMode();

    const bgImage1 = colorMode === "light" ? 
    bgLight :
    bgDark;

    const bgImage = colorMode === "light" ?
    cavernBGLight :
    cavernBGDark;

    return (
        <>
        <NavBar />
        <Box
            w="100%"
            h="350vh"
            bgImage={bgImage}
            bgRepeat={'repeat'}
            bgSize="auto"
            bgPosition="center">
            <Box
                w="100%"
                h="100vh"
                bgImage={bgImage1}
                bgSize="cover"
                bgPosition="center"
                bgAttachment={"fixed"}>
                <HomePage />
            </Box>
        </Box>
        </>
    );
}

export default App
