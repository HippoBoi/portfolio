import { Card, Text, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react';
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
        <VStack marginBottom={{ base: "6rem", md: "10rem" }} px={4}>
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

            <Card width={"100%"} minH={{ base: "340px", md: "400px" }} py={{ base: 8, md: 0 }} bgColor={'#010203'} rounded={0}>
                <Parallax bgImage={mushBG}
                    strength={300}
                    style={{ "height": "100%" }}>
                    
                    <TechList />
                </Parallax>
            </Card>
        </VStack>
    );
}

export default Techonologies
