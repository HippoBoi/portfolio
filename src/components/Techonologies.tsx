import { Box, Text, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react';
import mushBG from "../images/mushroom.webp"
import { Parallax } from 'react-parallax';
import TechList from './TechList';

interface Props {
    language: "eng" | "esp";
}

const Techonologies = ({ language }: Props) => {
    const { colorMode } = useColorMode();
    const textShadow = useColorModeValue(
        "white",
        "black"
    );
    const textOutline = useColorModeValue(
        "black",
        "black"
    );

    return (
        <VStack marginBottom={{ base: "6rem", md: "10rem" }} width="100%" spacing={4}>
            <Box px={4} textAlign="center">
                <Text 
                    fontSize={{ base: "34px", md: "50px" }}
                    fontWeight={"bold"} 
                    sx={{
                        textShadow: `
                            -1.5px -1.5px 0 ${textShadow},
                            1.5px -1.5px 0 ${textShadow},
                            -1.5px 1.5px 0 ${textShadow},
                            1.5px 1.5px 0 ${textShadow}
                        `,
                    }}> 
                    {language === "eng" ? "Technologies" : "Tecnologías"} 
                </Text>

                <Text fontWeight={colorMode === "light" ? "bold" : ""} as={"i"}>
                    {language === "eng" ? "Tools that I use for my job" : "Herramientas para mi trabajo"} 
                </Text>
            </Box>

            <Box
                width="100vw"
                maxW="100vw"
                minH={{ base: "340px", md: "400px" }}
                rounded={0}
                overflow="hidden"
                position="relative"
                ml="calc(50% - 50vw)"
                mr="calc(50% - 50vw)">
                <Parallax
                    bgImage={mushBG}
                    strength={300}
                    style={{ height: "100%", width: "100%" }}>
                    <Box position="relative" minH={{ base: "340px", md: "400px" }} width="100%" height="100%">
                        <Box position="absolute" inset={0} bgColor="#010203" opacity={0.35} />
                        <Box position="relative" zIndex={1} width="100%" height="100%">
                            <TechList />
                        </Box>
                    </Box>
                </Parallax>
            </Box>
        </VStack>
    );
}

export default Techonologies
